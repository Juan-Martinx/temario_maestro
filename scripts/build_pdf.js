// Uso: node scripts/build_pdf.js fuentes/tema-01.md pdf/Tema_01.pdf ["Texto del pie de página"]
// Convierte un tema en Markdown (pandoc) a HTML con estilo y lo imprime a PDF con Chromium.
const { execFileSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const { chromium } = require('/opt/node22/lib/node_modules/playwright');

(async () => {
  const [src, out, pie] = process.argv.slice(2);
  const textoPie = pie || 'Oposiciones Maestro/a de Educación Primaria · Andalucía';
  if (!src || !out) { console.error('Uso: node scripts/build_pdf.js <tema.md> <salida.pdf>'); process.exit(1); }
  const root = path.resolve(__dirname, '..');
  const css = path.join(root, 'scripts', 'estilo.css');
  const html = execFileSync('pandoc', [src, '-f', 'markdown+raw_html+pipe_tables+grid_tables', '-t', 'html5', '--standalone', '--toc', '--toc-depth=2', '--embed-resources', '--css', css, '--metadata', 'lang=es', '--metadata', 'pagetitle=Temario'], { maxBuffer: 64 * 1024 * 1024 }).toString();
  const browser = await chromium.launch({ executablePath: fs.existsSync('/opt/pw-browsers/chromium-1194/chrome-linux/chrome') ? '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' : undefined });
  const page = await browser.newPage();
  await page.setContent(html, { waitUntil: 'load' });
  // Coloca la portada antes del índice si existe
  await page.evaluate(() => { const p = document.querySelector('.portada'); const t = document.querySelector('#TOC'); if (p && t) t.parentNode.insertBefore(p, t); });
  await page.pdf({ path: out, format: 'A4', printBackground: true, displayHeaderFooter: true,
    headerTemplate: '<div></div>',
    footerTemplate: '<div style="font-size:8px;width:100%;text-align:center;color:#777;">' + textoPie + ' — pág. <span class="pageNumber"></span> / <span class="totalPages"></span></div>',
    margin: { top: '20mm', bottom: '20mm', left: '18mm', right: '18mm' } });
  await browser.close();
  console.log('PDF generado:', out);
})().catch(e => { console.error(e); process.exit(1); });

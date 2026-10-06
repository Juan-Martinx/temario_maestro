# Instrucciones comunes para los agentes redactores de temas

Objetivo: redactar UN tema completo del temario oficial de Educación Primaria (Orden ECI/592/2007, de 12 de marzo,
vigente para las oposiciones al Cuerpo de Maestros en Andalucía) con la calidad de un tema de academia de
oposiciones "de 10", listo para estudiar y reproducir en la prueba escrita, y generar su PDF.

## Ficheros
- Fuente: `fuentes/tema-XX.md` (XX con dos dígitos). Escríbelo en varios bloques si es largo
  (Write para el primero y añade el resto con `cat >> fichero <<'EOF'` en Bash), nunca un único bloque enorme.
- PDF: `node scripts/build_pdf.js fuentes/tema-XX.md "pdf/Tema_XX_<Titulo_Corto_Sin_Tildes>.pdf"`
- Comprueba el resultado con `pdfinfo` (nº de páginas) y `pdftotext ... - | head -80` (texto correcto, tildes OK).
- NO hagas git add/commit/push: el coordinador lo hace al final. No toques ficheros de otros temas ni los scripts.

## Formato Markdown (pandoc)
Empieza el fichero exactamente con la portada en HTML:

<div class="portada"><div class="etiqueta">Oposiciones Cuerpo de Maestros · Educación Primaria · Andalucía</div><div class="numero">TEMA XX</div><div class="titulo">TÍTULO OFICIAL COMPLETO</div><div class="pie">Temario oficial: Orden ECI/592/2007 · Marco normativo LOMLOE y Junta de Andalucía</div></div>

Después: `# Tema XX. Título corto` y secciones `##` / `###` numeradas. El índice se genera solo.
Usa tablas pipe, listas, negritas y bloques `> **Idea clave:** ...` para lo esencial. No uses imágenes externas.
Nada de LaTeX ni HTML aparte de la portada.

## Estructura obligatoria del tema
1. **Introducción** (justificación e importancia del tema, relación con la normativa y con la práctica docente).
2. **Desarrollo de TODOS los epígrafes del título oficial**, cada uno como sección propia, con profundidad
   de examen: conceptos, autores y teorías con año, clasificaciones, datos, ejemplos de aula de Primaria.
3. **Marco normativo actualizado** (estatal y andaluz) aplicado al tema: LOE modificada por LOMLOE (LO 3/2020),
   RD 157/2022 (enseñanzas mínimas de Primaria), Ley 17/2007 de Educación de Andalucía (LEA),
   Decreto 101/2023, de 9 de mayo (ordenación y currículo de Primaria en Andalucía), Orden de 30 de mayo de 2023
   (desarrollo del currículo, atención a la diversidad, evaluación y tránsito en Andalucía), Decreto 328/2010 (ROC
   de los CEIP), y la normativa específica pertinente al tema (p. ej. Instrucciones de 8 de marzo de 2017 sobre
   NEAE, Decreto 85/1999 / normativa de convivencia, Plan de Igualdad, competencia digital, etc.). Cita solo
   normas que existan; si dudas de un detalle concreto, formúlalo de forma general en vez de inventarlo.
   Usa la terminología LOMLOE: competencias clave, competencias específicas, descriptores operativos, perfil de
   salida, saberes básicos, situaciones de aprendizaje, DUA, criterios de evaluación. Si el título oficial usa
   términos antiguos (p. ej. "competencias básicas", "Conocimiento del medio", "Educación para la ciudadanía"),
   explica la equivalencia con el currículo actual (p. ej. Conocimiento del Medio Natural, Social y Cultural;
   Educación en Valores Cívicos y Éticos en 5.º o 6.º).
4. **Aplicación didáctica en el aula andaluza**: al menos una situación de aprendizaje de ejemplo completa
   (curso/ciclo, competencias específicas, criterios, saberes, secuencia de actividades, evaluación,
   atención a la diversidad/DUA) y referencias a planes y programas de la Junta (ComunicA, Aldea, CRECE,
   PLC, Transformación Digital Educativa, Creciendo en Salud, etc. cuando proceda) y a la cultura andaluza.
5. **Conclusión**.
6. **Bibliografía y webgrafía** (autores clásicos y actuales, normativa, webs oficiales: BOE, BOJA, Portal de
   la Junta de Andalucía, INTEF...).
7. **Esquema-resumen para memorizar** (en tablas/listas compactas).
8. **Preguntas de autoevaluación** (10-15) con respuesta breve.
9. **Consejos para defender este tema en el examen**: cómo estructurarlo en el tiempo de la prueba escrita,
   citas y autores que "puntúan", errores frecuentes, cómo personalizarlo.

## Extensión y calidad
- Objetivo: 9.000–13.000 palabras de contenido sustancial (unas 25–40 páginas de PDF). Sin relleno ni
  repeticiones: cada párrafo debe aportar información examinable.
- Todo en español de España, con rigor académico y precisión. No inventes citas textuales, años ni números de
  artículos: si no estás seguro, no lo precises.
- Comprueba al final que el PDF se ha generado y que tiene portada, índice y todas las secciones.

## Respuesta final al coordinador
Responde solo con: nombre del PDF, nº de páginas, nº aproximado de palabras (`wc -w`) y cualquier incidencia.

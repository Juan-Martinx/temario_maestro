# Instrucciones comunes para los agentes redactores · Especialidad de EDUCACIÓN FÍSICA

Objetivo: redactar UN tema completo del temario oficial de la especialidad de **Educación Física** del Cuerpo de
Maestros (**Orden de 9 de septiembre de 1993**, BOE 21/09/1993, temario vigente para esta especialidad —la Orden
ECI/592/2007 solo sustituyó el de Educación Primaria—), aplicado a las oposiciones convocadas por la **Junta de
Andalucía**, con la calidad de un tema de academia de oposiciones "de 10", listo para estudiar y reproducir en la
prueba escrita, y generar su PDF.

Ojo: es la especialidad de **Educación Física** (maestro/a especialista de EF en Educación Primaria), NO la
especialidad generalista de Educación Primaria. Todo el tema debe estar enfocado al área de Educación Física,
a la motricidad y a su didáctica en la etapa de Primaria (6-12 años).

Todas las rutas son relativas a la raíz del repositorio (`/home/user/temario_maestro`).

## Ficheros
- Fuente: `educacion_fisica/fuentes/tema-XX.md` (XX con dos dígitos). Escríbelo en varios bloques
  (Write para el primero y añade el resto con `cat >> fichero <<'EOF'` en Bash), nunca un único bloque enorme.
- PDF (desde la raíz del repo):
  `node scripts/build_pdf.js educacion_fisica/fuentes/tema-XX.md "educacion_fisica/pdf/Tema_XX_<Titulo_Corto_Sin_Tildes>.pdf" "Oposiciones Maestro/a de Educación Física · Andalucía"`
- Comprueba el resultado con `pdfinfo` (nº de páginas) y `pdftotext ... - | head -80` (texto correcto, tildes OK).
- NO hagas git add/commit/push: el coordinador lo hace al final. No toques ficheros de otros temas, ni los scripts,
  ni la carpeta del temario de Primaria (`fuentes/`, `pdf/` de la raíz).
- Puedes consultar como modelo de calidad y formato los temas ya hechos de Primaria en `fuentes/` (p. ej.
  `fuentes/tema-05.md`), pero no copies su contenido salvo lo normativo común, adaptado a EF.

## Formato Markdown (pandoc)
Empieza el fichero exactamente con la portada en HTML (una sola línea):

<div class="portada"><div class="etiqueta">Oposiciones Cuerpo de Maestros · Educación Física · Andalucía</div><div class="numero">TEMA XX</div><div class="titulo">TÍTULO OFICIAL COMPLETO</div><div class="pie">Temario oficial: Orden de 9 de septiembre de 1993 (BOE 21/09/1993) · Marco normativo LOMLOE y Junta de Andalucía</div></div>

Después: `# Tema XX. Título corto` y secciones `##` / `###` numeradas. El índice se genera solo.
Usa tablas pipe, listas, negritas y bloques `> **Idea clave:** ...` para lo esencial. No uses imágenes externas.
Nada de LaTeX ni HTML aparte de la portada.

## Estructura obligatoria del tema
1. **Introducción** (justificación e importancia del tema para la EF escolar, relación con la normativa y con la
   práctica docente del especialista).
2. **Desarrollo de TODOS los epígrafes del título oficial**, cada uno como sección propia y con profundidad de
   examen: conceptos, autores y teorías con año (p. ej. Le Boulch, Parlebas, Sánchez Bañuelos, Blázquez, Contreras,
   Castañer y Camerino, Famose, Schmidt, Gallahue, Wickstrom, Muska Mosston, Delgado Noguera, Lapierre y
   Aucouturier, Picq y Vayer, Cratty, Fernández García, Díaz Lucea, López Pastor, Devís, Generelo, etc., según
   proceda), clasificaciones, datos fisiológicos o evolutivos, y ejemplos de tareas y sesiones de EF en Primaria.
3. **Marco normativo actualizado** (estatal y andaluz) aplicado al tema: LOE modificada por LOMLOE (LO 3/2020),
   RD 157/2022 (enseñanzas mínimas de Primaria; área de Educación Física: competencias específicas, criterios de
   evaluación y bloques de saberes básicos —Vida activa y saludable; Organización y gestión de la actividad física;
   Resolución de problemas en situaciones motrices; Autorregulación emocional e interacción social en situaciones
   motrices; Manifestaciones de la cultura motriz; Interacción eficiente y sostenible con el entorno—), Ley 17/2007
   de Educación de Andalucía (LEA), Decreto 101/2023, de 9 de mayo, Orden de 30 de mayo de 2023 (currículo,
   atención a la diversidad, evaluación y tránsito en Andalucía), Decreto 328/2010 (ROC de los CEIP), y la normativa
   específica pertinente (Ley 39/2022, de 30 de diciembre, del Deporte; Ley 5/2016, de 19 de julio, del Deporte de
   Andalucía; Instrucciones de 8 de marzo de 2017 sobre NEAE; II Plan Estratégico de Igualdad de Género en
   Educación 2016-2021 y planes posteriores; programa Creciendo en Salud; Plan de Deporte en Edad Escolar de
   Andalucía / Escuelas Deportivas; seguridad y primeros auxilios, etc.). Cita solo normas que existan; si dudas de
   un detalle concreto (número de artículo, fecha, código de criterio), formúlalo de forma general en vez de inventarlo.
   Usa la terminología LOMLOE: competencias clave, competencias específicas, descriptores operativos, perfil de
   salida, saberes básicos, situaciones de aprendizaje, DUA, criterios de evaluación. Como el título oficial es de
   1993 y usa términos antiguos (p. ej. "minusvalías", "integración escolar", "ciclos", "objetivos y contenidos"),
   explica con tacto la equivalencia con el enfoque y la terminología actuales (discapacidad, inclusión educativa,
   NEAE, ciclos LOMLOE, competencias y saberes básicos…).
4. **Aplicación didáctica en el aula andaluza**: al menos una situación de aprendizaje de EF de ejemplo completa
   (curso/ciclo, competencias específicas, criterios, saberes, secuencia de sesiones/actividades, organización,
   materiales, evaluación con instrumentos concretos, atención a la diversidad/DUA y alumnado con NEAE),
   y referencias a planes y programas de la Junta cuando proceda (Creciendo en Salud, Plan de Deporte en Edad
   Escolar, Aldea, Plan de Igualdad, Transformación Digital Educativa, recreos activos, PLC…) y a la cultura
   andaluza (juegos populares andaluces, flamenco/sevillanas en expresión corporal, espacios naturales de
   Andalucía, etc.).
5. **Conclusión**.
6. **Bibliografía y webgrafía** (autores clásicos y actuales de la EF y las ciencias del deporte, normativa, webs
   oficiales: BOE, BOJA, Portal de la Junta de Andalucía, INTEF, revistas como Retos, Apunts, EmásF, Tándem...).
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

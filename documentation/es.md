<!-- ELUCENIA technical documentation · nafld-fibrosis-score · es · no clinical/professional/rights approval -->

# Puntuación de fibrosis en EHGNA (NFS)

[condiciones, fuentes y permisos](https://elucenia.org/es/herramientas/nafld-fibrosis-score)

## Cómo usar

Utilice la herramienta en el portal o abra index.html mediante un servidor HTTP local. Seleccione el idioma, complete los campos y calcule.

## Entradas y unidades

### Edad

`idade`

años · intervalo: 18–100

### IMC

`imc`

kg/m² · intervalo: 12–80

### Glucemia en ayunas alterada o diabetes

`dm`

- `0` — No
- `1` — Sí

### Aspartato aminotransferasa (AST)

`ast`

U/L · intervalo: 1–5000

### Alanina aminotransferasa (ALT)

`alt`

U/L · intervalo: 1–5000

### Plaquetas

`plq`

× 10³/mm³ · intervalo: 5–1500

### Albúmina

`alb`

g/dL · intervalo: 1–6

## Edición del método

NFS de Angulo et al. (2007), seis variables; la fórmula y los puntos de corte originales se comprobaron en la Tabla 1 de McPherson et al. (2017). Esta implementación utiliza el punto de corte inferior de 0,12 a partir de los 65 años (≥65); el superior sigue siendo 0,676.

## Fórmula documentada

NFS = −1,675 + 0,037 × edad + 0,094 × IMC + 1,13 × (glucemia alterada/diabetes: 1) + 0,99 × AST/ALT − 0,013 × plaquetas (10⁹/L) − 0,66 × albúmina (g/dL).

## Límites y población

El modelo original se derivó de NAFLD confirmada por biopsia, no de toda la población actualmente denominada MASLD. McPherson (2017) evaluó servicios especializados europeos, excluyó otras hepatopatías y el consumo excesivo de alcohol y encontró un rendimiento bajo en personas de ≤35 años. La Figura 4 y su leyenda difieren en los límites de edad de 35 y 65 años; estas edades exactas no han recibido una adjudicación clínica aquí. El punto de corte inferior de 0,12 para una edad ≥65 es la política declarada de esta implementación. Las plaquetas en ×10³/mm³ equivalen numéricamente a ×10⁹/L; la albúmina debe estar en g/dL. La puntuación se muestra con tres decimales; la clasificación utiliza límites estrictos sin redondearla. Los valores intermedios no son concluyentes; el NFS aislado no confirma F3–F4. No se ha realizado una revisión clínica ni lingüística por profesionales independientes.

## Referencias

- [Angulo P et al. The NAFLD fibrosis score: a noninvasive system that identifies liver fibrosis in patients with NAFLD. Hepatology, 2007.](https://doi.org/10.1002/hep.21496)

- [McPherson S et al. Age as a confounding factor for the accurate non-invasive diagnosis of advanced NAFLD fibrosis. Am J Gastroenterol, 2017.](https://doi.org/10.1038/ajg.2016.453)

- [Rinella ME et al. AASLD Practice Guidance on the clinical assessment and management of nonalcoholic fatty liver disease. Hepatology, 2023.](https://doi.org/10.1097/HEP.0000000000000323)

## Reproducir las pruebas técnicas

Ejecute node test.cjs en el directorio raíz de este repositorio para repetir los casos sintéticos registrados. Se conservan las entradas, los resultados esperados y las tolerancias originales. Las pruebas técnicas no constituyen validación clínica.

```sh
node test.cjs
```

tool.json contiene las fuentes, la edición y el alcance de la revisión. examples.json conserva las entradas y los resultados esperados de los casos sintéticos; results.json registra los resultados obtenidos.

[Ficha y referencias](../tool.json) · [Código JavaScript](../calculator.js) · [Casos de referencia](../examples.json) · [results.json](../results.json)

## Revisión y condiciones de uso

No se ha realizado una revisión clínica independiente.

Esta interfaz es una traducción de elaboración propia, no una edición oficial o certificada. No se han realizado la revisión clínica independiente, la revisión lingüística profesional ni la autorización de derechos de los instrumentos.

Resultado de la fórmula o clasificación. La interpretación, la conducta y la aplicabilidad dependen de la evaluación profesional y de la fuente seleccionada.

## Licencia y atribución

Apache-2.0 se aplica únicamente al código de ELUCENIA. Los derechos de los instrumentos, publicaciones, traducciones y datos permanecen en manos de sus respectivos titulares. Conserve LICENSE y NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026

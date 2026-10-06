<!-- ELUCENIA technical documentation · nafld-fibrosis-score · en · no clinical/professional/rights approval -->

# NAFLD Fibrosis Score (NFS)

[conditions, sources and permissions](https://elucenia.org/en/tools/nafld-fibrosis-score)

## How to use

Use the tool in the portal or open index.html through a local HTTP server. Select the language, complete the fields and calculate.

## Inputs and units

### Age

`idade`

years · range: 18–100

### BMI

`imc`

kg/m² · range: 12–80

### Impaired fasting glucose or diabetes

`dm`

- `0` — No
- `1` — Yes

### Aspartate aminotransferase (AST)

`ast`

U/L · range: 1–5000

### Alanine aminotransferase (ALT)

`alt`

U/L · range: 1–5000

### Platelets

`plq`

× 10³/mm³ · range: 5–1500

### Albumin

`alb`

g/dL · range: 1–6

## Method edition

NFS by Angulo et al. (2007), six variables; the original formula and cutoffs were checked in Table 1 of McPherson et al. (2017). This implementation uses the lower cutoff of 0.12 at age ≥65 years; the upper cutoff remains 0.676.

## Documented formula

NFS = −1.675 + 0.037 × age + 0.094 × BMI + 1.13 × (impaired glycemia/diabetes: 1) + 0.99 × AST/ALT − 0.013 × platelets (10⁹/L) − 0.66 × albumin (g/dL).

## Limits and population

The original model was derived from biopsy-confirmed NAFLD, not from every population now termed MASLD. McPherson (2017) assessed European specialist clinics, excluded other liver diseases and excessive alcohol consumption, and found poor performance in people aged ≤35 years. Figure 4 and its caption differ at the age boundaries of 35 and 65; these exact ages have not been clinically adjudicated here. The lower cutoff of 0.12 at age ≥65 is the declared policy of this implementation. Platelets in ×10³/mm³ are numerically equivalent to ×10⁹/L; albumin must be in g/dL. The score is displayed to three decimal places; classification uses strict cutoffs without rounding the score. Intermediate values are inconclusive; NFS alone does not confirm F3–F4. Independent professional clinical and language review has not been performed.

## References

- [Angulo P et al. The NAFLD fibrosis score: a noninvasive system that identifies liver fibrosis in patients with NAFLD. Hepatology, 2007.](https://doi.org/10.1002/hep.21496)

- [McPherson S et al. Age as a confounding factor for the accurate non-invasive diagnosis of advanced NAFLD fibrosis. Am J Gastroenterol, 2017.](https://doi.org/10.1038/ajg.2016.453)

- [Rinella ME et al. AASLD Practice Guidance on the clinical assessment and management of nonalcoholic fatty liver disease. Hepatology, 2023.](https://doi.org/10.1097/HEP.0000000000000323)

## Reproduce the technical tests

Run node test.cjs in the root directory of this repository to repeat the recorded synthetic cases. Original inputs, expectations and tolerances are preserved. Technical tests do not constitute clinical validation.

```sh
node test.cjs
```

tool.json contains sources, edition and review scope. examples.json retains synthetic inputs and expectations; results.json records the obtained results.

[Record and references](../tool.json) · [JavaScript code](../calculator.js) · [Reference cases](../examples.json) · [results.json](../results.json)

## Review and conditions of use

Independent clinical review has not been performed.

This interface is an authorial translation, not an official or certified edition. Independent clinical review, professional language review and instrument rights clearance have not been performed.

Formula or classification result. Interpretation, care and applicability depend on professional assessment and the selected source.

## License and attribution

Apache-2.0 applies only to ELUCENIA code. Rights to instruments, publications, translations and data remain with their respective holders. Preserve LICENSE and NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026

## Documented results

The information below preserves the method outputs for synthetic examples. It does not constitute independent clinical validation.

### 1

Advanced fibrosis (F3–F4) unlikely


### 2

Indeterminate result: complement with elastography


### 3

Advanced fibrosis (F3–F4) likely

From 65 years of age, the lower cutoff used is 0,12 (McPherson 2017).


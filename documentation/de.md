<!-- ELUCENIA technical documentation · nafld-fibrosis-score · de · no clinical/professional/rights approval -->

# NAFLD-Fibrose-Score (NFS)

[Bedingungen, Quellen und Berechtigungen](https://elucenia.org/de/werkzeuge/nafld-fibrosis-score)

## Verwendung

Verwenden Sie das Werkzeug im Portal oder öffnen Sie index.html über einen lokalen HTTP-Server. Wählen Sie die Sprache, füllen Sie die Felder aus und berechnen Sie das Ergebnis.

## Eingaben und Einheiten

### Alter

`idade`

Jahre · Bereich: 18–100

### BMI

`imc`

kg/m² · Bereich: 12–80

### Gestörte Nüchternglukose oder Diabetes

`dm`

- `0` — Nein
- `1` — Ja

### Aspartat-Aminotransferase (AST/GOT)

`ast`

U/L · Bereich: 1–5000

### Alanin-Aminotransferase (ALT/GPT)

`alt`

U/L · Bereich: 1–5000

### Thrombozyten

`plq`

× 10³/mm³ · Bereich: 5–1500

### Albumin

`alb`

g/dL · Bereich: 1–6

## Fassung der Methode

NFS nach Angulo et al. (2007), sechs Variablen; die ursprüngliche Formel und die Grenzwerte wurden anhand von Tabelle 1 bei McPherson et al. (2017) überprüft. Diese Implementierung verwendet ab einem Alter von 65 Jahren (≥65) den unteren Grenzwert 0,12; der obere Grenzwert bleibt 0,676.

## Dokumentierte Formel

NFS = −1,675 + 0,037 × Alter + 0,094 × BMI + 1,13 × (gestörte Glykämie/Diabetes: 1) + 0,99 × AST/ALT − 0,013 × Thrombozyten (10⁹/L) − 0,66 × Albumin (g/dL).

## Grenzen und Population

Das ursprüngliche Modell wurde bei biopsiebestätigter NAFLD entwickelt, nicht für sämtliche heute als MASLD bezeichneten Populationen. McPherson (2017) untersuchte europäische Spezialambulanzen, schloss andere Lebererkrankungen und übermäßigen Alkoholkonsum aus und stellte bei Personen im Alter von ≤35 Jahren eine geringe Aussagekraft fest. Abbildung 4 und ihre Legende unterscheiden sich an den Altersgrenzen 35 und 65 Jahre; diese exakten Alterswerte wurden hier nicht klinisch beurteilt. Der untere Grenzwert 0,12 ab einem Alter von ≥65 ist die erklärte Regel dieser Implementierung. Thrombozyten in ×10³/mm³ entsprechen zahlenmäßig ×10⁹/L; Albumin muss in g/dL angegeben werden. Der Score wird mit drei Dezimalstellen angezeigt; die Klassifikation verwendet strikte Grenzwerte ohne Rundung des Scores. Zwischenwerte sind nicht eindeutig; der NFS allein bestätigt F3–F4 nicht. Eine klinische oder sprachliche Prüfung durch unabhängige Fachleute wurde nicht durchgeführt.

## Referenzen

- [Angulo P et al. The NAFLD fibrosis score: a noninvasive system that identifies liver fibrosis in patients with NAFLD. Hepatology, 2007.](https://doi.org/10.1002/hep.21496)

- [McPherson S et al. Age as a confounding factor for the accurate non-invasive diagnosis of advanced NAFLD fibrosis. Am J Gastroenterol, 2017.](https://doi.org/10.1038/ajg.2016.453)

- [Rinella ME et al. AASLD Practice Guidance on the clinical assessment and management of nonalcoholic fatty liver disease. Hepatology, 2023.](https://doi.org/10.1097/HEP.0000000000000323)

## Technische Tests reproduzieren

Führen Sie node test.cjs im Stammverzeichnis dieses Repositorys aus, um die dokumentierten synthetischen Fälle zu wiederholen. Ursprüngliche Eingaben, erwartete Ergebnisse und Toleranzen bleiben erhalten. Technische Tests stellen keine klinische Validierung dar.

```sh
node test.cjs
```

tool.json enthält Quellen, Ausgabe und Umfang der Überprüfung. examples.json bewahrt die synthetischen Eingaben und erwarteten Ergebnisse; results.json dokumentiert die tatsächlich erhaltenen Ergebnisse.

[Eintrag und Referenzen](../tool.json) · [JavaScript-Code](../calculator.js) · [Referenzfälle](../examples.json) · [results.json](../results.json)

## Überprüfung und Nutzungsbedingungen

Eine unabhängige klinische Prüfung wurde nicht durchgeführt.

Diese Benutzeroberfläche ist eine selbst erstellte Übersetzung und keine offizielle oder zertifizierte Ausgabe. Eine unabhängige klinische Überprüfung, eine professionelle sprachliche Prüfung und eine Klärung der Rechte an den Instrumenten wurden nicht durchgeführt.

Ergebnis der Formel oder Klassifikation. Interpretation, Vorgehen und Anwendbarkeit hängen von der fachlichen Beurteilung und der ausgewählten Quelle ab.

## Lizenz und Urheberangaben

Apache-2.0 gilt nur für den ELUCENIA-Code. Die Rechte an Instrumenten, Veröffentlichungen, Übersetzungen und Daten verbleiben bei den jeweiligen Rechteinhabern. Bewahren Sie LICENSE und NOTICE auf.

ELUCENIA · Felipe Guedes · Copyright © 2026

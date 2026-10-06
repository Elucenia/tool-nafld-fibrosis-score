<!-- ELUCENIA technical documentation · nafld-fibrosis-score · it · no clinical/professional/rights approval -->

# Punteggio di fibrosi NAFLD (NFS)

[condizioni, fonti e autorizzazioni](https://elucenia.org/it/strumenti/nafld-fibrosis-score)

## Come usare

Usi lo strumento nel portale oppure apra index.html tramite un server HTTP locale. Selezioni la lingua, compili i campi ed esegua il calcolo.

## Dati di ingresso e unità

### Età

`idade`

anni · intervallo: 18–100

### IMC

`imc`

kg/m² · intervallo: 12–80

### Alterata glicemia a digiuno o diabete

`dm`

- `0` — No
- `1` — Sì

### Aspartato aminotransferasi (AST)

`ast`

U/L · intervallo: 1–5000

### Alanina aminotransferasi (ALT)

`alt`

U/L · intervallo: 1–5000

### Piastrine

`plq`

× 10³/mm³ · intervallo: 5–1500

### Albumina

`alb`

g/dL · intervallo: 1–6

## Edizione del metodo

NFS di Angulo et al. (2007), sei variabili; formula e soglie originali verificate nella Tabella 1 di McPherson et al. (2017). Questa implementazione usa la soglia inferiore di 0,12 dai 65 anni di età (≥65); la soglia superiore resta 0,676.

## Formula documentata

NFS = −1,675 + 0,037 × età + 0,094 × IMC + 1,13 × (glicemia alterata/diabete: 1) + 0,99 × AST/ALT − 0,013 × piastrine (10⁹/L) − 0,66 × albumina (g/dL).

## Limiti e popolazione

Il modello originale è stato derivato da NAFLD confermata mediante biopsia, non da tutte le popolazioni oggi definite MASLD. McPherson (2017) ha valutato centri specialistici europei, ha escluso altre epatopatie e il consumo eccessivo di alcol e ha riscontrato prestazioni scarse nelle persone di età ≤35 anni. La Figura 4 e la sua didascalia differiscono ai limiti di età di 35 e 65 anni; queste età esatte non sono state oggetto di un giudizio clinico in questa sede. La soglia inferiore di 0,12 per età ≥65 è la regola dichiarata di questa implementazione. Le piastrine in ×10³/mm³ equivalgono numericamente a ×10⁹/L; l’albumina deve essere espressa in g/dL. Il punteggio viene mostrato con tre decimali; la classificazione usa soglie rigorose senza arrotondare il punteggio. I valori intermedi non sono conclusivi; il solo NFS non conferma F3–F4. Non è stata effettuata una revisione clinica o linguistica da parte di professionisti indipendenti.

## Riferimenti

- [Angulo P et al. The NAFLD fibrosis score: a noninvasive system that identifies liver fibrosis in patients with NAFLD. Hepatology, 2007.](https://doi.org/10.1002/hep.21496)

- [McPherson S et al. Age as a confounding factor for the accurate non-invasive diagnosis of advanced NAFLD fibrosis. Am J Gastroenterol, 2017.](https://doi.org/10.1038/ajg.2016.453)

- [Rinella ME et al. AASLD Practice Guidance on the clinical assessment and management of nonalcoholic fatty liver disease. Hepatology, 2023.](https://doi.org/10.1097/HEP.0000000000000323)

## Riprodurre i test tecnici

Esegua node test.cjs nella cartella principale di questo repository per ripetere i casi sintetici registrati. Gli input, i risultati attesi e le tolleranze originali sono conservati. I test tecnici non costituiscono validazione clinica.

```sh
node test.cjs
```

tool.json contiene le fonti, l’edizione e l’ambito della revisione. examples.json conserva gli input e i risultati attesi dei casi sintetici; results.json registra i risultati ottenuti.

[Scheda e riferimenti](../tool.json) · [Codice JavaScript](../calculator.js) · [Casi di riferimento](../examples.json) · [results.json](../results.json)

## Revisione e condizioni d’uso

Non è stata effettuata una revisione clinica indipendente.

Questa interfaccia è una traduzione realizzata dagli autori, non un’edizione ufficiale o certificata. Non sono state eseguite la revisione clinica indipendente, la revisione linguistica professionale né la verifica delle autorizzazioni relative ai diritti sugli strumenti.

Risultato della formula o classificazione. Interpretazione, condotta e applicabilità dipendono dalla valutazione professionale e dalla fonte selezionata.

## Licenza e attribuzione

Apache-2.0 si applica solo al codice di ELUCENIA. I diritti su strumenti, pubblicazioni, traduzioni e dati restano ai rispettivi titolari. Conservi LICENSE e NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026

## Risultati documentati

Le informazioni seguenti conservano gli output del metodo per esempi sintetici. Non costituiscono una validazione clinica indipendente.

### 1

Fibrosi avanzata (F3–F4) improbabile


### 2

Risultato indeterminato: integrare con elastografia


### 3

Fibrosi avanzata (F3–F4) probabile

A partire da 65 anni, il cut-off inferiore utilizzato è 0,12 (McPherson 2017).


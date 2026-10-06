<!-- ELUCENIA technical documentation · nafld-fibrosis-score · pt-BR · no clinical/professional/rights approval -->

# NAFLD Fibrosis Score (NFS)

[condições, fontes e permissões](https://elucenia.org/pt-br/ferramentas/nafld-fibrosis-score)

## Como usar

Use a ferramenta no portal ou abra index.html em um servidor HTTP local. Selecione o idioma, preencha os campos e calcule.

## Entradas e unidades

### Idade

`idade`

anos · intervalo: 18–100

### IMC

`imc`

kg/m² · intervalo: 12–80

### Glicemia de jejum alterada ou diabetes

`dm`

- `0` — Não
- `1` — Sim

### AST (TGO)

`ast`

U/L · intervalo: 1–5000

### ALT (TGP)

`alt`

U/L · intervalo: 1–5000

### Plaquetas

`plq`

× 10³/mm³ · intervalo: 5–1500

### Albumina

`alb`

g/dL · intervalo: 1–6

## Edição do método

NFS de Angulo et al. (2007), seis variáveis; fórmula e cortes originais conferidos na Tabela 1 de McPherson et al. (2017). Esta implementação usa o corte inferior 0,12 para idade ≥65 anos; o corte superior continua 0,676.

## Fórmula documentada

NFS = −1,675 + 0,037 × idade + 0,094 × IMC + 1,13 × (glicemia alterada/diabetes: 1) + 0,99 × AST/ALT − 0,013 × plaquetas (10⁹/L) − 0,66 × albumina (g/dL).

## Limites e população

O modelo original foi derivado de NAFLD confirmada por biópsia, não de toda população hoje denominada MASLD. McPherson (2017) avaliou serviços especializados europeus, excluiu outras hepatopatias e consumo excessivo de álcool e encontrou desempenho fraco em pessoas ≤35 anos. A Figura 4 e sua legenda divergem nas fronteiras de 35 e 65 anos; essas idades exatas não receberam adjudicação clínica aqui. O limiar inferior de 0,12 para idade ≥65 é a política declarada desta implementação. Plaquetas ×10³/mm³ equivalem numericamente a ×10⁹/L; albumina deve estar em g/dL. O escore é exibido com três casas decimais; a classificação usa os limites estritos sem arredondar o escore. Valores intermediários são inconclusivos; o NFS isolado não confirma F3–F4. Revisão clínica e de idiomas por profissionais independentes não realizada.

## Referências

- [Angulo P et al. The NAFLD fibrosis score: a noninvasive system that identifies liver fibrosis in patients with NAFLD. Hepatology, 2007.](https://doi.org/10.1002/hep.21496)

- [McPherson S et al. Age as a confounding factor for the accurate non-invasive diagnosis of advanced NAFLD fibrosis. Am J Gastroenterol, 2017.](https://doi.org/10.1038/ajg.2016.453)

- [Rinella ME et al. AASLD Practice Guidance on the clinical assessment and management of nonalcoholic fatty liver disease. Hepatology, 2023.](https://doi.org/10.1097/HEP.0000000000000323)

## Reproduzir os testes técnicos

Execute node test.cjs na pasta raiz deste repositório para repetir os casos sintéticos registrados. As entradas, expectativas e tolerâncias originais são preservadas. Testes técnicos não constituem validação clínica.

```sh
node test.cjs
```

tool.json contém fontes, edição e escopo de revisão. examples.json conserva as entradas e expectativas sintéticas; results.json registra os resultados obtidos.

[Ficha e referências](../tool.json) · [Código JavaScript](../calculator.js) · [Casos de referência](../examples.json) · [results.json](../results.json)

## Revisão e condições de uso

Revisão clínica independente não realizada.

Esta interface é uma tradução autoral, não uma edição oficial ou certificada. Revisão clínica independente, revisão linguística profissional e autorização de direitos de instrumentos não foram realizadas.

Resultado da fórmula ou classificação. Interpretação, conduta e aplicabilidade dependem da avaliação profissional e da fonte selecionada.

## Licença e atribuição

Apache-2.0 aplica-se somente ao código da ELUCENIA. Os instrumentos, publicações, traduções e dados mantêm os direitos dos respectivos titulares. Preserve LICENSE e NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026

## Resultados documentados

As informações abaixo preservam as saídas do método para exemplos sintéticos. Não constituem validação clínica independente.

### 1

Fibrose avançada (F3–F4) improvável


### 2

Resultado indeterminado: complementar com elastografia


### 3

Fibrose avançada (F3–F4) provável

A partir de 65 anos, o corte inferior usado é 0,12 (McPherson 2017).


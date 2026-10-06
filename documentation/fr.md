<!-- ELUCENIA technical documentation · nafld-fibrosis-score · fr · no clinical/professional/rights approval -->

# Score de fibrose NAFLD (NFS)

[conditions, sources et autorisations](https://elucenia.org/fr/outils/nafld-fibrosis-score)

## Mode d’emploi

Utilisez l’outil sur le portail ou ouvrez index.html via un serveur HTTP local. Sélectionnez la langue, remplissez les champs et lancez le calcul.

## Données d’entrée et unités

### Âge

`idade`

ans · intervalle: 18–100

### IMC

`imc`

kg/m² · intervalle: 12–80

### Glycémie à jeun altérée ou diabète

`dm`

- `0` — Non
- `1` — Oui

### Aspartate aminotransférase (ASAT)

`ast`

U/L · intervalle: 1–5000

### Alanine aminotransférase (ALAT)

`alt`

U/L · intervalle: 1–5000

### Plaquettes

`plq`

× 10³/mm³ · intervalle: 5–1500

### Albumine

`alb`

g/dL · intervalle: 1–6

## Édition de la méthode

NFS d’Angulo et al. (2007), six variables ; la formule et les seuils d’origine ont été vérifiés dans le Tableau 1 de McPherson et al. (2017). Cette implémentation utilise le seuil inférieur de 0,12 à partir de 65 ans (≥65) ; le seuil supérieur reste de 0,676.

## Formule documentée

NFS = −1,675 + 0,037 × âge + 0,094 × IMC + 1,13 × (glycémie altérée/diabète: 1) + 0,99 × AST/ALT − 0,013 × plaquettes (10⁹/L) − 0,66 × albumine (g/dL).

## Limites et population

Le modèle initial a été établi chez des personnes atteintes de NAFLD confirmée par biopsie, et non dans toutes les populations aujourd’hui désignées par MASLD. McPherson (2017) a évalué des services spécialisés européens, exclu les autres hépatopathies et la consommation excessive d’alcool, et constaté une faible performance chez les personnes âgées de ≤35 ans. La Figure 4 et sa légende diffèrent aux limites d’âge de 35 et 65 ans ; ces âges exacts n’ont pas fait l’objet d’un arbitrage clinique ici. Le seuil inférieur de 0,12 pour un âge ≥65 est la règle déclarée de cette implémentation. Les plaquettes en ×10³/mm³ sont numériquement équivalentes à ×10⁹/L ; l’albumine doit être exprimée en g/dL. Le score est affiché avec trois décimales ; la classification utilise des seuils stricts sans arrondir le score. Les valeurs intermédiaires sont non concluantes ; le NFS seul ne confirme pas F3–F4. Aucune revue clinique ou linguistique par des professionnels indépendants n’a été effectuée.

## Références

- [Angulo P et al. The NAFLD fibrosis score: a noninvasive system that identifies liver fibrosis in patients with NAFLD. Hepatology, 2007.](https://doi.org/10.1002/hep.21496)

- [McPherson S et al. Age as a confounding factor for the accurate non-invasive diagnosis of advanced NAFLD fibrosis. Am J Gastroenterol, 2017.](https://doi.org/10.1038/ajg.2016.453)

- [Rinella ME et al. AASLD Practice Guidance on the clinical assessment and management of nonalcoholic fatty liver disease. Hepatology, 2023.](https://doi.org/10.1097/HEP.0000000000000323)

## Reproduire les tests techniques

Exécutez node test.cjs dans le répertoire racine de ce dépôt pour reproduire les cas synthétiques enregistrés. Les données d’entrée, les résultats attendus et les tolérances d’origine sont conservés. Les tests techniques ne constituent pas une validation clinique.

```sh
node test.cjs
```

tool.json contient les sources, l’édition et le périmètre de la revue. examples.json conserve les données d’entrée et les résultats attendus des cas synthétiques ; results.json consigne les résultats obtenus.

[Fiche et références](../tool.json) · [Code JavaScript](../calculator.js) · [Cas de référence](../examples.json) · [results.json](../results.json)

## Revue et conditions d’utilisation

Aucune révision clinique indépendante n’a été effectuée.

Cette interface est une traduction réalisée par nos soins, et non une édition officielle ou certifiée. La revue clinique indépendante, la révision linguistique professionnelle et l’autorisation des droits sur les instruments n’ont pas été réalisées.

Résultat de la formule ou de la classification. L’interprétation, la conduite et l’applicabilité dépendent de l’évaluation professionnelle et de la source sélectionnée.

## Licence et attribution

Apache-2.0 s’applique uniquement au code d’ELUCENIA. Les droits sur les instruments, publications, traductions et données restent ceux de leurs titulaires respectifs. Conservez LICENSE et NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026

## Résultats documentés

Les informations ci-dessous conservent les sorties de la méthode pour des exemples synthétiques. Elles ne constituent pas une validation clinique indépendante.

### 1

Fibrose avancée (F3–F4) peu probable


### 2

Résultat indéterminé : compléter par une élastographie


### 3

Fibrose avancée (F3–F4) probable

À partir de 65 ans, le seuil inférieur utilisé est 0,12 (McPherson 2017).


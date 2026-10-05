<!-- ELUCENIA technical documentation · nafld-fibrosis-score · ja · no clinical/professional/rights approval -->

# NAFLD線維化スコア（NFS）

[条件・出典・許諾](https://elucenia.org/ja/tools/nafld-fibrosis-score)

## 使い方

ポータルでツールを使用するか、ローカルHTTPサーバー経由でindex.htmlを開いてください。言語を選択し、項目を入力して計算してください。

## 入力項目と単位

### 年齢

`idade`

年 · 範囲: 18–100

### 体格指数（BMI）

`imc`

kg/m² · 範囲: 12–80

### 空腹時血糖異常または糖尿病

`dm`

- `0` — いいえ
- `1` — はい

### AST

`ast`

U/L · 範囲: 1–5000

### ALT

`alt`

U/L · 範囲: 1–5000

### 血小板

`plq`

× 10³/mm³ · 範囲: 5–1500

### アルブミン

`alb`

g/dL · 範囲: 1–6

## 方法の版

Anguloら（2007）のNFSは六つの変数を用い、元の式とカットオフ値はMcPhersonら（2017）の表1で照合した。本実装では65歳以上（≥65）の下限を0.12とし、上限は0.676のままとしている。

## 記載された計算式

NFS = −1.675 + 0.037 × 年齢 + 0.094 × BMI + 1.13 × (血糖異常/糖尿病: 1) + 0.99 × AST/ALT − 0.013 × 血小板 (10⁹/L) − 0.66 × アルブミン (g/dL).

## 限界・対象集団

元のモデルは生検で確定したNAFLDを対象に作成されており、現在MASLDと呼ばれるすべての集団を対象とするものではない。McPherson（2017）は欧州の専門診療施設を評価し、他の肝疾患と過剰な飲酒を除外し、35歳以下（≤35）では判別性能が低いことを報告した。図4と図注には35歳と65歳の境界で相違があり、これらの年齢ちょうどの扱いについて本実装では臨床的な裁定を行っていない。65歳以上（≥65）で下限0.12を使用するのは本実装で明示した規則である。血小板数の×10³/mm³は×10⁹/Lと数値的に等価であり、アルブミンはg/dLで入力する。スコアは小数点以下三桁で表示し、分類はスコアを丸めずに厳密なカットオフ値を用いる。中間値は確定的な判断を示さず、NFS単独ではF3–F4を確定できない。独立した専門家による臨床・言語レビューは未実施である。

## 参考文献

- [Angulo P et al. The NAFLD fibrosis score: a noninvasive system that identifies liver fibrosis in patients with NAFLD. Hepatology, 2007.](https://doi.org/10.1002/hep.21496)

- [McPherson S et al. Age as a confounding factor for the accurate non-invasive diagnosis of advanced NAFLD fibrosis. Am J Gastroenterol, 2017.](https://doi.org/10.1038/ajg.2016.453)

- [Rinella ME et al. AASLD Practice Guidance on the clinical assessment and management of nonalcoholic fatty liver disease. Hepatology, 2023.](https://doi.org/10.1097/HEP.0000000000000323)

## 技術テストの再現

このリポジトリのルートディレクトリでnode test.cjsを実行すると、記録された合成ケースを再実行できます。元の入力、期待結果、許容誤差は保持されています。技術テストは臨床的検証を意味しません。

```sh
node test.cjs
```

tool.jsonには出典、版、確認範囲が記録されています。examples.jsonには合成入力と期待結果が保持され、results.jsonには実際に得られた結果が記録されています。

[記録・参考文献](../tool.json) · [JavaScriptコード](../calculator.js) · [参照ケース](../examples.json) · [results.json](../results.json)

## 確認状況と使用条件

独立した臨床レビューは実施されていません。

このインターフェースは独自に作成した翻訳であり、公式版や認証済みの版ではありません。独立した臨床レビュー、専門家による言語レビュー、評価尺度等の権利許諾の確認は実施されていません。

式または分類の結果です。解釈、対応、適用可能性は専門家による評価と選択した出典に依存します。

## ライセンスと帰属表示

Apache-2.0はELUCENIAのコードにのみ適用されます。評価尺度等、出版物、翻訳、データの権利は、それぞれの権利者に帰属します。LICENSEとNOTICEを保持してください。

ELUCENIA · Felipe Guedes · Copyright © 2026

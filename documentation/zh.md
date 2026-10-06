<!-- ELUCENIA technical documentation · nafld-fibrosis-score · zh · no clinical/professional/rights approval -->

# NAFLD 肝纤维化评分（NFS）

[条件、来源与许可](https://elucenia.org/zh/tools/nafld-fibrosis-score)

## 使用方法

在门户中使用工具，或通过本地 HTTP 服务器打开 index.html。选择语言，填写各字段，然后计算。

## 输入与单位

### 年龄

`idade`

年 · 范围: 18–100

### 体重指数（BMI）

`imc`

kg/m² · 范围: 12–80

### 空腹血糖异常或糖尿病

`dm`

- `0` — 否
- `1` — 是

### AST

`ast`

U/L · 范围: 1–5000

### ALT

`alt`

U/L · 范围: 1–5000

### 血小板

`plq`

× 10³/mm³ · 范围: 5–1500

### 白蛋白

`alb`

g/dL · 范围: 1–6

## 方法版本

Angulo等（2007）的NFS，包含六个变量；原始公式和界值已按McPherson等（2017）的表1核对。本实现对年龄≥65岁者采用下限0.12；上限仍为0.676。

## 已记录的公式

NFS = −1.675 + 0.037 × 年龄 + 0.094 × BMI + 1.13 × (血糖异常/糖尿病: 1) + 0.99 × AST/ALT − 0.013 × 血小板 (10⁹/L) − 0.66 × 白蛋白 (g/dL).

## 限制与适用人群

原模型基于活检确诊的NAFLD建立，并不代表目前称为MASLD的所有人群。McPherson（2017）评估了欧洲专科诊疗机构，排除了其他肝病和过量饮酒者，并发现≤35岁人群的判别表现较差。图4与图注在35岁和65岁边界处存在不一致；本平台未对这两个确切年龄作临床裁定。年龄≥65岁时采用下限0.12是本实现声明的规则。血小板单位×10³/mm³在数值上等同于×10⁹/L；白蛋白必须使用g/dL。分值显示三位小数；分类依据严格界值，不先对分值进行舍入。中间值不能得出明确结论；单独的NFS不能确认F3–F4。尚未由独立专业人员进行临床和语言审核。

## 参考文献

- [Angulo P et al. The NAFLD fibrosis score: a noninvasive system that identifies liver fibrosis in patients with NAFLD. Hepatology, 2007.](https://doi.org/10.1002/hep.21496)

- [McPherson S et al. Age as a confounding factor for the accurate non-invasive diagnosis of advanced NAFLD fibrosis. Am J Gastroenterol, 2017.](https://doi.org/10.1038/ajg.2016.453)

- [Rinella ME et al. AASLD Practice Guidance on the clinical assessment and management of nonalcoholic fatty liver disease. Hepatology, 2023.](https://doi.org/10.1097/HEP.0000000000000323)

## 复现技术测试

在此仓库的根目录中运行 node test.cjs，以重复已记录的合成案例。原始输入、预期结果和容差保持不变。技术测试不构成临床验证。

```sh
node test.cjs
```

tool.json 包含来源、版本和审查范围。examples.json 保留合成输入与预期结果；results.json 记录实际得到的结果。

[记录与参考文献](../tool.json) · [JavaScript代码](../calculator.js) · [参考案例](../examples.json) · [results.json](../results.json)

## 审查与使用条件

尚未开展独立临床审查。

此界面为自主编写的翻译，并非官方或认证版本。尚未完成独立临床审查、专业语言审查或工具权利授权。

公式或分类结果。解释、处理及适用性须结合专业评估和所选来源。

## 许可与署名

Apache-2.0 仅适用于 ELUCENIA 代码。工具、出版物、翻译和数据的权利仍归各自权利人所有。请保留 LICENSE 和 NOTICE。

ELUCENIA · Felipe Guedes · Copyright © 2026

## 已记录的结果

以下信息保留该方法对合成示例的输出，不构成独立的临床验证。

### 1

进展期纤维化（F3–F4）不太可能


### 2

结果不确定：请结合弹性成像补充评估


### 3

进展期纤维化（F3–F4）可能

从65岁起，所使用的下限切点为 0,12（McPherson 2017）。


# React と CSS
CSS の書き方が複数ある
- Inline Styles
- CSS Modules
- Styled JSX
- styled components
- Emotion
- Tailwind CSS

## Inline Style
style={css オブジェクト} の方法  
キャメルケースにしないといけない  
イメージは html に直接 CSS 書いてる感じで 非推奨なイメージ  
## CSS Modules
.css, .scss ファイルに定義していく  
それなりに人気  
コンポーネントごとに css を用意することが多い  
.module.css と拡張子を2重にしないといけない  
`npm install node-sass`  
## Styled JSX
積極採用している感じは無いが Next.js の標準ライブラリ  
関数コンポーネントの中に `<style></style>` を書く  
html の head に まとめて CSS 書くイメージ  
```<style jsx>{`ここにCSS`}</style>```  
SCSS 記法は使えない  
Style JSX はプレーンな React ではわざわざ入れて使うことはぜず Next.js でとりあえず CSS-in-JS を使うぐらいしか使わない  
`npm install styled-jsx`  
## styled components
スタイルをあてたコンポーネントを定義する CSS-in-JS  
それなりに人気  
SCSS 記法が使える  
コンポーネントと同様に大文字から始まる style のあたった コンポーネントを使う  
`npm install styled-components`  
## Emotion
それなりに人気  
様々な使い方ができる  
書式
```javascript
/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
```
`npm install @emotion/react @emotion/styled`

- Style JSX のように コンポーネントファイルの中に CSS を書く  
ただし Emotion が用意した CSS を使う  
SCSS が使える  
- Inline Styles のように オブジェクトで スタイル を定義する  
- styled components のように スタイルを当てたコンポーネントを使う @emotion/styled を使う  
## Tailwind CSS
最近人気  
React だけでなく 通常の html や css にも適用できる  



## その他
Storybook とは コンポーネントカタログのこと  
0からコンポーネントを作るよりも コンポーネントライブラリを使うことが多い  
- Tailwind 製の Headless UI  
- Chakra UI  
- Material-UI  
- Semantic UI React  

など 色々ある  

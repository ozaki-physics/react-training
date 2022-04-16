# 再レンダリングの仕組みと最適化
再レンダリングが発生するタイミング  
- State の更新されたコンポーネント  
- props が変更されたコンポーネント  
- 再レンダリングされたコンポーネント配下のコンポーネント  

## レンダリング最適化
全部にする必要はなく データが増えそうなコンポーネント や 重くなってきたときに考える  
小さいコンポーネント や テキスト にはメモ化しない  
### memo
メモ化とは: 前回の処理結果を保持する キャッシュと近いイメージ  
React Hooks の memo でラップする  
`const コンポーネント名 = memo(() => {});`  
ラップしたら props が無いものは再レンダリングされなくなる  
しかし props を渡すと Child01 が変わってるわけではないのに 再レンダリングされてしまう  
なぜなら 関数が再生成されているから props が変化したと認識して 再レンダリングされる  
### useCallback
関数のメモ化する  
React Hooks の useCallback で関数をラップする  
useEffect と似ていて `useCallback(関数, [依存する値]);` と書く  
```javascript
const onClickButton = useCallback(() => {
  alert("ボタン押した");
}, []);
```
依存する値は 関数で使う値を書く  
### useMemo
変数のメモ化  
そんなに使用頻度が高くないらしい  
useEffect と似ていて `useMemo(変数に設定する値の返却, [依存する値]);` と書く  
```javascript
const sum = useMemo(() => {
  retun 1+3;
}, []);
```

変数設定のロジックが複雑, 膨大な数のループ などに使う  
また 依存配列に設定された値を見ることで 変数設定に影響を与える外部の値を明示して 可読性を上げる方法にも使える  

## パフォーマンス測定
Google が提唱している Core Web Vitals っていう指標がある  
- LCP(Largest Contentful Paint): 読み込み速度
- FID(First Input Delay): インタラクティブ性
- CLS(Cumulative Layout Shift): ページコンテンツの視覚的安定性

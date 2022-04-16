# カスタムフック
カスタムフックとは: 任意の処理をまとめて自作の Hooks を作成する実装のこと  
React 標準装備の Hooks
- useState
- useEffect
- useCallback
- useMemo
- useContext

自作する Hooks の接頭辞も use から始める方が良い  
`npm install axios`

コンポーネントの責務は 与えられたデータにもとづいてページの見た目を構築すること  
onClick にロジックが増えていくなら 分離した方が良い  

カスタムフックの実体は通常の関数と同じ  

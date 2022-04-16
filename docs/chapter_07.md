# グローバルな State 管理
親コンポーネントで定義している State を 下の階層のコンポーネントに渡していく方法は props で値を渡していくこともできる  
(通称 バケツリレー)  
しかし
- コードが複雑化
- props の肥大化で責務があいまいになる
- props が変わるため 再レンダリング
- 再利用できないコンポーネント化

という問題が発生する  
そのため 適切に グローバルな State を使う必要がある  

グローバル State を管理するライブラリは複数あるが React 組み込みの Context がある  
## Context
使い方  
1. React.createContext で Context の器を作る  
2. 作成した Context の Provider で グローバル State を扱いたいコンポーネントを囲む  
3. State 参照したいコンポーネントで React.useContext を使う  

CardRoot.jsx -> Card.jsx -> CardEditButton.jsx とバケツリレーしてたのを  
CardRoot.jsx -> グローバル State -> CardEditButton.jsx と グローバル State にすることができ  
Card.jsx から props が無くなった  

グローバル State にするのは ログインしているユーザー情報などがよくあるらしい  

再レンダリングに注意  
ある Context オブジェクトの値が更新されたら 値の変わった Context を useContext で参照しているコンポーネントは すべて再レンダリングされる  
つまり 1個の Context プロパティ に色々な State を詰め込むのを避ける  
更新関数を 別の Context にして Provider を Provider でラップすることも可能  

## Redux
グローバル State を扱う他の方法  
2015年から 数年に渡り ディファクトスタンダードになっている  
Flux アーキテクチャ で 単一方向にしかデータが流れないようにしている  
学習コストが高い, ファイル数が増える, バンドルサイズが大きくなる などデメリットもある  
大規模アプリ や State 管理が複雑 なアプリでは 単一方向のメリットが大きくなる  
MVC と クリーンアーキテクチャ みたいなものかな笑  
## Recoil
2020/05/xx に公開された Facebook(現 Meta)が提供している  
導入と実装ハードルが低いらしい  
まだ試験段階っぽい  
## Apollo Client
バックエンド との通信に GraphQL を使っているなら 選択肢としてアリらしい  

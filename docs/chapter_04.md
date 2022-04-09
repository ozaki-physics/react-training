# React の基本
VScode から container に入って開発できるように .devcontainer\devcontainer.json を用意した  
しかし docker image を slim にしたから image に git が含まれておらず 差分管理がしにくかったので  
ローカルの VScode を使って ターミナルで container の中に入って サーバを立てる方法にする  

JSX のルールとして return 移行は1つのタグで囲われている必要がある  
余計なタグを出力したくないなら React に用意されている `<Fragment></Fragment>` を使う  

Fragment を使うときの書き方は2種類  
```javascript
import ReactDOM from "react-dom";

const App = () => {
  return (
    <>
      <h1>こんにちは</h1>
      <p>お元気ですか?</p>
      <div>私は元気です</div>
    </>
  );
};
ReactDOM.render(<App />, document.getElementById("root"))
```
```javascript
import ReactDOM from "react-dom";
import { Fragment } from "react";

const App = () => {
  return (
    <Fragment>
      <h1>こんにちは</h1>
      <p>お元気ですか?</p>
      <div>私は元気です</div>
    </Fragment>
  );
};
ReactDOM.render(<App />, document.getElementById("root"))
```

コンポーネントに分けたら `export` を忘れずに付ける  
また 利用する側では `import { App } from "./App";` のように import する  

JS では `onclick` と各が React は `onClick` とキャメルケースにしなければならない  
また return の中で `{console.log("hello")}` と `{}` を使うと中に プレーンな JS を書くことができる  

CSS を記述するときは JS の CSS オブジェクトを作って それを React の プレーン JS に展開するから `style={{color="red"}}` と書く  
React ファイルの中の プレーン JS の中の CSS オブジェクト だから  

JS では オブジェクトのプロパティ名に ハイフンが使えない  
だから CSS オブジェクトの中では `font-size` も `fontSize` となる  

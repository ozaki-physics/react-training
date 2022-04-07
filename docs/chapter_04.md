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

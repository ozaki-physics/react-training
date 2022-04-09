# React の基本
VScode から container に入って開発できるように .devcontainer\devcontainer.json を用意した  
しかし docker image を slim にしたから image に git が含まれておらず 差分管理がしにくかったので  
ローカルの VScode を使って ターミナルで container の中に入って サーバを立てる方法にする  

サーバ立てるとき `npm start` を実行する  

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

props とは: コンポーネントに渡す引数のようなもの  
`<ColoredMessage color="bule" message="お元気ですか?"/>`  
属性で書くと props で props オブジェクトのプロパティとして渡される  

props には children というプロパティが存在する  
属性のように書くのではなく タグの間に書く  
`<ColoredMessage color="bule"/>お元気ですか?<ColoredMessage>`  
children には html 構造も渡すことができ コンポーネントの入れ子もできそう  

props から値を取り出すときに `props.なんとか` って書かなくて済むように
分割代入 `const {color, children} = props` を使うときもある  
また `ColoredMessage = ({color, children}) => {}` と最初から展開しちゃうときもある  
分割代入のことを destructure という  

State とは: コンポーネントが持つ状態  
- エラーの有無  
- モーダルウィンドウを開いているか  
- ボタンを押せるか  
- テキストボックスに何を入力したか  

イベント実行時に更新処理をして動的アプリにする  
関数コンポーネントでは React Hooks という機能群があり その useState という関数で扱う  
useState 関数の戻り値は配列で 配列1個目は State 変数, 2個目は State を更新するための関数  
`const [num, setNum] = useState();`  
State 変数は 最初 undefined から初期化したいときは useState() に引数を渡す  

再レンダリングとは: 変更を検知してコンポーネントを再処理する  
State が更新されたら 関数コンポーネント が最初から再実行される  

React Hooks に useEffect がある  
コンポーネントの副作用を制御する機能 で ある値が変わったときだけ ある処理を実行する
再レンダリング では State の数が多くなってくると 関数コンポーネント全体を再実行するのは無駄だから  
`useEffect(実行する関数, [依存する値]);`  

export の種類  
normal export: `import { 関数コンポーネント名 } from "./ファイルパス`  
default export: `import 任意の名前 from "./ファイルパス`  
default export は export する側に `export default 関数コンポーネント名` とする  
default export のメリットは任意の名前で import できることだが 1ファイル1回しか使えない  
また import を任意の名前で行いたいなら normal export で as を使えばよい `import { 関数コンポーネント名 as 任意の名前 } from "./ファイルパス`  
基本 normal export が推奨らしい  

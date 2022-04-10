# React と TypeScript
TypeScript で React を作る  
`npx create-react-app my-app --template typescript`  
拡張子が js -> ts, jsx -> tsx になる  
## 型の種類
コロンのあとに型を書く  
`let a: string = "A";`  
配列なら `Array<number>` 型を使う  
他にも null 型, undifined 型, any 型 がある  
any 型は 何でも許可されるから 型安全の意味が無くなるので非推奨  

関数の型は `(引数: 型): 戻り値の型 => {}` と書く  
```javascript
const funcA = (num: number): void => {
  console.log(num);
}
```

オブジェクトの型は `オブジェクト名: {変数名: 型, 変数名: 型}` と書く  
```javascript
const obj: { a: string, b: number } = {
  a: "A",
  b: 10,
}
```

intersection 型(交差型) は 複数の型を統合して新たな型を作る  
```javascript
const obj: {a: string} & {b: number} = {
  a: "A",
  b: 10,
}
```

新たに型を定義するときは `type 新しい型` で作れる  
`type TypeC = TypeA & TypeB`  

union 型(合併, 共用体型) は 複数の型を許容する  
`let a: string | number = "A"`  
`let a: string | number = 10`  

## ジェネリクス(Generics)  
型定義を動的にする  
```javascript
type CustomType<T> = {
  val: T,
}
```
ライブラリの中でよく使用されて ライブラリを使う側が動的にライブラリに型を入れて使えるなど  

## tsconfig.json
細かい設定を プロジェクトに合わせてカスタマイズできる  
json の key の説明  
- target  
  JavaScript にコンパイルするときに どのバージョンにするか  
- lib  
  target に指定してりうバージョンに存在しない機能を津アクときに lib に追記する  
- nodule  
  JavaScript をフロントエンドで使うなら"esnext", バックエンドで使うなら"commonjs"にする  
- jsx  
  JSX 構文をどのように JavaScript に出力するか React 16 までは"react", React 17 から"react-jsx"  
- strict  
  TypeScript が推奨している設定をまとめて有効無効にする  
  有効になる設定  
  - alwaysStrict(ECMAScript の strict モードで解釈)  
  - nolmplicitAny(暗黙的に any 推論されない)  
  - nolmplicitThis(暗黙的に this に any 推論されない)  
  - strictBindCallApply(組み込みメリットの call と bind と apply が正しい引数で呼ばれる)  
  - strictFunctionTypes(関数の引数の厳密チェック)  
  - strictNullCheecks(null と undifined を厳密に分けてチェック)  
  - strictPropertyInitialization(Class の constructor が設定される)  

TypeScript はリファクタリングに強いと言われるのは 型定義を修正して エラーになった部分を対応すればいいから  

## 型の一元管理
src に types ディレクトリ を作って user.ts ファイルのように管理する  
使う時は `import type { User } from "./types/user"` とする  
import のあとに type と書かなくても動くが 明示的に型だけ import するために付けるのが推奨  
## 関数コンポーネント自体の型定義
FC 型や VFC 型ある  
```javascript
import type { FC } from "react";
export const ListItem: FC<User> = props => {}
```
コンポーネントの型定義を使うと JSX を返却してないとエラーにできたりする  
基本的に 関数コンポーネントには FC 型や VFC 型を付けるのが推奨  
FC 型と VFC 型の違いは children を含む FC 型か 含まない VFC 型か  
主に FC を使えばいいが 暗黙的に children を含むのは良くないので `children: React.ReactNode` と明示する傾向がある  

## 省略可能な型定義
型定義のプロパティの後ろに"?"を付けると `指定した型 | undifined` となるから省略可能になる  
## オプショナルチェイニング(Optional chaining)
オブジェクト内のプロパティが存在するか田舎を気にせず安全に処理してくれる仕組み  
型定義の省略に使った"?"を拡張する感じで 省略されるかもしれないプロパティ名のあとに"?"を付ける  
```javascript
export type User = {
  id: number;
  hobbies?: string[];
};
hobbies.join("/")
// もしかしたら hobbies は定義で"?"がついてるし省略されるかもしれないから join 実行しようとしてエラーと言われる
hobbies?.join("/")
// プロパティに"?"を付けると join を実行せず undifined を返す
```

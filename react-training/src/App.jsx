import { ColoredMessage } from "./components/ColoredMessage";
import { useState } from "react";

export const App = () => {
  const [num, setNum] = useState(0);
  const onClickButton = () => {
    // setNum(num + 1)
    // 厳密には 更新関数の中で 更新関数を宣言するほうがよい
    setNum((prev) => prev + 1)

  };

  const contentPinkStyle = {
    color: "pink",
    fontSize: "20px"
  }

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <ColoredMessage color="blue">お元気ですか?</ColoredMessage>
      <ColoredMessage color="pink">元気です</ColoredMessage>
      <button onClick={onClickButton}>ボタン</button>
      <p>{num}</p>
    </>
  );
};

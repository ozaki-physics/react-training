import { useState, memo, useCallback } from "react";
import { Child01 } from "./Child01";
import { Child04 } from "./Child04";

export const ChildRoot = memo(() => {
  console.log("ChildRoot レンダリング");

  const [num, setNum] = useState(0);

  const onClickButton = () => {
    setNum((prev) => prev + 1);
  }

  const onClickReset = useCallback(() => {
    setNum(() => 0);
  }, []);

  return (
    <>
      <button onClick={onClickButton}>ボタン</button>
      <p>{num}</p>
      {/* <Child01 /> */}
      <Child01 onClickReset={onClickReset}/>
      <Child04 />
    </>
  )
})

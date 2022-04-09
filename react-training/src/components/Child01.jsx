import { Child02 } from "./Child02";
import { Child03 } from "./Child03";
import { memo } from "react";

const style = {
  height: "200px",
  backgroundColor: "lightblue",
  padding: "8px",
};

export const Child01 = memo((props) => {
  console.log("Child01 レンダリング");

  const { onClickReset } = props;

  return (
    <div style={style}>
      <p>Childe01</p>
      <button onClick={onClickReset}>リセット</button>
      <Child02 />
      <Child03 />
    </div>
  )
})

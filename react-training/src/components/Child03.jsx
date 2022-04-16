import { memo } from "react";

const style = {
  height: "50px",
  backgroundColor: "lightgray",
};

export const Child03 = memo(() => {
  console.log("Child03 レンダリング");

  return (
    <div style={style}>
      <p>Childe03</p>
    </div>
  )
})

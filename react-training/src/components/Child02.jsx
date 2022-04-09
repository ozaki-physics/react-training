import { memo } from "react";

const style = {
  height: "50px",
  backgroundColor: "lightgray",
};

export const Child02 = memo(() => {
  console.log("Child02 レンダリング");

  return (
    <div style={style}>
      <p>Childe02</p>
    </div>
  )
})

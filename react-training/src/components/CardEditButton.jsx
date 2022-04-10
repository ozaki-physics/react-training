import { useContext } from "react";
import { AdminFlagContext } from "./providers/AdminFlagProvider";

const style = {
  width: "100px",
  padding: "6px",
  borderRadius: "8px",
}

export const CardEditButton = (props) => {
  // 引数に参照したい Context を指定
  const { isAdmin } = useContext(AdminFlagContext);

  return (
    <button style={style} disabled={!isAdmin}>編集</button>
  )
}
import { useContext } from "react";
import { Card } from "./Card";
import { AdminFlagContext } from "./providers/AdminFlagProvider";

export const CardRoot = () => {
  // 管理者フラグ
  const { isAdmin, setIsAdmin } = useContext(AdminFlagContext);
  // 切り替え押したとき
  const onClickSwitch = () => {
    setIsAdmin((flg) => !flg);
  };

  return (
    <div>
      {isAdmin ? <span>管理者</span> : <span>管理者じゃない</span>}
      <button onClick={onClickSwitch}>切り替え</button>
      <Card isAdmin={isAdmin} />
    </div>
  )
}

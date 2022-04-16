import { createContext, useState } from "react";

// 器の用意
// デフォルト値を設定できるが 今回は空オブジェクト
// 参照できるように export にする
export const AdminFlagContext = createContext({});

export const AdminFlagProvider = props => {
  const { children } = props;
  const [isAdmin, setIsAdmin] = useState(false);

  // Provider コンポーネントは何でも囲めるように props として children を受け取る
  // 実際は value に グローバルに管理する実際の値を渡す
  return (
    <AdminFlagContext.Provider value={{ isAdmin, setIsAdmin }}>
      {children}
    </AdminFlagContext.Provider>
  )
}

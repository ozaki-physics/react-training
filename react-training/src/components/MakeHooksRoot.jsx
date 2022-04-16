import { useState } from "react";
import { useFetchUsers } from "./hooks/useFetchUsers";

export const MakeHooksRoot = () => {
  // const { userList, onClickFetchUser } = useFetchUsers();
  const { userList, isLoading, isError, onClickFetchUser } = useFetchUsers();

  return (
    <div>
      <button onClick={onClickFetchUser}>ユーザー取得</button>
      {isError && <p style={{ color: "red" }}>エラー発生</p>}
      {isLoading ? (
        <p>データ取得中</p>
      ) : (
        userList.map(user => (
          <p key={user.id}>{`${user.id}: ${user.name}(${user.age}歳)`}</p>
        ))
      )}
    </div>
  )
}

import { ChangeEvent, useState, useCallback, FC } from "react";
import styled from "styled-components";
import { MemoList } from "./MemoList";
import { useMemoList } from "../hooks/useMemoList";

export const App: FC = () => {
  const { memos, addTodo, deleteToDo } = useMemoList();
  // テキストボックス
  const [text, setText] = useState<string>("");
  // テキスト入力時に State に渡す
  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    setText(() => e.target.value);
  };
  // 追加ボタン
  const onClickAdd = () => {
    // 追加した後処理
    addTodo(text);
    setText(() => "");
  };
  // 削除ボタン
  const onClickDelete = useCallback((index: number) => {
    deleteToDo(index);
  }, [deleteToDo])


  return (
    <div>
      <h1>簡単メモアプリ</h1>
      <input type="text" value={text} onChange={onChangeText} />
      <SButton onClick={onClickAdd}>追加</SButton>
      <MemoList memos={memos} onClickDelete={onClickDelete} />
    </div>
  );
};

const SButton = styled.button`
  margin-left: 16px;
`;

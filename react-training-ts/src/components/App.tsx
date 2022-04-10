import { ChangeEvent, useState, useCallback, FC } from "react";
import styled from "styled-components";
import { MemoList } from "./MemoList";

export const App: FC = () => {
  // テキストボックス
  const [text, setText] = useState<string>("");
  // メモ一覧
  const [memos, setMemos] = useState<string[]>([]);
  // テキスト入力時に State に渡す
  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    setText(() => e.target.value);
  };
  // 追加ボタン
  const onClickAdd = () => {
    // State 検知のために新たに配列作成
    const newMemos = [...memos];
    newMemos.push(text);
    setMemos(() => newMemos);
    // 追加した後処理
    setText(() => "");
  };
  // 削除ボタン
  const onClickDelete = useCallback((index: number) => {
    const newMemos = [...memos];
    newMemos.splice(index, 1);
    setMemos(() => newMemos);
  }, [memos]);

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

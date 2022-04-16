import { useCallback, useState } from "react";

// メモ一覧のカスタムフック
export const useMemoList = () => {
  // メモ一覧
  const [memos, setMemos] = useState<string[]>([]);
  // メモ追加ロジック
  const addTodo = useCallback((text: string) => {
    // State 検知のために新たに配列作成
    const newMemos = [...memos];
    newMemos.push(text);
    setMemos(() => newMemos);
  }, [memos]);
  // メモ削除ロジック
  const deleteToDo = useCallback((index: number) => {
    const newMemos = [...memos];
    newMemos.splice(index, 1);
    setMemos(() => newMemos);
  }, [memos]);

  return { memos, addTodo, deleteToDo }
}

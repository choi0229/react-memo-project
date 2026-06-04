function MemoList({ memos }) {
  return (
    <div>
      {memos.map((memo, index) => (
        <div>{memo.title}</div>
      ))}
    </div>
  );
}

export default MemoList;

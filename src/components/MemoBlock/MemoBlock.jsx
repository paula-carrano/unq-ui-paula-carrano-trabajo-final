import "./memoBlock.css";

export const MemoBlock = ({ memoBlock, animating, handleMemoClick }) => {
  return (
    <div
      className="memo-block"
      onClick={() =>
        !memoBlock.flipped && !animating && handleMemoClick(memoBlock)
      }
    >
      <div
        className={`memo-block-inner ${
          memoBlock.flipped ? "memo-block-flipped" : ""
        }`}
      >
        <div className="memo-block-front"></div>
        <div className="memo-block-back">{memoBlock.value}</div>
      </div>
    </div>
  );
};

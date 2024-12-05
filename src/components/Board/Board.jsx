import { MemoBlock } from "../MemoBlock/MemoBlock";
import "./board.css";

export const Board = ({ memoBlocks, animating, handleMemoClick }) => {
  return (
    <div className="board">
      {memoBlocks.map((memoBlock) => (
        <MemoBlock
          key={memoBlock.index}
          memoBlock={memoBlock}
          animating={animating}
          handleMemoClick={handleMemoClick}
        />
      ))}
    </div>
  );
};

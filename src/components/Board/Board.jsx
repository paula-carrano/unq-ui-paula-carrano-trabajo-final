import { MemoBlock } from "../MemoBlock/MemoBlock";
import "./board.css";

export const Board = ({ memoBlocks, animating, handleMemoClick, gridSize }) => {
  return (
    <div
      className="board"
      style={{
        gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
      }}
    >
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

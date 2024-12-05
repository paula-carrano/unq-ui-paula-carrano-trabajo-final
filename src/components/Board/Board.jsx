import { MemoBlock } from "../MemoBlock/MemoBlock";
import "./board.css";

export const Board = ({ memoBlocks, animating, handleMemoClick }) => {
  return (
    <main className="board">
      {memoBlocks.map((memoblock, i) => {
        return (
          <MemoBlock
            key={`${i}_${memoblock.l}`}
            memoBlock={memoblock}
            animating={animating}
            handleMemoClick={handleMemoClick}
          />
        );
      })}
    </main>
  );
};

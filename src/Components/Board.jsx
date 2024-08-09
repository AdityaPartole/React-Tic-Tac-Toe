export default function Board({ size, board, handleClick }) {
    return (
      <div
        className="board"
        style={{ gridTemplateColumns: `repeat(${size},50px)` }}
      >
        {board.map((row, rowIndex) => {
          return row.map((cell, colIndex) => {
            return (
              <div
                onClick={() => handleClick(rowIndex, colIndex)}
                className="cell"
              >
                {cell}
              </div>
            );
          });
        })}
      </div>
    );
  }
  
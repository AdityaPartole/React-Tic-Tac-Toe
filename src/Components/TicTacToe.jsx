import { useState } from "react";
import Board from "./Board";
import { checkWinner, initialState } from "../Utils/ticTacToeUtils";

export default function TicTacToe({ size = 3 }) {
  const [board, setBoard] = useState(initialState(size));
  const [turnX, setTurnX] = useState(true);
  const winner = checkWinner(board, size);

  const status = winner
    ? `Winner is ${winner}`
    : turnX
    ? "Player X turn"
    : "Player O turn";

  const handleClick = (rowIdx, colIdx) => {
    console.log(rowIdx, colIdx);
    if (board[rowIdx][colIdx] || winner) {
      return;
    }
    const deepCopyOfBoard = JSON.parse(JSON.stringify(board));
    deepCopyOfBoard[rowIdx][colIdx] = turnX ? "X" : "O";
    console.log(deepCopyOfBoard);
    setBoard(deepCopyOfBoard);
    setTurnX(!turnX);
  };

  const handleReset = () => {
    setBoard(initialState(size));
  };
  return (
    <div className="container">
      <Board handleClick={handleClick} board={board} size={size} />
      <div className="status">{status}</div>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

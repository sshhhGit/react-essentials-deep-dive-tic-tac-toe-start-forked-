import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard() {
const [gameBoard, setGameBoard] = useState(initialGameBoard);

function handleSelectSquare(rowIndex, colIndex) {
    setGameBoard((prevGameBoard) => {
        prevGameBoard[rowIndex][
    });
}

  return (
    <ol id="game-board">
      {initialGameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSimbol, colIndex) => (
              <li key={colIndex}>
                <button>{playerSimbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}

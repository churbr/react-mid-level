import { useState } from "react";

export default function GameBoard({ onSelectBox, board }) {


  // const [gameBoard, setGameBoard] = useState(initialGameBoard);

  // This function is lift up to App.jsx
  // const handleSelectBox = (row, col) => {
  //       setGameBoard((prevState) => {
  //         const updatedBoard = [...prevState.map((rows) => [...rows])];
  //         updatedBoard[row][col] = active;

  //         return updatedBoard;
  //       });

  //       onSelectBox();
  // }

  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onSelectBox(rowIndex, colIndex)}
                  disabled={playerSymbol !== null}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}

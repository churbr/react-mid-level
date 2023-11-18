import { useState } from 'react';

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onSelectBox, active }) {
  const [gameBoard, setGameBoard] = useState(initialGameBoard); 

  const handleSelectBox = (row, col) => {
        setGameBoard((prevState) => {
          const updatedBoard = [...prevState.map((rows) => [...rows])];
          updatedBoard[row][col] = active;

          return updatedBoard;
        });

        onSelectBox();
  }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => handleSelectBox(rowIndex, colIndex)}>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}

import Player from './components/Player';
import GameBoard from './components/GameBoard';
import { useState } from 'react';

function App() {
  const [activePlayer, setActivePlayer] = useState('X');
  const [gameTurn, setGameTurn] = useState([]);

  const handleSelectBox = (rowIndex, colIndex) => {
    setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O': 'X');

    setGameTurn((prevTurn) => {
      let currPlayer = 'X';

      if(prevTurn.length > 0 && prevTurn[0].player === 'X') {
        currPlayer = 'O';
      }

      const updatedTurn = [
        { square: { row: rowIndex, col: colIndex }, player: currPlayer },
        ...prevTurn
      ]

      return updatedTurn;
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" symbol="X" isActive={activePlayer === 'X'} />
          <Player initialName="Player 2" symbol="O" isActive={activePlayer === 'O'} />
        </ol>
        <GameBoard active={activePlayer} onSelectBox={handleSelectBox} />
      </div>
      LOG
    </main>
  )
}

export default App

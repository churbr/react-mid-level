import Player from './components/Player';
import GameBoard from './components/GameBoard';
import Log from './components/Log'
import { useState } from 'react';
import { WINNING_COMBINATIONS } from './components/winning-combinations';

const deriveActivePlayer = (gameTurns) => {
  let activePlayer = 'X';

  if(gameTurns.length > 0 && gameTurns[0].player === 'X') {
    activePlayer = 'O';
  }

  return activePlayer;
}

function App() {
  // const [activePlayer, setActivePlayer] = useState('X');
  const [gameTurn, setGameTurn] = useState([]);

  let activePlayer = deriveActivePlayer(gameTurn);

  const handleSelectBox = (rowIndex, colIndex) => {
    // setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O': 'X');

    setGameTurn((prevTurn) => {
      let currPlayer = deriveActivePlayer(prevTurn);

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
        <GameBoard turns={gameTurn} onSelectBox={handleSelectBox} />
      </div>
      <Log turns={gameTurn} />
    </main>
  )
}

export default App

import Player from './components/Player';
import GameBoard from './components/GameBoard';
import { useState } from 'react';

function App() {
  const [activePlayer, setActivePlayer] = useState('X');

  const handleSelectBox = () => {
    setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O': 'X');
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

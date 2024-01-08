import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import GameOver from "./components/GameOver";
import { useState } from "react";
import { WINNING_COMBINATIONS } from "./components/winning-combinations";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const deriveActivePlayer = (gameTurns) => {
  let activePlayer = "X";

  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    activePlayer = "O";
  }

  return activePlayer;
};

function App() {
  // const [activePlayer, setActivePlayer] = useState('X');
  const [players, setPlayers] = useState({
    X: 'Player 1',
    O: 'Player 2',
  });
  const [gameTurn, setGameTurn] = useState([]);

  let gameBoard = [...initialGameBoard.map(array => [...array])];
  let winner;

  for (const turn of gameTurn) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  let activePlayer = deriveActivePlayer(gameTurn);

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol =
      gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol =
      gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol =
      gameBoard[combination[2].row][combination[2].column];

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = players[firstSquareSymbol];
    }
  }

  let hasDraw = gameTurn.length === 9 && !winner;

  const handleSelectBox = (rowIndex, colIndex) => {
    // setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O': 'X');

    setGameTurn((prevTurn) => {
      let currPlayer = deriveActivePlayer(prevTurn);

      const updatedTurn = [
        { square: { row: rowIndex, col: colIndex }, player: currPlayer },
        ...prevTurn,
      ];

      return updatedTurn;
    });
  };

  const handleChangePlayerName = (symbol, playerName) => {
    setPlayers(prevPlayers => {
      return {
        ...prevPlayers,
        [symbol]: playerName
      }
    });
  };

  const handleRestart = () => {
    setGameTurn([]);
  }

  return (
    <main>
      <div id="game-container">
        { (winner || hasDraw) && <GameOver winner={winner} onRestart={handleRestart} /> }
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player 1"
            symbol="X"
            isActive={activePlayer === "X"}
            onChangePlayerName={handleChangePlayerName}
          />
          <Player
            initialName="Player 2"
            symbol="O"
            isActive={activePlayer === "O"}
            onChangePlayerName={handleChangePlayerName}
          />
        </ol>
        <GameBoard onSelectBox={handleSelectBox} board={gameBoard} />
      </div>
      <Log turns={gameTurn} />
    </main>
  );
}

export default App;

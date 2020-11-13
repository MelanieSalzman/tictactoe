import React, { useState } from 'react'
import './styles.css'
import Board from '../Board'

const Game = () => {

  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([{ squares: Array(9).fill(null) }])

  const historyCopy = history
  const currentSquaresState = historyCopy[stepNumber].squares
  const winner = getWinnerText(calculateWinnerLine(currentSquaresState), currentSquaresState)
  const gameStatus = getGameStatusMessage(winner, xIsNext)

  const showMovesHistory = historyCopy.map((step, move) => {
    const desc = move ? 'Go to move #' + move : 'Go to game start';

    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{desc}</button>
      </li>
    );
  });

  const jumpTo = (step) => {
    setStepNumber(step)
    setXIsNext((step % 2) === 0)
  }

  const handleClick = (index) => {
    const historyCopy = history.slice(0, stepNumber + 1);
    const currentSquaresState = historyCopy[historyCopy.length - 1].squares;
    const squaresCopy = currentSquaresState.slice();

    if (winner || squaresCopy[index]) return undefined;

    squaresCopy[index] = xIsNext ? 'X' : 'O';

    setHistory(historyCopy.concat([{ squares: squaresCopy }]))
    setStepNumber(historyCopy.length)
    setXIsNext(!xIsNext)
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board
          squares={currentSquaresState}
          onClick={handleClick}
        />
      </div>
      <div className="game-info">
        <div>{gameStatus}</div>
        <ol>{showMovesHistory}</ol>
      </div>
    </div>
  );
}

const getGameStatusMessage = (winner, xIsNext) => {
  return winner ? 'Winner: ' + winner : 'Next player: ' + (xIsNext ? 'X' : 'O');
}

const calculateWinnerLine = squares => {
  const possibleWinnerLines = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

  return possibleWinnerLines.find(line => {
    const [first, second, third] = line

    return (squares[first] && squares[first] === squares[second] && squares[first] === squares[third])
  })
}

const getWinnerText = (winnerLine, squares) => {
  return winnerLine && squares[winnerLine[0]]
}

export default Game

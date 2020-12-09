import React from 'react'
import './styles.scss'
import Board from '../../components/Board'
import usePlayers from '../../hooks/usePlayers'
import useGame from '../../hooks/useGame'

const Game = () => {
  const { players } = usePlayers()
  const { game, setGame } = useGame()
  const [firstPlayer, secondPlayer] = players
  const { history, stepNumber, xIsNext } = game

  const getWinnerText = (winnerLine, squares) => {
    if (winnerLine !== undefined) {
      if (squares[winnerLine[0]]) {
        return firstPlayer.playerName
      } else {
        return secondPlayer.playerName
      }
    } else return null
  }

  const getWinnerMessage = winner => {
    return winner ? 'Winner: ' + winner : null
  }

  const getPlayerTurnMessage = xIsNext => {
    let message = 'Next player: '
    xIsNext
      ? (message += firstPlayer.playerName)
      : (message += secondPlayer.playerName)
    return message
  }

  const currentSquaresState = history[stepNumber].squares
  const winner = getWinnerText(
    calculateWinnerLine(currentSquaresState),
    currentSquaresState
  )
  const gameStatusMessage = winner
    ? getWinnerMessage(winner)
    : getPlayerTurnMessage(xIsNext)

  const showMovesHistory = history.map((step, move) => {
    const desc = move ? 'Go to move #' + move : 'Go to game start'

    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)} className='move'>
          {desc}
        </button>
      </li>
    )
  })

  const jumpTo = step => {
    setGame({
      ...game,
      stepNumber: step,
      xIsNext: step % 2 === 0
    })
  }

  const handleClick = index => {
    const historyCopy = history.slice(0, stepNumber + 1)
    const currentSquaresState = historyCopy[historyCopy.length - 1].squares
    const squaresCopy = currentSquaresState.slice()

    if (winner || squaresCopy[index]) return undefined

    squaresCopy[index] = xIsNext

    setGame({
      ...game,
      history: historyCopy.concat([
        {
          squares: squaresCopy
        }
      ]),
      stepNumber: historyCopy.length,
      xIsNext: !xIsNext
    })
  }

  return (
    <div className='game'>
      <div className='game-board'>
        <Board squares={currentSquaresState} onClick={handleClick} />
      </div>
      <div className='game-info'>
        <div>{gameStatusMessage}</div>
        <ol>{showMovesHistory}</ol>
      </div>
    </div>
  )
}

const calculateWinnerLine = squares => {
  const possibleWinnerLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]

  return possibleWinnerLines.find(line => {
    const [first, second, third] = line

    return (
      squares[first] !== null &&
      squares[first] === squares[second] &&
      squares[first] === squares[third]
    )
  })
}

export default Game

import React from 'react'
import './styles.scss'
import calculateWinnerLine from '../../utils/calculateWinnerLine'
import Board from '../../components/Board'
import usePlayers from '../../hooks/usePlayers'
import useGame from '../../hooks/useGame'
import MovesHistory from '../../components/MovesHistory'

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

  const getWinnerMessage = (winner) => {
    return winner ? 'Winner: ' + winner : null
  }

  const getPlayerTurnMessage = (xIsNext) => {
    let message = 'Next player: '
    xIsNext ? message += firstPlayer.playerName : message += secondPlayer.playerName
    return message
  }

  const currentSquaresState = history[stepNumber].squares
  const winnerLine = calculateWinnerLine(currentSquaresState)
  const winner = getWinnerText(winnerLine, currentSquaresState)
  const gameStatusMessage = winner ? getWinnerMessage(winner) : getPlayerTurnMessage(xIsNext)

  const jumpTo = step => {
    setGame({
      ...game,
      stepNumber: step,
      xIsNext: step % 2 === 0
    })
  }

  const handleClick = (index) => {
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
        <Board
          squares={currentSquaresState}
          onClick={handleClick}
          winnerLine={winnerLine}
        />
      </div>
      <div className='game-info'>
        <div>{gameStatusMessage}</div>
        <MovesHistory historyCopy={history} jumpTo={jumpTo} />
      </div>
    </div>
  )
}

export default Game

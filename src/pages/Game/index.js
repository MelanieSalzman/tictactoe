import React, { useContext } from 'react'
import './styles.scss'
import calculateWinnerLine from '../../utils/calculateWinnerLine'
import Board from '../../components/Board'
import MovesHistory from '../../components/MovesHistory'
import { FirstPlayerContext } from '../../providers/firstPlayerData'
import { SecondPlayerContext } from '../../providers/secondPlayerData'
import { GameContext } from '../../providers/gameStatus'

const Game = () => {
  const [firstPlayer] = useContext(FirstPlayerContext)
  const [secondPlayer] = useContext(SecondPlayerContext)
  const [state, setState] = useContext(GameContext)
  const { history, stepNumber, xIsNext } = state

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

  const historyCopy = history
  const currentSquaresState = historyCopy[stepNumber].squares
  const winner = getWinnerText(calculateWinnerLine(currentSquaresState), currentSquaresState)
  const gameStatusMessage = winner ? getWinnerMessage(winner) : getPlayerTurnMessage(xIsNext)

  const jumpTo = step => {
    setState(state => ({
      ...state,
      stepNumber: step,
      xIsNext: (step % 2) === 0
    }))
  }

  const handleClick = (index) => {
    const historyCopy = history.slice(0, stepNumber + 1)
    const currentSquaresState = historyCopy[historyCopy.length - 1].squares
    const squaresCopy = currentSquaresState.slice()

    if (winner || squaresCopy[index]) return undefined

    squaresCopy[index] = xIsNext

    setState(state => ({
      ...state,
      history: historyCopy.concat([{
        squares: squaresCopy
      }]),
      stepNumber: historyCopy.length,
      xIsNext: !xIsNext
    }))
  }

  return (
    <div className='game'>
      <div className='game-board'>
        <Board
          squares={currentSquaresState}
          onClick={handleClick}
        />
      </div>
      <div className='game-info'>
        <div>{gameStatusMessage}</div>
        <MovesHistory historyCopy={historyCopy} jumpTo={jumpTo} />
      </div>
    </div>
  )
}

export default Game

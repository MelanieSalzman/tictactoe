import React from 'react'
import './styles.scss'
import usePlayers from '../../hooks/usePlayers'

const GameStatus = ({ currentSquaresState, winnerLine, xIsNext }) => {
  const { players } = usePlayers()
  const [firstPlayer, secondPlayer] = players

  const getWinnerText = () => {
    const winnerPlayer = currentSquaresState[winnerLine[0]]
    if (winnerPlayer) return firstPlayer.playerName

    return secondPlayer.playerName
  }

  const getWinnerMessage = () => {
    return 'Winner: ' + winner
  }

  const getPlayerTurnMessage = () => 'Next player:  ' + (xIsNext ? firstPlayer : secondPlayer).playerName

  const getDrawMessage = () => {
    return 'Draw'
  }

  const isDraw = () => {
    return currentSquaresState.every(square => square !== null)
  }

  const winner = winnerLine && getWinnerText()

  const getGameStatusMessage = () => {
    if (winner) return getWinnerMessage(winner)
    if (!winner && isDraw()) return getDrawMessage()

    return getPlayerTurnMessage()
  }

  return (
    <div>{getGameStatusMessage()}</div>
  )
}

export default GameStatus

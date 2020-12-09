import React from 'react'
import './styles.scss'
import usePlayers from '../../hooks/usePlayers'

const GameStatus = ({ currentSquaresState, winnerLine, xIsNext }) => {
  const { players } = usePlayers()
  const [firstPlayer, secondPlayer] = players

  const getWinnerText = () => {
    if (winnerLine !== undefined) {
      if (currentSquaresState[winnerLine[0]]) {
        return firstPlayer.playerName
      } else {
        return secondPlayer.playerName
      }
    } else return null
  }

  const getWinnerMessage = () => {
    return 'Winner: ' + winner
  }

  const getPlayerTurnMessage = () => {
    return xIsNext ? 'Next player: ' + firstPlayer.playerName : 'Next player: ' + secondPlayer.playerName
  }

  const getDrawMessage = () => {
    return 'Draw'
  }

  const isDraw = () => {
    return currentSquaresState.every(square => square !== null)
  }

  const winner = getWinnerText()
  const gameStatusMessage = winner ? getWinnerMessage(winner) : isDraw() ? getDrawMessage() : getPlayerTurnMessage()

  return (
    <div>{gameStatusMessage}</div>
  )
}

export default GameStatus

import React from 'react'
import './styles.scss'
import Square from '../Square'
import { getPlanetSrcById } from '../../utils/planetList'
import usePlayers from '../../hooks/usePlayers'

const Board = ({ squares, onClick, winnerLine }) => {
  const { players } = usePlayers()
  const [firstPlayer, secondPlayer] = players

  const showPlayerPlanet = player => {
    if (player !== null) {
      return player
        ? getPlanetSrcById(firstPlayer.planetId)
        : getPlanetSrcById(secondPlayer.planetId)
    }
  }

  const isSquareWinner = (index, winnerLine) => {
    if (!winnerLine) return null
    const [firstSquare, secondSquare, thirdSquare] = winnerLine
    return index === firstSquare || index === secondSquare || index === thirdSquare
  }

  const BoardRow = ({ rowIndex }) => {
    return (
      <div>
        {[rowIndex, rowIndex + 1, rowIndex + 2].map(i => (
          <Square key={i} planetSrc={showPlayerPlanet(squares[i])} onClick={() => onClick(i)} winner={isSquareWinner(i, winnerLine)} />
        ))}
      </div>
    )
  }

  return (
    <div className='board'>
      {[0, 3, 6].map(i => (
        <BoardRow key={i} rowIndex={i} className='board-row' />
      ))}
    </div>
  )
}

export default Board

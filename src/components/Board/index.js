import React, { useContext } from 'react'
import './styles.scss'
import Square from '../Square'
import { getPlanetSrcById } from '../../Utils'
import { FirstPlayerContext } from '../../providers/firstPlayerData'
import { SecondPlayerContext } from '../../providers/secondPlayerData'

const Board = ({ squares, onClick }) => {
  const [firstPlayer] = useContext(FirstPlayerContext)
  const [secondPlayer] = useContext(SecondPlayerContext)

  const showPlayerPlanet = (player) => {
    if (player !== null) {
      return player ? getPlanetSrcById(firstPlayer.planetId) : getPlanetSrcById(secondPlayer.planetId)
    }
  }

  return (
    <div>
      <div className='board-row'>
        <Square planetSrc={showPlayerPlanet(squares[0])} onClick={() => onClick(0)} />
        <Square planetSrc={showPlayerPlanet(squares[1])} onClick={() => onClick(1)} />
        <Square planetSrc={showPlayerPlanet(squares[2])} onClick={() => onClick(2)} />
      </div>
      <div className='board-row'>
        <Square planetSrc={showPlayerPlanet(squares[3])} onClick={() => onClick(3)} />
        <Square planetSrc={showPlayerPlanet(squares[4])} onClick={() => onClick(4)} />
        <Square planetSrc={showPlayerPlanet(squares[5])} onClick={() => onClick(5)} />
      </div>
      <div className='board-row'>
        <Square planetSrc={showPlayerPlanet(squares[6])} onClick={() => onClick(6)} />
        <Square planetSrc={showPlayerPlanet(squares[7])} onClick={() => onClick(7)} />
        <Square planetSrc={showPlayerPlanet(squares[8])} onClick={() => onClick(8)} />
      </div>
    </div>
  )
}

export default Board

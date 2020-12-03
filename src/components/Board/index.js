import React from 'react'
import './styles.scss'
import Square from '../Square'
import { getPlanetSrcById } from '../../utils/planetList'
import useFirstPlayerState from '../../hooks/useFirstPlayerState'
import useSecondPlayerState from '../../hooks/useSecondPlayerState'
/*
const Board = ({ squares, onClick }) => {
  const [squarePosition, setSquarePosition] = useState(0)
  const { firstPlayer } = useFirstPlayerState()
  const { secondPlayer } = useSecondPlayerState()
  if (!firstPlayer) return null
  if (!secondPlayer) return null

  const showBoard = () => {
    const boardRows = []

    for (let index = 0; index < 3; index++) {
      console.log(index)
      boardRows.push(
        <div className='board-row' key={index}>
          {getSquares(squarePosition)}
        </div>
      )
    }
    return boardRows
  }

  const getSquares = (squarePosition) => {
    const squaresByRow = []
    for (let index = 0; index < 3; index++) {
      console.log('squares', squares)
      console.log('squareindex', index)
      console.log('squareposition', squarePosition)
      squaresByRow.push(
        <Square planetSrc={showPlayerPlanet(squares[squarePosition])} onClick={() => onClick(squarePosition)} key={squarePosition} />
      )
      setSquarePosition(squarePosition + 1)
      console.log('squarepositiondepsuessuma', squarePosition)
    }

    return squaresByRow
  }

  const showPlayerPlanet = (player) => {
    if (player !== null) {
      return player ? getPlanetSrcById(firstPlayer.planetId) : getPlanetSrcById(secondPlayer.planetId)
    }
  }

  return (
    <div>
      {showBoard()}
    </div>
  )
}

export default Board
*/

const Board = ({ squares, onClick, winnerLine }) => {
  const { firstPlayer } = useFirstPlayerState()
  const { secondPlayer } = useSecondPlayerState()
  if (!firstPlayer) return null
  if (!secondPlayer) return null

  const showPlayerPlanet = (player) => {
    if (player !== null) {
      return player ? getPlanetSrcById(firstPlayer.planetId) : getPlanetSrcById(secondPlayer.planetId)
    }
  }

  const isSquareWinner = (index, winnerLine) => {
    if (!winnerLine) return null
    const [firstSquare, secondSquare, thirdSquare] = winnerLine
    return index === firstSquare || index === secondSquare || index === thirdSquare
  }

  return (
    <div>
      <div className='board-row'>
        <Square planetSrc={showPlayerPlanet(squares[0])} onClick={() => onClick(0)} winner={isSquareWinner(0, winnerLine)} />
        <Square planetSrc={showPlayerPlanet(squares[1])} onClick={() => onClick(1)} winner={isSquareWinner(1, winnerLine)} />
        <Square planetSrc={showPlayerPlanet(squares[2])} onClick={() => onClick(2)} winner={isSquareWinner(2, winnerLine)} />
      </div>
      <div className='board-row'>
        <Square planetSrc={showPlayerPlanet(squares[3])} onClick={() => onClick(3)} winner={isSquareWinner(3, winnerLine)} />
        <Square planetSrc={showPlayerPlanet(squares[4])} onClick={() => onClick(4)} winner={isSquareWinner(4, winnerLine)} />
        <Square planetSrc={showPlayerPlanet(squares[5])} onClick={() => onClick(5)} winner={isSquareWinner(5, winnerLine)} />
      </div>
      <div className='board-row'>
        <Square planetSrc={showPlayerPlanet(squares[6])} onClick={() => onClick(6)} winner={isSquareWinner(6, winnerLine)} />
        <Square planetSrc={showPlayerPlanet(squares[7])} onClick={() => onClick(7)} winner={isSquareWinner(7, winnerLine)} />
        <Square planetSrc={showPlayerPlanet(squares[8])} onClick={() => onClick(8)} winner={isSquareWinner(8, winnerLine)} />
      </div>
    </div>
  )
}

export default Board

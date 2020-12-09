import React from 'react'
import './styles.scss'
import Board from '../../components/Board'
import GameStatus from '../../components/GameStatus'
import useGame from '../../hooks/useGame'
import calculateWinnerLine from '../../utils/calculateWinnerLine'
import MovesHistory from '../../components/MovesHistory'

const Game = () => {
  const { game, setGame } = useGame()
  const { history, stepNumber, xIsNext } = game

  const currentSquaresState = history[stepNumber].squares
  const winnerLine = calculateWinnerLine(currentSquaresState)

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

    if (winnerLine || squaresCopy[index]) return undefined

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
        <GameStatus currentSquaresState={currentSquaresState} winnerLine={winnerLine} xIsNext={xIsNext} />
        <MovesHistory historyCopy={history} jumpTo={jumpTo} />
      </div>
    </div>
  )
}

export default Game

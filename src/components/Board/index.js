import React from 'react'
import './styles.scss'
import Square from '../Square'

const Board = ({ squares, onClick }) => {
  return (
    <div>
      <div className='board-row'>
        <Square player={squares[0]} onClick={() => onClick(0)} />
        <Square player={squares[1]} onClick={() => onClick(1)} />
        <Square player={squares[2]} onClick={() => onClick(2)} />
      </div>
      <div className='board-row'>
        <Square player={squares[3]} onClick={() => onClick(3)} />
        <Square player={squares[4]} onClick={() => onClick(4)} />
        <Square player={squares[5]} onClick={() => onClick(5)} />
      </div>
      <div className='board-row'>
        <Square player={squares[6]} onClick={() => onClick(6)} />
        <Square player={squares[7]} onClick={() => onClick(7)} />
        <Square player={squares[8]} onClick={() => onClick(8)} />
      </div>
    </div>
  )
}

export default Board

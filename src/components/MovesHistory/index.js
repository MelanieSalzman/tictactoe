import React from 'react'
import './styles.scss'

const MovesHistory = ({ historyCopy, jumpTo }) => {
  const getCellsByRow = (init, qty) => {
    const cells = []
    for (let index = init; index < init + qty; index++) {
      if (historyCopy[index]) {
        cells.push(
          <button key={index} onClick={() => jumpTo(index)} className='move'>{index.toString()}</button>
        )
      }
    }

    return cells
  }

  return (
    <div className='table'>
      <h3>Moves history</h3>
      <div className='row'>
        {historyCopy[0] && <button key={0} onClick={() => jumpTo(0)} className='move'>Go to game start</button>}
      </div>
      <div className='row'>
        {getCellsByRow(1, 3)}
      </div>
      <div className='row'>
        {getCellsByRow(4, 3)}
      </div>
      <div className='row'>
        {getCellsByRow(7, 3)}
      </div>
    </div>
  )
}
export default MovesHistory

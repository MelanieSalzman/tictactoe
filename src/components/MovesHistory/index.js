import React, { useState } from 'react'
import './styles.scss'
import ascSort from '../../assets/images/ascSort.png'
import descSort from '../../assets/images/descSort.png'
const descMoves = [9, 6, 3]
const ascMoves = [1, 4, 7]

const MovesHistory = ({ historyCopy, jumpTo }) => {
  const [order, setOrder] = useState(true)

  const squaresIndex = (index) => {
    return order ? [index, index + 1, index + 2] : [index, index - 1, index - 2]
  }

  const MovesRow = ({ rowIndex }) => {
    return (
      <div>
        {squaresIndex(rowIndex).map(index => {
          if (historyCopy[index]) {
            return (
              <button key={index} onClick={() => jumpTo(index)} className={historyCopy.length - 1 === index ? 'moveSelected' : 'move'}>
                {index.toString()}
              </button>
            )
          } else return null
        })}
      </div>
    )
  }

  return (
    <div className='history'>
      <h3>Moves history</h3>
      <div className='row'>
        <button onClick={() => setOrder(!order)} className='sortButton'>
          <img src={order ? ascSort : descSort} alt='sort' className='sortImage' />
        </button>
        {historyCopy[0] &&
          <button key={0} onClick={() => jumpTo(0)} className={historyCopy.length - 1 === 0 ? 'moveSelected' : 'move'}>
            Go to game start
          </button>}
      </div>
      {(order ? ascMoves : descMoves).map(index => (
        <MovesRow key={index} rowIndex={index} className='movesRow' />
      ))}
    </div>
  )
}

export default MovesHistory

import React from 'react'
import './styles.scss'

const MovesHistory = ({ historyCopy, jumpTo }) => {
  const MovesRow = ({ rowIndex }) => {
    return (
      <div>
        {[rowIndex, rowIndex + 1, rowIndex + 2].map(index => {
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
        {historyCopy[0] && <button key={0} onClick={() => jumpTo(0)} className={historyCopy.length - 1 === 0 ? 'moveSelected' : 'move'}>Go to game start</button>}
      </div>
      {[1, 4, 7].map(index => (
        <MovesRow key={index} rowIndex={index} className='movesRow' />
      ))}
    </div>
  )
}

export default MovesHistory

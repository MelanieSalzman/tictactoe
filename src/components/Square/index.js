import React from 'react'
import './styles.scss'

const Square =
  ({ planetSrc, onClick, winner }) => {
    return (
      <button
        className={winner ? 'squareWinner' : 'square'}
        onClick={onClick}
      >
        {planetSrc != null ? <img src={planetSrc} alt='planet' className='planetIcon' /> : null}
      </button>
    )
  }

export default Square

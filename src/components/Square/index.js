import React from 'react'
import './styles.scss'

const Square =
  ({ planetSrc, onClick }) => {
    return (
      <button
        className='square'
        onClick={onClick}
      >
        {planetSrc != null ? <img src={planetSrc} alt='planet' className='planetIcon' /> : null}
      </button>
    )
  }

export default Square

import React from 'react'
import './styles.css'
import saturn from '../../assets/saturn.png'
import earth from '../../assets/earth.png'

const showPlanet = (value) => {
  if (value == 'X') {
    return (
      <img src={saturn} alt="planet" width="90" height="90" />
    )
  } 
  if (value == 'O') {
    return (
      <img src={earth} alt="planet" width="90" height="90" />
    )
  }
}


const Square =
  ({ value, onClick }) => (
    <button
      className="square"
      onClick={onClick}
    >
      {showPlanet(value)}
    </button>
  )

export default Square

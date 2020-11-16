import React from 'react'
import './styles.scss'
import PlanetIcon from '../PlanetIcon'


const Square =
  ({ value, onClick }) => (
    <button
      className="square"
      onClick={onClick}
    >
      {<PlanetIcon player={value} />}
    </button>
  )

export default Square

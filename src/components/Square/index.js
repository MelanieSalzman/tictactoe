import React from 'react'
import './styles.scss'
import saturn from '../../assets/images/saturn.png'
import earth from '../../assets/images/earth.png'

const Square =
  ({ player, onClick }) => {
    const getPlayerIcon = (player) => {
      return player === 'X' ? saturn : earth
    }

    return (
      <button
        className='square'
        onClick={onClick}
      >
        {player && <img src={getPlayerIcon(player)} alt={player} className='planetIcon'/>}
      </button>
    )
  }

export default Square

import React from 'react'
import './styles.scss'
import saturn from '../../../../assets/images/saturn.png'
import earth from '../../../../assets/images/earth.png'

const PlanetIcon = ({player}) => {
  /*colocar estilo en styles*/
  return(
  player === 'X' ? <img src={saturn} alt="X" width="90" height="90" /> : player === 'O' ? <img src={earth} alt="O" width="90" height="90" /> : null
  )
}

export default PlanetIcon

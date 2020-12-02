import React, { useState } from 'react'
import './styles.scss'
import { planets } from '../../utils/planetList'

const PlanetList = ({ playerId, onSelect }) => {
  const [selectedPlanetId, setSelectedPlanetId] = useState(0)

  const handleChange = planetId => {
    setSelectedPlanetId(planetId)
    onSelect(planetId)
  }

  return (
    <div className='planetList'>
      {planets.map(({ id, name, src }) => (
        <label key={id}>
          <input
            type='radio'
            name={`player${playerId}PlanetRadio`}
            value={name}
            checked={selectedPlanetId === id}
            onChange={() => handleChange(id)}
          />
          <img src={src} className='planetIcon' alt={name} />
        </label>
      ))}
    </div>
  )
}

export default PlanetList

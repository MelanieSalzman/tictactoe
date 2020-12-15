import React, { useState, useEffect } from 'react'
import TextInput from '../TextInput'
import './styles.scss'
import PlanetsList from '../PlanetsList'

const PlayerFields = ({ playerId, onValuesChange, validate }) => {
  const FORM_TITLE = 'Player ' + playerId
  const [values, setValues] = useState({ playerId, planetId: 0, playerName: '' })

  useEffect(() => {
    onValuesChange(values)
  }, [values, onValuesChange])

  return (
    <div className='form'>
      <h3>{FORM_TITLE}</h3>
      <TextInput
        name={playerId}
        placeholder='Enter your name'
        onChange={e =>
          setValues({
            ...values,
            playerName: e.target.value
          })}
        validate={validate}
      />
      <p>Choose your planet</p>
      <div className='planets'>
        <PlanetsList
          onSelect={id =>
            setValues({
              ...values,
              planetId: id
            })}
          playerId={playerId}
        />
      </div>
    </div>
  )
}

export default PlayerFields

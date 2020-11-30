import React from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'

const FirstPlayerContext = React.createContext([{}, () => { }])

const FirstPlayerContextProvider = props => {
  const [firstPlayer, setFirstPlayer] = useLocalStorage('firstPlayer', {
    playerId: null,
    playerName: '',
    PlanetId: null
  })

  return (
    <FirstPlayerContext.Provider value={[firstPlayer, setFirstPlayer]}>
      {props.children}
    </FirstPlayerContext.Provider>
  )
}

export { FirstPlayerContext, FirstPlayerContextProvider }

import React from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'

const SecondPlayerContext = React.createContext([{}, () => { }])

const SecondPlayerContextProvider = props => {
  const [secondPlayer, setSecondPlayer] = useLocalStorage('secondPlayer', {
    playerId: null,
    playerName: '',
    PlanetId: null
  })

  return (
    <SecondPlayerContext.Provider value={[secondPlayer, setSecondPlayer]}>
      {props.children}
    </SecondPlayerContext.Provider>
  )
}

export { SecondPlayerContext, SecondPlayerContextProvider }

import React from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'

const GameContext = React.createContext([{}, () => { }])

const GameContextProvider = props => {
  const [state, setState] = useLocalStorage('gameStatus', {
    history: [{ squares: Array(9).fill(null) }],
    stepNumber: 0,
    xIsNext: true
  })

  return (
    <GameContext.Provider value={[state, setState]}>
      {props.children}
    </GameContext.Provider>
  )
}

export { GameContext, GameContextProvider }

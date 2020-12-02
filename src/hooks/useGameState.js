import { useState, useEffect } from 'react'

/* global localStorage */
const useGameState = () => {
  const [currentGameState, setCurrentGameState] = useState(null)

  useEffect(() => {
    setCurrentGameState(JSON.parse(localStorage.getItem('currentGameState')))
  }, [])

  return {
    currentGameState,
    setGameState: (gameState) => {
      setCurrentGameState(gameState)
      localStorage.setItem('currentGameState', JSON.stringify(gameState))
    }
  }
}

export default useGameState

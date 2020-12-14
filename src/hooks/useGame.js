import { useState, useEffect } from 'react'

/* global localStorage */

const CLEAN_GAME = {
  history: [{ squares: Array(9).fill(null) }],
  stepNumber: 0,
  xIsNext: true
}

const useGame = () => {
  const [game, setGame] = useState(
    JSON.parse(localStorage.getItem('game')) || CLEAN_GAME
  )

  useEffect(() => {
    localStorage.setItem('game', JSON.stringify(game))
  }, [game])

  return {
    game,
    setGame,
    resetGame: () => localStorage.setItem('game', JSON.stringify(CLEAN_GAME))
  }
}

export default useGame

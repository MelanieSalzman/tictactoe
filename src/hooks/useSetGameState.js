/* global localStorage */
const useSetGameState = () => {
  return {

    setState: (gameState) => {
      localStorage.setItem('currentGameState', JSON.stringify(gameState))
    }
  }
}

export default useSetGameState

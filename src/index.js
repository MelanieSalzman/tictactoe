import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Game from './pages/Game'
import Login from './pages/Login'
import Landing from './pages/Landing'
import { GameContextProvider } from './providers/gameStatus'
import { FirstPlayerContextProvider } from './providers/firstPlayerData'
import { SecondPlayerContextProvider } from './providers/secondPlayerData'
import './styles.scss'

function App () {
  return (
    <div>
      <FirstPlayerContextProvider>
        <SecondPlayerContextProvider>
          <GameContextProvider>
            <Switch>
              <Route path='/game'>
                <Game />
              </Route>
              <Route path='/login'>
                <Login />
              </Route>
              <Route path='/'>
                <Landing />
              </Route>
            </Switch>
          </GameContextProvider>
        </SecondPlayerContextProvider>
      </FirstPlayerContextProvider>
    </div>
  )
}

ReactDOM.render(
  <Router>
    <App />
  </Router>
  ,
  document.getElementById('root')
)

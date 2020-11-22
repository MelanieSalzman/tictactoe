import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Game from './pages/Game'
import Login from './pages/Login'
import PlayersInfoContext, { players } from './providers/playersInfo'
import './styles.scss'

function App () {
<<<<<<< HEAD
  // some comment
=======
>>>>>>> 65dc9f85642853a224f0be20924b4e806061ea02
  return (
    <div>
      <PlayersInfoContext.Provider value={players}>
        <Switch>
          <Route path='/game'>
            <Game />
          </Route>

          <Route path='/'>
            <Login />
          </Route>
        </Switch>
      </PlayersInfoContext.Provider>
    </div>
  )
}

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
)

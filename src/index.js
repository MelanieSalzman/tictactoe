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
import './styles.scss'

function App () {
  return (
    <div>
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

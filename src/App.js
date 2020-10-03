import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import HomePage from './containers/HomePage'
import SearchPage from './containers/SearchPage'
import Header from './components/Header'
import './App.scss'

const history = createBrowserHistory()

function App() {
  return (
    <div className="app">
      <Router history={history}>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/results" component={SearchPage} />
          <Route path="*" to="/" />
        </Switch>
      </Router>
    </div>
  )
}

export default App

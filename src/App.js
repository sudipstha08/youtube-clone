import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import HomePage from './containers/HomePage'
import SearchPage from './containers/SearchPage'
import VideoPlayerPage from './containers/VideoPlayerPage'
import Header from './components/Header'
import { GlobalProvider } from './context/GlobalState'
import './App.scss'

const history = createBrowserHistory()

function App() {
  return (
    <GlobalProvider>
      <div className="app">
        <Router history={history}>
          <Header />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/results" component={SearchPage} />
            <Route exact path="/watch" component={VideoPlayerPage} />
            <Route path="*" to="/" />
          </Switch>
        </Router>
      </div>
    </GlobalProvider>
  )
}

export default App

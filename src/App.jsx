import React from 'react'
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom'

import withMuiTheme from './theme/withMuiTheme'
import Home from './pages/Home'

export class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
      <Switch>
        <Route component={Home} to="/" />
        <Redirect from="*" to="/" />
      </Switch>
      </BrowserRouter>
    )
  }
}

export default withMuiTheme(App, true)

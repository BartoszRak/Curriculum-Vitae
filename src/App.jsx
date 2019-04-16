import React from 'react'
import withMuiTheme from './theme/withMuiTheme'

export class App extends React.Component {
  render() {
    return (
      <div>
        app
      </div>
    )
  }
}

export default withMuiTheme(App, true)

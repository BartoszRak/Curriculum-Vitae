import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import withMuiTheme from './theme/withMuiTheme'
import Layout from './layout'

export const App = () => (
  <BrowserRouter>
    <Layout />
  </BrowserRouter>
)

export default withMuiTheme(App, true)

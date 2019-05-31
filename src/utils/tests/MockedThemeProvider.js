import React from 'react'
import PropTypes from 'prop-types'
import { CssBaseline, MuiThemeProvider, createMuiTheme } from '@material-ui/core'

import theme from '~theme'

const muiTheme = createMuiTheme(theme)

function MockedThemeProvider({ children }) {
  return (
    <MuiThemeProvider theme={muiTheme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  )
}

MockedThemeProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
}

export default MockedThemeProvider

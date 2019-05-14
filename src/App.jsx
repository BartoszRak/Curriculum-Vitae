import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter } from 'react-router-dom'
import { withStyles } from '@material-ui/core'

import withMuiTheme from '~theme/withMuiTheme'
import Layout from './layout'
import Loader from '~components/Loader'
import { usePayloadLoading } from '~hooks'

import style from './App.style'

export function App({ classes }) {
  const { loading } = usePayloadLoading()
  return (
    <BrowserRouter>
      <Loader className={classes.loader} disable={!loading}>
        <Layout />
      </Loader>
    </BrowserRouter>
  )
}

App.propTypes = {
  classes: PropTypes.object,
}

export default withMuiTheme(withStyles(style)(App), true)

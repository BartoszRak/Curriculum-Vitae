import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

import style from './Layout.style'
import Footer from './Footer'

import Home from '../pages/Home'

export const Layout = ({ classes }) => (
  <div className={classes.root}>
    <Switch>
      <Route component={Home} to="/" />
      <Redirect from="*" to="/" />
    </Switch>
    <Footer />
  </div>
)

Layout.propTypes = {
  classes: PropTypes.object,
}

export default withStyles(style)(Layout)

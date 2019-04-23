import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

import Footer from './Footer'
import Sidebar from './Sidebar'
import Greeting from './Greeting'

import Home from '~pages/Home'

import style from './Layout.style'

export const Layout = ({ classes }) => (
  <React.Fragment>
    <div className={classes.root}>
      <Greeting />
      <Switch>
        <Route component={Home} to="/" />
        <Redirect from="*" to="/" />
      </Switch>
      <Footer />
    </div>
  </React.Fragment>
)

Layout.propTypes = {
  classes: PropTypes.object,
}

export default withStyles(style)(Layout)

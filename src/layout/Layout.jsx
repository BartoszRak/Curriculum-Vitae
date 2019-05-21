import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { FormattedMessage } from 'react-intl'

import Footer from './Footer'
import Navigation from './Navigation'
import Greeting from './Greeting'

import Home from '~pages/Home'

import style from './Layout.style'

export const Layout = ({ classes }) => (
  <React.Fragment>
    <Navigation />
    <div className={classes.root}>
      <Greeting />
      <Switch>
        <Route component={Home} to="/" />
        <Redirect from="*" to="/" />
      </Switch>
      <Footer />
    </div>
    <div className={classes.bottomShadow} />
    <div className={classes.information}>
      <FormattedMessage id="layout.information.title" />
    </div>
  </React.Fragment>
)

Layout.propTypes = {
  classes: PropTypes.object,
}

export default withStyles(style)(Layout)

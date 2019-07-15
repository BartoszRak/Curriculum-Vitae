import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'

import Footer from './Footer'
import Navigation from './Navigation'

import Home from '~pages/Home'

import useStyle from './Layout.style'

export function Layout({ classes: overridingClasses }) {
  const classes = { ...useStyle(), ...overridingClasses }
  return (
    <React.Fragment>
      <Navigation />
      <div className={classes.root}>
        <Switch>
          <Route component={Home} to="/" />
          <Redirect from="*" to="/" />
        </Switch>
        <Footer />
      </div>
      <div aria-hidden className={classes.bottomShadow} />
      <aside className={classes.information}>
        <FormattedMessage id="layout.information.title" />
      </aside>
    </React.Fragment>
  )
}

Layout.propTypes = {
  classes: PropTypes.object,
}

export default Layout

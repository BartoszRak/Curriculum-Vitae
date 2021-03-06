import React from 'react'
import { Switch, Route } from 'react-router-dom'
import PropTypes from 'prop-types'
import { AppBar } from '@material-ui/core'

import HomeTopbar from './HomeTopbar'
import MainTopbar from './MainTopbar'

import useStyle from './Navigation.style'

export function Navigation({ classes: overridingClasses }) {
  const classes = { ...useStyle(), ...overridingClasses }

  return (
    <AppBar
      classes={{
        root: classes.root,
      }}
      position="fixed"
    >
      <MainTopbar />
      <Switch>
        <Route component={HomeTopbar} exact path="/" />
      </Switch>
    </AppBar>
  )
}

Navigation.propTypes = {
  classes: PropTypes.object,
}

export default Navigation

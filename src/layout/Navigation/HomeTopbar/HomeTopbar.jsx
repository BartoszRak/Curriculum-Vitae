import React from 'react'
import PropTypes from 'prop-types'
import { Toolbar } from '@material-ui/core'
import { injectIntl } from 'react-intl'

import Menu from './Menu'

import useStyle from './HomeTopbar.style'

export function HomeTopbar({ classes: overridingClasses, intl }) {
  const classes = { ...useStyle(), ...overridingClasses }
  const { formatMessage } = intl

  const routes = [
    {
      elementId: '#commercial',
      name: formatMessage({ id: 'layout.navigation.items.commercial' }),
    },
    {
      elementId: '#projects',
      name: formatMessage({ id: 'layout.navigation.items.projects' }),
    },
    {
      elementId: '#bio',
      name: formatMessage({ id: 'layout.navigation.items.bio' }),
    },
    {
      elementId: '#skills',
      name: formatMessage({ id: 'layout.navigation.items.skills' }),
    },
    {
      elementId: '#workflow',
      name: formatMessage({ id: 'layout.navigation.items.workflow' }),
    },
    {
      elementId: '#hobbies',
      name: formatMessage({ id: 'layout.navigation.items.passions' }),
    },
  ]

  return (
    <Toolbar className={classes.toolbar}>
      <Menu routes={routes} />
    </Toolbar>
  )
}

HomeTopbar.propTypes = {
  classes: PropTypes.object,
  intl: PropTypes.object,
}

export default injectIntl(HomeTopbar)

import React from 'react'
import PropTypes from 'prop-types'
import { Toolbar } from '@material-ui/core'
import { injectIntl } from 'react-intl'

import MobileMenu from './MobileMenu'
import DesktopMenu from './DesktopMenu'

import useStyle from './HomeNavigation.style'

export function HomeNavigation({ classes: overridingClasses, intl }) {
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
      <div>
        <MobileMenu className={classes.mobile} routes={routes} />
        <DesktopMenu className={classes.desktop} routes={routes} />
      </div>
    </Toolbar>
  )
}

HomeNavigation.propTypes = {
  classes: PropTypes.object,
  intl: PropTypes.object,
}

export default injectIntl(HomeNavigation)

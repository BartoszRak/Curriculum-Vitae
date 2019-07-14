import React from 'react'
import PropTypes from 'prop-types'
import { AppBar, Toolbar } from '@material-ui/core'
import { injectIntl } from 'react-intl'

import LanguageSelect from '~components/LanguageSelect'
import DesktopMenu from './DesktopMenu'
import MobileMenu from './MobileMenu'

import useStyle from './Navigation.style'

export function Navigation({ classes: overridingClasses, intl }) {
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
    <AppBar
      classes={{
        root: classes.root,
      }}
      position="fixed"
    >
      <Toolbar className={classes.toolbar}>
        <div>
          <MobileMenu className={classes.mobile} routes={routes} />
          <DesktopMenu className={classes.desktop} routes={routes} />
        </div>
        <div>
          <LanguageSelect />
        </div>
      </Toolbar>
    </AppBar>
  )
}

Navigation.propTypes = {
  classes: PropTypes.object,
  intl: PropTypes.object,
}

export default injectIntl(Navigation)

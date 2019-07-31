import React from 'react'
import PropTypes from 'prop-types'
import { withRouter, matchPath } from 'react-router-dom'
import {
  Toolbar, Typography, useTheme, useMediaQuery,
} from '@material-ui/core'
import { injectIntl } from 'react-intl'

import LanguageSelect from '~components/LanguageSelect'
import ResponsiveMenu from '~components/ResponsiveMenu'

import useStyle from './MainTopbar.style'

export function MainTopbar({ classes: overridingClasses, intl, location }) {
  const classes = { ...useStyle(), ...overridingClasses }
  const { formatMessage } = intl
  const theme = useTheme()
  const matchDimensions = useMediaQuery(theme.breakpoints.down('md'))

  const items = [
    {
      active: Boolean(matchPath('/', {
        exact: true,
        path: location.pathname,
      })),
      name: formatMessage({ id: 'layout.navigation.mainTopbar.items.me' }),
      props: {
        href: '/',
      },
    },
    {
      active: Boolean(matchPath('/offer', {
        path: location.pathname,
      })),
      name: formatMessage({ id: 'layout.navigation.mainTopbar.items.offer' }),
      props: {
        href: '/offer',
      },
    },
  ]

  return (
    <Toolbar className={classes.root}>
      {!matchDimensions && (
        <Typography className={classes.title} variant="h1">
          Bartosz Rak
        </Typography>
      )}
      <ResponsiveMenu className={classes.menu} items={items} />
      <div>
        <LanguageSelect />
      </div>
    </Toolbar>
  )
}

MainTopbar.propTypes = {
  classes: PropTypes.object,
  intl: PropTypes.object,
  location: PropTypes.object,
}

export default withRouter(injectIntl(MainTopbar))

import React from 'react'
import PropTypes from 'prop-types'
import {
  withStyles, AppBar, Toolbar, Button,
} from '@material-ui/core'
import { injectIntl } from 'react-intl'

import LanguageSelect from '~components/LanguageSelect'
import { useScrollTo } from '~hooks'

import style from './Navigation.style'

export function Navigation({ classes, intl }) {
  const { formatMessage } = intl
  const routes = [
    {
      elementId: '#projects',
      name: formatMessage({ id: 'layout.navigation.items.projects' }),
    }, {
      elementId: '#bio',
      name: formatMessage({ id: 'layout.navigation.items.bio' }),
    }, {
      elementId: '#skills',
      name: formatMessage({ id: 'layout.navigation.items.skills' }),
    }, {
      elementId: '#workflow',
      name: formatMessage({ id: 'layout.navigation.items.workflow' }),
    },
  ]
  const { scrollTo } = useScrollTo()

  return (
    <AppBar
      classes={{
        root: classes.root,
      }}
      position="fixed"
    >
      <Toolbar className={classes.toolbar}>
        <div>
        {routes.map(route => (
          <Button
            classes={{
              label: classes.buttonLabel,
              root: classes.button,
            }}
            color="secondary"
            key={route.name}
            onClick={() => scrollTo(route.elementId)}
          >
            {route.name}
          </Button>
        ))}
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

export default injectIntl(withStyles(style)(Navigation))

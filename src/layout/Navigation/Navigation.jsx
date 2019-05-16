import React from 'react'
import PropTypes from 'prop-types'
import {
  withStyles, AppBar, Toolbar, Button,
} from '@material-ui/core'

import LanguageSelect from '~components/LanguageSelect'
import { useScrollTo } from '~hooks'

import style from './Navigation.style'

const routes = [
  {
    elementId: '#projects',
    name: 'Projects',
  },
  {
    elementId: '#bio',
    name: 'About me',
  },
]

export function Navigation({ classes }) {
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
}

export default withStyles(style)(Navigation)

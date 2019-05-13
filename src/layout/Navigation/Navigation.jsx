import React from 'react'
import PropTypes from 'prop-types'
import anime from 'animejs'
import {
  withStyles, AppBar, Toolbar, Button,
} from '@material-ui/core'
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
  function scrollTo(identifier) {
    const scrollElement = window.document.scrollingElement
      || window.document.body
      || window.document.documentElement
    const element = window.document.querySelector(identifier)
    if (!element) return
    const boundingRect = element.getBoundingClientRect()
    anime({
      duration: 500,
      easing: 'easeInOutQuad',
      scrollTop: boundingRect.top,
      targets: scrollElement,
    })
  }

  return (
    <AppBar
      classes={{
        root: classes.root,
      }}
      position="fixed"
    >
      <Toolbar>
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
      </Toolbar>
    </AppBar>
  )
}

Navigation.propTypes = {
  classes: PropTypes.object,
}

export default withStyles(style)(Navigation)

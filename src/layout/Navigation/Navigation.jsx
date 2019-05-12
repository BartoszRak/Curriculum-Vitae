import React from 'react'
import PropTypes from 'prop-types'
import anime from 'animejs';
import { withStyles, AppBar, Toolbar, Button } from '@material-ui/core'
import style from './Navigation.style'

const routes = [
  {
    name: 'Projects',
    elementId: '#projects',
  }, {
    name: 'About me',
    elementId: '#aboutMe',
  },
]

export function Navigation({ classes }) {

  function scrollTo(identifier) {
    const scrollElement = window.document.scrollingElement || window.document.body || window.document.documentElement
    const element = window.document.querySelector(identifier)
    if (!element) return
    const boundingRect = element.getBoundingClientRect()
    anime({
      targets: scrollElement,
      scrollTop: boundingRect.top,
      duration: 500,
      easing: 'easeInOutQuad'
    });
  }

  return (
    <AppBar classes={{
      root: classes.root,
    }} position="fixed">
      <Toolbar>
        {routes.map(route => (
          <Button classes={{
            root: classes.button,
            label: classes.buttonLabel,
          }} onClick={() => scrollTo(route.elementId)} key={route.name}>{route.name}</Button>
        ))}
      </Toolbar>
    </AppBar>
  )
}

Navigation.propTypes = {
  classes: PropTypes.object,
}

export default withStyles(style)(Navigation)

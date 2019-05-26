import React from 'react'
import PropTypes from 'prop-types'
import { withStyles, Button } from '@material-ui/core'

import { useScrollTo } from '~hooks'

import style from './DesktopMenu.style'

export function DesktopMenu({ classes, routes }) {
  const { scrollTo } = useScrollTo()
  return (
    <React.Fragment>
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
    </React.Fragment>
  )
}

DesktopMenu.propTypes = {
  classes: PropTypes.object,
  routes: PropTypes.arrayOf(PropTypes.shape({
    elementId: PropTypes.string,
    name: PropTypes.string,
  })).isRequired,
}

export default withStyles(style)(DesktopMenu)

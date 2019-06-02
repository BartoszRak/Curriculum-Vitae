import React from 'react'
import PropTypes from 'prop-types'
import { Button } from '@material-ui/core'

import { useScrollTo } from '~hooks'

import useStyle from './DesktopMenu.style'

export function DesktopMenu({ classes: overridingClasses, className, routes }) {
  const classes = { ...useStyle(), ...overridingClasses }
  const { scrollTo } = useScrollTo()
  return (
    <div aria-label="Navigate to" className={className} role="navigation">
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
  )
}

DesktopMenu.propTypes = {
  classes: PropTypes.object,
  className: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.shape({
    elementId: PropTypes.string,
    name: PropTypes.string,
  })).isRequired,
}

export default DesktopMenu

import React, { useState } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import {
  Button, IconButton, useTheme, useMediaQuery
} from '@material-ui/core'
import MenuOpenIcon from '@material-ui/icons/Menu'
import MenuCloseIcon from '@material-ui/icons/Close'

import { useScrollTo } from '~hooks'

import useStyle from './Menu.style'

export function Menu({ classes: overridingClasses, className, routes }) {
  const classes = { ...useStyle(), ...overridingClasses }
  const { scrollTo } = useScrollTo()
  const [toggle, setToggle] = useState(false)
  const theme = useTheme()
  const matchDimensions = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <div className={classes.root}>
      {matchDimensions && (
        <div className={classes.actions}>
          <IconButton
            data-testid="mobile-menu-open-icon"
            onClick={() => {
              setToggle(!toggle)
            }}
          >
            {!toggle ? (
              <MenuOpenIcon color="secondary" />
            ) : (
              <MenuCloseIcon color="secondary" />
            )}
          </IconButton>
        </div>
      )}
      {(!matchDimensions || toggle) && (
        <div
          aria-label="Navigate to"
          className={classNames(className, classes.buttonsHolder)}
          role="navigation"
        >
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
      )}
    </div>
  )
}

Menu.propTypes = {
  classes: PropTypes.object,
  className: PropTypes.string,
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      elementId: PropTypes.string,
      name: PropTypes.string,
    })
  ).isRequired,
}

export default Menu

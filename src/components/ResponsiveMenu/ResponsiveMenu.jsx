import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import {
  IconButton, useTheme, useMediaQuery,
} from '@material-ui/core'
import MenuOpenIcon from '@material-ui/icons/Menu'
import MenuCloseIcon from '@material-ui/icons/Close'

import Button from '~components/Button'

import useStyle from './ResponsiveMenu.style'

export function ResponsiveMenu({ classes: overridingClasses, items, className }) {
  const classes = { ...useStyle(), ...overridingClasses }
  const [toggle, setToggle] = useState(false)
  const theme = useTheme()
  const matchDimensions = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <div className={classNames(classes.root, className)}>
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
          className={classes.buttonsHolder}
          role="navigation"
        >
          {items.map(route => (
            <Button
              classes={{
                label: classes.buttonLabel,
                root: classes.button,
              }}
              color="secondary"
              key={route.name}
              {...route.props}
            >
              {route.name}
            </Button>
          ))}
        </div>
      )}
    </div>
  )
}

ResponsiveMenu.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      elementId: PropTypes.string,
      name: PropTypes.string,
    })
  ).isRequired,
}

export default ResponsiveMenu

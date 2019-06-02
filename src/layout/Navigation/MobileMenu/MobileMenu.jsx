import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
  IconButton,
  Modal,
  MenuList,
  MenuItem,
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

import { useScrollTo } from '~hooks'

import useStyle from './MobileMenu.style'

export function MobileMenu({ classes: overridingClasses, className, routes }) {
  const classes = { ...useStyle(), ...overridingClasses }
  const [toggle, setToggle] = useState(false)
  const { scrollTo } = useScrollTo()
  return (
    <div className={className}>
      <IconButton
        data-testid="mobile-menu-open-icon"
        onClick={() => {
          setToggle(!toggle)
        }}
      >
        <MenuIcon color="secondary" />
      </IconButton>
      <Modal
        BackdropProps={{
          classes: {
            root: classes.backdrop,
          }
        }}
        className={classes.dialog}
        data-testid="mobile-menu-modal"
        disableAutoFocus
        onBackdropClick={() => setToggle(!toggle)}
        open={toggle}
      >
        <MenuList className={classes.list}>
          {routes.map(route => (
            <MenuItem
              className={classes.item}
              key={route.name}
              onClick={() => {
                setToggle(!toggle)
                scrollTo(route.elementId)
              }}
            >
              {route.name}
            </MenuItem>
          ))}
        </MenuList>
      </Modal>
    </div>
  )
}

MobileMenu.propTypes = {
  classes: PropTypes.object,
  className: PropTypes.string,
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      elementId: PropTypes.string,
      name: PropTypes.string,
    })
  ).isRequired,
}

export default MobileMenu

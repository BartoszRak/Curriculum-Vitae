import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
  withStyles,
  IconButton,
  Dialog,
  MenuList,
  MenuItem,
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

import { useScrollTo } from '~hooks'

import style from './MobileMenu.style'

export function MobileMenu({ classes, routes }) {
  const [toggle, setToggle] = useState(false)
  const { scrollTo } = useScrollTo()
  return (
    <React.Fragment>
      <IconButton
        onClick={() => {
          setToggle(!toggle)
        }}
      >
        <MenuIcon color="secondary" />
      </IconButton>
      <Dialog
        className={classes.dialog}
        classes={{
          modal: classes.dialogModal,
          paper: classes.dialogPaper,
        }}
        onBackdropClick={() => setToggle(!toggle)}
        open={toggle}
      >
        <MenuList className={classes.list}>
          {routes.map(route => (
            <MenuItem
              classes={{
                label: classes.buttonLabel,
                root: classes.button,
              }}
              color="secondary"
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
      </Dialog>
    </React.Fragment>
  )
}

MobileMenu.propTypes = {
  classes: PropTypes.object,
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      elementId: PropTypes.string,
      name: PropTypes.string,
    })
  ).isRequired,
}

export default withStyles(style)(MobileMenu)

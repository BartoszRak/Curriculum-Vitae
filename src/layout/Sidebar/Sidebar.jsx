import React from 'react'
import { Drawer, withStyles, Paper } from '@material-ui/core'
import style from './Sidebar.style'

export function Sidebar({ classes }) {
  return (
    <Drawer anchor="left" open variant="temporary">
      Hejka
    </Drawer>
  )
}

export default withStyles(style)(Sidebar)

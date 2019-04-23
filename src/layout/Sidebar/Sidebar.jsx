import React from 'react'
import PropTypes from 'prop-types'
import { withStyles, Paper } from '@material-ui/core'
import style from './Sidebar.style'

export function Sidebar({ classes }) {
  return (
    <Paper className={classes.root} square>
      Sidebar here
    </Paper>
  )
}

Sidebar.propTypes = {
  classes: PropTypes.object,
}

export default withStyles(style)(Sidebar)

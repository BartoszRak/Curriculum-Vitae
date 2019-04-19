import React from 'react'
import { withStyles, Typography } from '@material-ui/core/'
import PropTypes from 'prop-types'

import style from './Footer.style'

export const Footer = ({ classes }) => (
  <div className={classes.root}>
    <Typography className={classes.text} variant="body2">
      &copy; All copyrights reserved 2019-
      {new Date().getFullYear()}
    </Typography>
  </div>
)

Footer.propTypes = {
  classes: PropTypes.object,
}

export default withStyles(style)(Footer)

import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

import style from './Footer.style'

export const Footer = ({ classes }) => (
  <div className={classes.root}>
    Footer
  </div>
)

Footer.propTypes = {
  classes: PropTypes.object,
}

export default withStyles(style)(Footer)

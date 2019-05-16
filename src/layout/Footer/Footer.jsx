import React from 'react'
import { FormattedMessage } from 'react-intl'
import { withStyles, Typography } from '@material-ui/core/'
import PropTypes from 'prop-types'

import style from './Footer.style'

export const Footer = ({ classes }) => (
  <div className={classes.root}>
    <Typography className={classes.text} variant="body2">
      <FormattedMessage id="layout.footer.copyright" values={{ date: new Date().getFullYear() }} />
    </Typography>
  </div>
)

Footer.propTypes = {
  classes: PropTypes.object,
}

export default withStyles(style)(Footer)

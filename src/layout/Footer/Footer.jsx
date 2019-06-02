import React from 'react'
import { FormattedMessage } from 'react-intl'
import { Typography } from '@material-ui/core/'
import PropTypes from 'prop-types'

import useStyle from './Footer.style'

export function Footer({ classes: overridingClasses }) {
  const classes = { ...useStyle(), ...overridingClasses }
  return (
    <footer className={classes.root}>
      <Typography className={classes.text} variant="body2">
        <FormattedMessage id="layout.footer.copyright" values={{ date: new Date().getFullYear() }} />
      </Typography>
    </footer>
  )
}

Footer.propTypes = {
  classes: PropTypes.object,
}

export default Footer

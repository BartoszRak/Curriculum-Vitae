import React from 'react'
import { FormattedMessage } from 'react-intl'
import { Typography } from '@material-ui/core/'
import PropTypes from 'prop-types'

import TileArrow from '~assets/icons/TileArrow'

import useStyle from './Footer.style'

export function Footer({ classes: overridingClasses }) {
  const classes = { ...useStyle(), ...overridingClasses }
  return (
    <React.Fragment>
      <TileArrow className={classes.tileArrow} />
      <footer className={classes.root}>
      <Typography className={classes.text} variant="body2">
        <FormattedMessage id="layout.footer.copyright" values={{ date: new Date().getFullYear() }} />
      </Typography>
      </footer>
    </React.Fragment>
  )
}

Footer.propTypes = {
  classes: PropTypes.object,
}

export default Footer

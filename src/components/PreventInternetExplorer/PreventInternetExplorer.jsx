import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { withStyles, Typography, Button } from '@material-ui/core'

import style from './PreventInternetExplorer.style'

export function PreventInternetExplorer({ classes, children }) {
  const { userAgent } = window.navigator
  const msie = userAgent.indexOf('MSIE ')

  const [isExplorer, setInternetExplorer] = useState(
    Boolean(msie > 0 || userAgent.match(/Trident.*rv:11\./))
  )
  return isExplorer ? (
    <div className={classes.root}>
      <Typography variant="h1">Oops!</Typography>
      <Typography variant="h2">Internet explorer detected!</Typography>
      <Typography variant="body1">
        Internet Explorer web browser in any version is not supported. Not because I
        am lazy devloper (because I am not) - it is not supported due to security
        reasons. Internet Explorer is outdated, old, based on old/unsecure
        technologies and there is not recommended to use it.
      </Typography>
      <Button
        className={classes.button}
        onClick={() => setInternetExplorer(false)}
        variant="contained"
      >
        Go unsecure
      </Button>
      <Typography variant="body2">
        * You see this warning because whole website or component should not be used
        on Internet Explorer.
      </Typography>
      <Typography variant="body2">
        ** Going unsecure may be dangerous, also component or website can behave
        improperly.
      </Typography>
    </div>
  ) : (
    children
  )
}

PreventInternetExplorer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  classes: PropTypes.object,
}

PreventInternetExplorer.defaultProps = {
  children: null,
}

export default withStyles(style)(PreventInternetExplorer)

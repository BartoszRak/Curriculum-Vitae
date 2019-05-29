import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { withStyles, Typography, Button } from '@material-ui/core'
import { FormattedMessage } from 'react-intl'

import style from './PreventInternetExplorer.style'

export function PreventInternetExplorer({ classes, children }) {
  const { userAgent } = window.navigator
  const msie = userAgent.indexOf('MSIE ')

  const [isExplorer, setInternetExplorer] = useState(
    Boolean(msie > 0 || userAgent.match(/Trident.*rv:11\./))
  )
  return isExplorer ? (
    <div className={classes.root} role="alert">
      <Typography variant="h1"><FormattedMessage id="components.preventInternetExplorer.title" /></Typography>
      <Typography variant="h2"><FormattedMessage id="components.preventInternetExplorer.subtitle" /></Typography>
      <Typography variant="body1">
      <FormattedMessage id="components.preventInternetExplorer.description" />
      </Typography>
      <Button
        className={classes.button}
        onClick={() => setInternetExplorer(false)}
        variant="contained"
      >
        <FormattedMessage id="components.preventInternetExplorer.button" />
      </Button>
      <Typography variant="body2">
        <FormattedMessage id="components.preventInternetExplorer.legend.0" />
      </Typography>
      <Typography variant="body2">
        <FormattedMessage id="components.preventInternetExplorer.legend.1" />
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

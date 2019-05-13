import React from 'react'
import PropTypes from 'prop-types'
import { withStyles, Typography, Divider } from '@material-ui/core'

import styles from './Bio.style'

export function Bio({ classes }) {
  return (
    <div className={classes.root} id="bio">
      <Typography className={classes.title} variant="h1">
        Wait, wait... but who Am I?
      </Typography>
      <Typography className={classes.subtitle} variant="h2">
        Unbrainless human
      </Typography>
      <Divider className={classes.divider} />
      <Typography variant="body1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Typography>
      <Divider className={classes.divider} />
      <Typography variant="body1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </Typography>
    </div>
  )
}

Bio.propTypes = {
  classes: PropTypes.object,
}

export default withStyles(styles)(Bio)

import React from 'react'
import { withStyles, Typography } from '@material-ui/core'
import PropTypes from 'prop-types'

import backgroundURL from '~assets/images/landscape-mountains-nature-dark.jpg'
import style from './Greeting.style'

export function Greeting({ classes }) {
  return (
    <div
      className={classes.root}
      style={{
        backgroundImage: `url(${backgroundURL})`,
      }}
    >
      <Typography variant="h1">
      Bartosz Rak
      </Typography>
      <Typography variant="h2">
      Front-end developer
      </Typography>
    </div>
  )
}

Greeting.propTypes = {
  classes: PropTypes.object,
}

export default withStyles(style)(Greeting)

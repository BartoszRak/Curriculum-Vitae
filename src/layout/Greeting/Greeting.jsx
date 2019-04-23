import React from 'react'
import { withStyles } from '@material-ui/core'
import PropTypes from 'prop-types'

import backgroundURL from '~assets/images/landscape-mountains-nature.jpg'
import style from './Greeting.style'

export function Greeting({ classes }) {
  return (
    <div
      className={classes.root}
      style={{
        backgroundImage: `url(${backgroundURL})`,
      }}
    >
      Hello
    </div>
  )
}

Greeting.propTypes = {
  classes: PropTypes.object,
}

export default withStyles(style)(Greeting)

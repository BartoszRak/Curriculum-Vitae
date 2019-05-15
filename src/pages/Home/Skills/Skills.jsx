import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'

import style from './Skills.style'

export function Skills({ classes }) {
  return (
    <div className={classes.root} id="skills">
      skills
    </div>
  )
}

Skills.propTypes = {
  classes: PropTypes.object,
}

export default withStyles(style)(Skills)
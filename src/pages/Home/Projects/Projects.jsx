import React from 'react'
import PropTypes from 'prop-types'
import { withStyles, Typography } from '@material-ui/core'

import ProjectsList from './ProjectsList'

import styles from './Projects.style'

export function Projects({ classes }) {
  return (
    <div className={classes.root} id="projects">
      <Typography className={classes.title} color="secondary" variant="h1">
        What have I created? 😎
      </Typography>
      <ProjectsList />
    </div>
  )
}

Projects.propTypes = {
  classes: PropTypes.object,
}

export default withStyles(styles)(Projects)

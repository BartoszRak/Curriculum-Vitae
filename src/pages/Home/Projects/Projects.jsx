import React from 'react'
import PropTypes from 'prop-types'
import { withStyles, Typography } from '@material-ui/core'

import ProjectsList from './ProjectsList'

import styles from './Projects.style'
import technologiesMap from './TechnologiesMap.json'

const projects = [
  {
    description:
      'Carefully designed react boilerplate repositorium that gives you fast and smooth start! ',
    name: 'React Awesome Boilerplate',
    tags: [technologiesMap.react, technologiesMap.redux, technologiesMap.rematch],
    url: 'https://github.com/BartoszRak/React-Awesome-Boilerplate',
  },
  {
    description: 'Matrices computing library.',
    name: 'Mx',
    tags: [technologiesMap.typescript],
    url: 'https://github.com/BartoszRak/Mx',
  },
]

export function Projects({ classes }) {
  return (
    <div className={classes.root} id="projects">
      <Typography className={classes.title} color="secondary" variant="h1">
        What have I created?
        <span aria-hidden className={classes.emoji}>😎</span>
      </Typography>
      <ProjectsList data={projects} />
    </div>
  )
}

Projects.propTypes = {
  classes: PropTypes.object,
}

export default withStyles(styles)(Projects)

import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'

import ProjectTile from './ProjectTile'

import style from './ProjectsList.style'

import ForestImage from '~assets/images/projects/forest-sunny-green.jpg'
import CoastImage from '~assets/images/projects/coast-sunny.jpg'

const projects = [
  {
    description:
      'Carefully designed react boilerplate repositorium that gives you fast and smooth start! ',
    image: ForestImage,
    name: 'React Awesome Boilerplate',
    url: 'https://github.com/BartoszRak/React-Awesome-Boilerplate',
  },
  {
    description: 'Matrices computing library.',
    image: CoastImage,
    name: 'Mx',
    url: 'https://github.com/BartoszRak/Mx',
  },
]

export function ProjectsList({ classes }) {
  return (
    <div className={classes.root}>
      {projects.map(project => {
        const {
          description, name, url, image,
        } = project
        return (
          <div className={classes.cardHolder} key={name}>
            <ProjectTile
              description={description}
              image={image}
              name={name}
              url={url}
            />
          </div>
        )
      })}
    </div>
  )
}

ProjectsList.propTypes = {
  classes: PropTypes.object,
}

export default withStyles(style)(ProjectsList)

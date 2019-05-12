import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'

import ProjectTile from './ProjectTile'

import style from './ProjectsList.style'

import ForestImage from '../../../assets/images/projects/forest-sunny-green.jpg'
import CoastImage from '../../../assets/images/projects/coast-sunny.jpg'

export function ProjectsList({ classes }) {
  const projects = [
    {
      image: ForestImage,
      name: 'React Awesome Boilerplate',
      description: 'Carefully designed react boilerplate repositorium that gives you fast and smooth start!',
      url: 'https://github.com/BartoszRak/React-Awesome-Boilerplate',
    }, {
      image: CoastImage,
      name: 'Mx',
      description: 'Matrices computing library.',
      url: 'https://github.com/BartoszRak/Mx',
    }, 
  ]

  return (
    <div className={classes.root}>
      {projects.map(project => {
        const { description, name, url, image } = project
        return (
          <div className={classes.cardHolder} key={name}>
            <ProjectTile
              image={image}
              name={name}
              description={description}
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

import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'

import ProjectTile from './ProjectTile'

import style from './ProjectsList.style'

const projects = [
  {
    description:
      'Carefully designed react boilerplate repositorium that gives you fast and smooth start! ',
    name: 'React Awesome Boilerplate',
    url: 'https://github.com/BartoszRak/React-Awesome-Boilerplate',
    tags: ['React', 'Rematch', 'Redux'],
  },
  {
    description: 'Matrices computing library.',
    name: 'Mx',
    url: 'https://github.com/BartoszRak/Mx',
    tags: ['Typescript'],
  },
]

export function ProjectsList({ classes }) {
  return (
    <div className={classes.root}>
      {projects.map(project => {
        const {
          description, name, url, tags,
        } = project
        return (
          <ProjectTile
            description={description}
            key={name}
            name={name}
            tags={tags}
            url={url}
          />
        )
      })}
    </div>
  )
}

ProjectsList.propTypes = {
  classes: PropTypes.object,
}

export default withStyles(style)(ProjectsList)

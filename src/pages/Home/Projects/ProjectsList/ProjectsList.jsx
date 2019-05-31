import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'

import ProjectTile from './ProjectTile'

import style from './ProjectsList.style'

export function ProjectsList({ classes, data }) {
  return (
    <div className={classes.root}>
      {data.map(project => {
        return (
          <ProjectTile
            key={project.title}
            project={project}
          />
        )
      })}
    </div>
  )
}

ProjectsList.propTypes = {
  classes: PropTypes.object,
  data: PropTypes.arrayOf(PropTypes.shape({
    description: PropTypes.string,
    isFavorite: PropTypes.bool,
    tags: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        url: PropTypes.string,
      })
    ),
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  })),
}

export default withStyles(style)(ProjectsList)

import React from 'react'
import PropTypes from 'prop-types'

import ProjectTile from './ProjectTile'

import useStyle from './ProjectsList.style'

export function ProjectsList({ classes: overridingClasses, data }) {
  const classes = { ...useStyle(), ...overridingClasses }
  return (
    <div className={classes.root}>
      {data.map(project => (
        <ProjectTile key={project.title} {...project} />
      ))}
    </div>
  )
}

ProjectsList.propTypes = {
  classes: PropTypes.object,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string,
      isFavorite: PropTypes.bool,
      tags: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string,
          url: PropTypes.string,
        })
      ),
      title: PropTypes.string.isRequired,
      url: PropTypes.string,
      warning: PropTypes.string,
    })
  ),
}

export default ProjectsList

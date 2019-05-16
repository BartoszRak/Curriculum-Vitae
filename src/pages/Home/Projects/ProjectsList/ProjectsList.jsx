import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'

import ProjectTile from './ProjectTile'

import style from './ProjectsList.style'

export function ProjectsList({ classes, data }) {
  return (
    <div className={classes.root}>
      {data.map(project => {
        const {
          description, title, url, tags,
        } = project
        return (
          <ProjectTile
            description={description}
            key={title}
            tags={tags}
            title={title}
            url={url}
          />
        )
      })}
    </div>
  )
}

ProjectsList.propTypes = {
  classes: PropTypes.object,
  data: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    url: PropTypes.string,
  }))
}

export default withStyles(style)(ProjectsList)

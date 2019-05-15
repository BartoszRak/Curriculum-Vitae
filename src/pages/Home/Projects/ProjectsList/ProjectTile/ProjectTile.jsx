import React from 'react'
import PropTypes from 'prop-types'
import { withStyles, Paper, Typography } from '@material-ui/core'

import style from './ProjectTile.style'

export function ProjectTile({
  classes, description, name, url, tags,
}) {
  return (
    <a className={classes.root} href={url} rel="noopener noreferrer" target="_blank">
      <Paper
        classes={{
          root: classes.paper,
        }}
      >
        <Typography className={classes.title} variant="h1">
          {name}
        </Typography>
        <Typography className={classes.description} variant="body1">
          {description}
        </Typography>
        <div className={classes.tags}>
          {tags.map(tag => (
            <Typography className={classes.tag} key={tag.name} variant="h6">{tag.name}</Typography>
          ))}
        </div>
      </Paper>
    </a>
  )
}

ProjectTile.propTypes = {
  classes: PropTypes.object,
  description: PropTypes.string,
  name: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    url: PropTypes.string,
  })),
  url: PropTypes.string.isRequired,
}

ProjectTile.defaultProps = {
  description: '',
  tags: [],
}

export default withStyles(style)(ProjectTile)

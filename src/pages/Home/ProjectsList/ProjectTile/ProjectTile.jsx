import React from 'react'
import PropTypes from 'prop-types'
import { withStyles, Paper, Typography } from '@material-ui/core'

import style from './ProjectTile.style'

export function ProjectTile({
  classes,
  description,
  name,
  url,
  image,
}) {
  return (
    <a href={url} className={classes.linkWrapper} target="_blank">
      <Paper className={classes.root}>
        <div
          className={classes.background}
          style={{
            backgroundImage: `url(${image})`,
          }}
        />
        <div className={classes.contentWrapper}>
          <Typography className={classes.title} variant="h1">
            {name}
          </Typography>
          <Typography className={classes.description} variant="body1">
            {description}
          </Typography>
        </div>
      </Paper>
    </a>
  )
}

ProjectTile.propTypes = {
  classes: PropTypes.object,
  description: PropTypes.string,
  image: PropTypes.string,
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}

ProjectTile.defaultProps = {
  description: '',
}

export default withStyles(style)(ProjectTile)

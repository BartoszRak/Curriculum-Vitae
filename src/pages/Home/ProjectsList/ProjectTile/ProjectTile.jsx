import React from 'react'
import PropTypes from 'prop-types'
import { withStyles, Paper, Typography } from '@material-ui/core'

import style from './ProjectTile.style'

export function ProjectTile({
  classes,
  name,
  url,
  image,
}) {
  return (
    <a href={url}>
      <Paper className={classes.root}>
        <div
          className={classes.background}
          style={{
            backgroundImage: `url(${image})`,
          }}
        />
        <Typography className={classes.title} variant="h1">
          {name}
        </Typography>
      </Paper>
    </a>
  )
}

ProjectTile.propTypes = {
  classes: PropTypes.object,
  image: PropTypes.string,
  name: PropTypes.string,
  url: PropTypes.string,
}

export default withStyles(style)(ProjectTile)

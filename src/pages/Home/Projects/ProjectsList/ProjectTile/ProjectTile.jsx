import React from 'react'
import PropTypes from 'prop-types'
import {
  withStyles,
  Typography,
  Card,
  CardActionArea,
  CardContent,
} from '@material-ui/core'

import style from './ProjectTile.style'

export function ProjectTile({ classes, description, title, url, tags }) {
  return (
    <a
      aria-label="Open github repository of project"
      className={classes.root}
      href={url}
      rel="noopener noreferrer"
      target="_blank"
    >
      <Card>
        <CardActionArea classes={{ focusHighlight: classes.focus }}>
          <CardContent>
            <Typography className={classes.title} variant="h4">
              {title}
            </Typography>
            <Typography className={classes.description} variant="body1">
              {description}
            </Typography>
            <div className={classes.tags}>
              {tags.map(tag => (
                <Typography className={classes.tag} key={tag.name} variant="h6">
                  {tag.name}
                </Typography>
              ))}
            </div>
          </CardContent>
        </CardActionArea>
      </Card>
    </a>
  )
}

ProjectTile.propTypes = {
  classes: PropTypes.object,
  description: PropTypes.string,
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      url: PropTypes.string,
    })
  ),
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}

ProjectTile.defaultProps = {
  description: '',
  tags: [],
}

export default withStyles(style)(ProjectTile)

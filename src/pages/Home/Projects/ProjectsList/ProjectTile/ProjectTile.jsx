import React, { useState } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import {
  withStyles,
  Typography,
  Card,
  CardContent,
  CardActions,
  IconButton,
  Button,
} from '@material-ui/core'
import { Favorite } from '@material-ui/icons'

import { useFavoriteProjectsStorage } from '~hooks'

import style from './ProjectTile.style'

export function ProjectTile({
  classes,
  project: { description, title, url, tags = [], isFavorite },
}) {
  const { toggleProject } = useFavoriteProjectsStorage()
  const [favorite, setFavorite] = useState(isFavorite)

  return (
    <Card className={classes.root}>
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
      <CardActions
        classes={{
          root: classNames(classes.actions, {
            [classes.favoriteActions]: favorite,
          }),
        }}
      >
        <div>
          <a
            aria-label="Open github repository of project"
            className={classes.href}
            href={url}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Button className={classes.hrefButton} color="primary">Details</Button>
          </a>
        </div>
        <IconButton
          className={classNames({ [classes.favoriteIconButton]: favorite })}
          onClick={() => {
            setFavorite(!favorite)
            toggleProject(url)
          }}
        >
          <Favorite className={classes.icon} />
        </IconButton>
      </CardActions>
    </Card>
  )
}

ProjectTile.propTypes = {
  classes: PropTypes.object,
  project: PropTypes.shape({
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
  }),
}

export default withStyles(style)(ProjectTile)

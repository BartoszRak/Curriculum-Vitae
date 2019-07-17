import React, { useState } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import {
  Typography,
  Card,
  CardContent,
  CardActions,
  IconButton,
  Button,
} from '@material-ui/core'
import { FormattedMessage } from 'react-intl'
import { Favorite } from '@material-ui/icons'

import { useFavoriteProjectsStorage } from '~hooks'

import useStyle from './ProjectTile.style'

export function ProjectTile({
  classes: overridingClasses,
  description,
  title,
  url,
  tags = [],
  isFavorite,
  warning,
}) {
  const classes = { ...useStyle(), ...overridingClasses }
  const { toggleProject } = useFavoriteProjectsStorage()
  const [favorite, setFavorite] = useState(isFavorite)

  return (
    <div className={classes.wrapper}>
      <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.title} variant="h1">
            {title}
          </Typography>
          <Typography className={classes.description} variant="body1">
            {description}
          </Typography>
          <div className={classes.tags}>
            {tags.map(tag => (
              <Typography className={classes.tag} key={tag.name} variant="h2">
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
            {Boolean(url) && (
              <a
                aria-label="Open github repository of project"
                className={classes.href}
                href={url}
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button className={classes.hrefButton} color="primary">
                  Details
                </Button>
              </a>
            )}
          </div>
          {Boolean(isFavorite !== undefined) && (
            <IconButton
              className={classNames({ [classes.favoriteIconButton]: favorite })}
              data-testid="project-tile-icon-button"
              onClick={() => {
                setFavorite(!favorite)
                toggleProject(url)
              }}
            >
              <Favorite className={classes.icon} />
            </IconButton>
          )}
          {Boolean(warning) && (
            <div className={classes.warning}>
              <Typography className={classes.warningTitle} variant="h3">
                <FormattedMessage id="components.projectsList.projectTile.warningTitle" />
              </Typography>
              <Typography className={classes.warningDescription} variant="body1">
                {warning}
              </Typography>
            </div>
          )}
        </CardActions>
      </Card>
    </div>
  )
}

ProjectTile.propTypes = {
  classes: PropTypes.object,
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
}

export default ProjectTile

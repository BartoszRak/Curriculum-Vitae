import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import { withStyles, Typography } from '@material-ui/core'
import { injectIntl, FormattedMessage } from 'react-intl'

import ProjectsList from './ProjectsList'
import { useFavoriteProjectsStorage } from '~hooks'

import styles from './Projects.style'
import technologiesMap from './TechnologiesMap.json'

export function Projects({ classes, intl }) {
  const { formatMessage } = intl
  const { getProjects } = useFavoriteProjectsStorage()
  const favoriteProjects = getProjects() || []

  const projects = useMemo(() => {
    return [
      {
        description: formatMessage({
          id: 'pages.home.projects.projects.insectifyApi.description',
        }),
        tags: [
          technologiesMap.nestjs,
          technologiesMap.express,
          technologiesMap.firebase,
        ],
        title: formatMessage({
          id: 'pages.home.projects.projects.insectifyApi.title',
        }),
        url: 'https://github.com/BartoszRak/Insectify-api',
      },
      {
        description: formatMessage({
          id: 'pages.home.projects.projects.reactAwesomeBoilerplate.description',
        }),
        tags: [
          technologiesMap.react,
          technologiesMap.redux,
          technologiesMap.rematch,
        ],
        title: formatMessage({
          id: 'pages.home.projects.projects.reactAwesomeBoilerplate.title',
        }),
        url: 'https://github.com/BartoszRak/React-Awesome-Boilerplate',
      },
      {
        description: formatMessage({
          id: 'pages.home.projects.projects.mx.description',
        }),
        tags: [technologiesMap.typescript],
        title: formatMessage({ id: 'pages.home.projects.projects.mx.title' }),
        url: 'https://github.com/BartoszRak/Mx',
      },
    ]
      .map(rawProject => ({
        ...rawProject,
        isFavorite: Boolean(
          favoriteProjects.findIndex(project => project === rawProject.url) !== -1
        ),
      }))
      .sort(a => {
        if (a.isFavorite) return -1
        return 1
      })
  }, [favoriteProjects])

  return (
    <div className={classes.root} id="projects">
      <Typography className={classes.title} color="secondary" variant="h1">
        <FormattedMessage id="pages.home.projects.title" />
        <span aria-hidden className={classes.emoji}>
          {' '}
          😎
        </span>
      </Typography>
      <ProjectsList data={projects} />
    </div>
  )
}

Projects.propTypes = {
  classes: PropTypes.object,
  intl: PropTypes.object,
}

export default injectIntl(withStyles(styles)(Projects))

import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import { Typography, Container } from '@material-ui/core'
import { injectIntl, FormattedMessage } from 'react-intl'

import ProjectsList from '~components/ProjectsList'
import { useFavoriteProjectsStorage } from '~hooks'

import useStyle from './Projects.style'
import technologiesMap from '~services/Technologies/TechnologiesMap.json'

export function Projects({ classes: overridingClasses, intl }) {
  const classes = { ...useStyle(), ...overridingClasses }
  const { formatMessage } = intl
  const { getProjects } = useFavoriteProjectsStorage()
  const favoriteProjects = getProjects() || []

  const projectsArray = [
    {
      description: formatMessage({
        id: 'pages.home.projects.projects.onlineVisitCard.description',
      }),
      tags: [
        technologiesMap.react,
        technologiesMap.materialUi,
        technologiesMap.reactIntl,
      ],
      title: formatMessage({
        id: 'pages.home.projects.projects.onlineVisitCard.title',
      }),
      url: 'https://github.com/BartoszRak/Curriculum-Vitae',
      warning: '',
    },
    {
      description: formatMessage({
        id: 'pages.home.projects.projects.insectifyApi.description',
      }),
      tags: [
        technologiesMap.nestjs,
        technologiesMap.express,
        technologiesMap.firebase,
        technologiesMap.graphql,
      ],
      title: formatMessage({
        id: 'pages.home.projects.projects.insectifyApi.title',
      }),
      url: 'https://github.com/BartoszRak/Insectify-api',
      warning: '',
    },
    {
      description: formatMessage({
        id: 'pages.home.projects.projects.reactAwesomeBoilerplate.description',
      }),
      tags: [technologiesMap.react, technologiesMap.redux, technologiesMap.rematch],
      title: formatMessage({
        id: 'pages.home.projects.projects.reactAwesomeBoilerplate.title',
      }),
      url: 'https://github.com/BartoszRak/React-Awesome-Boilerplate',
      warning: formatMessage({
        id: 'pages.home.projects.projects.reactAwesomeBoilerplate.warning',
      }),
    },
    {
      description: formatMessage({
        id: 'pages.home.projects.projects.mx.description',
      }),
      tags: [technologiesMap.typescript],
      title: formatMessage({ id: 'pages.home.projects.projects.mx.title' }),
      url: 'https://github.com/BartoszRak/Mx',
      warning: '',
    },
  ]

  const projects = useMemo(
    () => projectsArray
      .map(rawProject => ({
        ...rawProject,
        isFavorite: Boolean(
          favoriteProjects.findIndex(project => project === rawProject.url) !== -1
        ),
      }))
      .sort(a => {
        if (a.isFavorite) return -1
        return 1
      }),
    [favoriteProjects, projectsArray]
  )

  return (
    <section className={classes.section}>
      <Container classes={{ root: classes.root }} id="projects">
        <Typography className={classes.title} color="secondary" variant="h1">
          <FormattedMessage id="pages.home.projects.title" />
          <span aria-hidden className={classes.emoji}>
            {' '}
            😎
          </span>
        </Typography>
        <Typography className={classes.subtitle} color="secondary" variant="h2">
          <FormattedMessage id="pages.home.projects.subtitle" />
        </Typography>
        <ProjectsList data={projects} />
      </Container>
    </section>
  )
}

Projects.propTypes = {
  classes: PropTypes.object,
  intl: PropTypes.object,
}

export default injectIntl(Projects)

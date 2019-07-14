import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Typography, Container } from '@material-ui/core'
import { injectIntl, FormattedMessage } from 'react-intl'

import TileTriangle from '~assets/icons/TileTriangle'
import ProjectsList from '~components/ProjectsList'

import useStyle from './Commercial.style'
import technologiesMap from '~services/Technologies/TechnologiesMap.json'

export function Commercial({ classes: overridingClasses, intl }) {
  const classes = { ...useStyle(), ...overridingClasses }
  const { formatMessage } = intl
  const commercialProjectsArray = [
    {
      description: formatMessage({
        id: 'pages.home.commercial.projects.learningManagementSystem.description',
      }),
      tags: [
        technologiesMap.react,
        technologiesMap.redux,
        technologiesMap.rematch,
        technologiesMap.materialUi,
        technologiesMap.immutable,
      ],
      title: formatMessage({
        id: 'pages.home.commercial.projects.learningManagementSystem.title',
      }),
    },
    {
      description: formatMessage({
        id: 'pages.home.commercial.projects.quizzesManagementSystem.description',
      }),
      tags: [
        technologiesMap.react,
        technologiesMap.redux,
        technologiesMap.rematch,
        technologiesMap.materialUi,
        technologiesMap.firebase,
        technologiesMap.recharts,
        technologiesMap.jest,
      ],
      title: formatMessage({
        id: 'pages.home.commercial.projects.quizzesManagementSystem.title',
      }),
    },
    {
      description: formatMessage({
        id: 'pages.home.commercial.projects.quizzesManagementSystem.description',
      }),
      tags: [
        technologiesMap.react,
        technologiesMap.redux,
        technologiesMap.rematch,
        technologiesMap.materialUi,
        technologiesMap.firebase,
        technologiesMap.jest,
      ],
      title: formatMessage({
        id: 'pages.home.commercial.projects.quizzesManagementSystem.title',
      }),
    },
    {
      description: formatMessage({
        id: 'pages.home.commercial.projects.loadTestingPlatform.description',
      }),
      tags: [
        technologiesMap.react,
        technologiesMap.materialUi,
        technologiesMap.graphql,
        technologiesMap.testingLibrary,
      ],
      title: formatMessage({
        id: 'pages.home.commercial.projects.loadTestingPlatform.title',
      }),
    },
  ]

  return (
    <React.Fragment>
      <TileTriangle className={classNames(classes.triangle, classes.topTriangle)} />
      <section className={classes.section}>
        <Container classes={{ root: classes.root }} id="commercial">
          <Typography className={classes.title} color="secondary" variant="h1">
            <FormattedMessage id="pages.home.commercial.title" />
            <span aria-hidden className={classes.emoji}>
              {' '}
              🦸‍♂️
            </span>
          </Typography>
          <Typography className={classes.subtitle} color="secondary" variant="h2">
            <FormattedMessage id="pages.home.commercial.subtitle" />
          </Typography>
          <ProjectsList data={commercialProjectsArray.reverse()} />
        </Container>
      </section>
      <TileTriangle className={classNames(classes.triangle, classes.bottomTriangle)} />
    </React.Fragment>
  )
}

Commercial.propTypes = {
  classes: PropTypes.object,
  intl: PropTypes.object,
}

export default injectIntl(Commercial)

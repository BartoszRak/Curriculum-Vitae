import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import { withStyles, Typography, Divider, SvgIcon, Container } from '@material-ui/core'

import style from './Workflow.style'

export function Workflow({ classes }) {
  return (
    <section className={classes.section}>
      <Container classes={{ root: classes.root}} id="workflow">
        <Typography className={classes.title} variant="h1">
          <FormattedMessage id="pages.home.workflow.title" />
          <span aria-hidden className={classes.emoji}>
            🙌
          </span>
        </Typography>
        <Divider className={classes.divider} />
        <Typography className={classes.subtitle} variant="h3">
          <FormattedMessage id="pages.home.workflow.tiles.project.title" />
        </Typography>
        <Typography variant="body1">
          <FormattedMessage id="pages.home.workflow.tiles.project.description" />
        </Typography>
        <Typography className={classes.subtitle} variant="h3">
          <FormattedMessage id="pages.home.workflow.tiles.git.title" />
        </Typography>
        <Typography variant="body1">
          <FormattedMessage
            id="pages.home.workflow.tiles.git.description"
            values={{
              methodology: (
                <a
                  href="https://pl.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  git-flow
                </a>
              ),
            }}
          />
        </Typography>
      </Container>
    </section>
  )
}

Workflow.propTypes = {
  classes: PropTypes.object,
}

export default withStyles(style)(Workflow)

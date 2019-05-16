import React from 'react'
import PropTypes from 'prop-types'
import { withStyles, Typography, Divider } from '@material-ui/core'

import style from './Workflow.style'

export function Workflow({ classes }) {
  return (
    <div className={classes.root} id="workflow">
      <Typography className={classes.title} variant="h1">
        How my workflow looks like?
        <span aria-hidden className={classes.emoji}>
          🙌
        </span>
      </Typography>
      <Divider className={classes.divider} />
      <Typography className={classes.subtitle} variant="h3">
        Project side
      </Typography>
      <Typography variant="body1">
        In case of project workflow I worked mostly in Agile &amp; Scrum and in
        customized mixes of those two methodologies. I am fun of organized but
        flexible workflows that gives a possibility to adapt easily to the situation.
      </Typography>
      <Typography className={classes.subtitle} variant="h3">
        Git part
      </Typography>
      <Typography variant="body1">
        I always tend to use a workflow that is closest to
        {' '}
        <a
          href="https://pl.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow"
          rel="noopener noreferrer"
          target="_blank"
        >
          git-glow
        </a>
        {' '}
        methodology. When I got, a task I create one branch, in which I always try to
        create only one commit and I squash at the end of work - to be sure my main
        branch will not be cluttered.
      </Typography>
    </div>
  )
}

Workflow.propTypes = {
  classes: PropTypes.object,
}

export default withStyles(style)(Workflow)

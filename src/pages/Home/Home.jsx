import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'

import ProjectsList from './ProjectsList'

import style from './Home.style'

export function Home({ classes }) {
  return (
    <div className={classes.root}>
      <ProjectsList />
    </div>
  )
}

Home.propTypes = {
  classes: PropTypes.object,
}

export default withStyles(style)(Home)

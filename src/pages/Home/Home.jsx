import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { withStyles } from '@material-ui/core'

import Projects from './Projects'
import Bio from './Bio'
import Skills from './Skills'
import Workflow from './Workflow'

import style from './Home.style'

import MountainsBlurImage from '~assets/images/landscape-mountains-nature-dark-blur.jpg'

export function Home({ classes }) {
  return (
    <div className={classes.root}>
      <div
        className={classNames(classes.holder, classes.backgroundHolder)}
        style={{
          backgroundImage: `url(${MountainsBlurImage})`,
        }}
      >
        <Projects />
      </div>
      <div className={classNames(classes.holder, classes.fairHolder)}>
        <Bio />
      </div>
      <div
        className={classNames(classes.holder, classes.backgroundHolder)}
        style={{
          backgroundImage: `url(${MountainsBlurImage})`,
        }}
      >
        <Skills />
      </div>
      <div
        className={classNames(classes.holder, classes.fairHolder)}
      >
        <Workflow />
      </div>
    </div>
  )
}

Home.propTypes = {
  classes: PropTypes.object,
}

export default withStyles(style)(Home)

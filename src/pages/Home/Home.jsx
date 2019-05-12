import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { withStyles } from '@material-ui/core'

import Projects from './Projects'

import style from './Home.style'

import MountainsBlurImage from '../../assets/images/landscape-mountains-nature-dark-blur.jpg'

export function Home({ classes }) {
  return (
    <div className={classes.root}>
      <div className={classNames(classes.holder, classes.projectsHolder)} style={{
      backgroundImage: `url(${MountainsBlurImage})`,
    }}>
        <Projects />      
      </div>
    </div>
  )
}

Home.propTypes = {
  classes: PropTypes.object,
}

export default withStyles(style)(Home)

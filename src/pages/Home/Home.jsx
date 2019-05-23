import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { withStyles } from '@material-ui/core'
import uuidv4 from 'uuid/v4'

import Projects from './Projects'
import Bio from './Bio'
import Skills from './Skills'
import Workflow from './Workflow'
import Hobbies from './Hobbies'

import style from './Home.style'

import MountainsBlurImage from '~assets/images/landscape-mountains-nature-dark-blur.jpg'

const contentList = [
  {
    component: Projects,
    id: uuidv4,
  },
  {
    component: Bio,
    id: uuidv4,
  },
  {
    component: Skills,
    id: uuidv4,
  },
  {
    component: Workflow,
    id: uuidv4,
  },
  {
    component: Hobbies,
    id: uuidv4,
  },
]

export function Home({ classes }) {
  return (
    <div className={classes.root}>
      {contentList.map((item, index) => {
        const { component: Component, id } = item
        const props = index % 2 === 0 ? {
          className: classNames(classes.holder, classes.backgroundHolder),
          style: {
            backgroundImage: `url(${MountainsBlurImage})`,
          },
        } : {
          className: classNames(classes.holder, classes.fairHolder),
        }
        return (
          <div {...props} key={id}>
            <Component />
          </div>
        )
      })}
    </div>
  )
}

Home.propTypes = {
  classes: PropTypes.object,
}

export default withStyles(style)(Home)

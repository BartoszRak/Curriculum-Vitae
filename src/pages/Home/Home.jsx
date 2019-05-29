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

const contentList = [
  {
    component: Projects,
    id: uuidv4(),
  },
  {
    component: Bio,
    id: uuidv4(),
  },
  {
    component: Skills,
    id: uuidv4(),
  },
  {
    component: Workflow,
    id: uuidv4(),
  },
  {
    component: Hobbies,
    id: uuidv4(),
  },
]

export function Home({ classes }) {
  return (
    <main className={classes.root} role="main">
      {contentList.map((item, index) => {
        const { component: Component, id } = item
        const props = index % 2 === 0 ? {
          className: classNames(classes.holder, classes.backgroundHolder),
        } : {
          className: classNames(classes.holder, classes.fairHolder),
        }
        return (
          <section {...props} key={id}>
            <Component />
          </section>
        )
      })}
    </main>
  )
}

Home.propTypes = {
  classes: PropTypes.object,
}

export default withStyles(style)(Home)

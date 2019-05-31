import React from 'react'
import classNames from 'classnames'
import uuidv4 from 'uuid/v4'

import Projects from './Projects'
import Bio from './Bio'
import Skills from './Skills'
import Workflow from './Workflow'
import Hobbies from './Hobbies'

import useStyle from './Home.style'

const contentList = [Projects, Bio, Skills, Workflow, Hobbies].map(obj => ({
  component: obj,
  id: uuidv4(),
}))

export function Home() {
  const classes = useStyle()
  return (
    <main className={classes.root} role="main">
      {contentList.map((item, index) => {
        const { component: Component, id } = item
        return (
          <Component
            classes={{
              section: classNames(classes.holder, {
                [classes.fairHolder]: index % 2 !== 0,
                [classes.backgroundHolder]: index % 2 === 0,
              }),
            }}
            key={id}
          />
        )
      })}
    </main>
  )
}

export default Home

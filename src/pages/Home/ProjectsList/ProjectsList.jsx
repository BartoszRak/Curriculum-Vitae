import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'

import ProjectTile from './ProjectTile'

import style from './ProjectsList.style'

export function ProjectsList({ classes }) {
  const projects = [
    {
      image: 'https://i1.jbzdy.pl/contents/2019/04/9eb447906f482d41acbcf4bf344321bc.jpg',
      name: 'Mocked project name1',
      url: 'https://pl.lipsum.com/',
    }, {
      image: 'https://i1.jbzdy.pl/contents/2019/04/9eb447906f482d41acbcf4bf344321bc.jpg',
      name: 'Mocked project name2',
      url: 'https://pl.lipsum.com/',
    }, {
      image: 'https://i1.jbzdy.pl/contents/2019/04/9eb447906f482d41acbcf4bf344321bc.jpg',
      name: 'Mocked project name3',
      url: 'https://pl.lipsum.com/',
    },
  ]

  return (
    <div className={classes.root}>
      {projects.map(project => {
        const { name, url, image } = project
        return (
          <div className={classes.cardHolder} key={name}>
            <ProjectTile
              image={image}
              name={name}
              url={url}
            />
          </div>
        )
      })}
    </div>
  )
}

ProjectsList.propTypes = {
  classes: PropTypes.object,
}

export default withStyles(style)(ProjectsList)

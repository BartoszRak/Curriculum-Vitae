import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { Typography } from '@material-ui/core'

import useStyle from './SkillsList.style'

export function SkillsList({ classes: overridingClasses, className, data }) {
  const classes = { ...useStyle(), ...overridingClasses }
  return (
    <div className={classNames(classes.root, className)}>
      {data.map(skill => (
        <Typography className={classNames(classes.skill, classes.item)} color="secondary" key={skill.name} variant="h5">
          {skill.name}
        </Typography>
      ))}
      <Typography aria-hidden className={classNames(classes.sum, classes.item)} color="secondary" variant="h5">
        {data.length}
      </Typography>
    </div>
  )
}

SkillsList.propTypes = {
  classes: PropTypes.object,
  className: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.shape({
    advancement: PropTypes.number,
    name: PropTypes.string,
  })),
}

export default SkillsList

import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import { withStyles, Typography } from '@material-ui/core'

import SkillsList from './SkillsList'
import listOfSkills from './ListOfSkills.json'

import style from './Skills.style'

const coreSkills = listOfSkills.filter(skill => skill.advancement === 0)
const sideSkills = listOfSkills.filter(skill => skill.advancement === 1)
const additionalSkills = listOfSkills.filter(skill => skill.advancement === 2)

export function Skills({ classes }) {
  return (
    <div className={classes.root} id="skills">
      <Typography className={classes.title} color="secondary" variant="h1">
        <FormattedMessage id="pages.home.skills.title" />
        <span aria-hidden className={classes.emoji}> 😬</span>
      </Typography>
      <Typography className={classes.subtitle} color="secondary" variant="h3">
      <FormattedMessage id="pages.home.skills.levels.0.title" />
      </Typography>
      <SkillsList className={classes.skills} data={coreSkills} />
      <Typography className={classes.subtitle} color="secondary" variant="h3">
      <FormattedMessage id="pages.home.skills.levels.1.title" />
      </Typography>
      <SkillsList className={classes.skills} data={sideSkills} />
      <Typography className={classes.subtitle} color="secondary" variant="h3">
      <FormattedMessage id="pages.home.skills.levels.2.title" />
      </Typography>
      <SkillsList className={classes.skills} data={additionalSkills} />
    </div>
  )
}

Skills.propTypes = {
  classes: PropTypes.object,
}

export default withStyles(style)(Skills)

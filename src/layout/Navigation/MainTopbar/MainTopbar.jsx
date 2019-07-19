import React from 'react'
import PropTypes from 'prop-types'
import { Toolbar, Typography } from '@material-ui/core'

import LanguageSelect from '~components/LanguageSelect'

import useStyle from './MainTopbar.style'

export function MainTopbar({ classes: overridingClasses }) {
  const classes = { ...useStyle(), ...overridingClasses }
  return (
    <Toolbar className={classes.root}>
      <div>
        <Typography variant="h1" className={classes.title}>
          Bartosz Rak
        </Typography>
      </div>
      <div>
        <LanguageSelect />
      </div>
    </Toolbar>
  )
}

MainTopbar.propTypes = {
  classes: PropTypes.object,
}

export default MainTopbar

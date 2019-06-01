import React from 'react'
import { FormattedMessage } from 'react-intl'
import { Typography, Avatar } from '@material-ui/core'
import PropTypes from 'prop-types'

import avatarUrl from '~assets/images/instagram-photo.jpg'

import useStyle from './Greeting.style'

export function Greeting({ classes: overridingClasses }) {
  const classes = { ...useStyle(), ...overridingClasses }
  return (
    <header
      className={classes.root}
    >
      <Avatar alt="Author instagram picture" className={classes.avatar} src={avatarUrl} />
      <Typography className={classes.title} color="secondary" data-testid="greeting-title" variant="h1">
        Bartosz Rak
      </Typography>
      <Typography className={classes.subtitle} color="secondary" data-testid="greeting-subtitle" variant="h2">
        <FormattedMessage id="layout.greeting.subtitle" />
        <span aria-hidden>😁</span>
      </Typography>
      <Typography className={classes.subsubtitle} color="secondary" data-testid="greeting-subsubtitle" variant="h3">
        <FormattedMessage id="layout.greeting.subsubtitle" />
      </Typography>
    </header>
  )
}

Greeting.propTypes = {
  classes: PropTypes.object,
}

export default Greeting

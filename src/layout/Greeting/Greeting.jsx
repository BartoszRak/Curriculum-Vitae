import React from 'react'
import { FormattedMessage } from 'react-intl'
import { withStyles, Typography, Avatar } from '@material-ui/core'
import PropTypes from 'prop-types'


import avatarUrl from '~assets/images/instagram-photo.jpg'

import style from './Greeting.style'

export function Greeting({ classes }) {
  return (
    <header
      className={classes.root}
    >
      <Avatar alt="Author instagram picture" className={classes.avatar} src={avatarUrl} />
      <Typography className={classes.title} color="secondary" variant="h1">
        Bartosz Rak
      </Typography>
      <Typography className={classes.subtitle} color="secondary" variant="h2">
        <FormattedMessage id="layout.greeting.subtitle" />
        <span aria-hidden>😁</span>
      </Typography>
      <Typography className={classes.subsubtitle} color="secondary" variant="h3">
        <FormattedMessage id="layout.greeting.subsubtitle" />
      </Typography>
    </header>
  )
}

Greeting.propTypes = {
  classes: PropTypes.object,
}

export default withStyles(style)(Greeting)

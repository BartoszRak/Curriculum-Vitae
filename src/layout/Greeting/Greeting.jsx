import React from 'react'
import { withStyles, Typography, Avatar } from '@material-ui/core'
import PropTypes from 'prop-types'

import backgroundUrl from '~assets/images/landscape-mountains-nature-dark.jpg'
import avatarUrl from '~assets/images/instagram-photo.jpg'

import style from './Greeting.style'

export function Greeting({ classes }) {
  return (
    <div
      className={classes.root}
      style={{
        backgroundImage: `url(${backgroundUrl})`,
      }}
    >
      <Avatar className={classes.avatar} src={avatarUrl} />
      <Typography variant="h1" className={classes.title}>
      Bartosz Rak
      </Typography>
      <Typography variant="h2" className={classes.subtitle}>
      Front-end developer
      </Typography>
    </div>
  )
}

Greeting.propTypes = {
  classes: PropTypes.object,
}

export default withStyles(style)(Greeting)

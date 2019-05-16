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
      <Avatar alt="Author instagram picture" className={classes.avatar} src={avatarUrl} />
      <Typography className={classes.title} variant="h1">
        Bartosz Rak
      </Typography>
      <Typography className={classes.subtitle} variant="h2">
        Front-end developer
        <span aria-hidden>😁</span>
      </Typography>
    </div>
  )
}

Greeting.propTypes = {
  classes: PropTypes.object,
}

export default withStyles(style)(Greeting)

import React from 'react'
import { FormattedMessage } from 'react-intl'
import { Typography, Avatar, Container } from '@material-ui/core'
import PropTypes from 'prop-types'

import avatarUrl from '~assets/images/instagram-photo2.jpg'

import useStyle from './Greeting.style'

export function Greeting({ classes: overridingClasses }) {
  const classes = { ...useStyle(), ...overridingClasses }
  return (
    <section className={classes.section}>
      <Container classes={{ root: classes.root }} id="greeting">
        <Avatar
          alt="Author instagram picture"
          className={classes.avatar}
          src={avatarUrl}
        />
        <Typography
          className={classes.title}
          color="secondary"
          data-testid="greeting-title"
          variant="h1"
        >
          Bartosz Rak
        </Typography>
        <Typography
          className={classes.subtitle}
          color="secondary"
          data-testid="greeting-subtitle"
          variant="h2"
        >
          <FormattedMessage id="pages.home.greeting.subtitle" />
          <span aria-hidden>😁</span>
        </Typography>
        <Typography
          className={classes.subsubtitle}
          color="secondary"
          data-testid="greeting-subsubtitle"
          variant="h3"
        >
          <FormattedMessage id="pages.home.greeting.subsubtitle" />
        </Typography>
      </Container>
    </section>
  )
}

Greeting.propTypes = {
  classes: PropTypes.object,
}

export default Greeting

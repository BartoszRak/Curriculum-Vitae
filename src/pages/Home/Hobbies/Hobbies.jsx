import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import { Typography, Container } from '@material-ui/core'

import assasinBugUrl from '~assets/images/assasin-bug.jpg'
import codingUrl from '~assets/images/coding.jpg'

import useStyle from './Hobbies.style'

export function Hobbies({ classes: overridingClasses }) {
  const classes = { ...useStyle(), ...overridingClasses }
  return (
    <section className={classes.section}>
      <Container classes={{ root: classes.root }} id="hobbies">
        <Typography className={classes.title} color="secondary" variant="h1">
          <FormattedMessage id="pages.home.hobbies.title" />
          <span aria-hidden className={classes.emoji}> 🙄</span>
        </Typography>
        <div className={classes.tilesHolder}>
          <article className={classes.tile}>
            <Typography variant="h2" className={classes.title}>
              <FormattedMessage id="pages.home.hobbies.tiles.insects.title" />
            </Typography>
            <Typography className={classes.tileDescription} variant="body1">
              <FormattedMessage id="pages.home.hobbies.tiles.insects.description" />
            </Typography>
            <img alt="Assasing bug" className={classes.tileImage} src={assasinBugUrl} />
          </article>
          <article className={classes.tile}>
            <Typography variant="h2" className={classes.title}>
              <FormattedMessage id="pages.home.hobbies.tiles.programming.title" />
            </Typography>
            <Typography className={classes.tileDescription} variant="body1">
              <FormattedMessage id="pages.home.hobbies.tiles.programming.description" />
            </Typography>
            <img alt="Coding" className={classes.tileImage} src={codingUrl} />
          </article>
        </div>
      </Container>
    </section>
  )
}

Hobbies.propTypes = {
  classes: PropTypes.object,
}

export default Hobbies

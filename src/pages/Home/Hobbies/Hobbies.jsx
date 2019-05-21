import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import { withStyles, Typography } from '@material-ui/core'

import assasinBugUrl from '~assets/images/assasin-bug.jpg'
import codingUrl from '~assets/images/coding.jpg'

import style from './Hobbies.style'

export function Hobbies({ classes }) {
  return (
    <React.Fragment>
      <div className={classes.root} id="hobbies">
        <Typography className={classes.title} color="secondary" variant="h1">
          <FormattedMessage id="pages.home.hobbies.title" />
          <span aria-hidden className={classes.emoji}>🙄</span>
        </Typography>
        <div className={classes.tilesHolder}>
          <div className={classes.tile}>
            <Typography variant="h2">
              <FormattedMessage id="pages.home.hobbies.tiles.insects.title" />
            </Typography>
            <Typography className={classes.tileDescription} variant="body1">
              <FormattedMessage id="pages.home.hobbies.tiles.insects.description" />
            </Typography>
            <img alt="Assasing bug" className={classes.tileImage} src={assasinBugUrl} />
          </div>
          <div className={classes.tile}>
            <Typography variant="h2">
              <FormattedMessage id="pages.home.hobbies.tiles.programming.title" />
            </Typography>
            <Typography className={classes.tileDescription} variant="body1">
              <FormattedMessage id="pages.home.hobbies.tiles.programming.description" />
            </Typography>
            <img alt="Coding" className={classes.tileImage} src={codingUrl} />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

Hobbies.propTypes = {
  classes: PropTypes.object,
}

export default withStyles(style)(Hobbies)

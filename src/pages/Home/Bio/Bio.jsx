import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import { Typography, Divider, Container } from '@material-ui/core'

import useStyle from './Bio.style'

export function Bio({ classes: overridingClasses }) {
  const classes = { ...useStyle(), ...overridingClasses }
  return (
    <section className={classes.section}>
      <Container classes={{ root: classes.root }} id="bio">
        <Typography className={classes.title} variant="h1">
          <FormattedMessage id="pages.home.bio.title" />
          <span aria-hidden className={classes.emoji}> 🤠</span>
        </Typography>
        <div className={classes.tilesHolder}>
          <article className={classes.tile}>
            <Typography className={classes.subtitle} variant="h2">
            <FormattedMessage id="pages.home.bio.tiles.0.title" />
            </Typography>
            <Divider className={classes.divider} />
            <Typography variant="h4">
            <FormattedMessage id="pages.home.bio.tiles.0.subtitle" />
            </Typography>
            <br />
            <Typography variant="body1">
            <FormattedMessage id="pages.home.bio.tiles.0.paragraphs.0" />
            </Typography>
            <br />
            <Typography variant="body1">
            <FormattedMessage id="pages.home.bio.tiles.0.paragraphs.1" />
            </Typography>
          </article>
          <article className={classes.tile}>
            <Typography className={classes.subtitle} variant="h2">
            <FormattedMessage id="pages.home.bio.tiles.1.title" />
            </Typography>
            <Divider className={classes.divider} />
            <Typography variant="h4">
            <FormattedMessage id="pages.home.bio.tiles.1.subtitle" />
            </Typography>
            <br />
            <Typography variant="body1">
            <FormattedMessage id="pages.home.bio.tiles.1.paragraphs.0" />
            </Typography>
            <br />
            <Typography variant="body1">
            <FormattedMessage id="pages.home.bio.tiles.1.paragraphs.1" />
            </Typography>
          </article>
          <article className={classes.tile}>
            <Typography className={classes.subtitle} variant="h2">
            <FormattedMessage id="pages.home.bio.tiles.2.title" />
            </Typography>
            <Divider className={classes.divider} />
            <Typography variant="h4">
            <FormattedMessage id="pages.home.bio.tiles.2.subtitle" />
            </Typography>
            <br />
            <Typography variant="body1">
            <FormattedMessage id="pages.home.bio.tiles.2.paragraphs.0" />
            </Typography>
            <br />
            <Typography variant="body1">
            <FormattedMessage id="pages.home.bio.tiles.2.paragraphs.1" />
            </Typography>
          </article>
        </div>
      </Container>
    </section>
  )
}

Bio.propTypes = {
  classes: PropTypes.object,
}

export default Bio

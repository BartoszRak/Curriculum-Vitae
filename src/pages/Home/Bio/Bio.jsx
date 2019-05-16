import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import { withStyles, Typography, Divider } from '@material-ui/core'

import styles from './Bio.style'

export function Bio({ classes }) {
  return (
    <React.Fragment>
      <div className={classes.root} id="bio">
        <Typography className={classes.title} variant="h1">
          <FormattedMessage id="pages.home.bio.title" />
          <span aria-hidden className={classes.emoji}>🙄</span>
        </Typography>
        <div className={classes.tilesHolder}>
          <div className={classes.tile}>
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
          </div>
          <div className={classes.tile}>
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
          </div>
          <div className={classes.tile}>
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
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

Bio.propTypes = {
  classes: PropTypes.object,
}

export default withStyles(styles)(Bio)

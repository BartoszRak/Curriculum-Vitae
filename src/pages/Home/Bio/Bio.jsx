import React from 'react'
import PropTypes from 'prop-types'
import { withStyles, Typography, Divider } from '@material-ui/core'

import styles from './Bio.style'

export function Bio({ classes }) {
  return (
    <React.Fragment>
      <div className={classes.root} id="bio">
        <Typography className={classes.title} variant="h1">
          Wait, wait... but who Am I?
          <span aria-hidden className={classes.emoji}>🙄</span>
        </Typography>
        <div className={classes.tilesHolder}>
          <div className={classes.tile}>
            <Typography className={classes.subtitle} variant="h2">
              Unbrainless human
            </Typography>
            <Divider className={classes.divider} />
            <Typography variant="h4">
              How I treat life? Let me introduce myself with short description...
            </Typography>
            <br />
            <Typography variant="body1">
              I am enthusiastic about basing our life decisions on intelligence,
              experience, and logic. I always consider everything to go through the
              optimized way.
            </Typography>
            <br />
            <Typography variant="body1">
              I treat everything - even the hardest issues and life problems - always
              as solvable.
            </Typography>
          </div>
          <div className={classes.tile}>
            <Typography className={classes.subtitle} variant="h2">
              Freak as well
            </Typography>
            <Divider className={classes.divider} />
            <Typography variant="h4">
              How did it start?
            </Typography>
            <br />
            <Typography variant="body1">
              About 2 years ago I started my journey by creating simple websites. After
              a few months, I dived into programming and now I am big fun of it. It
              looks like I started being freak as well.
            </Typography>
            <br />
            <Typography variant="body1">
              It happens sometimes I make a night spending it on coding and delivering
              my ideas into reality.
            </Typography>
          </div>
          <div className={classes.tile}>
            <Typography className={classes.subtitle} variant="h2">
              Evolution
            </Typography>
            <Divider className={classes.divider} />
            <Typography variant="h4">
              What about future, ideas and plans?
            </Typography>
            <br />
            <Typography variant="body1">
              For today when I look to the past, I
              learned so many things, but still, there are thousands of technologies
              and the language that I want to try and learn.
            </Typography>
            <br />
            <Typography variant="body1">
              In case of that, I do not stop engaging everything that interests me. I
              expand my knowledge and grow my skills to be a better and more accurate
              developer.
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

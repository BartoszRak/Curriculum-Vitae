import { makeStyles } from '@material-ui/core'

export default makeStyles(({ breakpoints }) => ({
  emoji: {
    fontSize: '2rem',
    [breakpoints.down('md')]: {
      fontSize: '1.5rem',
    },
  },
  root: {
    width: '100%',
  },
  section: {},
  title: {
    textShadow: '0 0 5px rgba(0, 0, 0, 0.2)',
    [breakpoints.down('md')]: {
      fontSize: '2rem',
    },
  },
}))

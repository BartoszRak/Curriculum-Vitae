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
  subtitle: {
    [breakpoints.down('md')]: {
      fontSize: '1.8rem',
    },
  },
  title: {
    [breakpoints.down('md')]: {
      fontSize: '2rem',
    },
  },
}))

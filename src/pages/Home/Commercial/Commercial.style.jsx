import { makeStyles } from '@material-ui/core'

export default makeStyles(({ breakpoints, palette }) => ({
  bottomTriangle: {
    marginTop: '-1px',
    transform: 'rotate(180deg)',
  },
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
    color: palette.primary.main,
    textShadow: '0 0 5px rgba(0, 0, 0, 0.2)',
    [breakpoints.down('md')]: {
      fontSize: '1.8rem',
    },
  },
  title: {
    color: palette.primary.main,
    textShadow: '0 0 5px rgba(0, 0, 0, 0.2)',
    [breakpoints.down('md')]: {
      fontSize: '2rem',
    },
  },
  triangle: {
    color: palette.secondary.main,
  },
}))

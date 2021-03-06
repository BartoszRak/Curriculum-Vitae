import { makeStyles } from '@material-ui/core'

export default makeStyles(({ breakpoints, palette, spacing }) => ({
  bottomTriangle: {
    marginTop: '-1px',
    transform: 'rotate(180deg) scaleX(-1)',
  },
  divider: {
    margin: spacing(2, 0),
  },
  emoji: {
    fontSize: '2rem',
    [breakpoints.down('md')]: {
      fontSize: '1.5rem',
    },
  },
  image: {
    height: '50%',
    width: '50%',
  },
  imageHolder: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  },
  root: {
    width: '100%',
  },
  section: {},
  subtitle: {
    borderLeft: `4px solid ${palette.primary.main}`,
    marginBottom: spacing(1),
    marginTop: spacing(3),
    paddingLeft: spacing(2),
    [breakpoints.down('md')]: {
      fontSize: '1.8rem',
    },
  },
  title: {
    [breakpoints.down('md')]: {
      fontSize: '2rem',
    },
  },
  topTriangle: {
    marginBottom: -1,
    transform: 'scaleX(-1)',
  },
  triangle: {
    color: palette.secondary.main,
  },
}))

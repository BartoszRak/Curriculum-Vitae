import { makeStyles } from '@material-ui/core'

export default makeStyles(({ breakpoints, spacing, palette }) => ({
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
  skills: {
    marginTop: 20,
  },
  subtitle: {
    borderLeft: `4px solid ${palette.secondary.main}`,
    marginTop: 50,
    paddingLeft: spacing(2),
  },
  title: {
    [breakpoints.down('md')]: {
      fontSize: '2rem',
    },
  },
}))

import { makeStyles } from '@material-ui/core'

export default makeStyles(({ breakpoints, palette, spacing }) => ({
  avatar: {
    border: `2px solid ${palette.secondary.main}`,
    height: 250,
    marginBottom: 60,
    width: 250,
  },
  root: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
  },
  section: {},
  subsubtitle: {
    fontWeight: 'lighter',
    marginTop: spacing(0.5),
    textAlign: 'center',
    textShadow: '0 0 5px rgba(0, 0, 0, 0.2)',
    [breakpoints.down('sm')]: {
      fontSize: '1.2rem',
    },
  },
  subtitle: {
    textAlign: 'center',
    textShadow: '0 0 5px rgba(0, 0, 0, 0.2)',
    [breakpoints.down('sm')]: {
      fontSize: '1.6rem',
    },
  },
  title: {
    textAlign: 'center',
    textShadow: '0 0 5px rgba(0, 0, 0, 0.2)',
    [breakpoints.down('sm')]: {
      fontSize: '2.5rem',
    },
  },
}))

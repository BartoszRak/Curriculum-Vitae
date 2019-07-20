import { makeStyles } from '@material-ui/core'

export default makeStyles(({ breakpoints, palette, spacing }) => ({
  actions: {
    alignItems: 'center',
    display: 'flex',
    height: 64,
    [breakpoints.down('xs')]: {
      height: 'auto',
    },
  },
  button: {
    '&:hover': {
      background: 'rgba(0, 0, 0, 0.05)',
    },
    borderRadius: 100,
    marginRight: spacing(4),
    padding: spacing(0.5, 2),
    [breakpoints.down('md')]: {
      margin: 0,
      padding: spacing(1.5, 2),
    },
  },
  buttonLabel: {
    color: palette.secondary.light,
    fontSize: '1rem',
    fontWeight: 'normal',
    textShadow: '0 0 5px rgba(0, 0, 0, 0.8)',
    [breakpoints.down('md')]: {
      fontSize: '1.2rem',
    },
    [breakpoints.down('xs')]: {
      fontSize: '1rem',
    },
  },
  buttonsHolder: {
    [breakpoints.down('md')]: {
      display: 'flex',
      flex: '1 1 auto',
      flexDirection: 'column',
      justifyContent: 'center',
    },
  },
  root: {
    display: 'flex',
    flex: '1 1 auto',
    flexDirection: 'column',
  },
}))

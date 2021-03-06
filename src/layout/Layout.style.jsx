import { makeStyles } from '@material-ui/core'

export default makeStyles(({ palette, spacing }) => ({
  bottomShadow: {
    background:
      'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.10) 50%, rgba(0, 0, 0, 0.20)100%)',
    bottom: 0,
    height: 96,
    left: 0,
    position: 'fixed',
    width: '100%',
  },
  information: {
    background: palette.error.main,
    bottom: 0,
    color: palette.secondary.main,
    margin: spacing(1),
    padding: spacing(1.5),
    position: 'fixed',
    right: 0,
    zIndex: 100000000000,
  },
  root: {
    background: 'linear-gradient(to right, #fd746c, #ff9068)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    maxWidth: '100vw',
    minHeight: '100vh',
  },
}))

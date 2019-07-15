import { makeStyles } from '@material-ui/core'

export default makeStyles(({ palette, spacing }) => ({
  backgroundHolder: {},
  divider: {
    background: palette.secondary.main,
    height: spacing(2.5),
  },
  fairHolder: {
    background: palette.secondary.main,
  },
  holder: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    minHeight: '100vh',
    padding: '150px 0',
  },
  root: {
    alignItems: 'stretch',
    display: 'flex',
    flexDirection: 'column',
  },
}))

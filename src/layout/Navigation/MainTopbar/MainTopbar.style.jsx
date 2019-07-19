import { makeStyles } from '@material-ui/core'

export default makeStyles(({ palette }) => ({
  root: {
    background: palette.primary.dark,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: '1.9rem',
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
}))

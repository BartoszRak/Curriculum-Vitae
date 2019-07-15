import { makeStyles } from '@material-ui/core'

export default makeStyles(({ spacing, palette }) => ({
  root: {
    background: palette.secondary.main,
    padding: spacing(2),
  },
  text: {
    textAlign: 'center',
  },
  tileArrow: {
    color: palette.secondary.main,
    marginBottom: -2,
  }
}))

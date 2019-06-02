import { makeStyles } from '@material-ui/core'

export default makeStyles(({ palette, spacing }) => ({
  button: {
    '&:hover': {
      background: 'rgba(0, 0, 0, 0.05)',
    },
    borderRadius: 100,
    marginRight: spacing(4),
    padding: spacing(0.5, 2),
  },
  buttonLabel: {
    color: palette.secondary.light,
    fontSize: '1rem',
    fontWeight: 'normal',
    textShadow: '0 0 5px rgba(0, 0, 0, 0.8)',
  },
}))

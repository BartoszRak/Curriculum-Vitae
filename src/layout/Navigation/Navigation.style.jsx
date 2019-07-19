import { makeStyles } from '@material-ui/core'

export default makeStyles(({ palette }) => ({
  actions: {
    marginRight: 50,
  },
  root: {
    background: palette.primary.main,
    boxShadow: 'none',
    margin: 0,
    padding: '0 !important',
    position: 'fixed',
  },
}))

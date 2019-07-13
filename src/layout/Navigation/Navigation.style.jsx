import { makeStyles } from '@material-ui/core'

export default makeStyles(({ breakpoints, spacing, palette }) => ({
  actions: {
    marginRight: 50,
  },
  desktop: {
    display: 'block',
    [breakpoints.down('md')]: {
      display: 'none',
    },
  },
  mobile: {
    display: 'none',
    [breakpoints.down('md')]: {
      display: 'block',
    },
  },
  root: {
    background: palette.primary.main,
    boxShadow: 'none',
    margin: 0,
    padding: `${spacing(0.5)}px !important`,
    position: 'fixed',
  },
  toolbar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
}))

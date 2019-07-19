import { makeStyles } from '@material-ui/core'

export default makeStyles(({ breakpoints }) => ({
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
  toolbar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '100%',
  },
}))

import { makeStyles } from '@material-ui/core'

export default makeStyles(({ breakpoints }) => ({
  root: {
    columnGap: 40,
    display: 'block',
    marginTop: 40,
    [breakpoints.up('lg')]: {
      columnCount: 4,
    },
    [breakpoints.down('md')]: {
      columnCount: 3,
    },
    [breakpoints.down('sm')]: {
      columnCount: 2,
    },
    [breakpoints.down('sm')]: {
      columnCount: 1,
    },
  },
}))

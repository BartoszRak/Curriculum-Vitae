import { makeStyles } from '@material-ui/core'

export default makeStyles(({ breakpoints, palette, spacing }) => ({
  menu: {
    [breakpoints.down('md')]: {
      width: '100%',
    },
  },
  root: {
    background: palette.primary.dark,
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    [breakpoints.down('md')]: {
      alignItems: 'flex-start',
      flexDirection: 'column-reverse',
      paddingTop: spacing(2),
    },
  },
  title: {
    fontSize: '1.9rem',
    letterSpacing: 2,
    marginRight: spacing(3),
    textTransform: 'uppercase',
    [breakpoints.down('md')]: {
      display: 'none',
    },
  },
}))

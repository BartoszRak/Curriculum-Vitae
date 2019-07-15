import { makeStyles } from '@material-ui/core'

export default makeStyles(({ palette, spacing }) => ({
  menuPaper: {
    '& li': {
      fontSize: '0.9rem',
      padding: spacing(0.5, 3),
    },
  },
  root: {},
  select: {
    '&:after': {
      display: 'none',
    },
    '&:before': {
      display: 'none',
    },
    background: 'none',
  },
  selectIcon: {
    color: palette.primary.main,
    marginRight: spacing(1),
  },
  selectMenu: {
    '&:focus': {
      background: palette.secondary.main,
      borderRadius: 100,
    },
  },
  selectRoot: {
    background: palette.secondary.main,
    borderRadius: 100,
    color: palette.primary.main,
    fontSize: '0.9rem',
    padding: spacing(0.5, 5, 0.5, 2),
  },
}))

export default ({ palette, spacing }) => ({
  menuPaper: {
    '& li': {
      fontSize: '0.9rem',
      padding: `${spacing.unit * 0.5}px ${spacing.unit * 3}px`,
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
  },
  selectIcon: {
    color: palette.primary.main,
    marginRight: spacing.unit * 1,
  },
  selectMenu: {
    '&:focus': {
      background: 'none',
    },
  },
  selectRoot: {
    background: palette.secondary.main,
    borderRadius: 100,
    color: palette.primary.main,
    fontSize: '0.9rem',
    padding: `0 ${spacing.unit * 2}px`,
  },
})

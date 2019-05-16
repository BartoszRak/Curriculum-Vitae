export default ({ breakpoints, palette, spacing }) => ({
  item: {
    marginBottom: spacing.unit * 1,
    marginRight: spacing.unit * 2,
    padding: `${spacing.unit * 0.5}px ${spacing.unit * 2.5}px`,
    [breakpoints.down('md')]: {
      fontSize: '0.8rem',
    },
    [breakpoints.down('lg')]: {
      fontSize: '1rem',
    },
  },
  root: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  skill: {
    background: palette.secondary.main,
    borderRadius: spacing.unit * 2,
    color: palette.secondary.contrastText,
    fontWeight: 'normal',
  },
  sum: {
    border: `2px dashed ${palette.secondary.main}`,
    borderRadius: spacing.unit * 2,
    color: palette.secondary.main,
    fontWeight: 'bold',
  },
})

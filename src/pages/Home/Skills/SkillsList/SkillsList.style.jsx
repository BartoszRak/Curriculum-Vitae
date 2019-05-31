export default ({ breakpoints, palette, spacing }) => ({
  item: {
    marginBottom: spacing(1),
    marginRight: spacing(2),
    padding: spacing(0.5, 2.5),
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
    borderRadius: spacing(2),
    color: palette.secondary.contrastText,
    fontWeight: 'normal',
  },
  sum: {
    border: `2px dashed ${palette.secondary.main}`,
    borderRadius: spacing(2),
    color: palette.secondary.main,
    fontWeight: 'bold',
  },
})

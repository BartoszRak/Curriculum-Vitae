export default ({ breakpoints, palette, spacing }) => ({
  divider: {
    margin: `${spacing.unit * 2}px 0`,
  },
  root: {
    margin: '50px 0',
    width: '100%',
  },
  subtitle: {
    borderLeft: `4px solid ${palette.primary.main}`,
    marginTop: spacing.unit * 2,
    paddingLeft: spacing.unit * 2,
  },
  tile: {
    breakInside: 'avoid-column',
    columnBreakInside: 'avoid',
    display: 'table',
    pageBreakInside: 'avoid',
  },
  tilesHolder: {
    columnGap: 80,
    [breakpoints.up('md')]: {
      columnCount: 3,
    },
    [breakpoints.down('md')]: {
      columnCount: 1,
    },
  },
  title: {
    color: palette.text.primary,
    fontSize: '3rem',
    marginBottom: spacing.unit * 4,
  },
})

export default ({ breakpoints, palette, spacing }) => ({
  divider: {
    margin: `${spacing.unit * 2}px 0`,
  },
  emoji: {
    fontSize: '2rem',
    [breakpoints.down('md')]: {
      fontSize: '1.5rem',
    },
  },
  root: {
    width: '100%',
  },
  section: {},
  subtitle: {
    borderLeft: `4px solid ${palette.primary.main}`,
    marginTop: spacing.unit * 2,
    paddingLeft: spacing.unit * 2,
    [breakpoints.down('md')]: {
      fontSize: '1.8rem',
    },
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
    marginBottom: spacing.unit * 4,
    [breakpoints.down('md')]: {
      fontSize: '2rem',
    },
  },
})

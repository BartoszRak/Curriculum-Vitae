export default ({ breakpoints, palette, spacing }) => ({
  emoji: {
    fontSize: '2rem',
    [breakpoints.down('md')]: {
      fontSize: '1.5rem',
    },
  },
  root: {
    width: '100%',
  },
  tile: {
    alignItems: 'center',
    background: palette.secondary.main,
    borderRadius: spacing.unit * 0.5,
    breakInside: 'avoid-column',
    columnBreakInside: 'avoid',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    minHeight: 200,
    padding: spacing.unit * 3,
    pageBreakInside: 'avoid',
    width: '100%',
  },
  tileDescription: {
    marginTop: spacing.unit * 1.5,
    width: '100%',
  },
  tileImage: {
    borderRadius: spacing.unit * 0.5,
    marginTop: spacing.unit * 1.5,
    objectFit: 'cover',
    position: 'relative',
    width: '100%',
  },
  tilesHolder: {
    columnGap: 80,
    [breakpoints.up('md')]: {
      columnCount: 2,
    },
    [breakpoints.down('md')]: {
      columnCount: 1,
    },
  },
  title: {
    marginBottom: spacing.unit * 4,
    [breakpoints.down('md')]: {
      fontSize: '2rem',
    },
  },
})

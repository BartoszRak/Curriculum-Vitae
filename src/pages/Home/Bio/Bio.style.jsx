export default ({ palette, spacing }) => ({
  divider: {
    margin: `${spacing.unit * 2}px 0`,
  },
  root: {},
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
    columnCount: 3,
    columnGap: 80,
  },
  title: {
    color: palette.text.primary,
    fontSize: '3rem',
    marginBottom: spacing.unit * 4,
  },
})

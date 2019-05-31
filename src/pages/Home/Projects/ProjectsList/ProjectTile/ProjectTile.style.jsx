export default ({ spacing, palette }) => ({
  description: {
    fontWeight: 'normal',
    marginTop: spacing.unit * 1,
  },
  focus: {
    background: palette.primary.dark,
  },
  root: {
    breakInside: 'avoid-column',
    columnBreakInside: 'avoid',
    display: 'table',
    height: 'auto',
    marginBottom: spacing.unit * 3,
    pageBreakInside: 'avoid',
    textDecoration: 'none',
    width: '100%',
  },
  tag: {
    background: palette.primary.main,
    borderRadius: spacing.unit * 2,
    color: palette.primary.contrastText,
    fontWeight: 'normal',
    marginBottom: spacing.unit * 1,
    marginRight: spacing.unit * 2,
    padding: `0 ${spacing.unit * 1.5}px`,
  },
  tags: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: spacing.unit * 2,
  },
  title: {
    borderLeft: `4px solid ${palette.primary.main}`,
    fontWeight: 'normal',
    paddingLeft: spacing.unit * 1.5,
  },
})

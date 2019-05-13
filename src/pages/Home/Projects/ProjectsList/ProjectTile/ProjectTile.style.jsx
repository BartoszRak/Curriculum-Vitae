export default ({ spacing, palette }) => ({
  description: {
    fontSize: '1rem',
    fontWeight: 'normal',
    marginTop: spacing.unit * 1,
  },
  paper: {
    '&:hover': {
      border: `1px solid ${palette.primary.main}`,
    },
    background: palette.secondary.main,
    border: `1px solid ${palette.secondary.light}`,
    boxShadow: 'none',
    padding: spacing.unit * 2,
  },
  root: {
    textDecoration: 'none',
    height: 'auto',
    columnBreakInside: 'avoid',
    breakInside: 'avoid-column',
    pageBreakInside: 'avoid',
    display: 'table',
    width: '100%',
    marginBottom: spacing.unit * 3,
  },
  tag: {
    background: palette.primary.main,
    color: palette.primary.contrastText,
    borderRadius: spacing.unit * 2,
    marginRight: spacing.unit * 2,
    marginBottom: spacing.unit * 1,
    padding: `0 ${spacing.unit * 1.5}px`,
    fontWeight: 'normal',
  },
  tags: {
    marginTop: spacing.unit * 2,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  title: {
    borderLeft: `4px solid ${palette.primary.main}`,
    fontSize: '1.3rem',
    fontWeight: 'normal',
    paddingLeft: spacing.unit * 1.5,
  },
})

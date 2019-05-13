export default ({ palette, spacing }) => ({
  divider: {
    margin: `${spacing.unit * 2}px 0`,
  },
  root: {},
  subtitle: {
    marginTop: spacing.unit * 2,
  },
  title: {
    color: palette.text.primary,
    fontSize: '3rem',
    marginBottom: spacing.unit * 4,
  },
})

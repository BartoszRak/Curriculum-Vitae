export default ({ spacing, palette }) => ({
  root: {
    width: '100%',
  },
  skills: {
    marginTop: 20,
  },
  subtitle: {
    borderLeft: `4px solid ${palette.secondary.main}`,
    marginTop: 50,
    paddingLeft: spacing.unit * 2,
    textShadow: '0 0 5px rgba(0, 0, 0, 0.2)',
  },
  title: {
    fontSize: '3rem',
    textShadow: '0 0 5px rgba(0, 0, 0, 0.2)',
  },
})

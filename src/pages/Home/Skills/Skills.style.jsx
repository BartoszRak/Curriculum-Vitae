export default ({ breakpoints, spacing, palette }) => ({
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
    textShadow: '0 0 5px rgba(0, 0, 0, 0.2)',
    [breakpoints.down('md')]: {
      fontSize: '2rem',
    },
  },
})

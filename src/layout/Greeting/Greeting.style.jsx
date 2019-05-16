export default ({ palette, spacing }) => ({
  avatar: {
    width: 250,
    height: 250,
    marginBottom: 60,
    border: `2px solid ${palette.secondary.main}`,
  },
  root: {
    alignItems: 'center',
    backgroundAttachment: 'fixed',
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    justifyContent: 'center',
  },
  subtitle: {
    textAlign: 'center',
    textShadow: '0 0 5px rgba(0, 0, 0, 0.2)',
  },
  subsubtitle: {
    fontWeight: 'lighter',
    marginTop: spacing.unit * 0.5,
    textAlign: 'center',
    textShadow: '0 0 5px rgba(0, 0, 0, 0.2)',
  },
  title: {
    textAlign: 'center',
    textShadow: '0 0 5px rgba(0, 0, 0, 0.2)',
  },
})

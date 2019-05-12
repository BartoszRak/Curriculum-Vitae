export default ({ palette }) => ({
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
    color: palette.primary.contrastText,
    textShadow: '0 0 5px rgba(0, 0, 0, 0.2)',
  },
  title: {
    textAlign: 'center',
    color: palette.primary.contrastText,
    textShadow: '0 0 5px rgba(0, 0, 0, 0.2)',
  },
})

export default ({ palette, shadows }) => ({
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
    textShadow: shadows[24],
  },
  title: {
    textAlign: 'center',
    color: palette.primary.contrastText,
    textShadow: shadows[24],
  },
})

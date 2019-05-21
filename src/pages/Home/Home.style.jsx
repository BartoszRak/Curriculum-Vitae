export default ({ palette, spacing }) => ({
  backgroundHolder: {
    backgroundAttachment: 'fixed',
  },
  divider: {
    background: palette.secondary.main,
    height: spacing.unit * 2.5,
  },
  fairHolder: {
    background: palette.secondary.main,
  },
  holder: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    minHeight: '100vh',
    padding: '150px 15%',
  },
  root: {
    alignItems: 'stretch',
    display: 'flex',
    flexDirection: 'column',
  },
})
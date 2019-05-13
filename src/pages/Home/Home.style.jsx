export default ({ palette, spacing }) => ({
  bioHolder: {
    background: palette.secondary.main,
  },
  divider: {
    background: palette.secondary.main,
    height: spacing.unit * 2.5,
  },
  holder: {
    padding: '0 15%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  projectsHolder: {
    backgroundAttachment: 'fixed',
  },
  root: {
    alignItems: 'stretch',
    display: 'flex',
    flexDirection: 'column',
  },
})

export default ({ palette, spacing }) => ({
  bioHolder: {
    background: palette.secondary.main,
  },
  divider: {
    background: palette.secondary.main,
    height: spacing.unit * 2.5,
  },
  holder: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    minHeight: '100vh',
    padding: '0 15%',
  },
  projectsHolder: {
    backgroundAttachment: 'fixed',
  },
  skillsHolder: {
    backgroundAttachment: 'fixed',
  },
  root: {
    alignItems: 'stretch',
    display: 'flex',
    flexDirection: 'column',
  },
})

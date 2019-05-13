export default ({ palette, spacing }) => ({
  bioHolder: {
    background: palette.secondary.main,
  },
  divider: {
    background: palette.secondary.main,
    height: spacing.unit * 2.5,
  },
  holder: {
    padding: '50px 15%',
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

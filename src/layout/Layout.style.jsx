export default ({ palette, spacing }) => ({
  bottomShadow: {
    background:
      'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.10) 50%, rgba(0, 0, 0, 0.40)100%)',
    bottom: 0,
    height: 96,
    left: 0,
    position: 'fixed',
    width: '100%',
  },
  information: {
    background: palette.error.main,
    bottom: 0,
    color: palette.secondary.main,
    margin: spacing.unit * 1,
    padding: spacing.unit * 1.5,
    position: 'fixed',
    right: 0,
    zIndex: 100000000000,
  },
  root: {
    backgroundColor: palette.primary.dark,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    minHeight: '100vh',
  },
})

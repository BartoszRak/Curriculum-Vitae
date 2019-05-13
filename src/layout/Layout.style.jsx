export default ({ palette }) => ({
  bottomShadow: {
    background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.10) 50%, rgba(0, 0, 0, 0.30)100%)',
    width: '100%',
    height: 96,
    position: 'fixed',
    bottom: 0,
    left: 0,
  },
  root: {
    justifyContent: 'flex-start',
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    backgroundColor: palette.primary.dark,
  },
})

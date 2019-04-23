export default ({ spacing, palette }) => ({
  background: {
    height: '100%',
    left: 0,
    opacity: 0.1,
    position: 'absolute',
    top: 0,
    width: '100%',
  },
  root: {
    border: `1px solid ${palette.secondary.main}`,
    height: '100%',
    padding: spacing.unit * 2,
    position: 'relative',
  },
  title: {
    fontSize: '1.2rem',
  },
})

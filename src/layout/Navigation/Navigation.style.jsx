export default ({ spacing }) => ({
  button: {
    marginRight: spacing.unit * 4,
  },
  buttonLabel: {
    fontWeight: 'normal',
    fontSize: '1rem',
  },
  root: {
    boxShadow: 'none',
    padding: spacing.unit * 2,
    background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.15) 0%, rgba(0, 0, 0, 0)100%)',
    margin: 0,
    padding: 0,
  }
})

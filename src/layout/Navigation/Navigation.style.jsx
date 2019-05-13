export default ({ spacing }) => ({
  button: {
    marginRight: spacing.unit * 4,
  },
  buttonLabel: {
    fontSize: '1rem',
    fontWeight: 'normal',
  },
  root: {
    background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0)100%)',
    boxShadow: 'none',
    margin: 0,
    padding: spacing.unit * 2,
  },
})

export default ({ palette, spacing }) => ({
  actions: {
    marginRight: 50,
  },
  button: {
    '&:hover': {
      background: 'rgba(0, 0, 0, 0.05)',
    },
    marginRight: spacing.unit * 4,
  },
  buttonLabel: {
    color: palette.secondary.light,
    fontSize: '1rem',
    fontWeight: 'normal',
    textShadow: '0 0 5px rgba(0, 0, 0, 0.8)',
  },
  root: {
    background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.30) 0%, rgba(0, 0, 0, 0.10) 50%, rgba(0, 0, 0, 0)100%)',
    boxShadow: 'none',
    margin: 0,
    padding: `${spacing.unit * 2}px !important`,
    position: 'fixed',
  },
  toolbar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  }
})

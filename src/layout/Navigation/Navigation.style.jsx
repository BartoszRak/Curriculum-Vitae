export default ({ palette, spacing }) => ({
  actions: {
    marginRight: 50,
  },
  button: {
    '&:hover': {
      background: 'rgba(0, 0, 0, 0.05)',
    },
    borderRadius: 100,
    marginRight: spacing.unit * 4,
    padding: `${spacing.unit * 0.5}px ${spacing.unit * 2}px`,
  },
  buttonLabel: {
    color: palette.secondary.light,
    fontSize: '1rem',
    fontWeight: 'normal',
    textShadow: '0 0 5px rgba(0, 0, 0, 0.8)',
  },
  root: {
    background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.10) 50%, rgba(0, 0, 0, 0)100%)',
    boxShadow: 'none',
    margin: 0,
    padding: `${spacing.unit * 0.5}px !important`,
    position: 'fixed',
  },
  toolbar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  }
})

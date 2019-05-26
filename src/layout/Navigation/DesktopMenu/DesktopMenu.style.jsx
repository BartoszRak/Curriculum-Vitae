export default ({ palette, spacing }) => ({
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
})

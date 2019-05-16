export default ({ breakpoints, palette, spacing }) => ({
  divider: {
    margin: `${spacing.unit * 2}px 0`,
  },
  emoji: {
    fontSize: '2rem',
    [breakpoints.down('md')]: {
      fontSize: '1.5rem',
    },
  },
  image: {
    width: '50%',
    height: '50%',
  },
  imageHolder: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  },
  root: {
    width: '100%',
  },
  subtitle: {
    borderLeft: `4px solid ${palette.primary.main}`,
    marginBottom: spacing.unit * 1,
    marginTop: spacing.unit * 3,
    paddingLeft: spacing.unit * 2,
    [breakpoints.down('md')]: {
      fontSize: '1.8rem',
    },
  },
  title: {
    textShadow: '0 0 5px rgba(0, 0, 0, 0.2)',
    [breakpoints.down('md')]: {
      fontSize: '2rem',
    },
  },
})
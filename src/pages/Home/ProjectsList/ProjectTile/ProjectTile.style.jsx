const absoluteWrapper = {
  height: '100%',
    left: 0,
    position: 'absolute',
    top: 0,
    width: '100%',
}

export default ({ spacing, palette }) => ({
  background: {
    ...absoluteWrapper,
    opacity: 0.1,
    '&:hover': {
      opacity: 1,
    }
  },
  contentWrapper: {
    ...absoluteWrapper,
    padding: spacing.unit * 2,
  },
  description: {
    fontWeight: 'lighter',
    marginTop: spacing.unit * 1,
    fontSize: '1rem',

  },
  linkWrapper: {
    textDecoration: 'none',
    width: '100%',
  },
  root: {
    border: `1px solid ${palette.primary.light}`,
    height: '100%',
    position: 'relative',
    background: palette.primary.main,
    '&:hover > div:first-child': {
      opacity: 0.7,
    } 
  },
  title: {
    fontSize: '1.3rem',
  },
})

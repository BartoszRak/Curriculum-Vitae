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
    opacity: 0,
    '&:hover': {
      opacity: 1,
    }
  },
  contentWrapper: {
    ...absoluteWrapper,
    padding: spacing.unit * 2,
  },
  description: {
    fontWeight: 'normal',
    marginTop: spacing.unit * 1,
    fontSize: '1rem',
  },
  root: {
    textDecoration: 'none',
    width: '100%',
  },
  paper: {
    border: `1px solid ${palette.secondary.light}`,
    height: '100%',
    position: 'relative',
    boxShadow: 'none',
    background: palette.secondary.light,
    '&:hover': {
      border: `1px solid ${palette.primary.main}`,
    },
    '&:hover > div:first-child': {
      opacity: 0,
    }
  },
  title: {
    fontSize: '1.3rem',
    fontWeight: 'normal',
    borderLeft: `4px solid ${palette.primary.main}`,
    paddingLeft: spacing.unit * 1.5,
  },
})

const absoluteWrapper = {
  height: '100%',
  left: 0,
  position: 'absolute',
  top: 0,
  width: '100%',
}

export default ({ spacing, palette }) => ({
  background: {
    '&:hover': {
      opacity: 1,
    },
    ...absoluteWrapper,
    opacity: 0,
  },
  contentWrapper: {
    ...absoluteWrapper,
    padding: spacing.unit * 2,
  },
  description: {
    fontSize: '1rem',
    fontWeight: 'normal',
    marginTop: spacing.unit * 1,
  },
  paper: {
    '&:hover': {
      border: `1px solid ${palette.primary.main}`,
    },
    '&:hover > div:first-child': {
      opacity: 0,
    },
    background: palette.secondary.main,
    border: `1px solid ${palette.secondary.light}`,
    boxShadow: 'none',
    height: '100%',
    position: 'relative',
  },
  root: {
    textDecoration: 'none',
    width: '100%',
  },
  title: {
    borderLeft: `4px solid ${palette.primary.main}`,
    fontSize: '1.3rem',
    fontWeight: 'normal',
    paddingLeft: spacing.unit * 1.5,
  },
})

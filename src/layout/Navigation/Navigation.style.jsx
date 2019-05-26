export default ({ breakpoints, spacing }) => ({
  actions: {
    marginRight: 50,
  },
  desktop: {
    [breakpoints.down('md')]: {
      display: 'none',
    },
  },
  mobile: {
    [breakpoints.up('md')]: {
      display: 'none',
    },
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

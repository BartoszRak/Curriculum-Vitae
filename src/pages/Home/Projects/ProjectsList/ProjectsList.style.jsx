export default ({ breakpoints }) => ({
  cardHolder: {
    alignItems: 'stretch',
    display: 'flex',
    height: 350,
    justifyContent: 'center',

    [breakpoints.down('sm')]: {
      padding: '20px 0px',
      width: '100%',
    },
    [breakpoints.up('sm')]: {
      padding: '30px 20px',
      width: '50%',
    },
    [breakpoints.up('md')]: {
      padding: '40px 25px',
      width: '33.33%',
    },
    [breakpoints.up('xl')]: {
      height: 400,
      width: '25%',
    },
  },
  root: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
})

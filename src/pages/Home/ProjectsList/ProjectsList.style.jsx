export default ({ breakpoints, spacing }) => ({
  cardHolder: {
    alignItems: 'stretch',
    display: 'flex',
    height: 350,
    justifyContent: 'center',
    
    [breakpoints.down('sm')]: {
      width: '100%',
      padding: '20px 0px',
    },
    [breakpoints.up('sm')]: {
      width: '50%',
      padding: '30px 20px',
    },
    [breakpoints.up('md')]: {
      width: '33.33%',
      padding: '40px 25px',
    },
    [breakpoints.up('lg')]: {
      width: '25%',
      padding: '50px 35px',
    },
    [breakpoints.up('xl')]: {
      width: '25%',
      height: 450,
    },
  },
  root: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    margin: '75px 0',
  },
})

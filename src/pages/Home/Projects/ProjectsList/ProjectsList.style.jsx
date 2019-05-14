export default ({ breakpoints }) => ({
  root: {
    columnGap: 40,
    display: 'block',
    marginTop: 40,
    [breakpoints.up('lg')]: {
      columnCount: 4,
    },
    [breakpoints.up('md')]: {
      columnCount: 3,
    },
    [breakpoints.down('md')]: {
      columnCount: 2,
    },
  },
})

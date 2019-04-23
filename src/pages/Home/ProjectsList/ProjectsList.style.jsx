export default ({ spacing }) => ({
  cardHolder: {
    alignItems: 'stretch',
    border: '1px solid red',
    display: 'flex',
    height: 300,
    justifyContent: 'center',
    padding: spacing.unit * 2,
    width: 300,
  },
  root: {
    border: '1px solid red',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
})

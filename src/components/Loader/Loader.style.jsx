import { makeStylesWithProps } from '~hooks'

export default makeStylesWithProps((theme, { size }) => ({
  fill: {
    flex: '1 1 auto',
    height: '100%',
  },
  linearBar: {
    height: size,
    margin: '2px 0',
  },
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
}))

import { makeStyles } from '@material-ui/core'

function makeStylesWithProps(style, options) {
  return function getStyleHookWithProps(props) {
    return makeStyles(theme => style(theme, props), options)()
  }
}

export default makeStylesWithProps

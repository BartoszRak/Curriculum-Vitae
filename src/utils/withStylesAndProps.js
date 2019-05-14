import React from 'react'
import { withStyles } from '@material-ui/core'

export function withStylesAndProps(styles) {
  return function withComponent(Component) {
    return function withProps(props) {
      const fullProps = {
        ...Component.defaultProps,
        ...props,
      }
      delete fullProps.children
      const NewComponent = withStyles(theme => styles(theme, fullProps))(Component)
      return <NewComponent {...props} />
    }
  }
}

export default withStylesAndProps

import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { LinearProgress } from '@material-ui/core'

import withStylesAndProps from '~hocs/withStylesAndProps'

import style from './Loader.style'

export function Loader({
  classes, className, disable, fill, children,
}) {
  const barProps = {
    classes: {
      root: classes.linearBar,
    },
  }

  return disable ? (
    children
  ) : (
    <div className={classNames(classes.root, { [classes.fill]: fill }, className)}>
      <LinearProgress {...barProps} />
      <LinearProgress {...barProps} variant="query" />
      <LinearProgress {...barProps} />
      <LinearProgress {...barProps} variant="query" />
    </div>
  )
}

Loader.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  classes: PropTypes.object,
  className: PropTypes.string,
  disable: PropTypes.bool,
  fill: PropTypes.bool,
  size: PropTypes.number,
}

Loader.defaultProps = {
  children: null,
  size: 2,
}

export default withStylesAndProps(style)(Loader)

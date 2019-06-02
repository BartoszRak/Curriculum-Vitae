import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { LinearProgress } from '@material-ui/core'

import useStyleWithProps from './Loader.style'

export function Loader({ className, disabled, fill, children, size }) {
  const classes = useStyleWithProps({ size })
  const barProps = {
    'aria-hidden': true,
    classes: {
      root: classes.linearBar,
    },
    role: 'progressbar',
  }

  return disabled ? (
    children
  ) : (
    <div
      aria-busy
      aria-label="Loading content"
      className={classNames(classes.root, { [classes.fill]: fill }, className)}
    >
      <LinearProgress {...barProps} />
      <LinearProgress {...barProps} variant="query" />
      <LinearProgress {...barProps} />
      <LinearProgress {...barProps} variant="query" />
    </div>
  )
}

Loader.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  className: PropTypes.string,
  disabled: PropTypes.bool,
  fill: PropTypes.bool,
  size: PropTypes.number,
}

Loader.defaultProps = {
  children: null,
  size: 2,
}

export default Loader

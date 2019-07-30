import React from 'react'
import PropTypes from 'prop-types'

import useStyle from './Offer.style'

export function Offer({ classes: overridingClasses }) {
  const classes = { ...useStyle(), ...overridingClasses }
  return <div>offer</div>
}

Offer.propTypes = {
  classes: PropTypes.object,
}

export default Offer

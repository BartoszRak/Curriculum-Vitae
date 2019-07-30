import React from 'react'
import PropTypes from 'prop-types'
import { Toolbar } from '@material-ui/core'
import { injectIntl } from 'react-intl'

import ResponsiveMenu from '~components/ResponsiveMenu'
import { useScrollTo, useScrollRangeHighlighting } from '~hooks'

import useStyle from './HomeTopbar.style'

export function HomeTopbar({ classes: overridingClasses, intl }) {
  const classes = { ...useStyle(), ...overridingClasses }
  const { formatMessage } = intl
  const { scrollTo } = useScrollTo(-300)
  const itemNames = ['commercial', 'projects', 'bio', 'skills', 'workflow', 'hobbies']

  //const { activeElement } = useScrollRangeHighlighting(itemNames)
  const items = itemNames.map(itemName => ({
    active: false, //Boolean(activeElement.id === itemName),
    name: formatMessage({ id: `layout.navigation.homeTopbar.items.${itemName}` }),
    props: {
      onClick: () => {
        const el = document.querySelector(`#${itemName}`)
        scrollTo(el)
      },
    },
  }))

  return (
    <Toolbar className={classes.toolbar}>
      <ResponsiveMenu items={items} />
    </Toolbar>
  )
}

HomeTopbar.propTypes = {
  classes: PropTypes.object,
  intl: PropTypes.object,
}

export default injectIntl(HomeTopbar)

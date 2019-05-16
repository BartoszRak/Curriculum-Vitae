import React from 'react'
import PropTypes from 'prop-types'
import { withStyles, Select, MenuItem } from '@material-ui/core'

import { useSelect } from '~hooks'

import style from './LanguageSelect.style'

export function LanguageSelect({ classes }) {
  const { selected, setSelected } = useSelect('en')
  return (
    <div className={classes.root}>
      <Select
        name="Language"
        onChange={evt => {
          setSelected(evt.target.value)
        }}
        value={selected}
        variant="contained"
      >
        <MenuItem value="en">English</MenuItem>
        <MenuItem value="pl">Polish</MenuItem>
      </Select>
    </div>
  )
}

LanguageSelect.propTypes = {
  classes: PropTypes.object,
}

export default withStyles(style)(LanguageSelect)

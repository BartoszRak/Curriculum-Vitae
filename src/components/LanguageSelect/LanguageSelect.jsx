import React from 'react'
import PropTypes from 'prop-types'
import { withStyles, Select, MenuItem } from '@material-ui/core'

import { LanguageContext } from '~services/Internacionalization'

import style from './LanguageSelect.style'

export function LanguageSelect({ classes }) {
  return (
    <LanguageContext.Consumer>
      {({ language, setLanguage }) => (
        <div className={classes.root}>
          <Select
            className={classes.select}
            classes={{
              root: classes.selectRoot,
              icon: classes.selectIcon,
              selectMenu: classes.selectMenu,
            }}
            MenuProps={{
              classes: {
                paper: classes.menuPaper,
              },
            }}
            name="Language"
            onChange={evt => {
              setLanguage(evt.target.value)
            }}
            value={language}
            variant="standard"
          >
            <MenuItem value="en">English</MenuItem>
            <MenuItem value="pl">Polish</MenuItem>
          </Select>
        </div>
      )}
    </LanguageContext.Consumer>
  )
}

LanguageSelect.propTypes = {
  classes: PropTypes.object,
}

export default withStyles(style)(LanguageSelect)

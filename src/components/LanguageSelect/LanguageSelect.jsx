import React, { useContext } from 'react'
import { Select, MenuItem } from '@material-ui/core'
import { FormattedMessage } from 'react-intl'

import LanguageContext from '~services/Internacionalization'

import useStyle from './LanguageSelect.style'

export function LanguageSelect() {
  const classes = useStyle()
  const { language, setLanguage } = useContext(LanguageContext)
  return (
    <div className={classes.root}>
      <Select
        aria-label="Choose language"
        className={classes.select}
        classes={{
          icon: classes.selectIcon,
          root: classes.selectRoot,
          selectMenu: classes.selectMenu,
        }}
        data-testid="language-select"
        MenuProps={{
          classes: {
            paper: classes.menuPaper,
          },
        }}
        name="Language"
        onChange={evt => {
          setLanguage(evt.target.value)
        }}
        value={language || 'en'}
        variant="standard"
      >
        <MenuItem id="language-item-en" value="en">
          <FormattedMessage id="components.languageSelect.languages.en" />
        </MenuItem>
        <MenuItem id="language-item-pl" value="pl">
          <FormattedMessage id="components.languageSelect.languages.pl" />
        </MenuItem>
      </Select>
    </div>
  )
}

export default LanguageSelect

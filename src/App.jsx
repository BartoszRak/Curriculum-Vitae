import React, { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { CssBaseline } from '@material-ui/core'
import { addLocaleData, IntlProvider } from 'react-intl'
import { flatten } from 'flat'
import localeEn from 'react-intl/locale-data/en'
import localePl from 'react-intl/locale-data/pl'

import withMuiTheme from '~theme/withMuiTheme'
import Layout from './layout'
import Loader from '~components/Loader'
import PreventInternetExplorer from '~components/PreventInternetExplorer'
import { usePayloadLoading, useKeyboardCapture } from '~hooks'
import LanguageContext from '~services/Internacionalization'
import ApplicationContext from '~services/AppState'
import messagesPl from '~services/Internacionalization/translations/pl.json'
import messagesEn from '~services/Internacionalization/translations/en.json'

import useStyle from './App.style'

const messages = {
  en: flatten(messagesEn),
  pl: flatten(messagesPl),
}
addLocaleData([...localeEn, ...localePl])
export function App() {
  const classes = useStyle()
  const { loading } = usePayloadLoading()
  const [language, setLanguage] = useState('en')
  const [mode, setMode] = useState('normal')

  useKeyboardCapture([
    command => {
      if (command === 'snake') setMode('play')
      if (command === 'stop') setMode('normal')
    },
  ])

  return (
    <BrowserRouter>
      <React.Fragment>
      <LanguageContext.Provider
        value={{
          language,
          setLanguage,
        }}
      >
        <LanguageContext.Consumer>
          {({ language: chosenLanguage }) => (
            <IntlProvider
              key={chosenLanguage}
              locale={chosenLanguage}
              messages={messages[chosenLanguage]}
            >
              <Loader className={classes.loader} disabled={!loading}>
                <PreventInternetExplorer>
                  <CssBaseline />
                  <ApplicationContext.Provider value={{ mode, setMode }}>
                    {mode === 'normal' && <Layout />}
                    {mode === 'play' && <div>lets play</div>}
                  </ApplicationContext.Provider>
                </PreventInternetExplorer>
              </Loader>
            </IntlProvider>
          )}
        </LanguageContext.Consumer>
      </LanguageContext.Provider>
      </React.Fragment>
    </BrowserRouter>
  )
}

export default withMuiTheme(App)

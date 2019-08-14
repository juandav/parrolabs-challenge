import React, { Fragment } from "react"
import { Provider } from "react-redux"
import { PersistGate } from 'redux-persist/integration/react'
import { IntlProvider, addLocaleData } from "react-intl"
import { BrowserRouter as Router, Route } from "react-router-dom"
import enLocaleData from "react-intl/locale-data/en"
import esLocaleData from "react-intl/locale-data/es"
import translations from "i18n/locales/"
import { connect } from "react-redux"
import makeStore from "store/make-store"
import ErrorBoundary from "helpers/error-boundary"

//@@ Pages
import IndexPage from "pages/index"

addLocaleData(enLocaleData)
addLocaleData(esLocaleData)

let Root = props => {
  const messages = translations[props.locale]
  return (
    <IntlProvider locale={props.locale} key={props.locale} messages={messages}>
      <ErrorBoundary>
        <Router>
          <Fragment>
            <Route exact path="/" component={IndexPage} />
          </Fragment>
        </Router>
      </ErrorBoundary>
    </IntlProvider>
  )
}
Root = connect(
  ({meta:{locale}}) => ({ locale }), 
  null
)(Root)

const App = () => {
  const {store, persistor} = makeStore()
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Root />
      </PersistGate>
    </Provider>
  )
}

export default App
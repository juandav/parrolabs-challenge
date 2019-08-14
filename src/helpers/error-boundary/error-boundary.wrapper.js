import React, {Component} from 'react'
import { connect } from "react-redux"
import { injectIntl } from 'react-intl'
import {setError} from 'store/meta/actions'
import messages from 'helpers/error-boundary/error-boundary.i18n.js'
import pandaImg from "assets/images/logo-pd.png"
import Error404 from "assets/images/logo-pd-404.png"

class ErrorBoundary extends Component {

  componentDidCatch(error, info) {
    console.error(error, info)
    this.props.setError({hasError: true})
  }

  render() {
    const {intl:{formatMessage}} = this.props
    if (this.props.hasError) {
      return (
        <div className="panda-body">
          <div className="panda-wrapper">
            <div className="panda-wrapper__container">
              <header className="panda-wrapper__header">
                <div className="panda-wrapper__idea">
                  <img src={Error404} alt="Error" />
                </div>
                <div className="panda-wrapper__dot"></div>
                <div className="panda-wrapper__logo-panda">
                  <img src={pandaImg} alt="Pandita" />
                </div>
              </header>
              <h2 className="panda-wrapper__title">{formatMessage(messages.title)}</h2>
              <p className="panda-wrapper__description">
                {formatMessage(messages.description)}
              </p>
              <div className="panda-wrapper__arrow"></div>
            </div>
          </div>
        </div>
      )
    }
    return this.props.children
  }
}

export default connect(
  ({meta:{hasError}}) => ({ hasError }), 
  ({setError})
)(injectIntl(ErrorBoundary))
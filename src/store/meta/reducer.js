import { handleActions } from 'redux-actions'
import * as types from './action-types'

const INITIAL_STATE = {
  locale: 'en',
  hasError: false
}

export default handleActions({
  [types.SET_LANGUAGE]: changeLanguage,
  [types.SET_ERROR]: setError
}, INITIAL_STATE)

function changeLanguage(state = INITIAL_STATE, {payload:locale}) {
  return {
    ...state,
    locale,
  }
}
function setError(state = INITIAL_STATE, {payload:{hasError}}) {
  return {
    ...state,
    hasError,
  }
}
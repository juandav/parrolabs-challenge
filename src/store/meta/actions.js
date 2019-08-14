import { createAction } from 'redux-actions'
import * as types from './action-types'

export const changeLanguage = createAction(types.SET_LANGUAGE)
export const setError = createAction(types.SET_ERROR)
import {combineReducers} from 'redux'
import meta from 'store/meta/reducer'
import movies from 'store/movies/reducer'

export const rootReducer = combineReducers({ meta, movies })
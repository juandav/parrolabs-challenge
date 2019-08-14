import {combineEpics} from 'redux-observable'
import {moviesEpics} from 'store/movies/epics'

export const rootEpic = combineEpics(moviesEpics,)
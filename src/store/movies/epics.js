import {
  combineEpics, 
  ofType
} from 'redux-observable'
import {
  mergeMap,
  catchError,
  switchMap
} from 'rxjs/operators'
import { request } from 'universal-rxjs-ajax'
import { of, concat } from 'rxjs'
import * as types from 'store/movies/action-types'
import * as actions from 'store/movies/actions'
import {API_URL} from 'config/constants'

const getFetchMoviesOptions = () => ({
  url: `${API_URL}/movie/popular`,
  method: "GET"
})

const fetchMoviesEpic = action$ => action$.pipe(
  ofType(types.FETCH_MOVIES),
  switchMap(_action => {
    const req = request(getFetchMoviesOptions())
    .pipe(
      mergeMap(
        response => concat(
          of(actions.finishLoadingMovies()),
          of(actions.fetchMoviesSuccess(response))
        )
      ),
      catchError(
        error => concat(
          of(actions.finishLoadingMovies()),
          of(actions.fetchMoviesError(error))
        )
      )
    )
    return concat(
      of(actions.startLoadingMovies()), 
      req
    )
  })
)

export const moviesEpics = combineEpics(
  fetchMoviesEpic,
)
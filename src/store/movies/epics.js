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
import { API_URL, API_KEY } from 'config/constants'

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

const getMovieDetailOptions = (movie_id) => ({
  url: `${API_URL}/movie/${movie_id}?api_key=${API_KEY}&language=en-US`,
  method: "GET"
})


const getMovieDetailEpic = action$ => action$.pipe(
  ofType(types.GET_MOVIE_DETAIL),
  switchMap(action => {
    const req = request(getMovieDetailOptions(action.payload))
    .pipe(
      mergeMap(
        response => concat(
          of(actions.finishLoadingMovieDetail()),
          of(actions.getMovieDetailSuccess(response))
        )
      ),
      catchError(
        error => concat(
          of(actions.finishLoadingMovieDetail()),
          of(actions.getMovieDetailError(error))
        )
      )
    )
    return concat(
      of(actions.startLoadingMovieDetail()), 
      req
    )
  })
)

export const moviesEpics = combineEpics(
  fetchMoviesEpic,
  getMovieDetailEpic
)
import { createAction } from 'redux-actions'
import * as types from 'store/movies/action-types'

//@@ LIST ALL MOVIES
export const fetchMovies = createAction(types.FETCH_MOVIES)
export const fetchMoviesSuccess = createAction(types.FETCH_MOVIES_SUCCESS, ({response}) => response)
export const fetchMoviesError = createAction(types.FETCH_MOVIES_ERROR)
export const startLoadingMovies = createAction(types.START_LOADING_MOVIE)
export const finishLoadingMovies = createAction(types.FINISH_LOADING_MOVIE)

//@@ SEARCH MOVIE
export const changeSearchTerm = createAction(types.CHANGE_SEARCH_TERM)

//@@ FAVORITE MOVIE
export const addFavoriteMovie = createAction(types.ADD_FAVORITE_MOVIE)
export const removeFavoriteMovie = createAction(types.REMOVE_FAVORITE_MOVIE)

//@@ DETAIL MOVIE
export const getMovieDetail = createAction(types.GET_MOVIE_DETAIL)
export const getMovieDetailSuccess = createAction(types.GET_MOVIE_DETAIL_SUCCESS, ({response}) => response)
export const getMovieDetailError = createAction(types.GET_MOVIE_DETAIL_ERROR)
export const startLoadingMovieDetail = createAction(types.START_LOADING_MOVIE_DETAIL)
export const finishLoadingMovieDetail = createAction(types.FINISH_LOADING_MOVIE_DETAIL)

//@@ MOVIE REVIEWS
export const getMovieReviews = createAction(types.GET_MOVIE_REVIEWS)
export const getMovieReviewsSuccess = createAction(types.GET_MOVIE_REVIEWS_SUCCESS, ({response}) => response)
export const getMovieReviewsError = createAction(types.GET_MOVIE_REVIEWS_ERROR)
export const startLoadingMovieReviews = createAction(types.START_LOADING_MOVIE_REVIEWS)
export const finishLoadingMovieReviews = createAction(types.FINISH_LOADING_MOVIE_REVIEWS)
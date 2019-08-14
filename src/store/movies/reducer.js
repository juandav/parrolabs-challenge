import { handleActions } from 'redux-actions'
import update from 'immutability-helper'
import * as types from 'store/movies/action-types'

const INITIAL_STATE = {
  movies: null,
  loading: false,
  error: null,
  searchTerm: '',
  favoriteMovies: []
}

export default handleActions({
  [types.FETCH_MOVIES_SUCCESS]: setMovies,
  [types.FETCH_MOVIES_ERROR]: setError,
  [types.START_LOADING_MOVIE]: startLoading,
  [types.FINISH_LOADING_MOVIE]: finishLoading,
  [types.CHANGE_SEARCH_TERM]: changeSearchTerm,
  [types.ADD_FAVORITE_MOVIE]: addFavoriteMovie,
  [types.REMOVE_FAVORITE_MOVIE]: removeFavoriteMovie
}, INITIAL_STATE)


function setMovies(state = INITIAL_STATE, {payload}) {
  return {
    ...state,
    movies: payload.results
  }
}

function setError(state = INITIAL_STATE, {payload:{error}}) {
  return {
    ...state,
    error
  }
}

function startLoading(state) {
  return {
    ...state,
    loading: true,
  }
}
function finishLoading(state) {
  return {
    ...state,
    loading: false
  }
}

function changeSearchTerm(state, {payload}) {
  return {
    ...state,
    searchTerm: payload
  }
}

function addFavoriteMovie(state, {payload}) {
  return {
    ...state,
    favoriteMovies: update(state.favoriteMovies, {$push: [payload]})
  }
}

function removeFavoriteMovie(state, {payload}) {
  const index = state.favoriteMovies.indexOf(payload);
  return {
    ...state,
    favoriteMovies: update(state.favoriteMovies, {$splice: [[index, 1]]})
  }
}
import React, { Component, Fragment } from 'react'
import { connect } from "react-redux"
import { changeLanguage } from 'store/meta/actions'
import { 
  fetchMovies, 
  changeSearchTerm,
  addFavoriteMovie,
  removeFavoriteMovie,
  getMovieDetail
} from 'store/movies/actions'
import Bar from 'components/movies/bar'
import Search from 'components/movies/search'
import List from 'components/movies/list'
import Spinner from 'components/shared/spinner'

class IndexPage extends Component {
  componentDidMount() {
    this.props.fetchMovies()
  }
  changeLanguage = e => {
    this.props.changeLanguage(e.target.value)
  }
  handleToChangeSearchTerm = e => {
    this.props.changeSearchTerm(e.target.value)
  }
  onFavoriteClick = movie_id => _e => {
    if(!this.props.favoriteMovies.includes(movie_id)) {
      this.props.addFavoriteMovie(movie_id)
    } else {
      this.props.removeFavoriteMovie(movie_id)
    }
  }
  onMovieDetail = movie_id => _e => {
    this.props.getMovieDetail(movie_id)
  }
  render() {
    return (
      <Fragment>
        <Bar unsetToken={this.handleUnsetToken}/>
        <Search changeSearchTerm={this.handleToChangeSearchTerm} />
        {this.props.loading? 
          <Spinner />: 
          <List 
            searchTerm={this.props.searchTerm} 
            movies={this.props.movies}
            favorites={this.props.favoriteMovies}
            onFavoriteClick={this.onFavoriteClick}
            onMovieDetail={this.onMovieDetail}
            movieDetail={this.props.movieDetail}
          />}
          {/** Acá seria mejor el modal, pero para efectos de usar hooks en este challenge se usara en el component List */}
      </Fragment>
    )
  }
}

const mapStateToProps = ({ 
  movies: {
    movies,
    loading,
    searchTerm,
    favoriteMovies,
    movieDetail,
  },
}) => ({ 
  movies,
  loading,
  searchTerm,
  favoriteMovies,
  movieDetail,
})

export default connect( 
  mapStateToProps, 
  ({changeLanguage, fetchMovies, changeSearchTerm, addFavoriteMovie, removeFavoriteMovie, getMovieDetail})
)(IndexPage)
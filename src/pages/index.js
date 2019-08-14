import React, { Component, Fragment } from 'react'
import { connect } from "react-redux"
import { changeLanguage } from 'store/meta/actions'
import { 
  fetchMovies, 
  changeSearchTerm,
  addFavoriteMovie,
  removeFavoriteMovie 
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
  onFavoriteClick = id => _e => {
    if(!this.props.favoriteMovies.includes(id)) {
      this.props.addFavoriteMovie(id)
    } else {
      this.props.removeFavoriteMovie(id)
    }
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
          />}
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
  },
}) => ({ 
  movies,
  loading,
  searchTerm,
  favoriteMovies,
})

export default connect( 
  mapStateToProps, 
  ({changeLanguage, fetchMovies, changeSearchTerm, addFavoriteMovie, removeFavoriteMovie})
)(IndexPage)
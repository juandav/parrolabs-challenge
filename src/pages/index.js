import React, { Component, Fragment } from 'react'
import { connect } from "react-redux"
import { changeLanguage } from 'store/meta/actions'
import { fetchMovies, changeSearchTerm } from 'store/movies/actions'
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
  },
}) => ({ 
  movies,
  loading,
  searchTerm,
})

export default connect( 
  mapStateToProps, 
  ({changeLanguage, fetchMovies, changeSearchTerm})
)(IndexPage)
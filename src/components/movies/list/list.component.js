import React from 'react'
import { emojify } from 'react-emojione'

const List = props => {
  const movies = (props.movies || []).filter(item => item.original_title.toLowerCase().includes(props.searchTerm))
  return (
    <div className="movie">
      {(movies || []).map(item => (
        <div key={item.id} className="movie__card">
          <img className="movie__image" src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${item.backdrop_path}`} alt="product" />
          <div className="movie__content">
            <span className="movie__name">{item.original_title}</span>
            <br />
            <span className="movie__vote">{item.vote_average}</span>
            <hr className="movie__divider" />
            <p className="movie__description">{item.overview}</p>
            <hr className="movie__divider" />
            <span className="movie__favorite" onClick={props.onFavoriteClick(item.id)}>
              { props.favorites.includes(item.id) ? emojify(':heart:') : emojify(':black_heart:') }
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default List
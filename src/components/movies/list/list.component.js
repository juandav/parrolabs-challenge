import React, { useState } from 'react'
import { emojify } from 'react-emojione'
import Modal from 'react-responsive-modal'

const List = props => {
  const [open, setOpen] = useState(false)
  const movies = (props.movies || []).filter(item => item.original_title.toLowerCase().includes(props.searchTerm))

  return (
    <div className="movie">
      {(movies || []).map(item => (
        <div key={item.id} className="movie__card">
          <img className="movie__image" src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${item.backdrop_path}`} alt="product" onClick={() => {
            props.onMovieDetail(item.id)()
            setOpen(true)
          }}/>
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
      { props.movieDetail&&
        <Modal open={open} onClose={() => setOpen(false)} center>
          <h2>{props.movieDetail.original_title}</h2>
          <p>
            {props.movieDetail.overview}
          </p>
          <div>
            <b>{`Genres: `}</b>
            {props.movieDetail.genres.map(genre => <span key={genre.id}>{genre.name + ', '}</span>)}
          </div>
        </Modal>
      }
    </div>
  )
}

export default List
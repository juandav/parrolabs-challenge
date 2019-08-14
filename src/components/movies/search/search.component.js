import React from 'react'

const Search = props => (
  <div className="search">
    <div className="search__inside">
      <img className="search__icon" src="https://img.icons8.com/dusk/64/000000/search.png" alt="search"></img>
      <input
        type="search"
        name="searchbox"
        placeholder="¿Qué estás buscando?"
        autoComplete="off"
        onChange={props.changeSearchTerm}
        className="search__input"
      />
    </div>
  </div>
)

export default Search
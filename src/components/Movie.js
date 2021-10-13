import React from 'react'

const Movie = ({ title, poster, plot, genre, director }) => (
  <div className="movie">
    <img src={poster} alt={title} />
    <div className="movie-info">
      <h3>{title}</h3>
      <span></span>
    </div>
    <div className="movie-overview">
      <h3>Plot:</h3>
      <p>{plot}</p>
      <h4>Genre:</h4>
      <p>{genre}</p>
      <h4>Director:</h4>
      <p>{director}</p>
    </div>
  </div>
);

export default Movie;

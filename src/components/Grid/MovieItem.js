import React from 'react'

const MovieItem = ({ movie }) => {
    console.log(movie)
    return (
        <div>
        <img src={movie.poster} alt='movie poster' />
            <h1>{movie.title}</h1>
            <h3>{movie.plot}</h3>
            <h5>{movie.genre}</h5>
            <h4>{movie.director}</h4>

        </div>
    )
}

export default MovieItem

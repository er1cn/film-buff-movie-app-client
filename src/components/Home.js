import React, { useState, useEffect } from 'react'
import Movie from '../components/Movie'
import { BASE_URL } from '../config';

function Home() {
 
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch(`${BASE_URL}movies`)
        .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setMovies(data);
        })
    }, [])


    return (
      <div>
        {movies.map((movie) => (
          <Movie />
        ))}
      </div>
    );
}

export default Home

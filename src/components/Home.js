import React, { useState, useEffect } from 'react'
import Movie from '../components/Movie'
import { BASE_URL } from '../config';




function Home() {
 
    const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchterm] = useState('');


    useEffect(() => {
        fetch(`${BASE_URL}movies`)
        .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setMovies(data);
        })
    }, [])

    const handleOnSubmit = (e) => {
        e.preventDefault();
      
        if (searchTerm) {
          fetch(`${BASE_URL}movies`)
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              setMovies(data);
            });

          setSearchterm("");
        }
    };

    const handleOnChange = (e) => {
        setSearchterm(e.target.value);
    }


    return (
      <>
        
        <header>
          <form onSubmit={handleOnSubmit}>
                    <input
                        className="Search"
                        type="text"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={handleOnChange}
                    />
          </form>
        </header>
       <div className="movie-container">
          {movies.length > 0 &&
            movies.map((movie) => 
            <Movie key={movie.id} {...movie} />
          )}
        </div>
      </>
    );
}

export default Home

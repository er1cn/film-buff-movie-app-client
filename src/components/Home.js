import React, { useState, useEffect } from 'react'
import Movie from '../components/Movie'
import { BASE_URL } from '../config';
import Header from './Header';



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
          fetch(`${BASE_URL}movies + searchTerm`)
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
        <Header />
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
          {movies.map((movie) => (
            <Movie key={movie.id} {...movie} />
          ))}
        </div>
      </>
    );
}

export default Home

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from '../config'
import Grid from './Grid';
import Search from './Header/Search';


function Home() {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true);
    const [query, setQuery] = useState('');

    
    


    useEffect(() => {
        const fetchMovies = async () => {
            const result = await axios.get(`${BASE_URL}movies?title=${query}`);
            
            console.log(result.data)
            setMovies(result.data)
            setLoading(false)
        }

        fetchMovies()

    }, [query]);

    

    console.log(movies)

    


    return (
        <>
            <Search getQuery={(q) => setQuery(q)}/>
            <Grid
                header='Popular Movies'
                loading={loading}
                movies={movies}

            />
            
        </>
    )
};
  

   

export default Home;
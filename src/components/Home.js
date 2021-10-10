import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import { POSTER_SIZE, BACKDROP_SIZE, BASE_URL } from '../config';

import NoImage from '../images/no_image.jpg';

const Home = () => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        axios("https://film-buff-movie-app-backend.herokuapp.com/movies")
            .then(response => {
                setData(response.data)
            })
            .catch(error => {
                console.error("Error fetching data:", error);
                setError(error);
            })
            .finally(() => {
                setLoading(false);
            })
    }, []);

    if (loading) return "Loading...";
    if (error) return "Error!";

    return <div>Home Page</div>;

};

export default Home;
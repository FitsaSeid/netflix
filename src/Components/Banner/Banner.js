import React, { useState, useEffect } from 'react';
import subURL, { baseURL } from '../../API_Request/urls';
import './Banner.css'

export default function Banner() {

    const [movie, setMovie] = useState(['']);

    const img_base_URL = 'https://image.tmdb.org/t/p/original/';

    useEffect(() => {
        baseURL.get(`${subURL.fetchNetflixOriginals}`).
            then(res => {
                let index = Math.floor(Math.random() * res.data.results.length);
                setMovie(res?.data.results[index]);
            })
    }, [])

    console.log(movie)
    function wordLimiter(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }
    return (

        <div className="banner" style={{
            backgroundImage: `url(${img_base_URL}${movie.backdrop_path})`,
            backgroundSize: "cover",
            backgroundPosition: "center center"
        }}>

            <div className="banner-meta-wrapper">

                <div className="banner-title">
                    <h1>{movie.original_name}</h1>
                </div>

                <div className="banner-buttons">
                    <button>Play</button>
                    <button>My List</button>
                </div>

                <div className="banner-description">
                    <p>{wordLimiter(movie?.overview, 150)}</p>
                </div>
            </div>
            <div className='banner-fade'></div>

        </div>

    )
}

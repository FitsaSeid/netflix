import React, { useState, useEffect } from 'react';

import { baseURL } from '../../API_Request/urls';


export default function Row(props) {

    let [movies, setMovie] = useState([]);

    const img_base_URL = 'https://image.tmdb.org/t/p/w500';


    useEffect(() => {
        baseURL.get(props.fetchURL).
            then((res) => {
                console.log(res.data.results);
                setMovie(res.data.results);
            })
    }, [props.fetchURL])


    return (
        <div>
            <h1 className='row-title'>{props.title}</h1>
            <div className="row">
                <div className="row-posters">
                    {
                        movies?.map((data) => {
                            let poster_items = (
                                <img className={`row-poster ${props.largePoster && "row-large-poster"}`}
                                    src={`${img_base_URL}${props.largePoster ? data.poster_path : data.backdrop_path} `} alt="" />

                            );

                            return poster_items;
                        }
                        )
                    }
                </div>

            </div>
        </div>
    )
}

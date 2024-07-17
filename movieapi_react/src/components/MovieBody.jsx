import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';



const apiRoute = "https://www.omdbapi.com/?apikey=7d7109ef&i=";

const MovieBody = () => {
    const [movie_data, setMovie_data] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const { id } = useParams(); 
    console.log(id)

    

    async function getIndivMovie() {  
        setLoaded(false);
        if (id) {
            try {
                const {data}  = await axios.get(apiRoute + ( id )); 
                setMovie_data(data)
                console.log(movie_data)

            }
            catch (error) {
                console.log(error);
            }
            setLoaded(true);
        } 
    }

    useEffect(() => {
        getIndivMovie();
    }, [ ])

  return (
    <>
        <div className="movies__body">
            <div className="movies__container">
                <div className="movies_poster">
                    <img src={movie_data.Poster} alt="Movie Poster" />
                </div>
                <div className="movies__data">
                    <div className="movies__title">
                        {movie_data.Title}
                    </div>
                    <div className="movies__info">
                        <div className="movies__info-heading">
                            Summary
                        </div>
                        <div className="movies__info-body"> 
                            {movie_data.Plot}
                        </div>
                    </div>
                    <div className="movies__info">
                        <div className="movies__info-heading">
                            Ratings
                        </div>
                        <div className="movies__info-body"> 
                            <span className="scores-site"> IMDB: </span> {movie_data.imdbRating}
                        </div>
                        <div className="movies__info-body"> 
                            <span className="scores-site"> Metascore: </span> {movie_data.Metascore}
                        </div>
                    </div>
                    <div className="movies__info">
                        <div className="movies__info-heading">
                            Actors
                        </div>
                        <div className="movies__info-body"> 
                            {movie_data.Actors}
                        </div>
                    </div>
                    <div className="movies__info">
                        <div className="movies__info-heading">
                            Writers
                        </div>
                        <div className="movies__info-body"> 
                            {movie_data.Writer}
                        </div>
                    </div>
                    
                </div>
                
            </div>
        </div>
        
    </>
  )
}

export default MovieBody
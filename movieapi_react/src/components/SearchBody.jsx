import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';



const apiRoute = "https://www.omdbapi.com/?apikey=7d7109ef&s=";

const SearchBody = () => {
    const [results, setResults] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const { id } = useParams(); 

    const navigate = useNavigate();

    async function getResults(userInput) {  
        setLoaded(false);
        if (id) {
            try {
                const { data } = await axios.get(apiRoute + (userInput || id));
                const searchData = data.Search;
                setResults(searchData.slice(0, 6));
            }
            catch (error) {
                console.log(error);
            }
            setLoaded(true);
        } 
    }
    
    function updateResults(userOption) {
        if (userOption === "Newest") {
            let organizedArray = (results.sort((a, b) => b.Year - a.Year))
            setResults([...organizedArray])
        
        }
        else if (userOption === "Oldest") {
            let organizedArray = (results.sort((a, b) => a.Year - b.Year))
            setResults([...organizedArray])
        }
    } 


    useEffect(() => {
        getResults();
    }, [ id ])
  return (
    <>
    <header id="movie__result">
        <div className="movie__container">
            { id ? 
            <div className="movie__search"> 
                <div className="movie__search-right"> Results: </div>
                <div className="movie__search-left"> 
                    <form>
                        <label> Sort by: </label>
                        <select onChange={(e) => updateResults(e.target.value)} className="search__select" name="sortBy" id="sortBy">
                            <option value="Oldest"> Oldest </option>
                            <option value="Newest"> Newest </option>
                        </select>
                    </form>
                </div>
            
            </div>
       
        :
        <div className="movie__search"> Search a movie </div>}
        
            <div className="movie">
            { loaded ? results.map((movie) => (
                    <div onClick={() => navigate(`/movies/${movie.imdbID}`)} key={movie.imdbID} className="movie__item"> 
                        <img src={movie.Poster} className="movie__img" alt={movie.Title}/> 
                        <div className="movie__text"> 
                            <div className="movie__title"> Title: {movie.Title} </div>
                            <div className="movie__year"> Year: {movie.Year} </div>
                            <div className="movie__year"> imdbID: {movie.imdbID} </div>
                        </div>
                    </div> 
                )) : 
                [...Array(id ? 6 : 0)].map((_, index) => (
                    <div key={index} className="movie__item">
                        <div className="movie__img-skeleton"> </div>
                        <div className="movie__text">
                            <div className="movie__title"> Title:  </div>
                            <div className="movie__year"> Year:  </div>
                            <div className="movie__year"> imdbID: </div>
                        </div>
                       
                    </div>
                 
                ))
            }
            </div>
        </div>
    </header>
    </>
  )
}

export default SearchBody
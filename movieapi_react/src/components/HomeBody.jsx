import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import logo from "../assets/undraw_horror.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import "../styles.css";



const HomeBody = () => {
    const [search, setSearch] = useState();
    const navigate = useNavigate();

  return (
    <>
        <div className="header__container">
            <div className="title">
                <span className="blue"> FILMS AND MOVIES </span>
            </div>
            <div className="header__sub-title sub-title">
                FIND YOUR NEXT <span className="blue">"THING"</span> TO BINGE
            </div>
            <div className="search__container">
                <input placeholder="Search" onChange={(event) => setSearch(event.target.value)} onKeyDown={(event) => event.key=== 'Enter' && navigate(`/search/${search}`)} className="search__field" /> 
                <button className="search__button"> 
                    <FontAwesomeIcon icon={faMagnifyingGlass} onClick={() => navigate(`/search/${search}`)} />
                </button>
            </div>
                
            <img className="header__img" src={logo} alt="Two individuals on couch preparing for a movie." /> 
        </div>
    </>
  )
}

export default HomeBody
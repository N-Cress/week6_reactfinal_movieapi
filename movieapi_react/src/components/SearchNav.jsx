import React, { useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import logo from "../assets/undraw_award.svg";
import { Link, useNavigate } from 'react-router-dom';

const SearchNav = () => {
    const [search, setSearch] = useState();
    const navigate = useNavigate();

  return (
    <>
    <nav className="nav__background">
            <div className="nav__container">
                <img src={logo} className="nav__logo" alt="logo" /> 
                <ul className="nav__list"> 
                    <li className="nav__list-item blue"> 
                        <Link to="/">
                            <div className="nav__link"> Home </div>
                        </Link>
                    </li>
                    <li className="nav__list-item"> 
                        <Link to="/search">
                            <div className="nav__link"> Search </div>
                        </Link>
                    </li>
                    <li className="nav__list-item nav__button"> 
                        <Link to="/search">
                            <div className="nav__link"> CONTACT </div>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="movie-nav__search">
            <div className="browse"> </div>
            <div className="movie-search__container">
                <input className="movie-search__field"  onChange={(event) => setSearch(event.target.value)} onKeyDown={(event) => event.key=== 'Enter' && navigate(`/search/${search}`)} /> 
                <button className="movie-search__button"> 
                    <FontAwesomeIcon icon={faMagnifyingGlass} onClick={() => navigate(`/search/${search}`)} />
                </button>
            </div>
        </div>
        </nav>
    
    </>
  )
}

export default SearchNav;
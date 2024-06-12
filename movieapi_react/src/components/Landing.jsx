import React, { useState } from 'react';
import logo from "../assets/undraw_award.svg";
import { Link, useParams, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';


const Landing = () => {
    

  return (
    <>
        <nav>
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
                            <div className="nav__link"> Find a movie  </div>
                        </Link>
                    </li>
                    <li className="nav__list-item nav__button"> 
                        <Link to="/search">
                            <div className="nav__link"> CONTACT </div>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>    
    </>
  )
}

export default Landing
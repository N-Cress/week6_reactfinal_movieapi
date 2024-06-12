import React from 'react';
import logo from "../assets/undraw_award.svg";
import { Link} from 'react-router-dom';



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
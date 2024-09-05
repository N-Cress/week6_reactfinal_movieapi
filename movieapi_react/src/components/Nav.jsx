import React from 'react';
import logo from "../assets/undraw_award.svg";
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <>
        <nav>
            <div className="nav__container">
                <Link to="/">
                    <img src={logo} className="nav__logo" alt="logo" />
                </Link>
                <ul className="nav__list"> 
                    <li className="nav__list-item blue"> 
                        <Link to="/">
                            <div className="nav__link"> Home </div>
                        </Link>
                    </li>
                    <li className="nav__list-item"> 
                        <Link to="/search">
                            <div className="nav__link"> Search  </div>
                        </Link>
                    </li>
                    <li className="nav__list-item nav__button disabled__link"> 
                        <Link >
                            <div disabled className="nav__link disabled__link"> CONTACT </div>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>    
    </>
  )
}

export default Nav;
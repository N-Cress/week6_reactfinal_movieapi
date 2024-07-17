import React from 'react';
import Nav from "../components/Nav.jsx";
import HomeBody from '../components/HomeBody.jsx';
import "../styles.css";

const Home = () => {
  return (
    <>
    <div className="home-container">
      <Nav />
      <HomeBody />
    </div>
    </>
  )
}

export default Home
import React from 'react';
import Landing from "../components/Landing.jsx";
import HomeBody from '../components/HomeBody.jsx';
import "../styles.css";

const Home = () => {
  return (
    <>
    <div className="home-container">
      <Landing />
      <HomeBody />
    </div>
    </>
  )
}

export default Home
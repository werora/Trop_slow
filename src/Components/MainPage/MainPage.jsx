import React from 'react';
import Navbar from '../Navbar/Navbar';
import logoDuze from '../../logo/logoduze.svg';
import './styles.css';

const MainPage = () => {
  return (
    <div className="main-container">
      <div className="upper-container">
        <img src={logoDuze} alt="Logo duże" className="logo" />
      </div>
      <div className="middle-container">
        <div className="circle">
          <button className="start-button">Start</button>
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default MainPage;

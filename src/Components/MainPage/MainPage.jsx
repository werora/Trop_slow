import React from 'react';
import logoDuze from '../../logo/logoduze.svg';
import './styles.css';

const MainPage = ({ onMainPageClick }) => {
  const handleStartClick = () => {
    if (onMainPageClick) {
      onMainPageClick();
    }
  };

  return (
    <div className="main-container">
      <div className="upper-container">
        <img src={logoDuze} alt="Logo duże" className="logo" />
      </div>
      <div className="middle-container">
        <div className="circle">
          <button className="start-button" onClick={handleStartClick}>Start</button>
        </div>
      </div>
    </div>
  );
};

export default MainPage;

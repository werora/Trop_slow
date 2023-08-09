import React, { useState } from 'react';
import MainPage from './Components/MainPage/MainPage';
import HowToPlayTS from './Components/HowToPlayTS/HowToPlayTS';
import Setting from './Components/Settings/Setting.jsx';
import Navbar from './Components/Navbar/Navbar.jsx';
import './App.css';

function App() {
  const [showHowToPlay, setShowHowToPlay] = useState(false);
  const [showSetting, setShowSetting] = useState(false);

  const handleSettingsClick = () => {
    setShowHowToPlay(false);
    setShowSetting(!showSetting);
  };

  const handleHowToPlayClick = () => {
    setShowHowToPlay(!showHowToPlay);
    setShowSetting(false);
  };

  const handleMainPageClick = () => {
    setShowHowToPlay(false);
    setShowSetting(false);
  };

  return (
    <div className="App">
      <div className="content-container">
        {showHowToPlay ? (
          <HowToPlayTS variant="primary">
          </HowToPlayTS>
        ) : null}
        {showSetting ? (
          <Setting description="Ustawienia gry">
          </Setting>
        ) : null}
        {!showHowToPlay && !showSetting ? (
          <MainPage
            onHowToPlayClick={handleHowToPlayClick}
            onSettingsClick={handleSettingsClick}
            onMainPageClick={handleMainPageClick} // Przekazanie funkcji obsługującej Main Page
          />
        ) : null}
        <Navbar
          onSettingsClick={handleSettingsClick}
          onHowToPlayClick={handleHowToPlayClick}
          onMainPageClick={handleMainPageClick} // Przekazanie funkcji obsługującej Main Page
        />
      </div>
    </div>
  );
}

export default App;

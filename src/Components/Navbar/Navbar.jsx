import React, { useState } from 'react';
import './styles.css';

import ustawieniaicon from '../../logo/ustawieniaicon.png';

const Navbar = ({ onSettingsClick, onHowToPlayClick, onMainPageClick }) => {
  const [showHTPandSET, setShowHTPandSET] = useState(false);

  const handleSettingsClick = () => {
    setShowHTPandSET(!showHTPandSET);
    onSettingsClick();
  };

  const handleHowToPlayClick = () => {
    setShowHTPandSET(!showHTPandSET);
    onHowToPlayClick();
  };

  const handleMainPageClick = () => {
    setShowHTPandSET(false);
    onMainPageClick();
  };

  return (
    <div className="navbar-container">
      <div className="left-container">Left</div>
      <div className="center-container" onClick={handleMainPageClick}>
        Trop słów
      </div>
      <div className="right-container" onClick={() => setShowHTPandSET(!showHTPandSET)}>
        <div className="settings-text">Ustawienia</div>
        <img src={ustawieniaicon} alt="Ustawienia" width="30" height="30" />
        {showHTPandSET && (
          <div className="HTPandSET-container">
            <div className="smallHTP" onClick={handleHowToPlayClick}>Jak grać?</div>
            <div className="smallSET" onClick={handleSettingsClick}>Ustawienia gry</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

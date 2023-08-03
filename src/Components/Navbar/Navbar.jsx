import React from 'react';
import './styles.css';
import "@fontsource/open-sans"; // Defaults to weight 400
import ustawieniaicon from '../../logo/ustawieniaicon.png';


const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="left-container">
        {/* Treść lewego kontenera */}
      </div>
      <div className="center-container">
        {/* Treść centralnego kontenera */}
      </div>
      <div className="right-container">
        <div className="settings-text"> Ustawienia</div>
        <img src={ustawieniaicon} alt="UstawieniaIcon" width="30" height="30" />
      </div>
    </div>
  );
};

export default Navbar;
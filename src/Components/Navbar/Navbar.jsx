import React, {useState} from 'react';
import './styles.css';
import "@fontsource/open-sans"; // Defaults to weight 400
import ustawieniaicon from '../../logo/ustawieniaicon.png';


const Navbar = () => {
  const [showHTPandSET, setShowHTPandSET] = useState(false); 

  const handleClick = () => {
    setShowHTPandSET(!showHTPandSET);
  };

  return (
    <div className="navbar-container">
      <div className="left-container">
        {/* Treść lewego kontenera */}
      </div>
      <div className="center-container">
        {/* Treść centralnego kontenera */}
      </div>
      <div className="right-container" onClick={handleClick}>
        <div className="settings-text"> Ustawienia</div>
        <img src={ustawieniaicon} alt="UstawieniaIcon" width="30" height="30" />
        {showHTPandSET && (
          <div className="HTPandSET-container">
            <div className="smallHTP">Jak grać?</div>
            <div className="smallSET">Ustawienia</div>
            </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
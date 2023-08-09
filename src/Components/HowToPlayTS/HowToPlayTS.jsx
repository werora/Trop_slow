import React, { useState } from 'react';
import logomalebordowe from '../../logo/logomalebordowe.svg';
import './styles.css';

const HowToPlayTS = ({ variant }) => {
  const [step, setStep] = useState(1);

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePrevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <div>
      <img src={logomalebordowe} alt="Logo" className="how-to-play-logo" />
    <div className={`how-to-play-container ${variant}`}>
      {step === 1 && (
        <div className="how-to-play-content">
          <h2 className="tytuljakgrac">TROPIENIE SŁÓW</h2>
          <p>
            <b>Cel gry:</b>Doprowadźcie swoje drużyny do odgadnięcia hasła za pomocą podawania jednego słowa na raz. Grając na zmianę, drużyny będą próbowały odgadnąć hasło. 
<br/><b>Zespoły:</b> Gra wymaga podzielenia graczy na dwie drużyny. 
Osoby, które znają hasło (prowadzący), na zmianę podają po jednym słowie.
<br/> <b>Przebieg:</b>Prowadzący podaje słowo, a następnie drużyna podaje “hasło”, które pasuje. Jeżeli nie trafili, prowadzący przeciwnej drużyny dokłada drugie słowo. Gra toczy się na zmiane, do momentu odgadnięcia hasła.                  
</p>
<div className="button-container">
            <button onClick={handleNextStep}><b>Dalej</b></button>
          </div>
        </div>

      )}
      {step === 2 && (
        <div className="how-to-play-content">
          <h2 className="tytuljakgrac">TROPIĄCA PRZYGODA</h2>
          <p>
            <br />Drużyna próbuje odgadnąć tajne hasło zadając pytania, na które osoby prowadzące mogą odpowiedzieć jedynie "TAK" lub "NIE".
            <br />Gracze mają określony czas na zadawanie pytań.
            <br />Drużyna musi podjąć ostateczną próbę odgadnięcia hasła, gdy czas na pytania się skończy.
            <br />Po "Tropiącej Przygodzie" wracamy do etapu wyboru hasła, by kontynuować rozgrywkę między kolejnymi hasłami.


            </p>

<div className="button-container">
            <button onClick={handlePrevStep}>Wróć</button>
        </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default HowToPlayTS;

import React from 'react';
import './styles.css';

const Team = () => {
    const [inputdruzyna1, setInputdruzyna1] = useState('');
  const [inputdruzyna2, setInputdruzyna2] = useState('');
  return (
    <div className="team-container">
      <h2 className="team-title">Nazwa drużyn</h2>
      <div className="team-input">
      <input
          type="text"
          className="team-input"
          value={inputdruzyna1}
          onChange={(e) => setInputdruzyna1(e.target.value)}
        />
        <input
          type="text"
          className="team-input"
          value={inputdruzyna2}
          onChange={(e) => setInputdruzyna2(e.target.value)}
          />
      </div>
    </div>
  );
};


export default Team;

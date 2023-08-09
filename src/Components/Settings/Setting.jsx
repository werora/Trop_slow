import React from 'react';
import './styles.css';

const Setting = ({ description, children }) => {
  return (
    <div className="setting-container">
      <h2>{description}</h2>
      <div className="setting-content">{children}</div>
    </div>
  );
};

export default Setting;

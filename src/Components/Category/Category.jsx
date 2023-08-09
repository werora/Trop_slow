import React from 'react';
import './styles.css';

const Category = ({ onMainPageClick, onHowToPlayClick, onSettingsClick }) => {
  return (
    <div className="category-container">
      <h2 className="category-title">Kategorie</h2>
      <div className="category-buttons">
        <button className="category-button">Przycisk 1</button>
        <button className="category-button">Przycisk 2</button>
        <button className="category-button">Zablokowane</button>
        <button className="category-button">Zablokowane</button>
      </div>
    </div>
  );
};

export default Category;

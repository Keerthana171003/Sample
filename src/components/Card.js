import React from 'react';
import '../App.css';

const Card = ({ title, content }) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <div className="card-content">
        {content.map((word, index) => (
          <span key={index}>{word}</span>
        ))}
      </div>
    </div>
  );
};

export default Card;

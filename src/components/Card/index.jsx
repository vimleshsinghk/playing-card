import React from 'react';
import './Card.css';
const Card = props => {
  const { suit, value } = props.card || { suit: '', value: '' };
  return (
    <div className="playing-card">
      {suit} {" "}
      {value}
    </div>
  );
};

export default Card;

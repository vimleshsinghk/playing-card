import React from 'react';
import './Button.css';

const Button = props => {
  return (
    <button
      className={props.className || 'btn-primary'}
      onClick={props.onClick}
    >
      {props.btnName}
    </button>
  );
};

export default Button;

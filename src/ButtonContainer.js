import React from 'react';
import TrueButton from './TrueButton';
import FalseButton from './FalseButton';

function ButtonContainer({ onAnswer }) {
  return (
    <div className="button-container">
      <TrueButton onAnswer={onAnswer} />
      <FalseButton onAnswer={onAnswer} />
    </div>
  );
}

export default ButtonContainer; 
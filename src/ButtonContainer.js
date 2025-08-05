import React from 'react';
import TrueButton from './TrueButton';
import FalseButton from './FalseButton';

function ButtonContainer({ onAnswer, userAnswer }) {
  if (userAnswer !== null) {
    return null;
  }

  return (
    <div className="button-container">
      <TrueButton onAnswer={onAnswer} />
      <FalseButton onAnswer={onAnswer} />
    </div>
  );
}

export default ButtonContainer; 
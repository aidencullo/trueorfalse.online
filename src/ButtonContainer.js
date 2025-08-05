import React from 'react';
import TrueButton from './TrueButton';
import FalseButton from './FalseButton';

function ButtonContainer({ answer }) {
  return (
    <div className="button-container">
      <TrueButton answer={answer} />
      <FalseButton answer={answer} />
    </div>
  );
}

export default ButtonContainer; 
import React from 'react';
import Button from './Button';

function TrueButton({ onAnswer }) {
  return (
    <Button className="true-button" onClick={() => onAnswer(true)}>
      True
    </Button>
  );
}

export default TrueButton; 
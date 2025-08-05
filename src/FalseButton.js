import React from 'react';
import Button from './Button';

function FalseButton({ onAnswer }) {
  return (
    <Button className="false-button" onClick={() => onAnswer(false)}>
      False
    </Button>
  );
}

export default FalseButton; 
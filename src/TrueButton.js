import React from 'react';
import Button from './Button';

function TrueButton({ onClick }) {
  return (
    <Button className="true-button" onClick={onClick || (() => {})}>
      True
    </Button>
  );
}

export default TrueButton; 
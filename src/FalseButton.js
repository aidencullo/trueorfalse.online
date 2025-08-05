import React from 'react';
import Button from './Button';

function FalseButton({ onClick }) {
  return (
    <Button className="false-button" onClick={onClick || (() => {})}>
      False
    </Button>
  );
}

export default FalseButton; 
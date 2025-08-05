import React from 'react';
import ButtonContainer from './ButtonContainer';

function QuoteComponent({ text }) {
  return (
    <div>
      <div className="quote-container">
        <p className="quote-text">
          {text}
        </p>
      </div>
      <ButtonContainer />
    </div>
  );
}

export default QuoteComponent; 
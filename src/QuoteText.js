import React from 'react';
import ButtonContainer from './ButtonContainer';

function QuoteText({ message }) {
  return (
    <div>
      <div className="quote-container">
        <p className="quote-text">
          {message}
        </p>
      </div>
      <ButtonContainer />
    </div>
  );
}

export default QuoteText; 
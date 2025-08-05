import React from 'react';

function QuoteText({ message }) {
  return (
    <div className="quote-container">
      <p className="quote-text">
        {message}
      </p>
    </div>
  );
}

export default QuoteText; 
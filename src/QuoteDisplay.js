import React from 'react';
import PropTypes from 'prop-types';

function QuoteDisplay({ text }) {
  return (
    <div className="quote-container">
      <p className="quote-text">
        {text}
      </p>
    </div>
  );
}

QuoteDisplay.propTypes = {
  text: PropTypes.string.isRequired
};

export default QuoteDisplay; 
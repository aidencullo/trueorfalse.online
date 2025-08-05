import React from 'react';
import PropTypes from 'prop-types';
import QuoteDisplay from './QuoteDisplay';
import ButtonContainer from './ButtonContainer';

function QuoteComponent({ text, answer }) {
  return (
    <div>
      <QuoteDisplay text={text} />
      <ButtonContainer answer={answer} />
    </div>
  );
}

QuoteComponent.propTypes = {
  text: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired
};

export default QuoteComponent; 
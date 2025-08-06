import React from 'react';
import PropTypes from 'prop-types';
import QuoteDisplay from './QuoteDisplay';
import ButtonContainer from './ButtonContainer';
import SolutionComponent from './SolutionComponent';
import FetchButton from './components/FetchButton';
import { useState } from 'react';

function QuoteComponent({ text, answer }) {
  const [userAnswer, setUserAnswer] = useState(null);

  function onAnswer(userAnswer) {
    setUserAnswer(userAnswer);
  }

  return (
    <div>
      <QuoteDisplay text={text} />
      <ButtonContainer onAnswer={onAnswer} userAnswer={userAnswer} />
      <SolutionComponent userAnswer={userAnswer} correctAnswer={answer} />
      <FetchButton userAnswer={userAnswer} />
    </div>
  );
}

QuoteComponent.propTypes = {
  text: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired
};

export default QuoteComponent; 
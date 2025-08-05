import React from 'react';
import PropTypes from 'prop-types';
import QuoteDisplay from './QuoteDisplay';
import ButtonContainer from './ButtonContainer';
import SolutionComponent from './SolutionComponent';
import { useState } from 'react';

function QuoteComponent({ text, answer }) {
  const [userAnswer, setUserAnswer] = useState(null);

  function onAnswer(userAnswer) {
    setUserAnswer(userAnswer);
  }

  return (
    <div>
      <QuoteDisplay text={text} />
      {userAnswer === null && <ButtonContainer onAnswer={onAnswer} />}
      {userAnswer !== null && <SolutionComponent userAnswer={userAnswer} correctAnswer={answer} />}
    </div>
  );
}

QuoteComponent.propTypes = {
  text: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired
};

export default QuoteComponent; 
import React from 'react';
import PropTypes from 'prop-types';

function SolutionComponent({ userAnswer, correctAnswer }) {
  if (userAnswer === null) {
    return null;
  }

  const isCorrect = userAnswer === correctAnswer;

  return (
    <div className="solution-container">
      <div className={`solution-content ${isCorrect ? 'correct' : 'incorrect'}`}>
        <div className="solution-icon">
          {isCorrect ? '✓' : '✗'}
        </div>
        <div className="solution-text">
          {isCorrect 
            ? 'Correct! The answer is' 
            : 'Incorrect. The correct answer is'
          } <span className="answer-highlight">{correctAnswer ? 'True' : 'False'}</span>
        </div>
      </div>
    </div>
  );
}

SolutionComponent.propTypes = {
  userAnswer: PropTypes.bool,
  correctAnswer: PropTypes.bool.isRequired
};

export default SolutionComponent; 
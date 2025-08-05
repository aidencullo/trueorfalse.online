import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useAppContext } from './context/AppContext';

function SolutionComponent({ userAnswer, correctAnswer }) {
  const { dispatch } = useAppContext();

  useEffect(() => {
    if (userAnswer !== null && userAnswer === correctAnswer) {
      dispatch({ type: 'INCREMENT_CORRECT' });
    }
  }, [userAnswer, correctAnswer, dispatch]);

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
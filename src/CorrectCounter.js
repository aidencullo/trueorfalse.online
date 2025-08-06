import React from 'react';
import { useAppContext } from './context/AppContext';

function CorrectCounter() {
  const { state } = useAppContext();

  if (state.loading) {
    return null;
  }

  return (
    <div className="correct-counter">
      <span className="correct-text">Correct: {state.correct}</span>
    </div>
  );
}

export default CorrectCounter; 
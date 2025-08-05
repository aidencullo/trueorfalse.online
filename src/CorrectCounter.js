import React from 'react';
import { useAppContext } from './context/AppContext';

function CorrectCounter() {
  const { state } = useAppContext();

  return (
    <> 
      { state.correct >= 0 && (
        <div className="correct-counter">
          <span className="correct-text">Correct: {state.correct}</span>
        </div>
      )}
    </>
  );
}

export default CorrectCounter; 
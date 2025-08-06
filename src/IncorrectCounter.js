import React from 'react';
import { useAppContext } from './context/AppContext';

function IncorrectCounter() {
  const { state } = useAppContext();

  if (state.loading) {
    return null;
  }

  return (
    <div className="incorrect-counter">
      <span className="incorrect-text">Incorrect: {state.incorrect}</span>
    </div>
  );
}

export default IncorrectCounter; 
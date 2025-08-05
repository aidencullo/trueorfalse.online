import React from 'react';
import { useAppContext } from './context/AppContext';

function IncorrectCounter() {
  const { state } = useAppContext();

  return (
    <>
    {state.incorrect >= 0 && (
      <div className="incorrect-counter">
        <span className="incorrect-text">Incorrect: {state.incorrect}</span>
      </div>
    )}
    </>
  );
}

export default IncorrectCounter; 
import React from 'react';
import { useStatementContext } from '../context/StatementContext';
import { handleFetchAnotherStatement } from '../utils/statementUtils';

function FetchButton({ userAnswer, resetUserAnswer }) {
  const { state, dispatch } = useStatementContext();

  if (userAnswer === null) {
    return null;
  }

  const handleClick = () => {
    handleFetchAnotherStatement(dispatch, state.statements);
    resetUserAnswer();
  };

  return (
    <button 
      className="fetch-button" 
      onClick={handleClick}
    >
      Fetch Statement
    </button>
  );
}

export default FetchButton; 
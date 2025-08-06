import React from 'react';
import { useStatementContext } from '../context/StatementContext';
import { handleFetchStatement } from '../utils/statementUtils';

function FetchButton({ userAnswer }) {
  const { dispatch } = useStatementContext();

  if (userAnswer === null) {
    return null;
  }

  const handleClick = () => {
    handleFetchStatement(dispatch);
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
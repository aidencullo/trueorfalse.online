import React from 'react';
import { useStatementContext } from '../context/StatementContext';
import { fetchAnotherStatement } from '../utils/statementUtils';

function FetchButton({ userAnswer }) {
  const { dispatch } = useStatementContext();

  if (userAnswer === null) {
    return null;
  }

  const handleClick = () => {
    fetchAnotherStatement(dispatch);
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
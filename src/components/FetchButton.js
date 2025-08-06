import React from 'react';

function FetchButton({ onFetch, userAnswer }) {
  if (userAnswer === null) {
    return null;
  }

  return (
    <button 
      className="fetch-button" 
      onClick={onFetch}
    >
      Fetch Statement
    </button>
  );
}

export default FetchButton; 
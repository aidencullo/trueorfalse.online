import React from 'react';

function FetchButton({ onFetch }) {
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
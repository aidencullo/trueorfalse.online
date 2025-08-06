import React from 'react';

function ErrorComponent({ onFetchStatement }) {
  return (
    <div className="error-container">
      <div className="error-icon">⚠️</div>
      <p className="error-text">
        Something went wrong. Please try again later.
      </p>
      <button 
        className="fetch-button" 
        onClick={onFetchStatement}
      >
        Fetch Statement
      </button>
    </div>
  );
}

export default ErrorComponent; 
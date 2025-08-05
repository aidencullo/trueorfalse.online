import React from 'react';

function ErrorComponent() {
  return (
    <div className="error-container">
      <div className="error-icon">⚠️</div>
      <p className="error-text">
        Something went wrong. Please try again later.
      </p>
    </div>
  );
}

export default ErrorComponent; 
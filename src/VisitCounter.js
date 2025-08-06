import React from 'react';
import { useAppContext } from './context/AppContext';

function VisitCounter() {
  const { state } = useAppContext();

  if (state.loading) {
    return null;
  }

  return (
    <div className="visit-counter">
      <span className="visit-text">Visits: {state.siteVisits}</span>
    </div>
  );
}

export default VisitCounter; 
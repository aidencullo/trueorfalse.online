import React from 'react';
import { useAppContext } from './context/AppContext';

function VisitCounter() {
  const { state } = useAppContext();

  return (
    <>
    {state.siteVisits >= 0 && (
      <div className="visit-counter">
        <span className="visit-text">Visits: {state.siteVisits}</span>
      </div>
    )}
    </>
  );
}

export default VisitCounter; 
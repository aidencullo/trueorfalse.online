import React from 'react';
import { useAppContext } from '../context/AppContext';
import VisitCounter from '../VisitCounter';
import CorrectCounter from '../CorrectCounter';
import IncorrectCounter from '../IncorrectCounter';

function Metrics() {
  const { state } = useAppContext();

  if (state.loading) {
    return null;
  }

  return (
    <div className="counters-container">
      <VisitCounter />
      <CorrectCounter />
      <IncorrectCounter />
    </div>
  );
}

export default Metrics; 
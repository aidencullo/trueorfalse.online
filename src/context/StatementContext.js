import React, { createContext, useContext, useReducer } from 'react';
import { statementReducer, initialState } from '../reducers/statementReducer';

const StatementContext = createContext();

export function StatementProvider({ children }) {
  const [state, dispatch] = useReducer(statementReducer, initialState);

  return (
    <StatementContext.Provider value={{ state, dispatch }}>
      {children}
    </StatementContext.Provider>
  );
}

export function useStatementContext() {
  const context = useContext(StatementContext);
  if (!context) {
    throw new Error('useStatementContext must be used within a StatementProvider');
  }
  return context;
} 
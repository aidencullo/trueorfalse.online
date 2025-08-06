import React, { createContext, useContext, useReducer } from 'react';
import { initialState, userReducer } from './userReducer';

const AppContext = createContext();

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(userReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
} 
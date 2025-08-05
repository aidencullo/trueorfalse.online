import React, { createContext, useContext, useReducer } from 'react';

const initialState = {
  siteVisits: 0
};

function userReducer(state, action) {
  switch (action.type) {
    case 'INCREMENT_VISITS':
      return {
        ...state,
        siteVisits: state.siteVisits + 1
      };
    case 'SET_VISITS':
      return {
        ...state,
        siteVisits: action.payload
      };
    default:
      return state;
  }
}

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
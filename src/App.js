import './App.css';
import './styles.css';
import { useEffect, useCallback } from 'react';
import Body from './Body';
import { useAppContext } from './context/AppContext';
import { getStoredVisits, saveVisitsToStorage, getStoredCorrect, saveCorrectToStorage, getStoredIncorrect, saveIncorrectToStorage } from './utils/storageUtils';

function App() {
  console.log('in App');
  const { state, dispatch } = useAppContext();

  const initializeUserData = useCallback(() => {
    const storedVisits = getStoredVisits();
    const storedCorrect = getStoredCorrect();
    const storedIncorrect = getStoredIncorrect();
    
    dispatch({ type: 'SET_VISITS', payload: storedVisits });
    dispatch({ type: 'SET_CORRECT', payload: storedCorrect });
    dispatch({ type: 'SET_INCORRECT', payload: storedIncorrect });
    dispatch({ type: 'INCREMENT_VISITS' });
    dispatch({ type: 'SET_LOADING', payload: false });
  }, [dispatch]);

  useEffect(() => {
    initializeUserData();
  }, [initializeUserData]);

  useEffect(() => {
    saveVisitsToStorage(state.siteVisits);
    saveCorrectToStorage(state.correct);
    saveIncorrectToStorage(state.incorrect);
  }, [state.siteVisits, state.correct, state.incorrect]);

  return <Body />;
}

export default App;


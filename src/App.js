import './App.css';
import './styles.css';
import { useEffect } from 'react';
import Body from './Body';
import { useAppContext } from './context/AppContext';
import { getStoredVisits, saveVisitsToStorage, getStoredCorrect, saveCorrectToStorage } from './utils/storageUtils';

function App() {
  const { state, dispatch } = useAppContext();

  const initializeUserData = () => {
    const storedVisits = getStoredVisits();
    const storedCorrect = getStoredCorrect();
    
    dispatch({ type: 'SET_VISITS', payload: storedVisits });
    dispatch({ type: 'SET_CORRECT', payload: storedCorrect });
    dispatch({ type: 'INCREMENT_VISITS' });
  };

  useEffect(() => {
    initializeUserData();
  }, []);

  useEffect(() => {
    saveVisitsToStorage(state.siteVisits);
  }, [state.siteVisits]);

  useEffect(() => {
    saveCorrectToStorage(state.correct);
  }, [state.correct]);

  return <Body />;
}

export default App;


import './App.css';
import './styles.css';
import { useEffect } from 'react';
import Body from './Body';
import { useAppContext } from './context/AppContext';
import { getStoredVisits, saveVisitsToStorage, getStoredCorrect, saveCorrectToStorage, getStoredIncorrect, saveIncorrectToStorage } from './utils/storageUtils';

function App() {
  const { state, dispatch } = useAppContext();

  const initializeUserData = () => {
    const storedVisits = getStoredVisits();
    const storedCorrect = getStoredCorrect();
    const storedIncorrect = getStoredIncorrect();
    
    dispatch({ type: 'SET_VISITS', payload: storedVisits });
    dispatch({ type: 'SET_CORRECT', payload: storedCorrect });
    dispatch({ type: 'SET_INCORRECT', payload: storedIncorrect });
    dispatch({ type: 'INCREMENT_VISITS' });
  };

  useEffect(() => {
    initializeUserData();
  }, [initializeUserData]);

  useEffect(() => {
    saveVisitsToStorage(state.siteVisits);
  }, [state.siteVisits]);

  useEffect(() => {
    saveCorrectToStorage(state.correct);
  }, [state.correct]);

  useEffect(() => {
    saveIncorrectToStorage(state.incorrect);
  }, [state.incorrect]);

  return <Body />;
}

export default App;


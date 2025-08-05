import './App.css';
import './styles.css';
import { useEffect } from 'react';
import Body from './Body';
import { useAppContext } from './context/AppContext';
import { getStoredVisits, saveVisitsToStorage } from './utils/storageUtils';

function App() {
  const { state, dispatch } = useAppContext();

  const initializeVisits = () => {
    const storedVisits = getStoredVisits();
    dispatch({ type: 'SET_VISITS', payload: storedVisits });
    dispatch({ type: 'INCREMENT_VISITS' });
  };

  useEffect(() => {
    initializeVisits();
  }, []);

  useEffect(() => {
    saveVisitsToStorage(state.siteVisits);
  }, [state.siteVisits]);

  return <Body />;
}

export default App;


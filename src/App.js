import './App.css';
import './styles.css';
import { useEffect } from 'react';

import Header from './Header';
import ControlComponent from './ControlComponent';
import Footer from './Footer';
import { useAppContext } from './context/AppContext';


function App() {
  const { state, dispatch } = useAppContext();

  useEffect(() => {
    const visits = Number(localStorage.getItem('visits'));
    console.log('visits', visits);
    if (visits) {
      dispatch({ type: 'SET_VISITS', payload: visits });
    } else {
      dispatch({ type: 'SET_VISITS', payload: 0 });
    }
    dispatch({ type: 'INCREMENT_VISITS' });
  }, []);

  useEffect(() => {
    localStorage.setItem('visits', state.siteVisits);
  }, [state.siteVisits]);

  return (
    <div className="App">
      <Header />
      <div className="main-content">
        <ControlComponent />
      </div>
      <Footer />
    </div>
  );
}

export default App;


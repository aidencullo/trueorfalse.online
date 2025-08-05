import './App.css';
import './styles.css';
import { useEffect } from 'react';

import Header from './Header';
import ControlComponent from './ControlComponent';
import Footer from './Footer';
import { AppProvider } from './context/AppContext';

function App() {
  useEffect(() => {
    console.log('🚀 True or False app mounted!');
  }, []);

  return (
    <AppProvider>
      <div className="App">
        <Header />
        <div className="main-content">
          <ControlComponent />
        </div>
        <Footer />
      </div>
    </AppProvider>
  );
}

export default App;


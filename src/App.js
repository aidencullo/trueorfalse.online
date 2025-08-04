import './App.css';
import './styles.css';
import { useEffect, useState } from 'react';

import Header from './Header';
import QuoteComponent from './QuoteComponent';
import Footer from './Footer';

function App() {
  const [triviaData, setTriviaData] = useState(null);

  useEffect(() => {
    const fetchTriviaData = async () => {
      try {
        const response = await fetch('https://the-trivia-api.com/v2/questions');
        const data = await response.json();
        console.log('Trivia API Response:', data);
        setTriviaData(data);
      } catch (error) {
        console.error('Error fetching trivia data:', error);
      }
    };

    fetchTriviaData();
  }, []);

  return (
    <div className="App">
      <Header />
      <div className="main-content">
        <QuoteComponent />
      </div>
      <Footer />
    </div>
  );
}

export default App;

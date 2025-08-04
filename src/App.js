import './App.css';
import './styles.css';

import QuoteComponent from './QuoteComponent';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <h1>Random Quote Generator</h1>
      <QuoteComponent />
      <Footer />
    </div>
  );
}

export default App;

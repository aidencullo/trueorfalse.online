import './App.css';
import './styles.css';

import Header from './Header';
import QuoteComponent from './QuoteComponent';
import Footer from './Footer';

function App() {
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

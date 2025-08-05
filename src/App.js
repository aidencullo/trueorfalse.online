import './App.css';
import './styles.css';

import Header from './Header';
import ControlComponent from './ControlComponent';
import Footer from './Footer';

function App() {

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

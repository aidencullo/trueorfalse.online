import React from 'react';
import Header from './Header';
import ControlComponent from './ControlComponent';
import Footer from './Footer';

function Body() {
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

export default Body; 
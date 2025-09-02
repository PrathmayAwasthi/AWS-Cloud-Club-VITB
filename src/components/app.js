import React, { useState } from 'react';
import Homepage from './homepage';
import About from './about';
import Events from './Events-Page';
import About Club from '../about_club';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="App">
      {currentPage === 'home' && <Homepage onNavigate={handleNavigation} />}
      {currentPage === 'about' && <About />}
      {currentPage === 'events' && <Events on Navigate={handleNavigation} />}
      {currentPage === 'About' && <About on Navigate={handleNavigation} />}
    </div>
  );
}

export default App;

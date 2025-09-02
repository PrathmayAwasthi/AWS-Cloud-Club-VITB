import React, { useState } from 'react';
import Homepage from './homepage';
import About from './about';
import Events from './Events-Page';
import Club from './club';

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
      {currentPage === 'club' && <Club />}
    </div>
  );
}

export default App;

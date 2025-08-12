import React, { useState } from 'react';
import Homepage from './homepage';
import About from './about';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="App">
      {currentPage === 'home' && <Homepage onNavigate={handleNavigation} />}
      {currentPage === 'about' && <About />}
    </div>
  );
}

export default App;

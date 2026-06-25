import React, { useState } from 'react';
import Homepage from './homepage';
import About from './about';

function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');

  const handleNavigation = (page: string) => {
    setCurrentPage(page);
  };

  return (
    <div className="App">
      {currentPage === 'home' && <Homepage onNavigate={handleNavigation} />}
      {currentPage === 'about' && <About onNavigate={handleNavigation} />}
    </div>
  );
}

export default App;

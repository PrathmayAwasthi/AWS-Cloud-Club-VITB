import React, { useState, useEffect } from 'react';
import Homepage from './homepage';
import About from './about';

function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [theme, setTheme] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      return saved === 'light' ? 'light' : 'dark';
    }
    return 'dark';
  });

  useEffect(() => {
    if (theme === 'light') {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleNavigation = (page: string) => {
    setCurrentPage(page);
  };

  return (
    <div className="App">
      {currentPage === 'home' && (
        <Homepage
          onNavigate={handleNavigation}
          theme={theme}
          toggleTheme={toggleTheme}
        />
      )}
      {currentPage === 'about' && (
        <About
          onNavigate={handleNavigation}
          theme={theme}
          toggleTheme={toggleTheme}
        />
      )}
    </div>
  );
}

export default App;

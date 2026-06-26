import React, { useState, useEffect } from "react";

interface DockNavbarProps {
  onNavigate: (page: string) => void;
  currentPage: string;
  theme: string;
  toggleTheme: () => void;
}

const DockNavbar: React.FC<DockNavbarProps> = ({ onNavigate, currentPage, theme, toggleTheme }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = [
    {
      id: "home",
      label: "Home",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
        </svg>
      ),
    },
    {
      id: "about",
      label: "About Us",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      ),
    },
    {
      id: "learn",
      label: "Learn",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
        </svg>
      ),
      submenu: [
        { label: "Topics", action: () => onNavigate("about") },
      ],
    },
    {
      id: "build",
      label: "Build",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"></path>
        </svg>
      ),
      submenu: [
        { label: "Capabilities", action: () => {} },
        { label: "Toolbox", action: () => {} },
        { label: "Workshops", action: () => {} },
      ],
    },
    {
      id: "connect",
      label: "Connect",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>
        </svg>
      ),
      submenu: [
        { label: "Events", action: () => {} },
        { label: "Spaces", action: () => {} },
      ],
    },
  ];

  return (
    <>
      <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] sm:w-[90%] max-w-5xl rounded-full border border-slate-200/50 dark:border-slate-800/50 bg-white/80 dark:bg-[#0f172a]/85 backdrop-blur-md shadow-lg hover:shadow-accent/10 dark:hover:shadow-accent/15 transition-all duration-300">
        <div className="flex items-center justify-between h-14 px-5">
          <div className="flex items-center gap-3">
            <img
              src="/images/logo.png"
              className="h-10 w-auto object-contain rounded-full"
              alt="AWS Club Logo"
            />
            <div className="flex flex-col">
              <span className="text-slate-900 dark:text-white font-black text-[0.60rem] sm:text-[0.80rem] tracking-[0.06em] sm:tracking-[0.08em] uppercase leading-tight" style={{ fontFamily: "'Montserrat', system-ui, sans-serif" }}>
                AWS Student Builder Group
              </span>
              <span className="text-[#6a5acd] font-bold text-[0.55rem] sm:text-[0.75rem] tracking-[0.06em] sm:tracking-[0.1em] uppercase" style={{ fontFamily: "'Montserrat', system-ui, sans-serif" }}>
                VIT Bhopal
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <div key={item.id} className="relative group">
                <button
                  onClick={() => {
                    if (item.submenu) {
                      setActiveMenu(activeMenu === item.id ? null : item.id);
                    } else {
                      onNavigate(item.id);
                    }
                  }}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition duration-150 ${
                    currentPage === item.id
                      ? "bg-slate-100 dark:bg-[#1e293b] text-accent dark:text-accent"
                      : "text-slate-600 dark:text-[#94a3b8] hover:text-accent dark:hover:text-accent hover:bg-slate-50 dark:hover:bg-[#1e293b]/50"
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                  {item.submenu && (
                    <svg className="w-3 h-3 ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  )}
                </button>
                {item.submenu && activeMenu === item.id && (
                  <div
                    className="absolute right-0 top-full mt-2 bg-white dark:bg-[#1e293b] border border-slate-200/60 dark:border-[#334155] rounded-xl py-2 w-48 shadow-xl z-50 transition-all duration-200"
                    onMouseLeave={() => setActiveMenu(null)}
                  >
                    <div className="px-3 py-1 text-[10px] font-bold text-slate-400 dark:text-[#94a3b8] uppercase tracking-wider border-b border-slate-100 dark:border-[#334155] mb-1">
                      {item.label}
                    </div>
                    {item.submenu.map((sub) => (
                      <button
                        key={sub.label}
                        onClick={() => {
                          sub.action();
                          setActiveMenu(null);
                        }}
                        className="block w-full text-left px-3 py-1.5 text-xs text-slate-700 dark:text-white hover:bg-slate-100 dark:hover:bg-[#334155] transition duration-150 font-medium"
                      >
                        {sub.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            {/* Theme Toggle Button replacing Join Us */}
            <div className="ml-2 pl-2 border-l border-slate-200 dark:border-[#334155] flex items-center">
              <button
                onClick={toggleTheme}
                className="p-1.5 rounded-full text-slate-500 hover:text-accent dark:text-slate-400 dark:hover:text-accent hover:bg-slate-100 dark:hover:bg-[#1e293b] transition duration-150 focus:outline-none"
                aria-label="Toggle theme"
              >
                {theme === 'light' ? (
                  <svg className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464-5.536a1 1 0 010 1.414l-.707.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-5.464 5.536a1 1 0 101.414-1.414l-.707-.707a1 1 0 10-1.414 1.414l.707.707zM9 16a1 1 0 011-1h1a1 1 0 110 2h-1a1 1 0 01-1-1zm-5.464-2.464a1 1 0 010-1.414l.707-.707a1 1 0 011.414 1.414l-.707.707a1 1 0 01-1.414 0zM4 11a1 1 0 100-2H3a1 1 0 100 2h1zm1.464-5.536a1 1 0 011.414 0l.707.707a1 1 0 11-1.414 1.414l-.707-.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                  </svg>
                ) : (
                  <svg className="w-5 h-5 text-indigo-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                  </svg>
                )}
              </button>
            </div>
          </nav>

          <div className="md:hidden flex items-center gap-2">
            {/* Theme Toggle Button for mobile next to hamburger */}
            <button
              onClick={toggleTheme}
              className="p-1.5 rounded-full text-slate-500 hover:text-accent dark:text-slate-400 dark:hover:text-accent hover:bg-slate-100 dark:hover:bg-[#1e293b] transition duration-150 focus:outline-none"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <svg className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464-5.536a1 1 0 010 1.414l-.707.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-5.464 5.536a1 1 0 101.414-1.414l-.707-.707a1 1 0 10-1.414 1.414l.707.707zM9 16a1 1 0 011-1h1a1 1 0 110 2h-1a1 1 0 01-1-1zm-5.464-2.464a1 1 0 010-1.414l.707-.707a1 1 0 011.414 1.414l-.707.707a1 1 0 01-1.414 0zM4 11a1 1 0 100-2H3a1 1 0 100 2h1zm1.464-5.536a1 1 0 011.414 0l.707.707a1 1 0 11-1.414 1.414l-.707-.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              ) : (
                <svg className="w-5 h-5 text-indigo-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                </svg>
              )}
            </button>

            <button
              className="text-slate-800 dark:text-white focus:outline-none ml-1 p-1"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Panel floating below */}
        {isMobileMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-white/95 dark:bg-[#0f172a]/95 backdrop-blur-md border border-slate-200/50 dark:border-slate-800/50 rounded-2xl shadow-xl p-4 md:hidden flex flex-col gap-2 transition-all duration-200 z-50">
            {navItems.map((item) => (
              <div key={item.id} className="w-full">
                <button
                  onClick={() => {
                    if (item.submenu) {
                      setActiveMenu(activeMenu === item.id ? null : item.id);
                    } else {
                      onNavigate(item.id);
                      setIsMobileMenuOpen(false);
                    }
                  }}
                  className={`flex items-center gap-2 text-sm font-semibold py-2 px-3 rounded-lg w-full text-left transition duration-150 ${
                    currentPage === item.id
                      ? "bg-slate-100 dark:bg-[#1e293b] text-accent dark:text-accent"
                      : "text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-[#1e293b]/50"
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                  {item.submenu && (
                    <svg className={`w-3.5 h-3.5 ml-auto transition-transform ${activeMenu === item.id ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  )}
                </button>
                {item.submenu && activeMenu === item.id && (
                  <div className="ml-6 mt-1 space-y-1 border-l border-slate-200 dark:border-[#334155] pl-3">
                    {item.submenu.map((sub) => (
                      <button
                        key={sub.label}
                        onClick={() => {
                          sub.action();
                          setActiveMenu(null);
                          setIsMobileMenuOpen(false);
                        }}
                        className="block text-xs text-slate-500 dark:text-slate-400 hover:text-accent dark:hover:text-accent py-2 w-full text-left font-medium"
                      >
                        {sub.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </header>

      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

export default DockNavbar;

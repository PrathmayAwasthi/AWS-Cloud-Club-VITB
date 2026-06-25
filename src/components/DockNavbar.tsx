import React, { useState } from "react";

interface DockNavbarProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

const DockNavbar: React.FC<DockNavbarProps> = ({ onNavigate, currentPage }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = [
    {
      id: "home",
      label: "Home",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
        </svg>
      ),
    },
    {
      id: "about",
      label: "About Us",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      ),
    },
    {
      id: "learn",
      label: "Learn",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>
        </svg>
      ),
      submenu: [
        { label: "Events", action: () => {} },
        { label: "Spaces", action: () => {} },
      ],
    },
    {
      id: "community",
      label: "Community",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
        </svg>
      ),
      submenu: [
        { label: "Heroes", action: () => {} },
        { label: "Community Builders", action: () => {} },
      ],
    },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 bg-[#0f172a] border-b border-[#334155] flex-none shadow-sm">
        <div className="flex items-center justify-between h-14 px-4">
          <div className="flex items-center gap-3">
            <img
              src="/images/aws_club_logo.png"
              className="h-8 w-auto object-contain"
              alt="AWS Club Logo"
            />
            <div className="flex items-center gap-2">
              <span className="text-white font-bold text-sm tracking-wider uppercase hidden sm:inline">
                AWS Student Builder Group
              </span>
              <span className="text-[#94a3b8] text-xs font-semibold px-2 py-0.5 bg-[#0f172a] border border-[#334155] rounded w-fit">
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
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium transition duration-150 ${
                    currentPage === item.id
                      ? "bg-[#1e293b] text-white"
                      : "text-[#94a3b8] hover:text-white hover:bg-[#1e293b]"
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
                    className="absolute right-0 top-full mt-1 bg-[#1e293b] border border-[#334155] rounded-md py-2 w-48 shadow-xl z-50"
                    onMouseLeave={() => setActiveMenu(null)}
                  >
                    <div className="px-3 py-1 text-xs font-semibold text-[#94a3b8] uppercase tracking-wider border-b border-[#334155] mb-1">
                      {item.label}
                    </div>
                    {item.submenu.map((sub) => (
                      <button
                        key={sub.label}
                        onClick={() => {
                          sub.action();
                          setActiveMenu(null);
                        }}
                        className="block w-full text-left px-3 py-1.5 text-sm text-white hover:bg-[#334155] transition duration-150"
                      >
                        {sub.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="ml-3 pl-3 border-l border-[#334155]">
              <a
                href="#join"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium text-[#94a3b8] hover:text-white hover:bg-[#1e293b] transition duration-150"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path>
                </svg>
                <span>Join Us</span>
              </a>
            </div>
          </nav>

          <div className="md:hidden">
            <button
              className="text-white focus:outline-none ml-1"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>

        <div className={`md:hidden border-t border-[#334155] ${isMobileMenuOpen ? "block" : "hidden"}`}>
          <div className="bg-[#1e293b] py-4 px-4 space-y-2">
            {navItems.map((item) => (
              <div key={item.id}>
                <button
                  onClick={() => {
                    if (item.submenu) {
                      setActiveMenu(activeMenu === item.id ? null : item.id);
                    } else {
                      onNavigate(item.id);
                      setIsMobileMenuOpen(false);
                    }
                  }}
                  className="flex items-center gap-2 text-white hover:text-slate-300 font-medium py-1.5 w-full text-left"
                >
                  {item.icon}
                  <span>{item.label}</span>
                  {item.submenu && (
                    <svg className={`w-3 h-3 ml-auto transition-transform ${activeMenu === item.id ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  )}
                </button>
                {item.submenu && activeMenu === item.id && (
                  <div className="ml-7 mt-1 space-y-1 border-l border-[#334155] pl-3">
                    {item.submenu.map((sub) => (
                      <button
                        key={sub.label}
                        onClick={() => {
                          sub.action();
                          setActiveMenu(null);
                          setIsMobileMenuOpen(false);
                        }}
                        className="block text-sm text-[#94a3b8] hover:text-white py-1"
                      >
                        {sub.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-2 border-t border-[#334155]">
              <a
                href="#join"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-2 text-white hover:text-slate-300 font-medium py-1.5"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path>
                </svg>
                <span>Join Us</span>
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default DockNavbar;

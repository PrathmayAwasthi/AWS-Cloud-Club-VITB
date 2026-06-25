import React, { useState, useEffect } from "react";

const Homepage = ({ onNavigate }) => {
  // Loading state
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  // Mobile menu state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Collapsible category sidebar menus
  const [activeMenu, setActiveMenu] = useState(null);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsLoading(false);
          return 100;
        }
        return prev + 1;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-[#0f172a] z-50 font-sans">
        <div className="text-center">
          {/* AWS CLUB VITB Logo/Text */}
          <div className="flex flex-col items-center justify-center mb-8">
            <img
              src="/images/aws_club_logo.png"
              alt="AWS Club Logo"
              className="w-24 h-24 mb-4 animate-pulse"
            />
            <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              <span>AWS </span>
              <span className="text-white">
                CLUB VITB
              </span>
            </h1>
          </div>


          {/* Percentage Text */}
          <p className="text-[#94a3b8] text-base font-mono">
            Loading... {loadingProgress}%
          </p>

          {/* AWS-themed Loading Message */}
          <p className="text-gray-400 mt-4 text-sm">Deploying resources...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Custom styles for the gradient background and font */}
      <style>
        {`
                body {
                    font-family: 'Open Sans', system-ui, sans-serif;
                    background-color: #0f172a;
                    min-height: 100vh;
                    color: #ffffff;
                }
                /* Section animation styles */
                .fade-in-section {
                    opacity: 0;
                    transform: translateY(40px);
                    transition: opacity 0.8s ease, transform 0.8s ease;
                    will-change: opacity, transform;
                }
                .fade-in-section.visible {
                    opacity: 1;
                    transform: none;
                }
                /* Custom styles for matching AWS Builder Center */
                .bg-primary-bg { background-color: #0f172a; }
                .bg-component-fill { background-color: #1e293b; }
                .border-divider { border-color: #334155; }
                .text-headings { color: #ffffff; }
                .text-secondary-label { color: #94a3b8; }
                
                /* Custom scrollbar matching AWS style */
                ::-webkit-scrollbar {
                    width: 8px;
                    height: 8px;
                }
                ::-webkit-scrollbar-track {
                    background: #0f172a;
                }
                ::-webkit-scrollbar-thumb {
                    background: #334155;
                    border-radius: 4px;
                }
                ::-webkit-scrollbar-thumb:hover {
                    background: #475569;
                }
                
                .btn-primary {
                    background-color: #ffffff;
                    color: #0f172a;
                    padding: 0.625rem 1.25rem;
                    border-radius: 0.375rem; /* rounded-md */
                    font-weight: 700;
                    transition: all 0.2s ease;
                    border: none;
                }
                .btn-primary:hover {
                    background-color: #f1f5f9;
                    transform: translateY(-1px);
                }
                `}
      </style>

      {/* Google Fonts - Open Sans */}
      <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap"
        rel="stylesheet"
      />

      {/* Main Layout Container */}
      <div className="min-h-screen bg-[#0f172a] text-[#ffffff] font-sans flex flex-col">
        
        {/* Sticky Top Header Nav */}
        <header className="sticky top-0 z-50 h-14 bg-[#1e293b] border-b border-[#334155] flex items-center justify-between px-4 flex-none shadow-sm">
          {/* Logo & Branding */}
          <div className="flex items-center gap-3">
            <img
              src="/images/aws_club_logo.png"
              className="h-8 w-auto object-contain"
              alt="AWS Club Logo"
            />
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
              <span className="text-white font-bold text-sm tracking-wider uppercase">AWS Student Builder Group</span>
              <span className="text-[#94a3b8] text-xs font-semibold px-2 py-0.5 bg-[#0f172a] border border-[#334155] rounded w-fit">VIT Bhopal</span>
            </div>
          </div>

          {/* Desktop Utilities & Action Buttons */}
          <div className="flex items-center gap-4">
            <div>
              {/* Mobile Menu Button */}
              <button
                className="md:hidden text-white focus:outline-none ml-1"
                onClick={toggleMobileMenu}
                aria-label="Toggle mobile menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </header>

        {/* Mobile Menu (collapsible) */}
        <div
          className={`md:hidden bg-[#1e293b] border-b border-[#334155] py-4 px-4 ${
            isMobileMenuOpen ? "block" : "hidden"
          }`}
        >
          <div className="flex flex-col space-y-3">
            <button
              onClick={() => { onNavigate('home'); toggleMobileMenu(); }}
              className="text-left text-white hover:text-slate-300 font-medium py-1"
            >
              Home
            </button>
            <button
              onClick={() => { onNavigate('about'); toggleMobileMenu(); }}
              className="text-left text-white hover:text-slate-300 font-medium py-1"
            >
              About Us
            </button>
            <a
              href="#events"
              onClick={toggleMobileMenu}
              className="text-white hover:text-slate-300 font-medium py-1"
            >
              Events
            </a>
            <a
              href="#join"
              onClick={toggleMobileMenu}
              className="text-white hover:text-slate-300 font-medium py-1"
            >
              Gallery
            </a>
            <a
              href="#contact"
              onClick={toggleMobileMenu}
              className="text-white hover:text-slate-300 font-medium py-1"
            >
              Contact
            </a>
            <div className="flex gap-2 pt-2 border-t border-[#334155]">
              <button className="flex-1 bg-[#1e293b] text-white border border-[#334155] py-1.5 text-xs rounded font-medium text-center">
                Support
              </button>
              <button className="flex-1 bg-white text-[#0f172a] py-1.5 text-xs rounded font-bold text-center">
                Create Resource
              </button>
            </div>
          </div>
        </div>

        {/* Layout Wrapper for Sidebar + Main Content */}
        <div className="flex flex-row flex-1">
          {/* Left permanent 64px (w-16) Sidebar */}
          <aside className="w-16 bg-[#0f172a] border-r border-[#334155] flex flex-col justify-between items-center py-6 text-[#94a3b8] flex-none z-10">
            <div className="flex flex-col items-center gap-6 w-full">
              {/* Home Icon */}
              <button
                onClick={() => { onNavigate('home'); setActiveMenu(null); }}
                className="p-2.5 rounded-md hover:bg-[#1e293b] hover:text-white transition duration-150 group relative"
                title="Home"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                </svg>
                <span className="absolute left-16 bg-[#1e293b] text-white text-xs px-2 py-1 rounded shadow-lg border border-[#334155] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none z-50">
                  Home
                </span>
              </button>

              {/* About Icon */}
              <button
                onClick={() => { onNavigate('about'); setActiveMenu(null); }}
                className="p-2.5 rounded-md hover:bg-[#1e293b] hover:text-white transition duration-150 group relative"
                title="About Us"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span className="absolute left-16 bg-[#1e293b] text-white text-xs px-2 py-1 rounded shadow-lg border border-[#334155] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none z-50">
                  About Us
                </span>
              </button>

              {/* Learn Category Icon */}
              <div className="relative">
                <button
                  onClick={() => setActiveMenu(activeMenu === 'learn' ? null : 'learn')}
                  className={`p-2.5 rounded-md hover:bg-[#1e293b] hover:text-white transition duration-150 relative ${activeMenu === 'learn' ? 'bg-[#1e293b] text-white' : ''}`}
                  title="Learn"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                  </svg>
                </button>
                {activeMenu === 'learn' && (
                  <div className="absolute left-16 top-0 bg-[#1e293b] border border-[#334155] rounded-md py-2 w-48 shadow-xl z-50">
                    <div className="px-3 py-1 text-xs font-semibold text-[#94a3b8] uppercase tracking-wider border-b border-[#334155] mb-1">Learn</div>
                    <button onClick={() => { onNavigate('about'); setActiveMenu(null); }} className="block w-full text-left px-3 py-1.5 text-sm text-white hover:bg-[#334155] transition duration-150">Topics</button>
                  </div>
                )}
              </div>

              {/* Build Category Icon */}
              <div className="relative">
                <button
                  onClick={() => setActiveMenu(activeMenu === 'build' ? null : 'build')}
                  className={`p-2.5 rounded-md hover:bg-[#1e293b] hover:text-white transition duration-150 relative ${activeMenu === 'build' ? 'bg-[#1e293b] text-white' : ''}`}
                  title="Build"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"></path>
                  </svg>
                </button>
                {activeMenu === 'build' && (
                  <div className="absolute left-16 top-0 bg-[#1e293b] border border-[#334155] rounded-md py-2 w-48 shadow-xl z-50">
                    <div className="px-3 py-1 text-xs font-semibold text-[#94a3b8] uppercase tracking-wider border-b border-[#334155] mb-1">Build</div>
                    <a href="#explore-cloud" onClick={() => { setActiveMenu(null); }} className="block px-3 py-1.5 text-sm text-white hover:bg-[#334155] transition duration-150">Capabilities</a>
                    <a href="#explore-cloud" onClick={() => { setActiveMenu(null); }} className="block px-3 py-1.5 text-sm text-white hover:bg-[#334155] transition duration-150">Toolbox</a>
                    <a href="#explore-cloud" onClick={() => { setActiveMenu(null); }} className="block px-3 py-1.5 text-sm text-white hover:bg-[#334155] transition duration-150">Workshops</a>
                  </div>
                )}
              </div>

              {/* Connect Category Icon */}
              <div className="relative">
                <button
                  onClick={() => setActiveMenu(activeMenu === 'connect' ? null : 'connect')}
                  className={`p-2.5 rounded-md hover:bg-[#1e293b] hover:text-white transition duration-150 relative ${activeMenu === 'connect' ? 'bg-[#1e293b] text-white' : ''}`}
                  title="Connect"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>
                  </svg>
                </button>
                {activeMenu === 'connect' && (
                  <div className="absolute left-16 top-0 bg-[#1e293b] border border-[#334155] rounded-md py-2 w-48 shadow-xl z-50">
                    <div className="px-3 py-1 text-xs font-semibold text-[#94a3b8] uppercase tracking-wider border-b border-[#334155] mb-1">Connect</div>
                    <a href="#events" onClick={() => { setActiveMenu(null); }} className="block px-3 py-1.5 text-sm text-white hover:bg-[#334155] transition duration-150">Events</a>
                    <a href="#contact" onClick={() => { setActiveMenu(null); }} className="block px-3 py-1.5 text-sm text-white hover:bg-[#334155] transition duration-150">Spaces</a>
                  </div>
                )}
              </div>

              {/* Community Category Icon */}
              <div className="relative">
                <button
                  onClick={() => setActiveMenu(activeMenu === 'community' ? null : 'community')}
                  className={`p-2.5 rounded-md hover:bg-[#1e293b] hover:text-white transition duration-150 relative ${activeMenu === 'community' ? 'bg-[#1e293b] text-white' : ''}`}
                  title="Community"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </button>
                {activeMenu === 'community' && (
                  <div className="absolute left-16 top-0 bg-[#1e293b] border border-[#334155] rounded-md py-2 w-48 shadow-xl z-50">
                    <div className="px-3 py-1 text-xs font-semibold text-[#94a3b8] uppercase tracking-wider border-b border-[#334155] mb-1">Community</div>
                    <a href="#about" onClick={() => { setActiveMenu(null); }} className="block px-3 py-1.5 text-sm text-white hover:bg-[#334155] transition duration-150">Heroes</a>
                    <a href="#about" onClick={() => { setActiveMenu(null); }} className="block px-3 py-1.5 text-sm text-white hover:bg-[#334155] transition duration-150">Community Builders</a>
                  </div>
                )}
              </div>
            </div>

            {/* Bottom Register Icon */}
            <div className="flex flex-col items-center gap-4 w-full">
              <a
                href="#join"
                onClick={() => setActiveMenu(null)}
                className="p-2.5 rounded-md hover:bg-[#1e293b] hover:text-white transition duration-150 group relative"
                title="Join Us"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path>
                </svg>
                <span className="absolute left-16 bg-[#1e293b] text-white text-xs px-2 py-1 rounded shadow-lg border border-[#334155] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none z-50">
                  Join Us
                </span>
              </a>
            </div>
          </aside>

          {/* Main workspace (Scrollable) */}
          <main className="flex-1 overflow-y-auto bg-[#0f172a] text-[#ffffff] min-w-0">
            
            {/* Hero Section */}
            <section
              id="home"
              className="relative bg-[#0f172a] border-b border-[#334155] py-16 px-6 lg:px-12"
            >
              <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Hero Left Content */}
                <div className="space-y-6">
                  <nav className="text-xs text-[#94a3b8] flex items-center gap-2">
                    <span>AWS Builder Center</span>
                    <span>&gt;</span>
                    <span>Community</span>
                    <span>&gt;</span>
                    <span className="text-white">AWS Student Builder Groups</span>
                  </nav>
                  
                  <h1 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight">
                    AWS Student <br />
                    Builder Groups
                  </h1>
                  
                  <p className="text-lg text-[#94a3b8] leading-relaxed max-w-xl">
                    Connect with other students on campus. Empowering the next generation of cloud enthusiasts and developers. Dive deep into AWS services, network with peers, and build groundbreaking solutions.
                  </p>
                  
                  <div className="flex flex-wrap gap-4">
                    <a href="#join" className="btn-primary inline-flex items-center justify-center font-bold px-5 py-2.5 rounded-md hover:bg-slate-100 transition duration-150 text-sm">
                      Join a Student Group
                    </a>
                    <a href="#events" className="bg-[#1e293b] text-white hover:bg-slate-800 border border-[#334155] px-5 py-2.5 rounded-md font-medium transition duration-150 inline-flex items-center justify-center text-sm">
                      Start a Student Group
                    </a>
                  </div>
                </div>
                
                {/* Hero Right Content: Visual/Video matching Image 3 with Purple Logo */}
                <div className="relative flex justify-center items-center">
                  <div className="w-full max-w-md aspect-[4/3] bg-[#0c1322] border border-[#334155] rounded-md relative overflow-hidden">
                    <video
                      className="w-full h-full object-cover opacity-60"
                      autoPlay
                      muted
                      loop
                      playsInline
                    >
                      <source src="/images/Video-246.mp4" type="video/mp4" />
                    </video>
                    {/* Grid overlay */}
                    <div 
                      className="absolute inset-0"
                      style={{
                        backgroundImage: 'linear-gradient(rgba(51, 65, 85, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(51, 65, 85, 0.15) 1px, transparent 1px)',
                        backgroundSize: '20px 20px',
                      }}
                    ></div>
                    {/* Center logo overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <img
                        src="/images/aws_club_logo.png"
                        alt="AWS Club Logo"
                        className="w-24 h-24 object-contain filter drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Statistics Section */}
            <section className="py-12 px-6 lg:px-12 bg-[#0c1322] border-b border-[#334155]">
              <div className="max-w-7xl mx-auto">
                {/* Statistics Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
                  <div className="bg-[#1e293b] border border-[#334155] p-5 rounded-md text-center transition duration-150 hover:bg-[#233146]">
                    <div className="text-3xl font-extrabold text-white mb-1">150+</div>
                    <div className="text-[#94a3b8] text-xs font-semibold uppercase tracking-wider">Active Members</div>
                  </div>
                  <div className="bg-[#1e293b] border border-[#334155] p-5 rounded-md text-center transition duration-150 hover:bg-[#233146]">
                    <div className="text-3xl font-extrabold text-white mb-1">30+</div>
                    <div className="text-[#94a3b8] text-xs font-semibold uppercase tracking-wider">Cloud Projects</div>
                  </div>
                  <div className="bg-[#1e293b] border border-[#334155] p-5 rounded-md text-center transition duration-150 hover:bg-[#233146]">
                    <div className="text-3xl font-extrabold text-white mb-1">12+</div>
                    <div className="text-[#94a3b8] text-xs font-semibold uppercase tracking-wider">Workshops</div>
                  </div>
                  <div className="bg-[#1e293b] border border-[#334155] p-5 rounded-md text-center transition duration-150 hover:bg-[#233146]">
                    <div className="text-3xl font-extrabold text-white mb-1">6+</div>
                    <div className="text-[#94a3b8] text-xs font-semibold uppercase tracking-wider">AWS Certifications</div>
                  </div>
                  <div className="bg-[#1e293b] border border-[#334155] p-5 rounded-md text-center transition duration-150 hover:bg-[#233146]">
                    <div className="text-3xl font-extrabold text-white mb-1">1,000+</div>
                    <div className="text-[#94a3b8] text-xs font-semibold uppercase tracking-wider">GitHub Contributions</div>
                  </div>
                </div>

                {/* Call-to-Action Banner */}
                <div className="bg-[#1e293b] border border-[#334155] p-6 rounded-md shadow-md">
                  <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                    <div className="text-center lg:text-left">
                      <h3 className="text-lg font-bold text-white mb-1">
                        Join our cloud community before memberships fill up in
                      </h3>
                      <p className="text-xs text-[#94a3b8]">Get access to resources, mentoring, and events for free.</p>
                    </div>

                    {/* Countdown Timer */}
                    <div className="flex items-center gap-3">
                      <div className="bg-[#0f172a] p-2.5 rounded border border-[#334155] min-w-[65px] text-center">
                        <div className="text-xl font-bold text-white" id="days">30</div>
                        <div className="text-[10px] text-[#94a3b8] font-semibold tracking-wider">DAYS</div>
                      </div>
                      <div className="text-[#94a3b8] text-xl font-bold">:</div>
                      <div className="bg-[#0f172a] p-2.5 rounded border border-[#334155] min-w-[65px] text-center">
                        <div className="text-xl font-bold text-white" id="hours">15</div>
                        <div className="text-[10px] text-[#94a3b8] font-semibold tracking-wider">HOURS</div>
                      </div>
                      <div className="text-[#94a3b8] text-xl font-bold">:</div>
                      <div className="bg-[#0f172a] p-2.5 rounded border border-[#334155] min-w-[65px] text-center">
                        <div className="text-xl font-bold text-white" id="minutes">45</div>
                        <div className="text-[10px] text-[#94a3b8] font-semibold tracking-wider">MINUTES</div>
                      </div>
                      <div className="text-[#94a3b8] text-xl font-bold">:</div>
                      <div className="bg-[#0f172a] p-2.5 rounded border border-[#334155] min-w-[65px] text-center">
                        <div className="text-xl font-bold text-white" id="seconds">30</div>
                        <div className="text-[10px] text-[#94a3b8] font-semibold tracking-wider">SECONDS</div>
                      </div>
                    </div>

                    <div className="text-center flex flex-col sm:flex-row items-center gap-4">
                      <div className="text-center sm:text-right">
                        <span className="text-[#94a3b8] text-xs">Starting from</span>
                        <div className="flex items-center gap-2 justify-center sm:justify-end">
                          <span className="text-2xl font-extrabold text-white">Free</span>
                          <span className="text-[#94a3b8] text-sm line-through opacity-60">₹299</span>
                        </div>
                      </div>
                      <a href="#join" className="btn-primary inline-flex items-center justify-center font-bold px-6 py-2.5 rounded-md hover:bg-slate-100 transition duration-150 text-sm shadow">
                        JOIN NOW
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Explore Cloud Section */}
            <section id="explore-cloud" className="py-16 px-6 lg:px-12 border-b border-[#334155]">
              <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center mb-12">
                  {/* Left side - Heading (2/3 width) */}
                  <div className="lg:col-span-2 space-y-4">
                    <h2 className="text-3xl font-extrabold text-white tracking-tight">
                      🚀 Explore the Domains We Focus On.
                    </h2>
                    <p className="text-base text-[#94a3b8] leading-relaxed">
                      Dive into the key areas our <span className="text-white font-semibold">AWS Club</span> specializes in —
                      from cloud infrastructure to cutting-edge AI and IoT solutions.
                    </p>
                  </div>

                  {/* Right side - Video Placement (1/3 width) */}
                  <div className="lg:col-span-1 flex justify-center lg:justify-end">
                    <div className="relative w-full max-w-sm aspect-video bg-[#0c1322] border border-[#334155] rounded-md overflow-hidden shadow-sm">
                      <video
                        className="w-full h-full object-cover"
                        autoPlay
                        muted
                        loop
                        playsInline
                      >
                        <source src="/images/Video-182.mp4" type="video/mp4" />
                      </video>
                    </div>
                  </div>
                </div>

                {/* Grid of Track Cards - 3 Rows Layout */}
                <div className="space-y-4">
                  {/* Row 1 - 4 cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div
                      className="relative h-24 rounded-md overflow-hidden cursor-pointer hover:border-slate-300 transition duration-150 border border-[#334155] bg-[#1e293b]"
                      style={{
                        backgroundImage: 'url("/images/aws_infra.jpeg")',
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    >
                      <div className="absolute inset-0 bg-[#1e293b]/90 hover:bg-[#1e293b]/85 transition duration-150"></div>
                      <div className="relative z-10 p-5 h-full flex items-center gap-3">
                        <div className="text-[#94a3b8] text-xl flex-none bg-[#0f172a] p-2 rounded border border-[#334155]">☁️</div>
                        <h3 className="text-white font-bold text-sm tracking-tight">
                          AWS Infrastructure
                        </h3>
                      </div>
                    </div>

                    <div
                      className="relative h-24 rounded-md overflow-hidden cursor-pointer hover:border-slate-300 transition duration-150 border border-[#334155] bg-[#1e293b]"
                      style={{
                        backgroundImage: 'url("/images/cloud_computing.jpg.webp")',
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    >
                      <div className="absolute inset-0 bg-[#1e293b]/90 hover:bg-[#1e293b]/85 transition duration-150"></div>
                      <div className="relative z-10 p-5 h-full flex items-center gap-3">
                        <div className="text-[#94a3b8] text-xl flex-none bg-[#0f172a] p-2 rounded border border-[#334155]">💻</div>
                        <h3 className="text-white font-bold text-sm tracking-tight">
                          Cloud Computing
                        </h3>
                      </div>
                    </div>

                    <div
                      className="relative h-24 rounded-md overflow-hidden cursor-pointer hover:border-slate-300 transition duration-150 border border-[#334155] bg-[#1e293b]"
                      style={{
                        backgroundImage: 'url("/images/devops.jpeg")',
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    >
                      <div className="absolute inset-0 bg-[#1e293b]/90 hover:bg-[#1e293b]/85 transition duration-150"></div>
                      <div className="relative z-10 p-5 h-full flex items-center gap-3">
                        <div className="text-[#94a3b8] text-xl flex-none bg-[#0f172a] p-2 rounded border border-[#334155]">⚙️</div>
                        <h3 className="text-white font-bold text-sm tracking-tight">
                          DevOps
                        </h3>
                      </div>
                    </div>

                    <div
                      className="relative h-24 rounded-md overflow-hidden cursor-pointer hover:border-slate-300 transition duration-150 border border-[#334155] bg-[#1e293b]"
                      style={{
                        backgroundImage: 'url("/images/software_arch.png.webp")',
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    >
                      <div className="absolute inset-0 bg-[#1e293b]/90 hover:bg-[#1e293b]/85 transition duration-150"></div>
                      <div className="relative z-10 p-5 h-full flex items-center gap-3">
                        <div className="text-[#94a3b8] text-xl flex-none bg-[#0f172a] p-2 rounded border border-[#334155]">📐</div>
                        <h3 className="text-white font-bold text-sm tracking-tight">
                          Software Architecture
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Row 2 - 4 cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div
                      className="relative h-24 rounded-md overflow-hidden cursor-pointer hover:border-slate-300 transition duration-150 border border-[#334155] bg-[#1e293b]"
                      style={{
                        backgroundImage: 'url("/images/aws_ml.png")',
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    >
                      <div className="absolute inset-0 bg-[#1e293b]/90 hover:bg-[#1e293b]/85 transition duration-150"></div>
                      <div className="relative z-10 p-5 h-full flex items-center gap-3">
                        <div className="text-[#94a3b8] text-xl flex-none bg-[#0f172a] p-2 rounded border border-[#334155]">🤖</div>
                        <h3 className="text-white font-bold text-sm tracking-tight">
                          Machine Learning
                        </h3>
                      </div>
                    </div>

                    <div
                      className="relative h-24 rounded-md overflow-hidden cursor-pointer hover:border-slate-300 transition duration-150 border border-[#334155] bg-[#1e293b]"
                      style={{
                        backgroundImage: 'url("/images/frontend.png")',
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    >
                      <div className="absolute inset-0 bg-[#1e293b]/90 hover:bg-[#1e293b]/85 transition duration-150"></div>
                      <div className="relative z-10 p-5 h-full flex items-center gap-3">
                        <div className="text-[#94a3b8] text-xl flex-none bg-[#0f172a] p-2 rounded border border-[#334155]">🎨</div>
                        <h3 className="text-white font-bold text-sm tracking-tight">
                          Frontend & UI/UX
                        </h3>
                      </div>
                    </div>

                    <div
                      className="relative h-24 rounded-md overflow-hidden cursor-pointer hover:border-slate-300 transition duration-150 border border-[#334155] bg-[#1e293b]"
                      style={{
                        backgroundImage: 'url("/images/cloud-testing-tools.jpeg")',
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    >
                      <div className="absolute inset-0 bg-[#1e293b]/90 hover:bg-[#1e293b]/85 transition duration-150"></div>
                      <div className="relative z-10 p-5 h-full flex items-center gap-3">
                        <div className="text-[#94a3b8] text-xl flex-none bg-[#0f172a] p-2 rounded border border-[#334155]">🧪</div>
                        <h3 className="text-white font-bold text-sm tracking-tight">
                          Quality & Testing
                        </h3>
                      </div>
                    </div>

                    <div
                      className="relative h-24 rounded-md overflow-hidden cursor-pointer hover:border-slate-300 transition duration-150 border border-[#334155] bg-[#1e293b]"
                      style={{
                        backgroundImage: 'url("/images/security.jpeg")',
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    >
                      <div className="absolute inset-0 bg-[#1e293b]/90 hover:bg-[#1e293b]/85 transition duration-150"></div>
                      <div className="relative z-10 p-5 h-full flex items-center gap-3">
                        <div className="text-[#94a3b8] text-xl flex-none bg-[#0f172a] p-2 rounded border border-[#334155]">🛡️</div>
                        <h3 className="text-white font-bold text-sm tracking-tight">
                          Cybersecurity
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Row 3 - 4 cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div
                      className="relative h-24 rounded-md overflow-hidden cursor-pointer hover:border-slate-300 transition duration-150 border border-[#334155] bg-[#1e293b]"
                      style={{
                        backgroundImage: 'url("/images/iot.jpg.webp")',
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    >
                      <div className="absolute inset-0 bg-[#1e293b]/90 hover:bg-[#1e293b]/85 transition duration-150"></div>
                      <div className="relative z-10 p-5 h-full flex items-center gap-3">
                        <div className="text-[#94a3b8] text-xl flex-none bg-[#0f172a] p-2 rounded border border-[#334155]">🔌</div>
                        <h3 className="text-white font-bold text-sm tracking-tight">
                          IoT & Hardware
                        </h3>
                      </div>
                    </div>

                    <div
                      className="relative h-24 rounded-md overflow-hidden cursor-pointer hover:border-slate-300 transition duration-150 border border-[#334155] bg-[#1e293b]"
                      style={{
                        backgroundImage: 'url("/images/opensource.jpg")',
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    >
                      <div className="absolute inset-0 bg-[#1e293b]/90 hover:bg-[#1e293b]/85 transition duration-150"></div>
                      <div className="relative z-10 p-5 h-full flex items-center gap-3">
                        <div className="text-[#94a3b8] text-xl flex-none bg-[#0f172a] p-2 rounded border border-[#334155]">🌐</div>
                        <h3 className="text-white font-bold text-sm tracking-tight">
                          Open Source
                        </h3>
                      </div>
                    </div>

                    <div
                      className="relative h-24 rounded-md overflow-hidden cursor-pointer hover:border-slate-300 transition duration-150 border border-[#334155] bg-[#1e293b]"
                      style={{
                        backgroundImage: 'url("/images/product.jpeg")',
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    >
                      <div className="absolute inset-0 bg-[#1e293b]/90 hover:bg-[#1e293b]/85 transition duration-150"></div>
                      <div className="relative z-10 p-5 h-full flex items-center gap-3">
                        <div className="text-[#94a3b8] text-xl flex-none bg-[#0f172a] p-2 rounded border border-[#334155]">📊</div>
                        <h3 className="text-white font-bold text-sm tracking-tight">
                          Product Management
                        </h3>
                      </div>
                    </div>

                    <div
                      className="relative h-24 rounded-md overflow-hidden cursor-pointer hover:border-slate-300 transition duration-150 border border-[#334155] bg-[#1e293b]"
                      style={{
                        backgroundImage: 'url("/images/startup.png")',
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    >
                      <div className="absolute inset-0 bg-[#1e293b]/90 hover:bg-[#1e293b]/85 transition duration-150"></div>
                      <div className="relative z-10 p-5 h-full flex items-center gap-3">
                        <div className="text-[#94a3b8] text-xl flex-none bg-[#0f172a] p-2 rounded border border-[#334155]">📈</div>
                        <h3 className="text-white font-bold text-sm tracking-tight">
                          Startups & Scaling
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* About Our Club Section - Asymmetric Grid */}
            <section id="about" className="py-16 px-6 lg:px-12 border-b border-[#334155] bg-[#0f172a]">
              <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-extrabold text-white mb-10 tracking-tight">
                  About Our Club
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                  {/* About Text (2/3 width) */}
                  <div className="lg:col-span-2 space-y-6">
                    <p className="text-base text-[#94a3b8] leading-relaxed">
                      The AWS Cloud Club is a vibrant community dedicated to
                      exploring, learning, and mastering Amazon Web Services. Whether
                      you're a beginner curious about cloud computing or an
                      experienced developer looking to deepen your expertise, our club
                      provides a supportive environment for growth.
                    </p>
                    <p className="text-base text-[#94a3b8] leading-relaxed">
                      We organize workshops, hackathons, guest lectures, and
                      collaborative projects to help members gain hands-on experience
                      and prepare for industry certifications. Our goal is to foster
                      innovation and build a strong network of cloud professionals.
                    </p>
                  </div>

                  {/* Sidebar FAQs & Info Card (1/3 width) */}
                  <div className="lg:col-span-1 space-y-6">
                    {/* Cloud Innovation Card */}
                    <div className="bg-[#1e293b] border border-[#334155] rounded-md p-6">
                      <div className="text-3xl mb-3">☁️</div>
                      <h3 className="text-lg font-bold text-white mb-2">
                        Cloud Innovation
                      </h3>
                      <p className="text-sm text-[#94a3b8] leading-relaxed">
                        Building tomorrow's solutions with today's technology.
                      </p>
                    </div>

                    {/* FAQs Widget matching Image 3 */}
                    <div className="bg-[#1e293b] border border-[#334155] rounded-md p-6">
                      <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 pb-2 border-b border-[#334155]">
                        FAQs
                      </h4>
                      <div className="space-y-4">
                        <div>
                          <h5 className="text-sm font-semibold text-white mb-1">
                            Who can join an AWS Student Builder Group?
                          </h5>
                          <p className="text-xs text-[#94a3b8] leading-relaxed">
                            Open to any student enrolled in a post-secondary institution aged 18+ who is ready to build their tech future.
                          </p>
                        </div>
                        <div>
                          <h5 className="text-sm font-semibold text-white mb-1">
                            Why should I join?
                          </h5>
                          <p className="text-xs text-[#94a3b8] leading-relaxed">
                            To work on real-world projects, prepare for AWS certifications, and gain mentorship from cloud experts.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Why Join Section - Asymmetric Grid */}
            <section className="py-16 px-6 lg:px-12 border-b border-[#334155] bg-[#0c1322]">
              <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                  {/* Content (2/3 width) */}
                  <div className="lg:col-span-2 space-y-6">
                    <h2 className="text-3xl font-extrabold text-white tracking-tight">
                      Why Join AWS Club?
                    </h2>
                    <p className="text-base text-[#94a3b8] leading-relaxed">
                      AWS Cloud Club is the best place to get a complete overview of
                      recent insights and future trends in modern cloud development.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        ["🔧", "Work on real-world cloud projects using AWS"],
                        ["🎯", "Prepare for AWS certifications with guided mentoring"],
                        ["🤝", "Collaborate in a passionate tech community"],
                        ["🚀", "Join internal hackathons and cloud sprints"],
                        ["📚", "Attend technical workshops by AWS experts and alumni"],
                        ["🌍", "Get access to global AWS student programs"],
                        ["💼", "Boost your resume with cloud experience and leadership"],
                      ].map(([icon, text], i) => (
                        <div key={i} className="flex items-start gap-3 bg-[#1e293b] p-3 border border-[#334155] rounded-md">
                          <span className="text-[#94a3b8] text-lg mt-0.5">{icon}</span>
                          <span className="text-sm text-[#94a3b8] leading-snug">{text}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex gap-4 pt-4">
                      <a href="#join" className="btn-primary inline-flex items-center justify-center font-bold px-6 py-2.5 rounded-md hover:bg-slate-100 transition duration-150 text-sm">
                        GET STARTED
                      </a>
                      <a href="#contact" className="bg-[#1e293b] text-white hover:bg-slate-800 border border-[#334155] px-6 py-2.5 rounded-md font-medium transition duration-150 inline-flex items-center justify-center text-sm">
                        SPONSOR
                      </a>
                    </div>
                  </div>

                  {/* Scrolling Gallery (1/3 width) */}
                  <div className="lg:col-span-1">
                    <div className="relative h-[24rem] overflow-hidden rounded-md border border-[#334155] bg-[#1e293b]">
                      <div className="scrolling-gallery flex flex-col gap-3 p-3">
                        {[
                          "/images/1.jpg",
                          "/images/2.jpg",
                          "/images/3.jpg",
                          "/images/4.jpg",
                          "/images/5.jpg",
                          "/images/6.jpg",
                          "/images/7.jpg",
                          "/images/8.jpg",
                          "/images/9.jpg",
                        ].map((img, i) => (
                          <div
                            key={i}
                            className="h-32 rounded-md overflow-hidden relative flex-none border border-[#334155]"
                          >
                            <img
                              src={img}
                              alt={`Gallery image ${i + 1}`}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-[#0f172a]/20"></div>
                          </div>
                        ))}
                        {/* Duplicate list for seamless scrolling */}
                        {[
                          "/images/1.jpg",
                          "/images/2.jpg",
                          "/images/3.jpg",
                          "/images/4.jpg",
                          "/images/5.jpg",
                          "/images/6.jpg",
                          "/images/7.jpg",
                          "/images/8.jpg",
                          "/images/9.jpg",
                        ].map((img, i) => (
                          <div
                            key={`dup-${i}`}
                            className="h-32 rounded-md overflow-hidden relative flex-none border border-[#334155]"
                          >
                            <img
                              src={img}
                              alt={`Gallery image ${i + 1}`}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-[#0f172a]/20"></div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Events Section */}
            <section id="events" className="py-16 px-6 lg:px-12 border-b border-[#334155] bg-[#0f172a]">
              <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-extrabold text-white mb-10 tracking-tight">
                  Upcoming Events
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Event Card 1 */}
                  <div className="bg-[#1e293b] border border-[#334155] p-6 rounded-md flex flex-col justify-between hover:border-slate-400 transition duration-150">
                    <div>
                      <span className="inline-block bg-[#0f172a] text-[#94a3b8] text-xs font-semibold px-2 py-0.5 rounded border border-[#334155] mb-3">
                        Community Day
                      </span>
                      <h3 className="text-lg font-bold text-white mb-1">
                        AWS Student Community Day
                      </h3>
                      <p className="text-xs text-[#94a3b8] font-semibold mb-4">
                        August 15, 2025 | 10:00 AM - 1:00 PM
                      </p>
                      <p className="text-sm text-[#94a3b8] leading-relaxed mb-4">
                        Join students and professionals to learn the latest in AWS
                        Cloud, with workshops, networking, and insights from global AWS
                        experts.
                      </p>
                      <div className="border-t border-[#334155] pt-4 mb-4">
                        <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2">Featured Speakers</h4>
                        <ul className="text-xs text-[#94a3b8] space-y-1 list-disc pl-4">
                          <li>Eric Hanchett – Sr. Developer Advocate, AWS</li>
                          <li>Eric Johnson – Principal Developer Advocate, AWS</li>
                          <li>Nick Coult – Director, Serverless, AWS</li>
                          <li>Sheen Brisals – AWS Serverless Hero</li>
                        </ul>
                      </div>
                    </div>
                    <a
                      href="#"
                      className="text-white hover:text-slate-300 font-bold text-xs inline-flex items-center gap-1 mt-2"
                    >
                      Learn More
                      <svg
                        className="w-3.5 h-3.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        ></path>
                      </svg>
                    </a>
                  </div>

                  {/* Event Card 2 */}
                  <div className="bg-[#1e293b] border border-[#334155] p-6 rounded-md flex flex-col justify-between hover:border-slate-400 transition duration-150">
                    <div>
                      <span className="inline-block bg-[#0f172a] text-[#94a3b8] text-xs font-semibold px-2 py-0.5 rounded border border-[#334155] mb-3">
                        Workshop
                      </span>
                      <h3 className="text-lg font-bold text-white mb-1">
                        Serverless Architectures with Lambda
                      </h3>
                      <p className="text-xs text-[#94a3b8] font-semibold mb-4">
                        September 5, 2025 | 2:00 PM - 5:00 PM
                      </p>
                      <p className="text-sm text-[#94a3b8] leading-relaxed mb-4">
                        Dive into building serverless applications using AWS Lambda, API
                        Gateway, and DynamoDB.
                      </p>
                      <div className="border-t border-[#334155] pt-4 mb-4 space-y-2">
                        <p className="text-xs text-[#94a3b8] leading-relaxed">
                          Includes a live demo deploying a RESTful API in real-time and
                          hands-on troubleshooting tips.
                        </p>
                        <p className="text-xs text-[#94a3b8] leading-relaxed">
                          🍕 Light refreshments will be provided. Attendees also receive
                          exclusive access to a Lambda use-case cheat sheet.
                        </p>
                      </div>
                    </div>
                    <a
                      href="#"
                      className="text-white hover:text-slate-300 font-bold text-xs inline-flex items-center gap-1 mt-2"
                    >
                      Learn More
                      <svg
                        className="w-3.5 h-3.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        ></path>
                      </svg>
                    </a>
                  </div>

                  {/* Event Card 3 */}
                  <div className="bg-[#1e293b] border border-[#334155] p-6 rounded-md flex flex-col justify-between hover:border-slate-400 transition duration-150">
                    <div>
                      <span className="inline-block bg-[#0f172a] text-[#94a3b8] text-xs font-semibold px-2 py-0.5 rounded border border-[#334155] mb-3">
                        Study Group
                      </span>
                      <h3 className="text-lg font-bold text-white mb-1">
                        AWS Solutions Architect Study Group
                      </h3>
                      <p className="text-xs text-[#94a3b8] font-semibold mb-4">
                        Starts September 20, 2025 | Weekly
                      </p>
                      <p className="text-sm text-[#94a3b8] leading-relaxed mb-4">
                        Prepare for the AWS Solutions Architect Associate certification
                        with guided study sessions.
                      </p>
                      <div className="border-t border-[#334155] pt-4 mb-4 space-y-2">
                        <p className="text-xs text-[#94a3b8] leading-relaxed">
                          Access a shared repository of practice exams and study guides
                          curated by certified architects.
                        </p>
                        <p className="text-xs text-[#94a3b8] leading-relaxed">
                          Virtual participation available with Slack channel support for
                          Q&A between sessions.
                        </p>
                      </div>
                    </div>
                    <a
                      href="#"
                      className="text-white hover:text-slate-300 font-bold text-xs inline-flex items-center gap-1 mt-2"
                    >
                      Learn More
                      <svg
                        className="w-3.5 h-3.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </section>

            {/* Board Members Section */}
            <section className="py-16 px-6 lg:px-12 border-b border-[#334155] bg-[#0c1322]">
              <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-extrabold text-white text-center mb-12 tracking-tight">
                  Meet the Board
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                  {/* Akash Kharabe - President */}
                  <div className="bg-[#1e293b] border border-[#334155] p-6 rounded-md text-center flex flex-col items-center hover:border-slate-400 transition duration-150">
                    <div className="w-24 h-24 mb-4 rounded-full overflow-hidden border-2 border-[#334155]">
                      <img
                        src="/images/akash.jpeg"
                        alt="Akash Kharabe"
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <h3 className="text-base font-bold text-white mb-0.5">
                      Akash Kharabe
                    </h3>
                    <p className="text-xs font-semibold text-[#94a3b8] mb-3">
                      President
                    </p>
                    <p className="text-xs text-[#94a3b8] leading-relaxed">
                      AWS Cloud Club Captain
                    </p>
                  </div>

                  {/* Shreyansh Uttam - Vice President */}
                  <div className="bg-[#1e293b] border border-[#334155] p-6 rounded-md text-center flex flex-col items-center hover:border-slate-400 transition duration-150">
                    <div className="w-24 h-24 mb-4 rounded-full overflow-hidden border-2 border-[#334155]">
                      <img
                        src="/images/shreyansh.jpeg"
                        alt="Shreyansh Uttam"
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <h3 className="text-base font-bold text-white mb-0.5">
                      Shreyansh Uttam
                    </h3>
                    <p className="text-xs font-semibold text-[#94a3b8] mb-3">
                      Vice President
                    </p>
                    <p className="text-xs text-[#94a3b8] leading-relaxed">
                      Fostering collaboration and supporting bold club goals.
                    </p>
                  </div>

                  {/* Lakshya Khtour - General Secretary */}
                  <div className="bg-[#1e293b] border border-[#334155] p-6 rounded-md text-center flex flex-col items-center hover:border-slate-400 transition duration-150">
                    <div className="w-24 h-24 mb-4 rounded-full overflow-hidden border-2 border-[#334155]">
                      <img
                        src="/images/lakshya.jpeg"
                        alt="Lakshya Khtour"
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <h3 className="text-base font-bold text-white mb-0.5">
                      Lakshay Khtour
                    </h3>
                    <p className="text-xs font-semibold text-[#94a3b8] mb-3">
                      General Secretary
                    </p>
                    <p className="text-xs text-[#94a3b8] leading-relaxed">
                      Ensuring seamless execution behind the scenes for every initiative.
                    </p>
                  </div>

                  {/* Navya Srivastava - Operational Lead */}
                  <div className="bg-[#1e293b] border border-[#334155] p-6 rounded-md text-center flex flex-col items-center hover:border-slate-400 transition duration-150">
                    <div className="w-24 h-24 mb-4 rounded-full overflow-hidden border-2 border-[#334155]">
                      <img
                        src="/images/navya.jpeg"
                        alt="Navya Srivastava"
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <h3 className="text-base font-bold text-white mb-0.5">
                      Navya Srivastava
                    </h3>
                    <p className="text-xs font-semibold text-[#94a3b8] mb-3">
                      Operational Lead
                    </p>
                    <p className="text-xs text-[#94a3b8] leading-relaxed">
                      Orchestrating events and keeping the club running smoothly.
                    </p>
                  </div>

                  {/* Yash Dhanraj Thakare - Treasurer */}
                  <div className="bg-[#1e293b] border border-[#334155] p-6 rounded-md text-center flex flex-col items-center hover:border-slate-400 transition duration-150">
                    <div className="w-24 h-24 mb-4 rounded-full overflow-hidden border-2 border-[#334155]">
                      <img
                        src="/images/yash.jpg"
                        alt="Yash Dhanraj Thakare"
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <h3 className="text-base font-bold text-white mb-0.5">
                      Yash Dhanraj Thakare
                    </h3>
                    <p className="text-xs font-semibold text-[#94a3b8] mb-3">
                      Treasurer
                    </p>
                    <p className="text-xs text-[#94a3b8] leading-relaxed">
                      Managing resources with integrity and fostering transparency.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Join Us Section */}
            <section id="join" className="py-16 px-6 lg:px-12 border-b border-[#334155] bg-[#0f172a]">
              <div className="max-w-3xl mx-auto text-center space-y-6">
                <h2 className="text-3xl font-extrabold text-white tracking-tight">
                  Ready to Join?
                </h2>
                <p className="text-base text-[#94a3b8] leading-relaxed">
                  Become a part of our growing community! Gain access to exclusive
                  workshops, mentorship, networking opportunities, and a chance to
                  collaborate on exciting cloud projects.
                </p>
                <a
                  href="#join"
                  className="btn-primary inline-flex items-center justify-center font-bold px-8 py-3 rounded-md hover:bg-slate-100 transition duration-150 text-base shadow"
                >
                  Sign Up Now!
                </a>
              </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-16 px-6 lg:px-12 bg-[#0c1322] border-b border-[#334155]">
              <div className="max-w-4xl mx-auto text-center space-y-8">
                <div>
                  <h2 className="text-3xl font-extrabold text-white tracking-tight">
                    Get in Touch
                  </h2>
                  <p className="text-sm text-[#94a3b8] mt-2">
                    Have questions or want to learn more? Reach out to us!
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-[#1e293b] border border-[#334155] p-6 rounded-md shadow-sm">
                    <h3 className="text-base font-bold text-white mb-2">
                      Email Us
                    </h3>
                    <p className="text-sm text-[#94a3b8]">aws@vitbhopal.ac.in</p>
                  </div>
                  <div className="bg-[#1e293b] border border-[#334155] p-6 rounded-md shadow-sm">
                    <h3 className="text-base font-bold text-white mb-3">
                      Follow Us
                    </h3>
                    <div className="flex justify-center space-x-4">
                      <a
                        href="https://www.instagram.com/awscloudclub.vitb"
                        className="text-[#94a3b8] hover:text-white transition duration-150"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <svg
                          className="w-6 h-6"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zM17.25 5.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5z" />
                        </svg>
                      </a>
                      <a
                        href="https://www.linkedin.com/company/aws-cloud-club-vitbhopaluniveristy/"
                        className="text-[#94a3b8] hover:text-white transition duration-150"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <svg
                          className="w-6 h-6"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Footer Section */}
            <footer className="bg-[#0b0f19] border-t border-[#334155] py-8 px-4 text-center text-[#94a3b8] text-xs">
              <div className="max-w-7xl mx-auto space-y-2">
                <p>
                  &copy; {new Date().getFullYear()} AWS Student Builder Group. All rights reserved.
                </p>
                <p>
                  Designed with <span className="text-[#94a3b8]">&hearts;</span> for cloud enthusiasts.
                </p>
              </div>
            </footer>
          </main>
        </div>
      </div>
    </>
  );
};

export default Homepage;

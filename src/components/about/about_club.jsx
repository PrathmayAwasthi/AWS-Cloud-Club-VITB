import React from 'react';
import './about.css'; // Assuming you have saved the CSS file as about.css

const AboutUs = () => {
  return (
    <>
      {/* Main site header with navigation */}
      <header className="header">
        <nav className="nav">
          <div className="nav-container">
            {/* Logo section with AWS branding */}
            <div className="nav-logo">
              <img src="aws_club_logo.png" alt="AWS Cloud Club logo" className="nav-logo-img" />
              <div className="nav-logo-text">
                <span className="logo-line-1">AWS</span>
                <span className="logo-line-2">Cloud Club VITB</span>
              </div>
            </div>

            {/* Main navigation menu */}
            <ul className="nav-menu">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#events">Events</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>

            {/* Mobile navigation toggle (hamburger menu) */}
            <div className="nav-toggle">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </nav>
      </header>

      {/* Main content area */}
      <main className="main">
        {/* Hero section with main page title and subtitle */}
        <section className="hero">
          <div className="container py-20 px-4 min-h-screen">
            <h1 className="hero-title">About AWS Club</h1>
            <p className="hero-subtitle">Empowering students with cloud computing knowledge and AWS expertise</p>
          </div>
        </section>

        {/* Faculty Coordinator section */}
        <section className="about-section" id="faculty-coordinator">
          <div className="container py-20 px-4 min-h-screen">
            {/* Section header with title and decorative divider */}
            <div className="section-header">
              <h2 className="section-title">Faculty Coordinator</h2>
              <div className="section-divider"></div>
            </div>

            {/* Faculty profile card with image and content */}
            <div className="faculty-card card-gradient glow-effect">
              {/* Faculty profile image with hover effect */}
              <div className="faculty-image" data-tooltip="Click to view profile">
                <i className="fas fa-user-tie"></i>
                <div className="image-overlay">
                  <i className="fas fa-external-link-alt"></i>
                </div>
              </div>

              {/* Faculty information and social links */}
              <div className="faculty-content">
                <h3 className="faculty-name">DR [NAME]</h3>
                <p className="faculty-title accent-text">Assistant Professor, Computer Science Department</p>
                <p className="faculty-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>

                {/* Expertise tags */}
                <div className="faculty-expertise">
                  <span className="expertise-tag">Cloud Architecture</span>
                  <span className="expertise-tag">AWS Solutions</span>
                  <span className="expertise-tag">Distributed Systems</span>
                  <span className="expertise-tag">Machine Learning</span>
                  <span className="expertise-tag">DevOps</span>
                </div>

                {/* Social media links for faculty */}
                <div className="faculty-social">
                  <a href="https://linkedin.com/in/dr-xyz" className="social-link" target="_blank" rel="noopener" aria-label="DR xyz's LinkedIn Profile">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="https://twitter.com/drxyz" className="social-link" target="_blank" rel="noopener" aria-label="DR xyz's Twitter">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="https://scholar.google.com/citations?user=drxyz" className="social-link" target="_blank" rel="noopener" aria-label="DR xyz's Google Scholar">
                    <i className="fas fa-graduation-cap"></i>
                  </a>
                  <a href="mailto:dr.xyz@university.edu" className="social-link" aria-label="Email DR xyz">
                    <i className="fas fa-envelope"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Founders section */}
        <section className="about-section" id="founders">
          <div className="container py-20 px-4 min-h-screen">
            {/* Section header with title and decorative divider */}
            <div className="section-header">
              <h2 className="section-title">Founders</h2>
              <div className="section-divider"></div>
            </div>

            {/* Founders grid layout */}
            <div className="founders-grid">
              {/* Founder card */}
              <div className="founder-card card-gradient glow-effect">
                {/* Founder profile image with hover effect */}
                <div className="founder-image" data-tooltip="Click to view profile">
                  <i className="fas fa-user"></i>
                  <div className="image-overlay">
                    <i className="fas fa-external-link-alt"></i>
                  </div>
                </div>

                {/* Founder information */}
                <h3 className="founder-name">[NAME]</h3>
                <p className="founder-role accent-text">Founder,AWS Cloud Club</p>
                <p className="founder-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>

                {/* Social media links for founder */}
                <div className="founder-social">
                  <a href="https://linkedin.com/in/xyz" className="social-link" target="_blank" rel="noopener" aria-label="xyz's LinkedIn Profile">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="https://github.com/xyz" className="social-link" target="_blank" rel="noopener" aria-label="xyz's GitHub">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href="https://twitter.com/xyz" className="social-link" target="_blank" rel="noopener" aria-label="xyz's Twitter">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="mailto:xyz@university.edu" className="social-link" aria-label="Email xyz">
                    <i className="fas fa-envelope"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Club's Aim section */}
        <section className="about-section" id="club-aim">
          <div className="container py-20 px-4 min-h-screen">
            {/* Section header with title and decorative divider */}
            <div className="section-header">
              <h2 className="section-title text-gradient">Club's Aim</h2>
              <div className="section-divider"></div>
            </div>

            {/* Main content area with mission and objectives */}
            <div className="aim-content">
              {/* Left side: Mission description and objectives */}
              <div className="aim-text">
                {/* Club mission statement */}
                <p className="aim-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>

                {/* Club objectives with icons */}
                <div className="aim-objectives">
                  <div className="objective-item">
                    <i className="fas fa-graduation-cap"></i>
                    <div>
                      <h4 className="accent-text">Education & Learning</h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                  </div>
                  <div className="objective-item">
                    <i className="fas fa-users"></i>
                    <div>
                      <h4 className="accent-text">Community Building</h4>
                      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                  </div>
                  <div className="objective-item">
                    <i className="fas fa-trophy"></i>
                    <div>
                      <h4 className="accent-text">Competition & Events</h4>
                      <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    </div>
                  </div>
                  <div className="objective-item">
                    <i className="fas fa-handshake"></i>
                    <div>
                      <h4 className="accent-text">Industry Connection</h4>
                      <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right side: Club statistics */}
              <div className="aim-stats">
                <div className="stat-item">
                  <div className="stat-number">75+</div>
                  <div className="stat-label">Active Members</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">18</div>
                  <div className="stat-label">Workshops Conducted</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">12</div>
                  <div className="stat-label">AWS Certifications</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">4</div>
                  <div className="stat-label">Years Active</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Site footer with links and social media */}
      <footer className="footer">
        <div className="container">
          {/* Footer content grid */}
          <div className="footer-content">
            {/* Club information section */}
            <div className="footer-section">
              <div className="footer-logo">
                <i className="fab fa-aws"></i>
                <span>AWS Club</span>
              </div>
              <p>Empowering the next generation of cloud professionals.</p>
            </div>

            {/* Quick navigation links */}
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#about">About Us</a></li>
                <li><a href="#events">Events</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>

            {/* Social media links */}
            <div className="footer-section">
              <h4>Connect With Us</h4>
              <div className="social-links">
                <a href="https://linkedin.com/company/aws-club" className="social-link" target="_blank" rel="noopener" aria-label="AWS Club LinkedIn">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://twitter.com/awsclub" className="social-link" target="_blank" rel="noopener" aria-label="AWS Club Twitter">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://instagram.com/awsclub" className="social-link" target="_blank" rel="noopener" aria-label="AWS Club Instagram">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://discord.gg/awsclub" className="social-link" target="_blank" rel="noopener" aria-label="AWS Club Discord">
                  <i className="fab fa-discord"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Footer bottom with copyright */}
          <div className="footer-bottom">
            <p>AWS Cloud Clubs</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default AboutUs;

import React, { useState, useEffect } from "react";
const Homepage = ({ onNavigate }) => {
  // Loading state
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  // Mobile menu state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-[#2A003A] to-[#111111] z-50">
        <div className="text-center">
          {/* AWS CLUB VITB Logo/Text */}
          <div className="flex flex-col items-center justify-center mb-8">
            <img
              src="/images/aws_club_logo.png"
              alt="AWS Club Logo"
              className="w-24 h-24 mb-4 animate-pulse"
            />
            <h1 className="text-4xl md:text-5xl font-extrabold text-white">
              <span>AWS </span>
              <span className="bg-gradient-to-r from-[#FF69B4] to-[#6c63ff] bg-clip-text text-transparent">
                CLUB VITB
              </span>
            </h1>
          </div>

          {/* Loading Bar */}
          <div className="w-64 md:w-96 h-3 bg-gray-700 rounded-full overflow-hidden mx-auto mb-4">
            <div
              className="h-full bg-gradient-to-r from-[#FF69B4] to-[#6c63ff] transition-all duration-300 ease-out"
              style={{ width: `${loadingProgress}%` }}
            ></div>
          </div>

          {/* Percentage Text */}
          <p className="text-white text-xl font-mono">
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
                    font-family: 'Poppins', sans-serif;
                    background: linear-gradient(to bottom right, #2A003A, #111111);
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
                /* Custom Tailwind colors */
                .gradient-bg {
                    background: linear-gradient(to bottom right, #2A003A, #111111);
                }
                .btn-primary {
                    background: linear-gradient(135deg, #FF69B4, #6c63ff);
                    color: white;
                    padding: 0.75rem 1.5rem;
                    border-radius: 0.5rem;
                    font-weight: 600;
                    transition: all 0.3s ease;
                    border: none;
                    box-shadow: 0 4px 15px rgba(108, 99, 255, 0.3);
                }
                .btn-primary:hover {
                    background: linear-gradient(135deg, #E05A9F, #5a51e6);
                    transform: translateY(-2px);
                    box-shadow: 0 6px 20px rgba(108, 99, 255, 0.4);
                }
                .text-gradient {
                    background: linear-gradient(135deg, #FF69B4, #6c63ff);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
                .accent-border {
                    border-color: #6c63ff;
                }
                .accent-text {
                    color: #6c63ff;
                }
                .accent-hover:hover {
                    color: #5a51e6;
                }
                .card-gradient {
                    background: linear-gradient(135deg, rgba(42, 0, 58, 0.8), rgba(108, 99, 255, 0.1), rgba(17, 17, 17, 0.8));
                    border: 1px solid rgba(108, 99, 255, 0.3);
                }
                .glow-effect {
                    box-shadow: 0 0 20px rgba(108, 99, 255, 0.2);
                }
                `}
      </style>

      {/* Google Fonts - Poppins */}
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />

      {/* Header Section */}
      <header className="bg-black bg-opacity-50 py-4 shadow-lg sticky top-0 z-50 backdrop-blur-sm">
      <nav className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="/images/aws_club_logo.png"
            width="100px"
            alt="AWS Club Logo"
          />
          <a className="text-3xl font-extrabold tracking-tight">
            <span className="text-white"> AWS </span>
            <p>
              <span className="text-gradient"> Cloud Club VITB</span>
            </p>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <button
            onClick={() => onNavigate('home')}
            className="text-white hover:text-fuchsia-400 transition duration-300 font-medium"
          >
            Home
          </button>
          <button
            onClick={() => onNavigate('about')}
            className="text-white hover:text-fuchsia-400 transition duration-300 font-medium"
          >
            About Us
          </button>
          <a
            href="#events"
            className="text-white hover:text-fuchsia-400 transition duration-300 font-medium"
          >
            Events
          </a>
          <a
            href="#join"
            className="text-white hover:text-fuchsia-400 transition duration-300 font-medium"
          >
            Gallery
          </a>
          <a
            href="#contact"
            className="text-white hover:text-fuchsia-400 transition duration-300 font-medium"
          >
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={toggleMobileMenu}
          >
            <svg
              className="w-8 h-8"
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
      </nav>
    </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative h-screen flex items-center justify-start overflow-hidden"
      >
        {/* Background Video Container */}
        <div className="absolute inset-0 z-0">
          {/* Animated Tech Pattern Overlay */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-10 left-10 w-32 h-32 border border-cyan-400 rounded-full animate-pulse"></div>
            <div className="absolute top-40 right-20 w-24 h-24 border border-purple-400 rounded-lg animate-bounce"></div>
            <div className="absolute bottom-32 left-32 w-20 h-20 border border-pink-400 rounded-full animate-ping"></div>
            <div className="absolute bottom-20 right-40 w-28 h-28 border border-blue-400 rounded-lg animate-pulse"></div>
          </div>

          {/* Video element */}
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/images/Video-246.mp4" type="video/mp4" />
          </video>

          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>

          {/* Gradient overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/40 via-transparent to-blue-900/40"></div>
        </div>

        {/* Content Container - Positioned to bottom left */}
        <div className="absolute bottom-16 left-8 z-10 max-w-lg">
          <div className="space-y-4">
            <h1 className="font-extrabold leading-tight text-white drop-shadow-lg">
              <div className="text-5xl md:text-6xl whitespace-nowrap">
                Innovate. Learn. Build.
              </div>
              <div className="text-gradient text-5xl md:text-6xl whitespace-nowrap">
                AWS Cloud Club.
              </div>
            </h1>

            <p className="text-lg text-white opacity-90 leading-relaxed max-w-xl">
              Empowering the next generation of cloud enthusiasts and
              developers. Dive deep into AWS services, network with peers, and
              build groundbreaking solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 px-4 bg-black bg-opacity-30">
        <div className="container mx-auto max-w-7xl">
          {/* Statistics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
            <div className="card-gradient p-6 rounded-xl text-center border-2 border-fuchsia-500 hover:scale-105 transition duration-300">
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                150+
              </div>
              <div className="text-white text-sm font-medium">
                ACTIVE MEMBERS
              </div>
            </div>
            <div className="card-gradient p-6 rounded-xl text-center border-2 border-fuchsia-500 hover:scale-105 transition duration-300">
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                30+
              </div>
              <div className="text-white text-sm font-medium">
                CLOUD PROJECTS
              </div>
            </div>
            <div className="card-gradient p-6 rounded-xl text-center border-2 border-fuchsia-500 hover:scale-105 transition duration-300">
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                12+
              </div>
              <div className="text-white text-sm font-medium">WORKSHOPS</div>
            </div>
            <div className="card-gradient p-6 rounded-xl text-center border-2 border-fuchsia-500 hover:scale-105 transition duration-300">
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                6+
              </div>
              <div className="text-white text-sm font-medium">
                AWS CERTIFICATIONS
              </div>
            </div>
            <div className="card-gradient p-6 rounded-xl text-center border-2 border-fuchsia-500 hover:scale-105 transition duration-300">
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                1,000+
              </div>
              <div className="text-white text-sm font-medium">
                GITHUB CONTRIBUTIONS
              </div>
            </div>
          </div>

          {/* Call-to-Action Banner */}
          <div className="card-gradient p-8 rounded-xl border-2 border-fuchsia-500 glow-effect">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="text-center lg:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  Join our cloud community before memberships fill up in
                </h3>
              </div>

              {/* Countdown Timer */}
              <div className="flex items-center gap-3">
                <div className="bg-black bg-opacity-50 p-3 rounded-lg border border-fuchsia-500 min-w-[60px] text-center">
                  <div className="text-2xl font-bold text-gradient" id="days">
                    30
                  </div>
                  <div className="text-xs text-white opacity-75">DAYS</div>
                </div>
                <div className="text-fuchsia-400 text-2xl font-bold">:</div>
                <div className="bg-black bg-opacity-50 p-3 rounded-lg border border-fuchsia-500 min-w-[60px] text-center">
                  <div className="text-2xl font-bold text-gradient" id="hours">
                    15
                  </div>
                  <div className="text-xs text-white opacity-75">HOURS</div>
                </div>
                <div className="text-fuchsia-400 text-2xl font-bold">:</div>
                <div className="bg-black bg-opacity-50 p-3 rounded-lg border border-fuchsia-500 min-w-[60px] text-center">
                  <div
                    className="text-2xl font-bold text-gradient"
                    id="minutes"
                  >
                    45
                  </div>
                  <div className="text-xs text-white opacity-75">MINUTES</div>
                </div>
                <div className="text-fuchsia-400 text-2xl font-bold">:</div>
                <div className="bg-black bg-opacity-50 p-3 rounded-lg border border-fuchsia-500 min-w-[60px] text-center">
                  <div
                    className="text-2xl font-bold text-gradient"
                    id="seconds"
                  >
                    30
                  </div>
                  <div className="text-xs text-white opacity-75">SECONDS</div>
                </div>
              </div>

              <div className="text-center">
                <div className="mb-4">
                  <span className="text-white text-sm">Starting from</span>
                  <br />
                  <span className="text-3xl font-bold text-gradient">Free</span>
                  <span className="text-white text-xl line-through opacity-60 ml-2">
                    ₹299
                  </span>
                </div>
                <button className="btn-primary px-8 py-3 text-lg font-bold rounded-full hover:scale-105 transform transition duration-300">
                  JOIN NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Cloud Section */}
      <section id="explore-cloud" className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left side - Heading */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
                🚀 Explore the Domains We Focus On.
              </h2>
              <p className="text-lg text-white opacity-90 leading-relaxed">
                Dive into the key areas our{" "}
                <span className="text-gradient">AWS Club</span> specializes in —
                from cloud infrastructure to cutting-edge AI and IoT solutions.
              </p>
            </div>

            {/* Right side - Video Placeholder */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md h-64 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden shadow-xl">
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
          <div className="space-y-6">
            {/* Row 1 - 4 cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div
                className="relative h-40 rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition duration-300 border-2 border-fuchsia-500 hover:border-fuchsia-400 hover:shadow-lg hover:shadow-fuchsia-500/30"
                style={{
                  backgroundImage: 'url("/images/aws_infra.jpeg")',
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 to-purple-900/80"></div>
                <div className="relative z-10 p-6 h-full flex items-center justify-center">
                  <h3 className="text-white font-bold text-center text-base">
                    AWS Infrastructure
                  </h3>
                </div>
              </div>

              <div
                className="relative h-40 rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition duration-300 border-2 border-fuchsia-500 hover:border-fuchsia-400 hover:shadow-lg hover:shadow-fuchsia-500/30"
                style={{
                  backgroundImage: 'url("/images/cloud_computing.jpg.webp")',
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 to-blue-900/80"></div>
                <div className="relative z-10 p-6 h-full flex items-center justify-center">
                  <h3 className="text-white font-bold text-center text-base">
                    Cloud Computing
                  </h3>
                </div>
              </div>

              <div
                className="relative h-40 rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition duration-300 border-2 border-fuchsia-500 hover:border-fuchsia-400 hover:shadow-lg hover:shadow-fuchsia-500/30"
                style={{
                  backgroundImage: 'url("/images/devops.jpeg")',
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/80 to-purple-900/80"></div>
                <div className="relative z-10 p-6 h-full flex items-center justify-center">
                  <h3 className="text-white font-bold text-center text-base">
                    DevOps
                  </h3>
                </div>
              </div>

              <div
                className="relative h-40 rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition duration-300 border-2 border-fuchsia-500 hover:border-fuchsia-400 hover:shadow-lg hover:shadow-fuchsia-500/30"
                style={{
                  backgroundImage: 'url("/images/software_arch.png.webp")',
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/80 to-pink-900/80"></div>
                <div className="relative z-10 p-6 h-full flex items-center justify-center">
                  <h3 className="text-white font-bold text-center text-base">
                    Software Architecture
                  </h3>
                </div>
              </div>
            </div>

            {/* Row 2 - 4 cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div
                className="relative h-40 rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition duration-300 border-2 border-fuchsia-500 hover:border-fuchsia-400 hover:shadow-lg hover:shadow-fuchsia-500/30"
                style={{
                  backgroundImage: 'url("/images/aws_ml.png")',
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-teal-900/80 to-blue-900/80"></div>
                <div className="relative z-10 p-6 h-full flex items-center justify-center">
                  <h3 className="text-white font-bold text-center text-base">
                    Machine Learning
                  </h3>
                </div>
              </div>

              <div
                className="relative h-40 rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition duration-300 border-2 border-fuchsia-500 hover:border-fuchsia-400 hover:shadow-lg hover:shadow-fuchsia-500/30"
                style={{
                  backgroundImage: 'url("/images/frontend.png")',
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 to-indigo-900/80"></div>
                <div className="relative z-10 p-6 h-full flex items-center justify-center">
                  <h3 className="text-white font-bold text-center text-base">
                    Frontend & UI/UX
                  </h3>
                </div>
              </div>

              <div
                className="relative h-40 rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition duration-300 border-2 border-fuchsia-500 hover:border-fuchsia-400 hover:shadow-lg hover:shadow-fuchsia-500/30"
                style={{
                  backgroundImage: 'url("/images/cloud-testing-tools.jpeg")',
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 to-purple-900/80"></div>
                <div className="relative z-10 p-6 h-full flex items-center justify-center">
                  <h3 className="text-white font-bold text-center text-base">
                    Quality & Testing
                  </h3>
                </div>
              </div>

              <div
                className="relative h-40 rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition duration-300 border-2 border-fuchsia-500 hover:border-fuchsia-400 hover:shadow-lg hover:shadow-fuchsia-500/30"
                style={{
                  backgroundImage: 'url("/images/security.jpeg")',
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-teal-900/80 to-blue-900/80"></div>
                <div className="relative z-10 p-6 h-full flex items-center justify-center">
                  <h3 className="text-white font-bold text-center text-base">
                    Cybersecurity
                  </h3>
                </div>
              </div>
            </div>

            {/* Row 3 - 4 cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div
                className="relative h-40 rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition duration-300 border-2 border-fuchsia-500 hover:border-fuchsia-400 hover:shadow-lg hover:shadow-fuchsia-500/30"
                style={{
                  backgroundImage: 'url("/images/iot.jpg.webp")',
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 to-teal-900/80"></div>
                <div className="relative z-10 p-6 h-full flex items-center justify-center">
                  <h3 className="text-white font-bold text-center text-base">
                    IoT & Hardware
                  </h3>
                </div>
              </div>

              <div
                className="relative h-40 rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition duration-300 border-2 border-fuchsia-500 hover:border-fuchsia-400 hover:shadow-lg hover:shadow-fuchsia-500/30"
                style={{
                  backgroundImage: 'url("/images/opensource.jpg")',
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-teal-900/80 to-green-900/80"></div>
                <div className="relative z-10 p-6 h-full flex items-center justify-center">
                  <h3 className="text-white font-bold text-center text-base">
                    Open Source
                  </h3>
                </div>
              </div>

              <div
                className="relative h-40 rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition duration-300 border-2 border-fuchsia-500 hover:border-fuchsia-400 hover:shadow-lg hover:shadow-fuchsia-500/30"
                style={{
                  backgroundImage: 'url("/images/product.jpeg")',
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 to-blue-900/80"></div>
                <div className="relative z-10 p-6 h-full flex items-center justify-center">
                  <h3 className="text-white font-bold text-center text-base">
                    Product Management
                  </h3>
                </div>
              </div>

              <div
                className="relative h-40 rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition duration-300 border-2 border-fuchsia-500 hover:border-fuchsia-400 hover:shadow-lg hover:shadow-fuchsia-500/30"
                style={{
                  backgroundImage: 'url("/images/startup.png")',
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-teal-900/80 to-blue-900/80"></div>
                <div className="relative z-10 p-6 h-full flex items-center justify-center">
                  <h3 className="text-white font-bold text-center text-base">
                    Startups & Scaling
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section
        id="about"
        className="py-20 px-4 bg-black bg-opacity-40 rounded-t-3xl -mt-16 relative z-20"
      >
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">
            About Our <span className="text-gradient">Club</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-white mb-6 leading-relaxed">
                The AWS Cloud Club is a vibrant community dedicated to
                exploring, learning, and mastering Amazon Web Services. Whether
                you're a beginner curious about cloud computing or an
                experienced developer looking to deepen your expertise, our club
                provides a supportive environment for growth.
              </p>
              <p className="text-lg text-white leading-relaxed">
                We organize workshops, hackathons, guest lectures, and
                collaborative projects to help members gain hands-on experience
                and prepare for industry certifications. Our goal is to foster
                innovation and build a strong network of cloud professionals.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="card-gradient rounded-xl p-8 shadow-lg glow-effect w-full max-w-md">
                <div className="text-center">
                  <div className="text-6xl mb-4">☁️</div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Cloud Innovation
                  </h3>
                  <p className="text-white opacity-90">
                    Building tomorrow's solutions with today's technology
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="py-20 px-4 bg-black bg-opacity-40">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
                Why Join <span className="text-gradient">AWS Club?</span>
              </h2>
              <p className="text-lg text-white opacity-90 leading-relaxed mb-8">
                AWS Cloud Club is the best place to get a complete overview of
                recent insights and future trends in modern cloud development.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  ["🔧", "Work on real-world cloud projects using AWS"],
                  [
                    "🎯",
                    "Prepare for AWS certifications with guided mentoring",
                  ],
                  ["🤝", "Collaborate in a passionate tech community"],
                  ["🚀", "Join internal hackathons and cloud sprints"],
                  [
                    "📚",
                    "Attend technical workshops by AWS experts and alumni",
                  ],
                  ["🌍", "Get access to global AWS student programs"],
                  [
                    "💼",
                    "Boost your resume with cloud experience and leadership",
                  ],
                ].map(([icon, text], i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-fuchsia-400 text-xl mt-1">
                      {icon}
                    </span>
                    <span className="text-white text-lg">{text}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn-primary px-8 py-3 text-lg font-bold rounded-full">
                  GET STARTED
                </button>
                <button className="border-2 border-fuchsia-500 text-fuchsia-400 px-8 py-3 text-lg font-bold rounded-full hover:bg-fuchsia-500 hover:text-white transition duration-300">
                  SPONSOR
                </button>
              </div>
            </div>

            {/* Right Side Scrolling Image Gallery */}
            <div className="relative h-[28rem] overflow-hidden rounded-xl">
              <style>
                {`
      @keyframes scrollUp {
        0% { transform: translateY(0); }
        100% { transform: translateY(-50%); }
      }
      .scrolling-gallery {
        animation: scrollUp 20s linear infinite;
      }
      .scrolling-gallery:hover {
        animation-play-state: paused;
      }
    `}
              </style>
              <div className="scrolling-gallery flex flex-col gap-4">
                {[
                  "images/1.jpg",
                  "images/2.jpg",
                  "images/3.jpg",
                  "images/4.jpg",
                  "images/5.jpg",
                  "images/6.jpg",
                  "images/7.jpg",
                  "images/8.jpg",
                  "images/9.jpg",
                ].map((img, i) => (
                  <div
                    key={i}
                    className="min-h-[12rem] rounded-lg overflow-hidden relative"
                  >
                    <img
                      src={img}
                      alt={`Gallery image ${i + 1}`}
                      className="w-full h-full object-cover absolute inset-0"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">
            Upcoming <span className="text-gradient">Events</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Event Card 1 */}
            <div className="card-gradient p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out glow-effect">
              <h3 className="text-2xl font-semibold mb-3 text-white">
                AWS Student Community Day
              </h3>
              <p className="accent-text text-sm mb-4 font-medium">
                August 15, 2025 | 10:00 AM - 1:00 PM
              </p>
              <p className="text-white opacity-90 mb-4">
                Join students and professionals to learn the latest in AWS
                Cloud, with workshops, networking, and insights from global AWS
                experts.
              </p>
              <div className="mb-3">
                <h4 className="font-semibold text-white">Featured Speakers</h4>
                <ul className="text-white opacity-90 text-sm mt-2 list-disc pl-5">
                  <li>Eric Hanchett – Sr. Developer Advocate, AWS</li>
                  <li>Eric Johnson – Principal Developer Advocate, AWS</li>
                  <li>Nick Coult – Director, Serverless, AWS</li>
                  <li>Sheen Brisals – AWS Serverless Hero</li>
                </ul>
              </div>
              <a
                href="#"
                className="accent-text accent-hover font-medium flex items-center transition duration-300"
              >
                Learn More
                <svg
                  className="ml-1 w-4 h-4"
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
            <div className="card-gradient p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out glow-effect">
              <h3 className="text-2xl font-semibold mb-3 text-white">
                Serverless Architectures with Lambda
              </h3>
              <p className="accent-text text-sm mb-4 font-medium">
                September 5, 2025 | 2:00 PM - 5:00 PM
              </p>
              <p className="text-white opacity-90 mb-4">
                Dive into building serverless applications using AWS Lambda, API
                Gateway, and DynamoDB.
                <br />
                <span className="block mt-2">
                  Includes a live demo deploying a RESTful API in real-time and
                  hands-on troubleshooting tips.
                </span>
                <span className="block mt-2">
                  🍕 Light refreshments will be provided. Attendees also receive
                  exclusive access to a Lambda use-case cheat sheet.
                </span>
              </p>
              <a
                href="#"
                className="accent-text accent-hover font-medium flex items-center transition duration-300"
              >
                Learn More
                <svg
                  className="ml-1 w-4 h-4"
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
            <div className="card-gradient p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out glow-effect">
              <h3 className="text-2xl font-semibold mb-3 text-white">
                AWS Solutions Architect Study Group
              </h3>
              <p className="accent-text text-sm mb-4 font-medium">
                Starts September 20, 2025 | Weekly
              </p>
              <p className="text-white opacity-90 mb-4">
                Prepare for the AWS Solutions Architect Associate certification
                with guided study sessions.
                <br />
                <span className="block mt-2">
                  Access a shared repository of practice exams and study guides
                  curated by certified architects.
                </span>
                <span className="block mt-2">
                  Virtual participation available with Slack channel support for
                  Q&A between sessions.
                </span>
              </p>
              <a
                href="#"
                className="accent-text accent-hover font-medium flex items-center transition duration-300"
              >
                Learn More
                <svg
                  className="ml-1 w-4 h-4"
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
      <section className="py-20 px-4 bg-gradient-to-b from-purple-800/30 to-transparent">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
            Meet the <span className="text-gradient">Board</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 justify-items-center">
            {/* Akash Kharabe - President */}
            <div className="card-gradient p-8 rounded-xl shadow-lg glow-effect text-center w-full max-w-xs flex flex-col items-center border-2 border-fuchsia-500 hover:border-fuchsia-400 transform hover:scale-110 hover:-translate-y-2 transition-all duration-300 ease-in-out hover:shadow-2xl hover:shadow-fuchsia-500/30">
              <div className="w-36 h-36 mb-6 rounded-full overflow-hidden bg-gradient-to-br from-fuchsia-500/50 to-indigo-800/60 border-4 border-indigo-400 flex items-center justify-center transform hover:scale-105 transition-transform duration-300">
                <img
                  src="/images/akash.jpeg"
                  alt="Akash Kharabe"
                  className="object-cover w-full h-full hover:brightness-110 transition-all duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Akash Kharabe
              </h3>
              <p className="accent-text text-base font-semibold mb-3">
                President
              </p>
              <p className="text-white opacity-80 text-sm leading-relaxed">
                AWS Cloud Club Captain
              </p>
            </div>

            {/* Shreyansh Uttam - Vice President */}
            <div className="card-gradient p-8 rounded-xl shadow-lg glow-effect text-center w-full max-w-xs flex flex-col items-center border-2 border-fuchsia-500 hover:border-fuchsia-400 transform hover:scale-110 hover:-translate-y-2 transition-all duration-300 ease-in-out hover:shadow-2xl hover:shadow-fuchsia-500/30">
              <div className="w-36 h-36 mb-6 rounded-full overflow-hidden bg-gradient-to-br from-indigo-500/40 to-purple-800/60 border-4 border-indigo-400 flex items-center justify-center transform hover:scale-105 transition-transform duration-300">
                <img
                  src="/images/shreyansh.jpeg"
                  alt="Shreyansh Uttam"
                  className="object-cover w-full h-full hover:brightness-110 transition-all duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Shreyansh Uttam
              </h3>
              <p className="accent-text text-base font-semibold mb-3">
                Vice President
              </p>
              <p className="text-white opacity-80 text-sm leading-relaxed">
                Fostering collaboration and supporting bold club goals.
              </p>
            </div>

            {/* Lakshya Khtour - General Secretary */}
            <div className="card-gradient p-8 rounded-xl shadow-lg glow-effect text-center w-full max-w-xs flex flex-col items-center border-2 border-fuchsia-500 hover:border-fuchsia-400 transform hover:scale-110 hover:-translate-y-2 transition-all duration-300 ease-in-out hover:shadow-2xl hover:shadow-fuchsia-500/30">
              <div className="w-36 h-36 mb-6 rounded-full overflow-hidden bg-gradient-to-br from-pink-500/60 to-purple-900/50 border-4 border-indigo-400 flex items-center justify-center transform hover:scale-105 transition-transform duration-300">
                <img
                  src="/images/lakshya.jpeg"
                  alt="Lakshya Khtour"
                  className="object-cover w-full h-full hover:brightness-110 transition-all duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Lakshay Khtour
              </h3>
              <p className="accent-text text-base font-semibold mb-3">
                General Secretary
              </p>
              <p className="text-white opacity-80 text-sm leading-relaxed">
                Ensuring seamless execution behind the scenes for every
                initiative.
              </p>
            </div>

            {/* Navya Srivastava - Operational Lead */}
            <div className="card-gradient p-8 rounded-xl shadow-lg glow-effect text-center w-full max-w-xs flex flex-col items-center border-2 border-fuchsia-500 hover:border-fuchsia-400 transform hover:scale-110 hover:-translate-y-2 transition-all duration-300 ease-in-out hover:shadow-2xl hover:shadow-fuchsia-500/30">
              <div className="w-36 h-36 mb-6 rounded-full overflow-hidden bg-gradient-to-br from-purple-500/50 to-blue-900/50 border-4 border-indigo-400 flex items-center justify-center transform hover:scale-105 transition-transform duration-300">
                <img
                  src="/images/navya.jpeg"
                  alt="Navya Srivastava"
                  className="object-cover w-full h-full hover:brightness-110 transition-all duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Navya Srivastava
              </h3>
              <p className="accent-text text-base font-semibold mb-3">
                Operational Lead
              </p>
              <p className="text-white opacity-80 text-sm leading-relaxed">
                Orchestrating events and keeping the club running smoothly.
              </p>
            </div>

            {/* Yash Dhanraj Thakare - Treasurer */}
            <div className="card-gradient p-8 rounded-xl shadow-lg glow-effect text-center w-full max-w-xs flex flex-col items-center border-2 border-fuchsia-500 hover:border-fuchsia-400 transform hover:scale-110 hover:-translate-y-2 transition-all duration-300 ease-in-out hover:shadow-2xl hover:shadow-fuchsia-500/30">
              <div className="w-36 h-36 mb-6 rounded-full overflow-hidden bg-gradient-to-br from-fuchsia-400/30 to-indigo-900/70 border-4 border-indigo-400 flex items-center justify-center transform hover:scale-105 transition-transform duration-300">
                <img
                  src="/images/yash.jpg"
                  alt="Yash Dhanraj Thakare"
                  className="object-cover w-full h-full hover:brightness-110 transition-all duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Yash Dhanraj Thakare
              </h3>
              <p className="accent-text text-base font-semibold mb-3">
                Treasurer
              </p>
              <p className="text-white opacity-80 text-sm leading-relaxed">
                Managing resources with integrity and fostering transparency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section id="join" className="py-20 px-4 bg-black bg-opacity-40">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
            Ready to <span className="text-gradient">Join</span>?
          </h2>
          <p className="text-lg text-white mb-10 opacity-90 leading-relaxed">
            Become a part of our growing community! Gain access to exclusive
            workshops, mentorship, networking opportunities, and a chance to
            collaborate on exciting cloud projects.
          </p>
          <a
            href="#join"
            className="btn-primary inline-block text-lg md:text-xl px-10 py-5 rounded-full shadow-xl hover:scale-105 transform transition duration-300 ease-in-out"
          >
            Sign Up Now!
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-lg text-white mb-10 opacity-90 leading-relaxed">
            Have questions or want to learn more? Reach out to us!
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-8">
            <div className="card-gradient p-6 rounded-xl shadow-lg glow-effect flex-1">
              <h3 className="text-xl font-semibold mb-3 text-white">
                Email Us
              </h3>
              <p className="text-white opacity-90">aws@vitbhopal.ac.in</p>
            </div>
            <div className="card-gradient p-6 rounded-xl shadow-lg glow-effect flex-1">
              <h3 className="text-xl font-semibold mb-3 text-white">
                Follow Us
              </h3>
              <div className="flex justify-center space-x-4 mt-2">
                <a
                  href="https://www.instagram.com/awscloudclub.vitb"
                  className="text-white hover:text-fuchsia-400 transition duration-300"
                >
                  <svg
                    className="w-8 h-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zM17.25 5.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/aws-cloud-club-vitbhopaluniveristy/"
                  className="text-white hover:text-fuchsia-400 transition duration-300"
                >
                  <svg
                    className="w-8 h-8"
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
      <footer className="bg-black bg-opacity-70 py-8 px-4 text-center text-white text-sm">
        <div className="container mx-auto">
          <p>
            &copy; {new Date().getFullYear()} AWS Cloud Club. All rights
            reserved.
          </p>
          <p className="mt-2">
            Designed with <span className="text-red-500">&hearts;</span> for
            cloud enthusiasts.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Homepage;

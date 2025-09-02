import React, { useState } from "react";

const About = () => {
  const [hoveredMember, setHoveredMember] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const teamMembers = [
    {
      id: 1,
      name: "Rishav Raj",
      role: "Member"
    },
    {
      id: 2,
      name: "Shivang Mishra", 
      role: "Content Lead"
    },
    {
      id: 3,
      name: "Ayushi Sharma",
      role: "Content Co-Lead"
    },
    {
      id: 4,
      name: "Harshita Sonwani",
      role: "Member"
    },
    {
      id: 5,
      name: "Yogesh Sahu",
      role: "Member"
    },
    {
      id: 6,
      name: "Neel Pandey",
      role: "Member"
    },
    {
      id: 7,
      name: "Prathmay Awasthi",
      role: "Lead"
    },
    {
      id: 8,
      name: "Aadya Chauhan",
      role: "Member"
    },
    {
      id: 9,
      name: "Rishika Sinha",
      role: "Member"
    },
    {
      id: 10,
      name: "Aryan Kumar",
      role: "Member"
    },
    {
      id: 11,
      name: "Veedushi Jain",
      role: "Member"
    },
    {
      id: 12,
      name: "Ishita Gautam",
      role: "Member"
    },
    {
      id: 13,
      name: "Riya Shukla",
      role: "Member"
    },
    {
      id: 14,
      name: "Mansaa Kohli",
      role: "Member"
    },
    {
      id: 15,
      name: "Vaishnavi Tiwari",
      role: "Co-Lead"
    },
    {
      id: 16,
      name: "Harshitha GG",
      role: "Lead"
    },
    {
      id: 17,
      name: "Aryamaan Singh Chandel",
      role: "Member"
    },
    {
      id: 18,
      name: "Aditya Nagathan",
      role: "Member"
    },
    {
      id: 19,
      name: "Navya Gupta",
      role: "Member"
    },
    {
      id: 20,
      name: "Keyuri Nathwani",
      role: "Member"
    },
    {
      id: 21,
      name: "Arushi Wadhwa",
      role: "Member"
    },
    {
      id: 22,
      name: "Sarthak patil",
      role: "Member"
    },

    {
      id: 23,
      name: "Arsh Bakshi",
      role: "Member"
    },
    {
      id: 24,
      name: "Mekhla Singh",
      role: "Member"
    },
    {
      id: 25,
      name: "Adarsh Patel",
      role: "Co-Lead"
    },
    {
      id: 26,
      name: "Ayush Patel",
      role: "Lead"
    },
    {
      id: 27,
      name: "Shivam Singh",
      role: "Member"
    },
    {
      id: 28,
      name: "Manik Pandey",
      role: "Member"
    },
    {
      id: 29,
      name: "Niharika Chauhan",
      role: "Member"
    },
    {
      id: 30,
      name: "Nikhil Tiwari",
      role: "Member"
    },
    {
      id: 31,
      name: "Kanishka Agrawal",
      role: "Member"
    },
    {
      id: 32,
      name: "Aastha Adhikari",
      role: "Lead"
    },
    {
      id: 33,
      name: "Pranjal Pandey",
      role: "Co-Lead"
    },
    {
      id: 34,
      name: "Shreya Gupta",
      role: "Member"
    },
  ];

  const handleMouseEnter = (member, event) => {
    setHoveredMember(member);
    setMousePosition({ x: event.clientX, y: event.clientY });
  };

  const handleMouseMove = (event) => {
    if (hoveredMember) {
      setMousePosition({ x: event.clientX, y: event.clientY });
    }
  };

  const handleMouseLeave = () => {
    setHoveredMember(null);
  };

  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <style>
        {`
          body {
            font-family: 'Poppins', sans-serif;
            background: linear-gradient(to bottom right, #2A003A, #111111);
            min-height: 100vh;
            color: #ffffff;
          }
          .text-gradient {
            background: linear-gradient(135deg, #FF69B4, #6c63ff);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .card-gradient {
            background: linear-gradient(135deg, rgba(42, 0, 58, 0.8), rgba(108, 99, 255, 0.1), rgba(17, 17, 17, 0.8));
            border: 1px solid rgba(108, 99, 255, 0.3);
          }
          .glow-effect {
            box-shadow: 0 0 20px rgba(108, 99, 255, 0.2);
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
          .accent-text {
            color: #6c63ff;
          }
          .team-image-container {
            position: relative;
            padding-top: 56.25%; /* 16:9 Aspect Ratio */
            width: 100%;
          }
          .team-image {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: contain; /* Changed from cover to contain */
            background-color: rgba(42, 0, 58, 0.8); /* Dark background for letterboxing */
          }
          .team-image:hover {
            transform: scale(1.02);
            transition: transform 0.3s ease;
          }
        `}
      </style>

      {/* Google Fonts - Poppins */}
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />

      {/* Navigation Bar */}
      <header className="bg-black bg-opacity-50 py-4 shadow-lg sticky top-0 z-50 backdrop-blur-sm">
        <nav className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img
              src="/images/aws_club_logo.png"
              width="100px"
              alt="AWS Club Logo"
            />
            <a href="/" className="text-3xl font-extrabold tracking-tight">
              <span className="text-white">AWS </span>
              <p>
                <span className="text-gradient">Cloud Club VITB</span>
              </p>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a
              href="/"
              className="text-white hover:text-fuchsia-400 transition duration-300 font-medium"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-white hover:text-fuchsia-400 transition duration-300 font-medium"
            >
              About Us
            </a>
            <a
              href="/#events"
              className="text-white hover:text-fuchsia-400 transition duration-300 font-medium"
            >
              Events
            </a>
            <a
              href="/#gallery"
              className="text-white hover:text-fuchsia-400 transition duration-300 font-medium"
            >
              Gallery
            </a>
            <a
              href="/#contact"
              className="text-white hover:text-fuchsia-400 transition duration-300 font-medium"
            >
              Contact
            </a>
            <a
              href="/#about"
              className="text-white hover:text-fuchsia-400 transition duration-300 font-medium"
            >
            About Club
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
                xmlns="http://www.w3.org/2000/svg"
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

        {/* Mobile Menu */}
        <div
          className={`md:hidden bg-black bg-opacity-70 py-4 mt-2 rounded-lg mx-4 ${
            isMobileMenuOpen ? "block" : "hidden"
          }`}
        >
          <div className="flex flex-col items-center space-y-4">
            <a
              href="/"
              className="text-white hover:text-fuchsia-400 transition duration-300 font-medium w-full text-center py-2 rounded-md"
              onClick={toggleMobileMenu}
            >
              Home
            </a>
            <a
              href="#about"
              className="text-white hover:text-fuchsia-400 transition duration-300 font-medium w-full text-center py-2 rounded-md"
              onClick={toggleMobileMenu}
            >
              About Us
            </a>
            <a
              href="/#events"
              className="text-white hover:text-fuchsia-400 transition duration-300 font-medium w-full text-center py-2 rounded-md"
              onClick={toggleMobileMenu}
            >
              Events
            </a>
            <a
              href="/#gallery"
              className="text-white hover:text-fuchsia-400 transition duration-300 font-medium w-full text-center py-2 rounded-md"
              onClick={toggleMobileMenu}
            >
              Gallery
            </a>
            <a
              href="/#contact"
              className="text-white hover:text-fuchsia-400 transition duration-300 font-medium w-full text-center py-2 rounded-md"
              onClick={toggleMobileMenu}
            >
              Contact
            </a>
            <a
              href="/#about"
              className="text-white hover:text-fuchsia-400 transition duration-300 font-medium w-full text-center py-2 rounded-md"
              onClick={toggleMobileMenu}
            >
            About Club
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="min-h-screen py-20 px-4">
          {/* Board Members Section */}
          <section className="py-5 px-4 ">
            <div className="container mx-auto max-w-7xl">
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
                Admin <span className="text-gradient">Board</span>
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
          <section className="py-16 px-4">
            <div className="container mx-auto max-w-7xl">
              {/* Content Team Section */}
              <div className="min-h-screen body-50 py-8 px-4">
                <div className="max-w-4xl mx-auto">
                  <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-white-800 mb-4">Content Team</h1>
                    <p className="text-lg text-white-600">
                      
                    </p>
                  </div>

                  <div className="relative mx-auto bg-gradient-to-br from-purple-900/30 to-gray-900/40 rounded-xl overflow-hidden shadow-lg border-2 border-fuchsia-500 hover:border-fuchsia-400 transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 ease-in-out hover:shadow-2xl hover:shadow-fuchsia-500/30 backdrop-blur-sm max-w-4xl w-full">
                    <div className="relative">
                      <img 
                        src="/images/content.png"
                        alt="Content Team"
                        className="w-full h-auto object-contain"
                        style={{ maxHeight: "700px" }} 
                      />


                      <div 
                        className="absolute cursor-pointer"
                        style={{
                          left: '25%',
                          top: '44%',
                          width: '17%',
                          height: '25%'
                        }}
                        onMouseEnter={(e) => handleMouseEnter(teamMembers[0], e)}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                      ></div>

                      <div 
                        className="absolute cursor-pointer"
                        style={{
                          left: '32%',
                          top: '60%',
                          width: '15%',
                          height: '25%'
                        }}
                        onMouseEnter={(e) => handleMouseEnter(teamMembers[1], e)}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                      ></div>

                      <div 
                        className="absolute cursor-pointer"
                        style={{
                          left: '55%',
                          top: '58%',
                          width: '12%',
                          height: '25%'
                        }}
                        onMouseEnter={(e) => handleMouseEnter(teamMembers[2], e)}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                      ></div>

                      <div 
                        className="absolute cursor-pointer"
                        style={{
                          left: '68%',
                          top: '40%',
                          width: '15%',
                          height: '25%'
                        }}
                        onMouseEnter={(e) => handleMouseEnter(teamMembers[3], e)}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                      ></div>
                    </div>
                  </div>
                      
                  {hoveredMember && (
                    <div 
                      className="fixed z-50 bg-white rounded-lg shadow-xl border border-gray-300 px-4 py-3"
                      style={{
                        left: `${Math.min(mousePosition.x + 15, window.innerWidth - 200)}px`,
                        top: `${Math.max(mousePosition.y - 60, 10)}px`,
                        pointerEvents: 'none'
                      }}
                    >
                      <h3 className="text-lg font-bold text-gray-800">
                        {hoveredMember.name}
                      </h3>
                      <p className="text-blue-600 font-medium text-sm">
                        {hoveredMember.role}
                      </p>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Technical Team Section */}
              <div className="min-h-screen body-50 py-8 px-4">
                <div className="max-w-4xl mx-auto">
                  <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-white-800 mb-4">Technical Team</h1>
                    <p className="text-lg text-white-600">
                      
                    </p>
                  </div>

                  <div className="relative mx-auto bg-gradient-to-br from-purple-900/30 to-gray-900/40 rounded-xl overflow-hidden shadow-lg border-2 border-fuchsia-500 hover:border-fuchsia-400 transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 ease-in-out hover:shadow-2xl hover:shadow-fuchsia-500/30 backdrop-blur-sm max-w-4xl w-full">
                    <div className="relative">
                      <img 
                        src="/images/tech-team.png"
                        alt="Content Team"
                        className="w-full h-auto object-contain"
                        style={{ maxHeight: "700px" }} 
                      />


                      <div 
                        className="absolute cursor-pointer"
                        style={{
                          left: '20%',
                          top: '48%',
                          width: '5%',
                          height: '18%'
                        }}
                        onMouseEnter={(e) => handleMouseEnter(teamMembers[4], e)}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                      ></div>

                      <div 
                        className="absolute cursor-pointer"
                        style={{
                          left: '18%',
                          top: '62%',
                          width: '10%',
                          height: '25%'
                        }}
                        onMouseEnter={(e) => handleMouseEnter(teamMembers[5], e)}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                      ></div>

                      <div 
                        className="absolute cursor-pointer"
                        style={{
                          left: '35%',
                          top: '58%',
                          width: '15%',
                          height: '25%'
                        }}
                        onMouseEnter={(e) => handleMouseEnter(teamMembers[6], e)}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                      ></div>

                      <div 
                        className="absolute cursor-pointer"
                        style={{
                          left: '60%',
                          top: '60%',
                          width: '15%',
                          height: '20%'
                        }}
                        onMouseEnter={(e) => handleMouseEnter(teamMembers[7], e)}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                      ></div>

                      <div 
                        className="absolute cursor-pointer"
                        style={{
                          left: '70%',
                          top: '80%',
                          width: '15%',
                          height: '25%'
                        }}
                        onMouseEnter={(e) => handleMouseEnter(teamMembers[8], e)}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                      ></div>

                      <div 
                        className="absolute cursor-pointer"
                        style={{
                          left: '72%',
                          top: '55%',
                          width: '15%',
                          height: '20%'
                        }}
                        onMouseEnter={(e) => handleMouseEnter(teamMembers[9], e)}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                      ></div>
                    </div>
                  </div>
                      
                  {hoveredMember && (
                    <div 
                      className="fixed z-50 bg-white rounded-lg shadow-xl border border-gray-300 px-4 py-3"
                      style={{
                        left: `${Math.min(mousePosition.x + 15, window.innerWidth - 200)}px`,
                        top: `${Math.max(mousePosition.y - 60, 10)}px`,
                        pointerEvents: 'none'
                      }}
                    >
                      <h3 className="text-lg font-bold text-gray-800">
                        {hoveredMember.name}
                      </h3>
                      <p className="text-blue-600 font-medium text-sm">
                        {hoveredMember.role}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Design Team Section */}
              <div className="min-h-screen body-50 py-8 px-4">
                <div className="max-w-4xl mx-auto">
                  <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-white-800 mb-4">Design Team</h1>
                    <p className="text-lg text-white-600">
                      
                    </p>
                  </div>

                  <div className="relative mx-auto bg-gradient-to-br from-purple-900/30 to-gray-900/40 rounded-xl overflow-hidden shadow-lg border-2 border-fuchsia-500 hover:border-fuchsia-400 transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 ease-in-out hover:shadow-2xl hover:shadow-fuchsia-500/30 backdrop-blur-sm max-w-4xl w-full">
                    <div className="relative">
                      <img 
                        src="/images/design.png"
                        alt="Content Team"
                        className="w-full h-auto object-contain"
                        style={{ maxHeight: "700px" }} 
                      />


                      <div 
                        className="absolute cursor-pointer"
                        style={{
                          left: '8%',
                          top: '43%',
                          width: '14%',
                          height: '22%'
                        }}
                        onMouseEnter={(e) => handleMouseEnter(teamMembers[10], e)}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                      ></div>

                      <div 
                        className="absolute cursor-pointer"
                        style={{
                          left: '30%',
                          top: '40%',
                          width: '10%',
                          height: '20%'
                        }}
                        onMouseEnter={(e) => handleMouseEnter(teamMembers[11], e)}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                      ></div>

                      <div 
                        className="absolute cursor-pointer"
                        style={{
                          left: '18%',
                          top: '58%',
                          width: '18%',
                          height: '20%'
                        }}
                        onMouseEnter={(e) => handleMouseEnter(teamMembers[12], e)}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                      ></div>

                      <div 
                        className="absolute cursor-pointer"
                        style={{
                          left: '25%',
                          top: '80%',
                          width: '6%',
                          height: '10%'
                        }}
                        onMouseEnter={(e) => handleMouseEnter(teamMembers[13], e)}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                      ></div>

                      <div 
                        className="absolute cursor-pointer"
                        style={{
                          left: '25%',
                          top: '50%',
                          width: '15%',
                          height: '25%'
                        }}
                        onMouseEnter={(e) => handleMouseEnter(teamMembers[14], e)}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                      ></div>
                      
                      <div 
                        className="absolute cursor-pointer"
                        style={{
                          left: '50%',
                          top: '45%',
                          width: '15%',
                          height: '25%'
                        }}
                        onMouseEnter={(e) => handleMouseEnter(teamMembers[15], e)}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                      ></div>

                      <div 
                        className="absolute cursor-pointer"
                        style={{
                          left: '62%',
                          top: '72%',
                          width: '20%',
                          height: '28%'
                        }}
                        onMouseEnter={(e) => handleMouseEnter(teamMembers[16], e)}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                      ></div>

                      <div 
                        className="absolute cursor-pointer"
                        style={{
                          left: '75%',
                          top: '60%',
                          width: '15%',
                          height: '20%'
                        }}
                        onMouseEnter={(e) => handleMouseEnter(teamMembers[17], e)}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                      ></div>

                      <div 
                        className="absolute cursor-pointer"
                        style={{
                          left: '70%',
                          top: '40%',
                          width: '10%',
                          height: '20%'
                        }}
                        onMouseEnter={(e) => handleMouseEnter(teamMembers[18], e)}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                      ></div>
                    </div>
                  </div>
                      
                  {hoveredMember && (
                    <div 
                      className="fixed z-50 bg-white rounded-lg shadow-xl border border-gray-300 px-4 py-3"
                      style={{
                        left: `${Math.min(mousePosition.x + 15, window.innerWidth - 200)}px`,
                        top: `${Math.max(mousePosition.y - 60, 10)}px`,
                        pointerEvents: 'none'
                      }}
                    >
                      <h3 className="text-lg font-bold text-gray-800">
                        {hoveredMember.name}
                      </h3>
                      <p className="text-blue-600 font-medium text-sm">
                        {hoveredMember.role}
                      </p>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Event Team Section */}
              <div className="min-h-screen body-50 py-8 px-4">
                <div className="max-w-4xl mx-auto">
                  <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-white-800 mb-4">Event Management Team</h1>
                    <p className="text-lg text-white-600">
                      
                    </p>
                  </div>

                  <div className="relative mx-auto bg-gradient-to-br from-purple-900/30 to-gray-900/40 rounded-xl overflow-hidden shadow-lg border-2 border-fuchsia-500 hover:border-fuchsia-400 transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 ease-in-out hover:shadow-2xl hover:shadow-fuchsia-500/30 backdrop-blur-sm max-w-4xl w-full">
                    <div className="relative">
                      <img 
                        src="/images/event.png"
                        alt="Content Team"
                        className="w-full h-auto object-contain"
                        style={{ maxHeight: "700px" }} 
                      />


                      <div 
                        className="absolute cursor-pointer"
                        style={{
                          left: '20%',
                          top: '40%',
                          width: '10%',
                          height: '15%'
                        }}
                        onMouseEnter={(e) => handleMouseEnter(teamMembers[19], e)}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                      ></div>

                      <div 
                        className="absolute cursor-pointer"
                        style={{
                          left: '30%',
                          top: '42%',
                          width: '10%',
                          height: '25%'
                        }}
                        onMouseEnter={(e) => handleMouseEnter(teamMembers[20], e)}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                      ></div>

                      <div 
                        className="absolute cursor-pointer"
                        style={{
                          left: '15%',
                          top: '50%',
                          width: '15%',
                          height: '15%'
                        }}
                        onMouseEnter={(e) => handleMouseEnter(teamMembers[21], e)}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                      ></div>

                      <div 
                        className="absolute cursor-pointer"
                        style={{
                          left: '15%',
                          top: '60%',
                          width: '8%',
                          height: '10%'
                        }}
                        onMouseEnter={(e) => handleMouseEnter(teamMembers[22], e)}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                      ></div>

                      <div 
                        className="absolute cursor-pointer"
                        style={{
                          left: '14%',
                          top: '80%',
                          width: '15%',
                          height: '25%'
                        }}
                        onMouseEnter={(e) => handleMouseEnter(teamMembers[23], e)}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                      ></div>

                      <div 
                        className="absolute cursor-pointer"
                        style={{
                          left: '40%',
                          top: '60%',
                          width: '10%',
                          height: '10%'
                        }}
                        onMouseEnter={(e) => handleMouseEnter(teamMembers[24], e)}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                      ></div>

                      <div 
                        className="absolute cursor-pointer"
                        style={{
                          left: '50%',
                          top: '50%',
                          width: '20%',
                          height: '35%'
                        }}
                        onMouseEnter={(e) => handleMouseEnter(teamMembers[25], e)}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                      ></div>

                      <div 
                        className="absolute cursor-pointer"
                        style={{
                          left: '70%',
                          top: '80%',
                          width: '10%',
                          height: '15%'
                        }}
                        onMouseEnter={(e) => handleMouseEnter(teamMembers[26], e)}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                      ></div>

                      <div 
                        className="absolute cursor-pointer"
                        style={{
                          left: '75%',
                          top: '65%',
                          width: '15%',
                          height: '25%'
                        }}
                        onMouseEnter={(e) => handleMouseEnter(teamMembers[27], e)}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                      ></div>

                      <div 
                        className="absolute cursor-pointer"
                        style={{
                          left: '65%',
                          top: '40%',
                          width: '10%',
                          height: '18%'
                        }}
                        onMouseEnter={(e) => handleMouseEnter(teamMembers[28], e)}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                      ></div>

                      <div 
                        className="absolute cursor-pointer"
                        style={{
                          left: '72%',
                          top: '40%',
                          width: '15%',
                          height: '10%'
                        }}
                        onMouseEnter={(e) => handleMouseEnter(teamMembers[29], e)}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                      ></div>
                    </div>
                  </div>
                      
                  {hoveredMember && (
                    <div 
                      className="fixed z-50 bg-white rounded-lg shadow-xl border border-gray-300 px-4 py-3"
                      style={{
                        left: `${Math.min(mousePosition.x + 15, window.innerWidth - 200)}px`,
                        top: `${Math.max(mousePosition.y - 60, 10)}px`,
                        pointerEvents: 'none'
                      }}
                    >
                      <h3 className="text-lg font-bold text-gray-800">
                        {hoveredMember.name}
                      </h3>
                      <p className="text-blue-600 font-medium text-sm">
                        {hoveredMember.role}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* PR Team Section */}
              <div className="min-h-screen body-50 py-8 px-4">
                <div className="max-w-4xl mx-auto">
                  <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-white-800 mb-4">PR and Outreach Team</h1>
                    <p className="text-lg text-white-600">
                      
                    </p>
                  </div>

                  <div className="relative mx-auto bg-gradient-to-br from-purple-900/30 to-gray-900/40 rounded-xl overflow-hidden shadow-lg border-2 border-fuchsia-500 hover:border-fuchsia-400 transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 ease-in-out hover:shadow-2xl hover:shadow-fuchsia-500/30 backdrop-blur-sm max-w-4xl w-full">
                    <div className="relative">
                      <img 
                        src="/images/pr.png"
                        alt="Content Team"
                        className="w-full h-auto object-contain"
                        style={{ maxHeight: "700px" }} 
                      />


                      <div 
                        className="absolute cursor-pointer"
                        style={{
                          left: '12%',
                          top: '44%',
                          width: '15%',
                          height: '25%'
                        }}
                        onMouseEnter={(e) => handleMouseEnter(teamMembers[30], e)}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                      ></div>

                      <div 
                        className="absolute cursor-pointer"
                        style={{
                          left: '32%',
                          top: '60%',
                          width: '15%',
                          height: '25%'
                        }}
                        onMouseEnter={(e) => handleMouseEnter(teamMembers[31], e)}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                      ></div>

                      <div 
                        className="absolute cursor-pointer"
                        style={{
                          left: '55%',
                          top: '58%',
                          width: '15%',
                          height: '20%'
                        }}
                        onMouseEnter={(e) => handleMouseEnter(teamMembers[32], e)}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                      ></div>

                      <div 
                        className="absolute cursor-pointer"
                        style={{
                          left: '70%',
                          top: '40%',
                          width: '15%',
                          height: '25%'
                        }}
                        onMouseEnter={(e) => handleMouseEnter(teamMembers[33], e)}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                      ></div>
                    </div>
                  </div>
                      
                  {hoveredMember && (
                    <div 
                      className="fixed z-50 bg-white rounded-lg shadow-xl border border-gray-300 px-4 py-3"
                      style={{
                        left: `${Math.min(mousePosition.x + 15, window.innerWidth - 200)}px`,
                        top: `${Math.max(mousePosition.y - 60, 10)}px`,
                        pointerEvents: 'none'
                      }}
                    >
                      <h3 className="text-lg font-bold text-gray-800">
                        {hoveredMember.name}
                      </h3>
                      <p className="text-blue-600 font-medium text-sm">
                        {hoveredMember.role}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>  
      </div>
    </>
  );
};

export default About;

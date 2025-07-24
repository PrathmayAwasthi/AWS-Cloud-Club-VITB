import React, { useState } from 'react';

// Main App component
const App = () => {
    // State to manage the mobile menu visibility
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Function to toggle the mobile menu
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <>
            {/* Custom styles for the gradient background and font */}
            <style>
                {`
                body {
                    font-family: 'Poppins', sans-serif; /* Changed font to Poppins */
                    background: linear-gradient(to bottom right, #2A003A, #111111); /* Original gradient */
                    min-height: 100vh; /* Ensure gradient covers full viewport height */
                    color: #ffffff; /* Default text color for better contrast */
                }
                /* Custom Tailwind colors */
                .gradient-bg {
                    background: linear-gradient(to bottom right, #2A003A, #111111); /* Original gradient */
                }
                .btn-primary {
                    background: linear-gradient(135deg, #FF69B4, #6c63ff); /* Gradient button */
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
                    background: linear-gradient(135deg, #FF69B4, #6c63ff); /* Clean two-color gradient */
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
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />

            {/* Header Section */}
            <header className="bg-black bg-opacity-50 py-4 shadow-lg sticky top-0 z-50 backdrop-blur-sm">
                <nav className="container mx-auto px-4 flex justify-between items-center">
                    {/* Logo */}
                    <a href="#" className="text-3xl font-extrabold tracking-tight">
                        <span className="text-white">AWS </span><span className="text-gradient">Cloud Club</span>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-8">
                        <a href="#home" className="text-white hover:text-fuchsia-400 transition duration-300 font-medium">Home</a>
                        <a href="#about" className="text-white hover:text-fuchsia-400 transition duration-300 font-medium">About Us</a>
                        <a href="#events" className="text-white hover:text-fuchsia-400 transition duration-300 font-medium">Events</a>
                        <a href="#join" className="text-white hover:text-fuchsia-400 transition duration-300 font-medium">Join Us</a>
                        <a href="#contact" className="text-white hover:text-fuchsia-400 transition duration-300 font-medium">Contact</a>
                    </div>

                    {/* Mobile Menu Button (Hamburger) */}
                    <div className="md:hidden">
                        <button id="mobile-menu-button" className="text-white focus:outline-none" onClick={toggleMobileMenu}>
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>
                </nav>

                {/* Mobile Menu (Conditionally rendered based on state) */}
                <div id="mobile-menu" className={`md:hidden bg-black bg-opacity-70 py-4 mt-2 rounded-lg mx-4 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
                    <div className="flex flex-col items-center space-y-4">
                        <a href="#home" className="text-white hover:text-fuchsia-400 transition duration-300 font-medium w-full text-center py-2 rounded-md" onClick={toggleMobileMenu}>Home</a>
                        <a href="#about" className="text-white hover:text-fuchsia-400 transition duration-300 font-medium w-full text-center py-2 rounded-md" onClick={toggleMobileMenu}>About Us</a>
                        <a href="#events" className="text-white hover:text-fuchsia-400 transition duration-300 font-medium w-full text-center py-2 rounded-md" onClick={toggleMobileMenu}>Events</a>
                        <a href="#join" className="text-white hover:text-fuchsia-400 transition duration-300 font-medium w-full text-center py-2 rounded-md" onClick={toggleMobileMenu}>Join Us</a>
                        <a href="#contact" className="text-white hover:text-fuchsia-400 transition duration-300 font-medium w-full text-center py-2 rounded-md" onClick={toggleMobileMenu}>Contact</a>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section id="home" className="relative h-screen flex items-center justify-center text-center px-4 py-20">
                <div className="absolute inset-0 gradient-bg opacity-70 z-0"></div>
                <div className="relative z-10 max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 text-white drop-shadow-lg">
                        Innovate. Learn. Build. <br className="hidden md:block" /> With <span className="text-gradient">AWS Cloud Club</span>.
                    </h1>
                    <p className="text-lg md:text-xl text-white mb-10 opacity-90 leading-relaxed">
                        Empowering the next generation of cloud enthusiasts and developers. Dive deep into AWS services, network with peers, and build groundbreaking solutions.
                    </p>
                    <a href="#join" className="btn-primary inline-block text-lg md:text-xl px-8 py-4 rounded-full shadow-xl hover:scale-105 transform transition duration-300 ease-in-out">
                        Join the Cloud Revolution
                    </a>
                </div>
            </section>

            {/* About Us Section */}
            <section id="about" className="py-20 px-4 bg-black bg-opacity-40 rounded-t-3xl -mt-16 relative z-20">
                <div className="container mx-auto max-w-5xl">
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">About Our <span className="text-gradient">Club</span></h2>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <p className="text-lg text-white mb-6 leading-relaxed">
                                The AWS Cloud Club is a vibrant community dedicated to exploring, learning, and mastering Amazon Web Services. Whether you're a beginner curious about cloud computing or an experienced developer looking to deepen your expertise, our club provides a supportive environment for growth.
                            </p>
                            <p className="text-lg text-white leading-relaxed">
                                We organize workshops, hackathons, guest lectures, and collaborative projects to help members gain hands-on experience and prepare for industry certifications. Our goal is to foster innovation and build a strong network of cloud professionals.
                            </p>
                        </div>
                        <div className="flex justify-center">
                            <div className="card-gradient rounded-xl p-8 shadow-lg glow-effect w-full max-w-md">
                                <div className="text-center">
                                    <div className="text-6xl mb-4">☁️</div>
                                    <h3 className="text-2xl font-bold text-white mb-4">Cloud Innovation</h3>
                                    <p className="text-white opacity-90">Building tomorrow's solutions with today's technology</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Upcoming Events Section */}
            <section id="events" className="py-20 px-4">
                <div className="container mx-auto max-w-5xl">
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">Upcoming <span className="text-gradient">Events</span></h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Event Card 1 */}
                        <div className="card-gradient p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out glow-effect">
                            <h3 className="text-2xl font-semibold mb-3 text-white">Cloud Fundamentals Workshop</h3>
                            <p className="accent-text text-sm mb-4 font-medium">August 15, 2025 | 10:00 AM - 1:00 PM</p>
                            <p className="text-white opacity-90 mb-4">
                                An introductory workshop covering the basics of AWS, including EC2, S3, and VPC. Perfect for beginners!
                            </p>
                            <a href="#" className="accent-text accent-hover font-medium flex items-center transition duration-300">
                                Learn More
                                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                            </a>
                        </div>

                        {/* Event Card 2 */}
                        <div className="card-gradient p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out glow-effect">
                            <h3 className="text-2xl font-semibold mb-3 text-white">Serverless Architectures with Lambda</h3>
                            <p className="accent-text text-sm mb-4 font-medium">September 5, 2025 | 2:00 PM - 5:00 PM</p>
                            <p className="text-white opacity-90 mb-4">
                                Dive into building serverless applications using AWS Lambda, API Gateway, and DynamoDB.
                            </p>
                            <a href="#" className="accent-text accent-hover font-medium flex items-center transition duration-300">
                                Learn More
                                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                            </a>
                        </div>

                        {/* Event Card 3 */}
                        <div className="card-gradient p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out glow-effect">
                            <h3 className="text-2xl font-semibold mb-3 text-white">AWS Solutions Architect Study Group</h3>
                            <p className="accent-text text-sm mb-4 font-medium">Starts September 20, 2025 | Weekly</p>
                            <p className="text-white opacity-90 mb-4">
                                Prepare for the AWS Solutions Architect Associate certification with guided study sessions.
                            </p>
                            <a href="#" className="accent-text accent-hover font-medium flex items-center transition duration-300">
                                Learn More
                                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Join Us Section */}
            <section id="join" className="py-20 px-4 bg-black bg-opacity-40">
                <div className="container mx-auto max-w-3xl text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">Ready to <span className="text-gradient">Join</span>?</h2>
                    <p className="text-lg text-white mb-10 opacity-90 leading-relaxed">
                        Become a part of our growing community! Gain access to exclusive workshops, mentorship, networking opportunities, and a chance to collaborate on exciting cloud projects.
                    </p>
                    <a href="#join" className="btn-primary inline-block text-lg md:text-xl px-10 py-5 rounded-full shadow-xl hover:scale-105 transform transition duration-300 ease-in-out">
                        Sign Up Now!
                    </a>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-20 px-4">
                <div className="container mx-auto max-w-3xl text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">Get in <span className="text-gradient">Touch</span></h2>
                    <p className="text-lg text-white mb-10 opacity-90 leading-relaxed">
                        Have questions or want to learn more? Reach out to us!
                    </p>
                    <div className="flex flex-col md:flex-row justify-center gap-8">
                        <div className="card-gradient p-6 rounded-xl shadow-lg glow-effect flex-1">
                            <h3 className="text-xl font-semibold mb-3 text-white">Email Us</h3>
                            <p className="text-white opacity-90">info@awscloudclub.com</p>
                        </div>
                        <div className="card-gradient p-6 rounded-xl shadow-lg glow-effect flex-1">
                            <h3 className="text-xl font-semibold mb-3 text-white">Follow Us</h3>
                            <div className="flex justify-center space-x-4 mt-2">
                                <a href="#" className="text-white hover:text-fuchsia-400 transition duration-300">
                                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M22.46 6c-.84.37-1.75.62-2.69.73.96-.58 1.7-1.5 2.04-2.6-.9.54-1.9.93-2.96 1.14-.85-.9-2.06-1.47-3.41-1.47-2.58 0-4.68 2.1-4.68 4.68 0 .37.04.73.11 1.07-3.9-.2-7.35-2.07-9.66-4.9-.4 1.1-.63 2.3-.63 3.6 0 1.62.82 3.05 2.07 3.9-.76-.02-1.47-.23-2.09-.57v.06c0 2.27 1.62 4.16 3.76 4.59-.4.11-.83.17-1.27.17-.31 0-.6-.03-.89-.08.6 1.86 2.34 3.22 4.4 3.26-1.6 1.25-3.62 2-5.82 2-.38 0-.76-.02-1.13-.07 2.08 1.34 4.56 2.13 7.23 2.13 8.67 0 13.4-7.16 13.4-13.4 0-.2-.01-.4-.02-.6.92-.66 1.72-1.48 2.35-2.42z"/></svg>
                                </a>
                                <a href="#" className="text-white hover:text-fuchsia-400 transition duration-300">
                                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer Section */}
            <footer className="bg-black bg-opacity-70 py-8 px-4 text-center text-white text-sm">
                <div className="container mx-auto">
                    <p>&copy; {new Date().getFullYear()} AWS Cloud Club. All rights reserved.</p>
                    <p className="mt-2">Designed with <span className="text-red-500">&hearts;</span> for cloud enthusiasts.</p>
                </div>
            </footer>
        </>
    );
};

export default App;
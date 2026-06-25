import React, { useState, useEffect, useRef } from "react";
import DockNavbar from "./DockNavbar";

interface HomepageProps {
  onNavigate: (page: string) => void;
}

const Homepage: React.FC<HomepageProps> = ({ onNavigate }) => {
  const countdownRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [timeLeft, setTimeLeft] = useState({ days: 30, hours: 15, minutes: 45, seconds: 30 });

  useEffect(() => {
    countdownRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        const total = prev.days * 86400 + prev.hours * 3600 + prev.minutes * 60 + prev.seconds - 1;
        if (total <= 0) {
          if (countdownRef.current) clearInterval(countdownRef.current);
          return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }
        return {
          days: Math.floor(total / 86400),
          hours: Math.floor((total % 86400) / 3600),
          minutes: Math.floor((total % 3600) / 60),
          seconds: total % 60,
        };
      });
    }, 1000);
    return () => {
      if (countdownRef.current) clearInterval(countdownRef.current);
    };
  }, []);

  return (
    <>
      <style>{`
        body {
          font-family: 'Open Sans', system-ui, sans-serif;
          background-color: #0f172a;
          min-height: 100vh;
          color: #ffffff;
        }
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
        .bg-primary-bg { background-color: #0f172a; }
        .bg-component-fill { background-color: #1e293b; }
        .border-divider { border-color: #334155; }
        .text-headings { color: #ffffff; }
        .text-secondary-label { color: #94a3b8; }
        ::-webkit-scrollbar { width: 8px; height: 8px; }
        ::-webkit-scrollbar-track { background: #0f172a; }
        ::-webkit-scrollbar-thumb { background: #334155; border-radius: 4px; }
        ::-webkit-scrollbar-thumb:hover { background: #475569; }
        .btn-primary {
          background-color: #ffffff;
          color: #0f172a;
          padding: 0.625rem 1.25rem;
          border-radius: 0.375rem;
          font-weight: 700;
          transition: all 0.2s ease;
          border: none;
        }
        .btn-primary:hover {
          background-color: #f1f5f9;
          transform: translateY(-1px);
        }
        @keyframes scroll-up {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        .scrolling-gallery {
          animation: scroll-up 30s linear infinite;
        }
        .scrolling-gallery:hover {
          animation-play-state: paused;
        }
      `}</style>

      <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap"
        rel="stylesheet"
      />

      <div className="min-h-screen bg-[#0f172a] text-[#ffffff] font-sans flex flex-col">
        <DockNavbar onNavigate={onNavigate} currentPage="home" />

        <main className="flex-1 bg-[#0f172a] text-[#ffffff] min-w-0">
          <section
            id="home"
            className="relative bg-[#0f172a] border-b border-[#334155] py-16 px-6 lg:px-12"
          >
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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

              <div className="relative flex justify-center items-center">
                <div className="w-full max-w-md aspect-[4/3] bg-[#0c1322] border border-[#334155] rounded-md relative overflow-hidden">
                  <video className="w-full h-full object-cover opacity-60" autoPlay muted loop playsInline>
                    <source src="/images/Video-246.mp4" type="video/mp4" />
                  </video>
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: 'linear-gradient(rgba(51, 65, 85, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(51, 65, 85, 0.15) 1px, transparent 1px)',
                      backgroundSize: '20px 20px',
                    }}
                  ></div>
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
          <section id="explore-cloud" className="py-16 px-6 lg:px-12 border-b border-[#334155]">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center mb-12">
                <div className="lg:col-span-2 space-y-4">
                  <h2 className="text-3xl font-extrabold text-white tracking-tight">
                    Explore the Domains We Focus On.
                  </h2>
                  <p className="text-base text-[#94a3b8] leading-relaxed">
                    Dive into the key areas our <span className="text-white font-semibold">AWS Club</span> specializes in —
                    from cloud infrastructure to cutting-edge AI and IoT solutions.
                  </p>
                </div>
                <div className="lg:col-span-1 flex justify-center lg:justify-end">
                  <div className="relative w-full max-w-sm aspect-video bg-[#0c1322] border border-[#334155] rounded-md overflow-hidden shadow-sm">
                    <video className="w-full h-full object-cover" autoPlay muted loop playsInline>
                      <source src="/images/Video-182.mp4" type="video/mp4" />
                    </video>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    { img: "/images/aws_infra.jpeg", icon: "☁️", title: "AWS Infrastructure" },
                    { img: "/images/cloud_computing.jpg.webp", icon: "💻", title: "Cloud Computing" },
                    { img: "/images/devops.jpeg", icon: "⚙️", title: "DevOps" },
                    { img: "/images/software_arch.png.webp", icon: "📐", title: "Software Architecture" },
                  ].map((card, i) => (
                    <div
                      key={i}
                      className="relative h-24 rounded-md overflow-hidden cursor-pointer hover:border-slate-300 transition duration-150 border border-[#334155] bg-[#1e293b]"
                      style={{ backgroundImage: `url("${card.img}")`, backgroundSize: "cover", backgroundPosition: "center" }}
                    >
                      <div className="absolute inset-0 bg-[#1e293b]/90 hover:bg-[#1e293b]/85 transition duration-150"></div>
                      <div className="relative z-10 p-5 h-full flex items-center gap-3">
                        <div className="text-[#94a3b8] text-xl flex-none bg-[#0f172a] p-2 rounded border border-[#334155]">{card.icon}</div>
                        <h3 className="text-white font-bold text-sm tracking-tight">{card.title}</h3>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    { img: "/images/aws_ml.png", icon: "🤖", title: "Machine Learning" },
                    { img: "/images/frontend.png", icon: "🎨", title: "Frontend & UI/UX" },
                    { img: "/images/cloud-testing-tools.jpeg", icon: "🧪", title: "Quality & Testing" },
                    { img: "/images/security.jpeg", icon: "🛡️", title: "Cybersecurity" },
                  ].map((card, i) => (
                    <div
                      key={i}
                      className="relative h-24 rounded-md overflow-hidden cursor-pointer hover:border-slate-300 transition duration-150 border border-[#334155] bg-[#1e293b]"
                      style={{ backgroundImage: `url("${card.img}")`, backgroundSize: "cover", backgroundPosition: "center" }}
                    >
                      <div className="absolute inset-0 bg-[#1e293b]/90 hover:bg-[#1e293b]/85 transition duration-150"></div>
                      <div className="relative z-10 p-5 h-full flex items-center gap-3">
                        <div className="text-[#94a3b8] text-xl flex-none bg-[#0f172a] p-2 rounded border border-[#334155]">{card.icon}</div>
                        <h3 className="text-white font-bold text-sm tracking-tight">{card.title}</h3>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    { img: "/images/iot.jpg.webp", icon: "🔌", title: "IoT & Hardware" },
                    { img: "/images/opensource.jpg", icon: "🌐", title: "Open Source" },
                    { img: "/images/product.jpeg", icon: "📊", title: "Product Management" },
                    { img: "/images/startup.png", icon: "📈", title: "Startups & Scaling" },
                  ].map((card, i) => (
                    <div
                      key={i}
                      className="relative h-24 rounded-md overflow-hidden cursor-pointer hover:border-slate-300 transition duration-150 border border-[#334155] bg-[#1e293b]"
                      style={{ backgroundImage: `url("${card.img}")`, backgroundSize: "cover", backgroundPosition: "center" }}
                    >
                      <div className="absolute inset-0 bg-[#1e293b]/90 hover:bg-[#1e293b]/85 transition duration-150"></div>
                      <div className="relative z-10 p-5 h-full flex items-center gap-3">
                        <div className="text-[#94a3b8] text-xl flex-none bg-[#0f172a] p-2 rounded border border-[#334155]">{card.icon}</div>
                        <h3 className="text-white font-bold text-sm tracking-tight">{card.title}</h3>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section id="about" className="py-16 px-6 lg:px-12 border-b border-[#334155] bg-[#0f172a]">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-extrabold text-white mb-10 tracking-tight">About Our Club</h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                <div className="lg:col-span-2 space-y-6">
                  <p className="text-base text-[#94a3b8] leading-relaxed">
                    The AWS Cloud Club is a vibrant community dedicated to exploring, learning, and mastering Amazon Web Services. Whether you're a beginner curious about cloud computing or an experienced developer looking to deepen your expertise, our club provides a supportive environment for growth.
                  </p>
                  <p className="text-base text-[#94a3b8] leading-relaxed">
                    We organize workshops, hackathons, guest lectures, and collaborative projects to help members gain hands-on experience and prepare for industry certifications. Our goal is to foster innovation and build a strong network of cloud professionals.
                  </p>
                </div>
                <div className="lg:col-span-1 space-y-6">
                  <div className="bg-[#1e293b] border border-[#334155] rounded-md p-6">
                    <div className="text-3xl mb-3">☁️</div>
                    <h3 className="text-lg font-bold text-white mb-2">Cloud Innovation</h3>
                    <p className="text-sm text-[#94a3b8] leading-relaxed">Building tomorrow's solutions with today's technology.</p>
                  </div>
                  <div className="bg-[#1e293b] border border-[#334155] rounded-md p-6">
                    <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 pb-2 border-b border-[#334155]">FAQs</h4>
                    <div className="space-y-4">
                      <div>
                        <h5 className="text-sm font-semibold text-white mb-1">Who can join an AWS Student Builder Group?</h5>
                        <p className="text-xs text-[#94a3b8] leading-relaxed">Open to any student enrolled in a post-secondary institution aged 18+ who is ready to build their tech future.</p>
                      </div>
                      <div>
                        <h5 className="text-sm font-semibold text-white mb-1">Why should I join?</h5>
                        <p className="text-xs text-[#94a3b8] leading-relaxed">To work on real-world projects, prepare for AWS certifications, and gain mentorship from cloud experts.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 px-6 lg:px-12 border-b border-[#334155] bg-[#0c1322]">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                <div className="lg:col-span-2 space-y-6">
                  <h2 className="text-3xl font-extrabold text-white tracking-tight">Why Join AWS Club?</h2>
                  <p className="text-base text-[#94a3b8] leading-relaxed">AWS Cloud Club is the best place to get a complete overview of recent insights and future trends in modern cloud development.</p>
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
                    <a href="#join" className="btn-primary inline-flex items-center justify-center font-bold px-6 py-2.5 rounded-md hover:bg-slate-100 transition duration-150 text-sm">GET STARTED</a>
                    <a href="#contact" className="bg-[#1e293b] text-white hover:bg-slate-800 border border-[#334155] px-6 py-2.5 rounded-md font-medium transition duration-150 inline-flex items-center justify-center text-sm">SPONSOR</a>
                  </div>
                </div>
                <div className="lg:col-span-1">
                  <div className="relative h-[24rem] overflow-hidden rounded-md border border-[#334155] bg-[#1e293b]">
                    <div className="scrolling-gallery flex flex-col gap-3 p-3">
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
                        <div key={n} className="h-32 rounded-md overflow-hidden relative flex-none border border-[#334155]">
                          <img src={`/images/${n}.jpg`} alt={`Gallery ${n}`} className="w-full h-full object-cover" loading="lazy" />
                          <div className="absolute inset-0 bg-[#0f172a]/20"></div>
                        </div>
                      ))}
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
                        <div key={`dup-${n}`} className="h-32 rounded-md overflow-hidden relative flex-none border border-[#334155]">
                          <img src={`/images/${n}.jpg`} alt={`Gallery ${n}`} className="w-full h-full object-cover" loading="lazy" />
                          <div className="absolute inset-0 bg-[#0f172a]/20"></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="events" className="py-16 px-6 lg:px-12 border-b border-[#334155] bg-[#0f172a]">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-extrabold text-white mb-10 tracking-tight">Upcoming Events</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-[#1e293b] border border-[#334155] p-6 rounded-md flex flex-col justify-between hover:border-slate-400 transition duration-150">
                  <div>
                    <span className="inline-block bg-[#0f172a] text-[#94a3b8] text-xs font-semibold px-2 py-0.5 rounded border border-[#334155] mb-3">Community Day</span>
                    <h3 className="text-lg font-bold text-white mb-1">AWS Student Community Day</h3>
                    <p className="text-xs text-[#94a3b8] font-semibold mb-4">August 15, 2025 | 10:00 AM - 1:00 PM</p>
                    <p className="text-sm text-[#94a3b8] leading-relaxed mb-4">Join students and professionals to learn the latest in AWS Cloud, with workshops, networking, and insights from global AWS experts.</p>
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
                  <a href="#" className="text-white hover:text-slate-300 font-bold text-xs inline-flex items-center gap-1 mt-2">
                    Learn More
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                  </a>
                </div>
                <div className="bg-[#1e293b] border border-[#334155] p-6 rounded-md flex flex-col justify-between hover:border-slate-400 transition duration-150">
                  <div>
                    <span className="inline-block bg-[#0f172a] text-[#94a3b8] text-xs font-semibold px-2 py-0.5 rounded border border-[#334155] mb-3">Workshop</span>
                    <h3 className="text-lg font-bold text-white mb-1">Serverless Architectures with Lambda</h3>
                    <p className="text-xs text-[#94a3b8] font-semibold mb-4">September 5, 2025 | 2:00 PM - 5:00 PM</p>
                    <p className="text-sm text-[#94a3b8] leading-relaxed mb-4">Dive into building serverless applications using AWS Lambda, API Gateway, and DynamoDB.</p>
                    <div className="border-t border-[#334155] pt-4 mb-4 space-y-2">
                      <p className="text-xs text-[#94a3b8] leading-relaxed">Includes a live demo deploying a RESTful API in real-time and hands-on troubleshooting tips.</p>
                      <p className="text-xs text-[#94a3b8] leading-relaxed"> Light refreshments will be provided. Attendees also receive exclusive access to a Lambda use-case cheat sheet.</p>
                    </div>
                  </div>
                  <a href="#" className="text-white hover:text-slate-300 font-bold text-xs inline-flex items-center gap-1 mt-2">
                    Learn More
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                  </a>
                </div>
                <div className="bg-[#1e293b] border border-[#334155] p-6 rounded-md flex flex-col justify-between hover:border-slate-400 transition duration-150">
                  <div>
                    <span className="inline-block bg-[#0f172a] text-[#94a3b8] text-xs font-semibold px-2 py-0.5 rounded border border-[#334155] mb-3">Study Group</span>
                    <h3 className="text-lg font-bold text-white mb-1">AWS Solutions Architect Study Group</h3>
                    <p className="text-xs text-[#94a3b8] font-semibold mb-4">Starts September 20, 2025 | Weekly</p>
                    <p className="text-sm text-[#94a3b8] leading-relaxed mb-4">Prepare for the AWS Solutions Architect Associate certification with guided study sessions.</p>
                    <div className="border-t border-[#334155] pt-4 mb-4 space-y-2">
                      <p className="text-xs text-[#94a3b8] leading-relaxed">Access a shared repository of practice exams and study guides curated by certified architects.</p>
                      <p className="text-xs text-[#94a3b8] leading-relaxed">Virtual participation available with Slack channel support for Q&A between sessions.</p>
                    </div>
                  </div>
                  <a href="#" className="text-white hover:text-slate-300 font-bold text-xs inline-flex items-center gap-1 mt-2">
                    Learn More
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 px-6 lg:px-12 border-b border-[#334155] bg-[#0c1322]">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-extrabold text-white text-center mb-12 tracking-tight">Meet the Board</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {[
                  { img: "/images/akash.jpeg", name: "Akash Kharabe", role: "President", desc: "AWS Cloud Club Captain" },
                  { img: "/images/shreyansh.jpeg", name: "Shreyansh Uttam", role: "Vice President", desc: "Fostering collaboration and supporting bold club goals." },
                  { img: "/images/lakshya.jpeg", name: "Lakshay Khtour", role: "General Secretary", desc: "Ensuring seamless execution behind the scenes for every initiative." },
                  { img: "/images/navya.jpeg", name: "Navya Srivastava", role: "Operational Lead", desc: "Orchestrating events and keeping the club running smoothly." },
                  { img: "/images/yash.jpg", name: "Yash Dhanraj Thakare", role: "Treasurer", desc: "Managing resources with integrity and fostering transparency." },
                ].map((member, i) => (
                  <div key={i} className="bg-[#1e293b] border border-[#334155] p-6 rounded-md text-center flex flex-col items-center hover:border-slate-400 transition duration-150">
                    <div className="w-24 h-24 mb-4 rounded-full overflow-hidden border-2 border-[#334155]">
                      <img src={member.img} alt={member.name} className="object-cover w-full h-full" />
                    </div>
                    <h3 className="text-base font-bold text-white mb-0.5">{member.name}</h3>
                    <p className="text-xs font-semibold text-[#94a3b8] mb-3">{member.role}</p>
                    <p className="text-xs text-[#94a3b8] leading-relaxed">{member.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="contact" className="py-16 px-6 lg:px-12 bg-[#0c1322] border-b border-[#334155]">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <div>
                <h2 className="text-3xl font-extrabold text-white tracking-tight">Get in Touch</h2>
                <p className="text-sm text-[#94a3b8] mt-2">Have questions or want to learn more? Reach out to us!</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-[#1e293b] border border-[#334155] p-6 rounded-md shadow-sm">
                  <h3 className="text-base font-bold text-white mb-2">Email Us</h3>
                  <p className="text-sm text-[#94a3b8]">aws@vitbhopal.ac.in</p>
                </div>
                <div className="bg-[#1e293b] border border-[#334155] p-6 rounded-md shadow-sm">
                  <h3 className="text-base font-bold text-white mb-3">Follow Us</h3>
                  <div className="flex justify-center space-x-4">
                    <a href="https://www.instagram.com/awscloudclub.vitb" className="text-[#94a3b8] hover:text-white transition duration-150" target="_blank" rel="noreferrer">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zM17.25 5.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5z" /></svg>
                    </a>
                    <a href="https://www.linkedin.com/company/aws-cloud-club-vitbhopaluniveristy/" className="text-[#94a3b8] hover:text-white transition duration-150" target="_blank" rel="noreferrer">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <footer className="bg-[#0b0f19] border-t border-[#334155] py-8 px-4 text-center text-[#94a3b8] text-xs">
            <div className="max-w-7xl mx-auto space-y-2">
              <p>&copy; {new Date().getFullYear()} AWS Student Builder Group. All rights reserved.</p>
              <p>Designed with <span className="text-[#94a3b8]">&hearts;</span> for cloud enthusiasts.</p>
            </div>
          </footer>
        </main>
      </div>
    </>
  );
};

export default Homepage;

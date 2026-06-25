import React, { useState } from "react";
import DockNavbar from "./DockNavbar";

interface TeamMember {
  id: number;
  name: string;
  role: string;
}

interface AboutProps {
  onNavigate: (page: string) => void;
}

const About: React.FC<AboutProps> = ({ onNavigate }) => {
  const [hoveredMember, setHoveredMember] = useState<TeamMember | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const teamMembers: TeamMember[] = [
    { id: 1, name: "Rishav Raj", role: "Member" },
    { id: 2, name: "Shivang Mishra", role: "Content Lead" },
    { id: 3, name: "Ayushi Sharma", role: "Content Co-Lead" },
    { id: 4, name: "Harshita Sonwani", role: "Member" },
    { id: 5, name: "Yogesh Sahu", role: "Member" },
    { id: 6, name: "Neel Pandey", role: "Member" },
    { id: 7, name: "Prathmay Awasthi", role: "Lead" },
    { id: 8, name: "Aadya Chauhan", role: "Member" },
    { id: 9, name: "Rishika Sinha", role: "Member" },
    { id: 10, name: "Aryan Kumar", role: "Member" },
    { id: 11, name: "Veedushi Jain", role: "Member" },
    { id: 12, name: "Ishita Gautam", role: "Member" },
    { id: 13, name: "Riya Shukla", role: "Member" },
    { id: 14, name: "Mansaa Kohli", role: "Member" },
    { id: 15, name: "Vaishnavi Tiwari", role: "Co-Lead" },
    { id: 16, name: "Harshitha GG", role: "Lead" },
    { id: 17, name: "Aryamaan Singh Chandel", role: "Member" },
    { id: 18, name: "Aditya Nagathan", role: "Member" },
    { id: 19, name: "Navya Gupta", role: "Member" },
    { id: 20, name: "Keyuri Nathwani", role: "Member" },
    { id: 21, name: "Arushi Wadhwa", role: "Member" },
    { id: 22, name: "Sarthak patil", role: "Member" },
    { id: 23, name: "Arsh Bakshi", role: "Member" },
    { id: 24, name: "Mekhla Singh", role: "Member" },
    { id: 25, name: "Adarsh Patel", role: "Co-Lead" },
    { id: 26, name: "Ayush Patel", role: "Lead" },
    { id: 27, name: "Shivam Singh", role: "Member" },
    { id: 28, name: "Manik Pandey", role: "Member" },
    { id: 29, name: "Niharika Chauhan", role: "Member" },
    { id: 30, name: "Nikhil Tiwari", role: "Member" },
    { id: 31, name: "Kanishka Agrawal", role: "Member" },
    { id: 32, name: "Aastha Adhikari", role: "Lead" },
    { id: 33, name: "Pranjal Pandey", role: "Co-Lead" },
    { id: 34, name: "Shreya Gupta", role: "Member" },
  ];

  const handleMouseEnter = (member: TeamMember, event: React.MouseEvent) => {
    setHoveredMember(member);
    setMousePosition({ x: event.clientX, y: event.clientY });
  };

  const handleMouseMove = (event: React.MouseEvent) => {
    if (hoveredMember) {
      setMousePosition({ x: event.clientX, y: event.clientY });
    }
  };

  const handleMouseLeave = () => {
    setHoveredMember(null);
  };

  const teamSections = [
    { title: "Content Team", image: "/images/content.png", members: [0, 1, 2, 3] },
    { title: "Technical Team", image: "/images/tech-team.png", members: [4, 5, 6, 7, 8, 9] },
    { title: "Design Team", image: "/images/design.png", members: [10, 11, 12, 13, 14, 15, 16, 17, 18] },
    { title: "Event Management Team", image: "/images/event.png", members: [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29] },
    { title: "PR and Outreach Team", image: "/images/pr.png", members: [30, 31, 32, 33] },
  ];

  const hotspotPositions: Record<string, { left: string; top: string; width: string; height: string }[]> = {
    "Content Team": [
      { left: "25%", top: "44%", width: "17%", height: "25%" },
      { left: "32%", top: "60%", width: "15%", height: "25%" },
      { left: "55%", top: "58%", width: "12%", height: "25%" },
      { left: "68%", top: "40%", width: "15%", height: "25%" },
    ],
    "Technical Team": [
      { left: "20%", top: "48%", width: "5%", height: "18%" },
      { left: "18%", top: "62%", width: "10%", height: "25%" },
      { left: "35%", top: "58%", width: "15%", height: "25%" },
      { left: "60%", top: "60%", width: "15%", height: "20%" },
      { left: "70%", top: "80%", width: "15%", height: "25%" },
      { left: "72%", top: "55%", width: "15%", height: "20%" },
    ],
    "Design Team": [
      { left: "8%", top: "43%", width: "14%", height: "22%" },
      { left: "30%", top: "40%", width: "10%", height: "20%" },
      { left: "18%", top: "58%", width: "18%", height: "20%" },
      { left: "25%", top: "80%", width: "6%", height: "10%" },
      { left: "25%", top: "50%", width: "15%", height: "25%" },
      { left: "50%", top: "45%", width: "15%", height: "25%" },
      { left: "62%", top: "72%", width: "20%", height: "28%" },
      { left: "75%", top: "60%", width: "15%", height: "20%" },
      { left: "70%", top: "40%", width: "10%", height: "20%" },
    ],
    "Event Management Team": [
      { left: "20%", top: "40%", width: "10%", height: "15%" },
      { left: "30%", top: "42%", width: "10%", height: "25%" },
      { left: "15%", top: "50%", width: "15%", height: "15%" },
      { left: "15%", top: "60%", width: "8%", height: "10%" },
      { left: "14%", top: "80%", width: "15%", height: "25%" },
      { left: "40%", top: "60%", width: "10%", height: "10%" },
      { left: "50%", top: "50%", width: "20%", height: "35%" },
      { left: "70%", top: "80%", width: "10%", height: "15%" },
      { left: "75%", top: "65%", width: "15%", height: "25%" },
      { left: "65%", top: "40%", width: "10%", height: "18%" },
      { left: "72%", top: "40%", width: "15%", height: "10%" },
    ],
    "PR and Outreach Team": [
      { left: "12%", top: "44%", width: "15%", height: "25%" },
      { left: "32%", top: "60%", width: "15%", height: "25%" },
      { left: "55%", top: "58%", width: "15%", height: "20%" },
      { left: "70%", top: "40%", width: "15%", height: "25%" },
    ],
  };

  return (
    <>
      <style>{`
        body {
          font-family: 'Open Sans', system-ui, sans-serif;
          background-color: #0f172a;
          min-height: 100vh;
          color: #ffffff;
        }
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
      `}</style>

      <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap"
        rel="stylesheet"
      />

      <div className="min-h-screen bg-[#0f172a] text-[#ffffff] font-sans flex flex-col">
        <DockNavbar onNavigate={onNavigate} currentPage="about" />

        <main className="flex-1 min-w-0">
          <section className="py-16 px-4">
            <div className="container mx-auto max-w-7xl">
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
                Admin <span className="text-white">Board</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 justify-items-center">
                {[
                  { img: "/images/akash.jpeg", name: "Akash Kharabe", role: "President", desc: "AWS Cloud Club Captain" },
                  { img: "/images/shreyansh.jpeg", name: "Shreyansh Uttam", role: "Vice President", desc: "Fostering collaboration and supporting bold club goals." },
                  { img: "/images/lakshya.jpeg", name: "Lakshay Khtour", role: "General Secretary", desc: "Ensuring seamless execution behind the scenes for every initiative." },
                  { img: "/images/navya.jpeg", name: "Navya Srivastava", role: "Operational Lead", desc: "Orchestrating events and keeping the club running smoothly." },
                  { img: "/images/yash.jpg", name: "Yash Dhanraj Thakare", role: "Treasurer", desc: "Managing resources with integrity and fostering transparency." },
                ].map((member, i) => (
                  <div key={i} className="bg-[#1e293b] border border-[#334155] p-6 rounded-md text-center w-full max-w-xs flex flex-col items-center hover:border-slate-400 transition duration-150 transform hover:scale-105 hover:-translate-y-1">
                    <div className="w-32 h-32 mb-4 rounded-full overflow-hidden border-2 border-[#334155]">
                      <img src={member.img} alt={member.name} className="object-cover w-full h-full" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-1">{member.name}</h3>
                    <p className="text-sm font-semibold text-[#94a3b8] mb-2">{member.role}</p>
                    <p className="text-xs text-[#94a3b8] leading-relaxed">{member.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="pb-16 px-4">
            <div className="container mx-auto max-w-7xl">
              {teamSections.map((section) => (
                <div key={section.title} className="mb-16">
                  <h2 className="text-3xl font-bold text-white text-center mb-8">{section.title}</h2>
                  <div className="max-w-4xl mx-auto">
                    <div className="relative mx-auto bg-[#1e293b] rounded-md overflow-hidden border border-[#334155] max-w-4xl w-full">
                      <div className="relative">
                        <img
                          src={section.image}
                          alt={section.title}
                          className="w-full h-auto object-contain"
                          style={{ maxHeight: "700px" }}
                        />
                        {hotspotPositions[section.title]?.map((pos, i) => (
                          <div
                            key={i}
                            className="absolute cursor-pointer hover:bg-white/10 rounded transition-colors duration-150"
                            style={{
                              left: pos.left,
                              top: pos.top,
                              width: pos.width,
                              height: pos.height,
                            }}
                            onMouseEnter={(e) => handleMouseEnter(teamMembers[section.members[i]], e)}
                            onMouseMove={handleMouseMove}
                            onMouseLeave={handleMouseLeave}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {hoveredMember && (
                <div
                  className="fixed z-50 bg-[#1e293b] border border-[#334155] rounded-md px-4 py-3 shadow-xl"
                  style={{
                    left: `${Math.min(mousePosition.x + 15, window.innerWidth - 200)}px`,
                    top: `${Math.max(mousePosition.y - 60, 10)}px`,
                    pointerEvents: 'none' as const,
                  }}
                >
                  <h3 className="text-base font-bold text-white">{hoveredMember.name}</h3>
                  <p className="text-sm text-[#94a3b8] font-medium">{hoveredMember.role}</p>
                </div>
              )}
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default About;

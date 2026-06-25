import React from "react";
import DockNavbar from "./DockNavbar";
import "../styles/homepage.css";

interface HomepageProps {
  onNavigate: (page: string) => void;
  theme: string;
  toggleTheme: () => void;
}

const Homepage: React.FC<HomepageProps> = ({ onNavigate, theme, toggleTheme }) => {

  const domainCards1 = [
    {
      img: "/images/aws_infra.jpeg",
      title: "AWS Infrastructure",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
        </svg>
      ),
      awsServices: [
        { name: "Amazon EC2", logo: "https://raw.githubusercontent.com/awslabs/aws-icons-for-plantuml/main/dist/Compute/AmazonEC2.png" },
        { name: "Amazon VPC", logo: "https://raw.githubusercontent.com/awslabs/aws-icons-for-plantuml/main/dist/NetworkingContentDelivery/AmazonVPC.png" },
      ]
    },
    {
      img: "/images/cloud_computing.jpg.webp",
      title: "Cloud Computing",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path>
        </svg>
      ),
      awsServices: [
        { name: "Amazon S3", logo: "https://raw.githubusercontent.com/awslabs/aws-icons-for-plantuml/main/dist/Storage/AmazonS3.png" },
        { name: "AWS Lambda", logo: "https://raw.githubusercontent.com/awslabs/aws-icons-for-plantuml/main/dist/Compute/AWSLambda.png" },
      ]
    },
    {
      img: "/images/devops.jpeg",
      title: "DevOps",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
        </svg>
      ),
      awsServices: [
        { name: "AWS CodePipeline", logo: "https://raw.githubusercontent.com/awslabs/aws-icons-for-plantuml/main/dist/DeveloperTools/AWSCodePipeline.png" },
        { name: "Amazon EKS", logo: "https://raw.githubusercontent.com/awslabs/aws-icons-for-plantuml/main/dist/Compute/AmazonElasticKubernetesService.png" },
      ]
    },
    {
      img: "/images/software_arch.png.webp",
      title: "Software Architecture",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
        </svg>
      ),
      awsServices: [
        { name: "AWS Amplify", logo: "https://raw.githubusercontent.com/awslabs/aws-icons-for-plantuml/main/dist/FrontEndWebMobile/AWSAmplify.png" },
        { name: "AWS Organizations", logo: "https://raw.githubusercontent.com/awslabs/aws-icons-for-plantuml/main/dist/ManagementGovernance/AWSOrganizations.png" },
      ]
    }
  ];

  const domainCards2 = [
    {
      img: "/images/aws_ml.png",
      title: "Machine Learning",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
        </svg>
      ),
      awsServices: [
        { name: "Amazon SageMaker", logo: "https://raw.githubusercontent.com/awslabs/aws-icons-for-plantuml/main/dist/MachineLearning/AmazonSageMaker.png" },
        { name: "Amazon Bedrock", logo: "https://raw.githubusercontent.com/awslabs/aws-icons-for-plantuml/main/dist/MachineLearning/AmazonBedrock.png" },
      ]
    },
    {
      img: "/images/frontend.png",
      title: "Frontend & UI/UX",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path>
        </svg>
      ),
      awsServices: [
        { name: "AWS Amplify", logo: "https://raw.githubusercontent.com/awslabs/aws-icons-for-plantuml/main/dist/FrontEndWebMobile/AWSAmplify.png" },
        { name: "Amazon CloudFront", logo: "https://raw.githubusercontent.com/awslabs/aws-icons-for-plantuml/main/dist/NetworkingContentDelivery/AmazonCloudFront.png" },
      ]
    },
    {
      img: "/images/cloud-testing-tools.jpeg",
      title: "Quality & Testing",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path>
        </svg>
      ),
      awsServices: [
        { name: "AWS CodePipeline", logo: "https://raw.githubusercontent.com/awslabs/aws-icons-for-plantuml/main/dist/DeveloperTools/AWSCodePipeline.png" },
        { name: "AWS CodeBuild", logo: "https://raw.githubusercontent.com/awslabs/aws-icons-for-plantuml/main/dist/DeveloperTools/AWSCodeBuild.png" },
      ]
    },
    {
      img: "/images/security.jpeg",
      title: "Cybersecurity",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
        </svg>
      ),
      awsServices: [
        { name: "AWS IAM", logo: "https://raw.githubusercontent.com/awslabs/aws-icons-for-plantuml/main/dist/SecurityIdentityCompliance/AWSIdentityAndAccessManagement.png" },
        { name: "AWS Shield", logo: "https://raw.githubusercontent.com/awslabs/aws-icons-for-plantuml/main/dist/SecurityIdentityCompliance/AWSShield.png" },
      ]
    }
  ];

  const domainCards3 = [
    {
      img: "/images/iot.jpg.webp",
      title: "IoT & Hardware",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
        </svg>
      ),
      awsServices: [
        { name: "AWS IoT Core", logo: "https://raw.githubusercontent.com/awslabs/aws-icons-for-plantuml/main/dist/InternetOfThings/AWSIoTCore.png" },
        { name: "AWS Greengrass", logo: "https://raw.githubusercontent.com/awslabs/aws-icons-for-plantuml/main/dist/InternetOfThings/AWSIoTGreengrass.png" },
      ]
    },
    {
      img: "/images/opensource.jpg",
      title: "Open Source",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
        </svg>
      ),
      awsServices: [
        { name: "AWS CodeCommit", logo: "https://raw.githubusercontent.com/awslabs/aws-icons-for-plantuml/main/dist/DeveloperTools/AWSCodeCommit.png" },
        { name: "Amazon ECR", logo: "https://raw.githubusercontent.com/awslabs/aws-icons-for-plantuml/main/dist/Compute/AmazonECR.png" },
      ]
    },
    {
      img: "/images/product.jpeg",
      title: "Product Management",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z"></path>
        </svg>
      ),
      awsServices: [
        { name: "AWS Organizations", logo: "https://raw.githubusercontent.com/awslabs/aws-icons-for-plantuml/main/dist/ManagementGovernance/AWSOrganizations.png" },
        { name: "AWS Cost Explorer", logo: "https://raw.githubusercontent.com/awslabs/aws-icons-for-plantuml/main/dist/CloudFinancialManagement/AWSCostExplorer.png" },
      ]
    },
    {
      img: "/images/startup.png",
      title: "Startups & Scaling",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
        </svg>
      ),
      awsServices: [
        { name: "AWS Elastic Beanstalk", logo: "https://raw.githubusercontent.com/awslabs/aws-icons-for-plantuml/main/dist/Compute/AWSElasticBeanstalk.png" },
        { name: "Amazon DynamoDB", logo: "https://raw.githubusercontent.com/awslabs/aws-icons-for-plantuml/main/dist/Database/AmazonDynamoDB.png" },
      ]
    }
  ];

  const whyJoinItems = [
    {
      icon: (
        <svg className="w-5 h-5 text-indigo-600 dark:text-[#a855f7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
        </svg>
      ),
      text: "Work on real-world cloud projects using AWS"
    },
    {
      icon: (
        <svg className="w-5 h-5 text-indigo-600 dark:text-[#a855f7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      ),
      text: "Prepare for AWS certifications with guided mentoring"
    },
    {
      icon: (
        <svg className="w-5 h-5 text-indigo-600 dark:text-[#a855f7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
        </svg>
      ),
      text: "Collaborate in a passionate tech community"
    },
    {
      icon: (
        <svg className="w-5 h-5 text-indigo-600 dark:text-[#a855f7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
        </svg>
      ),
      text: "Join internal hackathons and cloud sprints"
    },
    {
      icon: (
        <svg className="w-5 h-5 text-indigo-600 dark:text-[#a855f7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
        </svg>
      ),
      text: "Attend technical workshops by AWS experts and alumni"
    },
    {
      icon: (
        <svg className="w-5 h-5 text-indigo-600 dark:text-[#a855f7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
        </svg>
      ),
      text: "Get access to global AWS student programs"
    },
    {
      icon: (
        <svg className="w-5 h-5 text-indigo-600 dark:text-[#a855f7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
        </svg>
      ),
      text: "Boost your resume with cloud experience and leadership"
    }
  ];

  return (
    <>


      <div
        className="min-h-screen bg-slate-50 dark:bg-[#0f172a] text-slate-800 dark:text-white flex flex-col transition-colors duration-300"
        style={{
          fontFamily: "'Montserrat', system-ui, sans-serif",
          backgroundImage: 'linear-gradient(rgba(99,102,241,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.07) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      >
        <DockNavbar onNavigate={onNavigate} currentPage="home" theme={theme} toggleTheme={toggleTheme} />

        <main className="flex-1 text-slate-800 dark:text-[#ffffff] min-w-0 transition-colors duration-300">

          {/* Hero Section with Video Background and Pattern Overlays */}
          <section
            id="home"
            className="relative min-h-[100vh] w-full flex items-center overflow-hidden border-b border-slate-200/50 dark:border-slate-800/50 pt-24 px-6 lg:px-12"
          >
            {/* Light mode dot grid overlay */}
            <div className="absolute inset-0 z-[1] dark:hidden" style={{ backgroundImage: 'radial-gradient(circle, rgba(106,90,205,0.13) 1.5px, transparent 1.5px)', backgroundSize: '22px 22px' }}></div>
            {/* Background Video */}
            <div className="absolute inset-0 w-full h-full z-0">
              <video className="w-full h-full object-cover opacity-100 dark:opacity-70 transition-opacity duration-300" autoPlay muted loop playsInline>
                <source src="/images/Video-246.mp4" type="video/mp4" />
              </video>
              {/* Blueprint Grid Overlay */}
              <div
                className="absolute inset-0 opacity-[0.08] dark:opacity-[0.18]"
                style={{
                  backgroundImage: 'linear-gradient(rgba(99, 102, 241, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(99, 102, 241, 0.15) 1px, transparent 1px)',
                  backgroundSize: '24px 24px',
                }}
              ></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col items-center text-center space-y-8 py-16">
              <div className="flex flex-col items-center">
                {/* Embedded Glowing AWS Club Logo */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 blur-xl opacity-35 dark:opacity-100"></div>
                  <img
                    src="/images/logo.png"
                    alt="AWS Club Logo"
                    className="relative w-28 h-28 object-contain border border-slate-200/50 dark:border-slate-800/50 bg-white/50 dark:bg-slate-900/50 p-1.5 shadow-lg"
                  />
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-slate-900 dark:text-white leading-[1.05] tracking-[-0.03em] max-w-4xl uppercase">
                  AWS Student <br />
                  <span className="bg-gradient-to-r from-[#6a5acd] via-indigo-500 to-purple-600 dark:from-[#8b7fe8] dark:via-indigo-400 dark:to-purple-400 text-transparent bg-clip-text">
                    Builder Groups
                  </span>
                </h1>
              </div>

              <p className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-[#94a3b8] leading-relaxed max-w-2xl font-medium">
                Connect with other students on campus. Empowering the next generation of cloud enthusiasts and developers. Dive deep into AWS services, network with peers, and build groundbreaking solutions.
              </p>
            </div>
          </section>
          {/* About Club Section */}
          <section id="about" className="py-16 px-6 lg:px-12 border-b border-slate-200 dark:border-slate-800 bg-slate-50/90 dark:bg-[#0f172a]/90 backdrop-blur-[2px] transition-colors duration-300">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-10 tracking-tight uppercase">About Our Club</h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                <div className="lg:col-span-2 space-y-6">
                  <p className="text-base text-slate-600 dark:text-[#94a3b8] leading-relaxed">
                    The AWS Cloud Club is a vibrant community dedicated to exploring, learning, and mastering Amazon Web Services. Whether you're a beginner curious about cloud computing or an experienced developer looking to deepen your expertise, our club provides a supportive environment for growth.
                  </p>
                  <p className="text-base text-slate-600 dark:text-[#94a3b8] leading-relaxed">
                    We organize workshops, hackathons, guest lectures, and collaborative projects to help members gain hands-on experience and prepare for industry certifications. Our goal is to foster innovation and build a strong network of cloud professionals.
                  </p>
                </div>
                <div className="lg:col-span-1 space-y-6">
                  <div className="bg-white dark:bg-[#1e293b] border border-slate-200 dark:border-[#334155] rounded-xl p-6 shadow-sm">
                    <div className="text-indigo-600 dark:text-[#a855f7] mb-4 bg-indigo-50 dark:bg-slate-800 w-fit p-3 rounded-xl border border-indigo-100/50 dark:border-slate-700/50">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path>
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Cloud Innovation</h3>
                    <p className="text-sm text-slate-600 dark:text-[#94a3b8] leading-relaxed">Building tomorrow's solutions with today's technology.</p>
                  </div>

                  {/* FAQs Section */}
                  <div className="bg-white dark:bg-[#1e293b] border border-slate-200 dark:border-[#334155] rounded-xl p-6 shadow-sm">
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4 pb-2 border-b border-slate-100 dark:border-[#334155]">FAQs</h4>
                    <div className="space-y-4">
                      <div>
                        <h5 className="text-sm font-bold text-slate-800 dark:text-white mb-1">Who can join an AWS Student Builder Group?</h5>
                        <p className="text-xs text-slate-500 dark:text-[#94a3b8] leading-relaxed">Open to any student enrolled in a post-secondary institution aged 18+ who is ready to build their tech future.</p>
                      </div>
                      <div>
                        <h5 className="text-sm font-bold text-slate-800 dark:text-white mb-1">Why should I join?</h5>
                        <p className="text-xs text-slate-500 dark:text-[#94a3b8] leading-relaxed">To work on real-world projects, prepare for AWS certifications, and gain mentorship from cloud experts.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Explore Domains Section */}
          <section id="explore-cloud" className="py-16 px-6 lg:px-12 border-b border-slate-200 dark:border-slate-800 bg-white/85 dark:bg-[#0f172a]/85 transition-colors duration-300">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center mb-12">
                <div className="lg:col-span-2 space-y-4">
                  <span className="section-tag">Our Domains</span>
                  <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight uppercase">
                    Explore the Domains We Focus On.
                  </h2>
                  <p className="text-base text-slate-600 dark:text-[#94a3b8] leading-relaxed">
                    Dive into the key areas our <span className="text-indigo-600 dark:text-white font-semibold">AWS Club</span> specializes in —
                    from cloud infrastructure to cutting-edge AI and IoT solutions.
                  </p>
                </div>
                <div className="lg:col-span-1 flex justify-center lg:justify-end">
                  <div className="relative w-full max-w-sm aspect-video bg-slate-100 dark:bg-[#0c1322] border border-slate-200/60 dark:border-slate-800/80 rounded-xl overflow-hidden shadow-sm">
                    <video className="w-full h-full object-cover" autoPlay muted loop playsInline>
                      <source src="/images/Video-182.mp4" type="video/mp4" />
                    </video>
                  </div>
                </div>
              </div>

              {/* Cards Grid Inspired by Cloudscape Design */}
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {domainCards1.map((card, i) => (
                    <div
                      key={i}
                      className="relative rounded-xl overflow-hidden cursor-pointer border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 hover:border-indigo-500 dark:hover:border-[#a855f7] shadow-sm hover:shadow-md transition duration-200 group"
                    >
                      <div className="absolute inset-0 bg-cover bg-center opacity-[0.03] dark:opacity-[0.09]" style={{ backgroundImage: `url("${card.img}")` }}></div>
                      {/* Domain header */}
                      <div className="relative z-10 p-4 flex items-center gap-3">
                        <div className="text-indigo-600 dark:text-[#a855f7] flex-none bg-white dark:bg-slate-800 p-2.5 rounded-lg border border-slate-200/50 dark:border-slate-700/50 shadow-sm group-hover:scale-105 transition-transform duration-200">{card.icon}</div>
                        <h3 className="text-slate-800 dark:text-white font-extrabold text-sm tracking-tight group-hover:text-indigo-600 dark:group-hover:text-purple-400 transition-colors duration-150">{card.title}</h3>
                      </div>
                      {/* AWS Service chips */}
                      <div className="relative z-10 px-4 pb-4 flex flex-wrap gap-2">
                        {card.awsServices.map((svc, j) => (
                          <div key={j} className="flex items-center gap-1.5 bg-white dark:bg-slate-800 border border-slate-200/70 dark:border-slate-700/60 rounded-md px-2 py-1 shadow-sm hover:border-indigo-400 dark:hover:border-purple-500 transition-colors duration-150">
                            <img src={svc.logo} alt={svc.name} className="w-4 h-4 object-contain flex-none" loading="lazy" />
                            <span className="text-[11px] font-semibold text-slate-600 dark:text-slate-300 whitespace-nowrap">{svc.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {domainCards2.map((card, i) => (
                    <div
                      key={i}
                      className="relative rounded-xl overflow-hidden cursor-pointer border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 hover:border-indigo-500 dark:hover:border-[#a855f7] shadow-sm hover:shadow-md transition duration-200 group"
                    >
                      <div className="absolute inset-0 bg-cover bg-center opacity-[0.03] dark:opacity-[0.09]" style={{ backgroundImage: `url("${card.img}")` }}></div>
                      <div className="relative z-10 p-4 flex items-center gap-3">
                        <div className="text-indigo-600 dark:text-[#a855f7] flex-none bg-white dark:bg-slate-800 p-2.5 rounded-lg border border-slate-200/50 dark:border-slate-700/50 shadow-sm group-hover:scale-105 transition-transform duration-200">{card.icon}</div>
                        <h3 className="text-slate-800 dark:text-white font-extrabold text-sm tracking-tight group-hover:text-indigo-600 dark:group-hover:text-purple-400 transition-colors duration-150">{card.title}</h3>
                      </div>
                      <div className="relative z-10 px-4 pb-4 flex flex-wrap gap-2">
                        {card.awsServices.map((svc, j) => (
                          <div key={j} className="flex items-center gap-1.5 bg-white dark:bg-slate-800 border border-slate-200/70 dark:border-slate-700/60 rounded-md px-2 py-1 shadow-sm hover:border-indigo-400 dark:hover:border-purple-500 transition-colors duration-150">
                            <img src={svc.logo} alt={svc.name} className="w-4 h-4 object-contain flex-none" loading="lazy" />
                            <span className="text-[11px] font-semibold text-slate-600 dark:text-slate-300 whitespace-nowrap">{svc.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {domainCards3.map((card, i) => (
                    <div
                      key={i}
                      className="relative rounded-xl overflow-hidden cursor-pointer border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 hover:border-indigo-500 dark:hover:border-[#a855f7] shadow-sm hover:shadow-md transition duration-200 group"
                    >
                      <div className="absolute inset-0 bg-cover bg-center opacity-[0.03] dark:opacity-[0.09]" style={{ backgroundImage: `url("${card.img}")` }}></div>
                      <div className="relative z-10 p-4 flex items-center gap-3">
                        <div className="text-indigo-600 dark:text-[#a855f7] flex-none bg-white dark:bg-slate-800 p-2.5 rounded-lg border border-slate-200/50 dark:border-slate-700/50 shadow-sm group-hover:scale-105 transition-transform duration-200">{card.icon}</div>
                        <h3 className="text-slate-800 dark:text-white font-extrabold text-sm tracking-tight group-hover:text-indigo-600 dark:group-hover:text-purple-400 transition-colors duration-150">{card.title}</h3>
                      </div>
                      <div className="relative z-10 px-4 pb-4 flex flex-wrap gap-2">
                        {card.awsServices.map((svc, j) => (
                          <div key={j} className="flex items-center gap-1.5 bg-white dark:bg-slate-800 border border-slate-200/70 dark:border-slate-700/60 rounded-md px-2 py-1 shadow-sm hover:border-indigo-400 dark:hover:border-purple-500 transition-colors duration-150">
                            <img src={svc.logo} alt={svc.name} className="w-4 h-4 object-contain flex-none" loading="lazy" />
                            <span className="text-[11px] font-semibold text-slate-600 dark:text-slate-300 whitespace-nowrap">{svc.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Why Join AWS Club */}
          <section className="py-16 px-6 lg:px-12 border-b border-slate-200 dark:border-slate-800 bg-white/85 dark:bg-[#0c1322]/85 transition-colors duration-300 section-bg-dots">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                <div className="lg:col-span-2 space-y-6">
                  <span className="section-tag">Why Join?</span>
                  <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight uppercase">Why AWS Builder Group?</h2>
                  <p className="text-base text-slate-600 dark:text-[#94a3b8] leading-relaxed">AWS Cloud Club is the best place to get a complete overview of recent insights and future trends in modern cloud development.</p>
                  {/* Clean SVG list replacing emojis */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {whyJoinItems.map((item, i) => (
                      <div key={i} className="flex items-start gap-3 bg-slate-50 dark:bg-[#1e293b] p-4 border border-slate-200/60 dark:border-[#334155] rounded-xl shadow-sm hover:shadow transition-shadow duration-150">
                        <span className="flex-none bg-indigo-50 dark:bg-slate-800 p-2 rounded-lg border border-indigo-100/50 dark:border-slate-700/50 shadow-sm mt-0.5">{item.icon}</span>
                        <span className="text-sm text-slate-600 dark:text-[#94a3b8] font-medium leading-snug">{item.text}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-4 pt-4">
                    <a href="#join" className="bg-[#6a5acd] text-white font-bold px-6 py-3 rounded-full hover:shadow-lg hover:shadow-indigo-500/20 dark:hover:shadow-purple-500/20 transition duration-150 text-sm">GET STARTED</a>
                  </div>
                </div>

                {/* Event Photo Gallery */}
                <div className="lg:col-span-1">
                  <div className="relative h-[37.5rem] overflow-hidden rounded-2xl border border-slate-200 dark:border-[#334155] bg-slate-100 dark:bg-[#1e293b] shadow-inner">
                    <div className="scrolling-gallery flex flex-col gap-3 p-3">
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => {
                        const ext = n === 6 ? "jpg" : "JPG";
                        return (
                          <div key={n} className="h-32 rounded-xl overflow-hidden relative flex-none border border-slate-200 dark:border-[#334155] shadow-sm">
                            <img src={`/images/${n}.${ext}`} alt={`Gallery ${n}`} className="w-full h-full object-cover" loading="lazy" />
                            <div className="absolute inset-0 bg-slate-900/10 dark:bg-slate-950/20"></div>
                          </div>
                        );
                      })}
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => {
                        const ext = n === 6 ? "jpg" : "JPG";
                        return (
                          <div key={`dup-${n}`} className="h-32 rounded-xl overflow-hidden relative flex-none border border-slate-200 dark:border-[#334155] shadow-sm">
                            <img src={`/images/${n}.${ext}`} alt={`Gallery ${n}`} className="w-full h-full object-cover" loading="lazy" />
                            <div className="absolute inset-0 bg-slate-900/10 dark:bg-slate-950/20"></div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Upcoming Events Section */}
          <section id="events" className="py-16 px-6 lg:px-12 border-b border-slate-200 dark:border-slate-800 bg-slate-50/90 dark:bg-[#0f172a]/90 transition-colors duration-300">
            <div className="max-w-7xl mx-auto">
              <span className="section-tag mb-3 block">Schedule</span>
              <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-10 tracking-tight uppercase">Upcoming Events</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                {/* Event 1 */}
                <div className="bg-white dark:bg-[#1e293b] border border-slate-200 dark:border-[#334155] p-6 rounded-xl flex flex-col justify-between hover:border-indigo-500 dark:hover:border-[#a855f7] shadow-sm hover:shadow-md transition duration-200">
                  <div>
                    <span className="inline-block bg-indigo-50 dark:bg-[#0f172a] text-indigo-700 dark:text-purple-400 text-xs font-bold px-2.5 py-0.5 rounded-full border border-indigo-100/50 dark:border-[#334155] mb-3">Community Day</span>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">AWS Student Community Day</h3>
                    <p className="text-xs text-slate-500 dark:text-[#94a3b8] font-bold mb-4">August 15, 2025 | 10:00 AM - 1:00 PM</p>
                    <p className="text-sm text-slate-600 dark:text-[#94a3b8] leading-relaxed mb-4">Join students and professionals to learn the latest in AWS Cloud, with workshops, networking, and insights from global AWS experts.</p>
                    <div className="border-t border-slate-100 dark:border-[#334155] pt-4 mb-4">
                      <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2">Featured Speakers</h4>
                      <ul className="text-xs text-slate-500 dark:text-[#94a3b8] space-y-1 list-disc pl-4">
                        <li>Eric Hanchett – Sr. Developer Advocate, AWS</li>
                        <li>Eric Johnson – Principal Developer Advocate, AWS</li>
                        <li>Nick Coult – Director, Serverless, AWS</li>
                        <li>Sheen Brisals – AWS Serverless Hero</li>
                      </ul>
                    </div>
                  </div>
                  <a href="#" className="text-indigo-600 dark:text-[#a855f7] hover:text-indigo-700 dark:hover:text-white font-bold text-xs inline-flex items-center gap-1 mt-2">
                    Learn More
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                  </a>
                </div>

                {/* Event 2 */}
                <div className="bg-white dark:bg-[#1e293b] border border-slate-200 dark:border-[#334155] p-6 rounded-xl flex flex-col justify-between hover:border-indigo-500 dark:hover:border-[#a855f7] shadow-sm hover:shadow-md transition duration-200">
                  <div>
                    <span className="inline-block bg-indigo-50 dark:bg-[#0f172a] text-indigo-700 dark:text-purple-400 text-xs font-bold px-2.5 py-0.5 rounded-full border border-indigo-100/50 dark:border-[#334155] mb-3">Workshop</span>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">Serverless Architectures with Lambda</h3>
                    <p className="text-xs text-slate-500 dark:text-[#94a3b8] font-bold mb-4">September 5, 2025 | 2:00 PM - 5:00 PM</p>
                    <p className="text-sm text-slate-600 dark:text-[#94a3b8] leading-relaxed mb-4">Dive into building serverless applications using AWS Lambda, API Gateway, and DynamoDB.</p>
                    <div className="border-t border-slate-100 dark:border-[#334155] pt-4 mb-4 space-y-2">
                      <p className="text-xs text-slate-500 dark:text-[#94a3b8] leading-relaxed">Includes a live demo deploying a RESTful API in real-time and hands-on troubleshooting tips.</p>
                      <p className="text-xs text-slate-500 dark:text-[#94a3b8] leading-relaxed">Light refreshments will be provided. Attendees also receive exclusive access to a Lambda cheat sheet.</p>
                    </div>
                  </div>
                  <a href="#" className="text-indigo-600 dark:text-[#a855f7] hover:text-indigo-700 dark:hover:text-white font-bold text-xs inline-flex items-center gap-1 mt-2">
                    Learn More
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                  </a>
                </div>

                {/* Event 3 */}
                <div className="bg-white dark:bg-[#1e293b] border border-slate-200 dark:border-[#334155] p-6 rounded-xl flex flex-col justify-between hover:border-indigo-500 dark:hover:border-[#a855f7] shadow-sm hover:shadow-md transition duration-200">
                  <div>
                    <span className="inline-block bg-indigo-50 dark:bg-[#0f172a] text-indigo-700 dark:text-purple-400 text-xs font-bold px-2.5 py-0.5 rounded-full border border-indigo-100/50 dark:border-[#334155] mb-3">Study Group</span>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">AWS Solutions Architect Study Group</h3>
                    <p className="text-xs text-slate-500 dark:text-[#94a3b8] font-bold mb-4">Starts September 20, 2025 | Weekly</p>
                    <p className="text-sm text-slate-600 dark:text-[#94a3b8] leading-relaxed mb-4">Prepare for the AWS Solutions Architect Associate certification with guided study sessions.</p>
                    <div className="border-t border-slate-100 dark:border-[#334155] pt-4 mb-4 space-y-2">
                      <p className="text-xs text-slate-500 dark:text-[#94a3b8] leading-relaxed">Access a shared repository of practice exams and study guides curated by certified architects.</p>
                      <p className="text-xs text-slate-500 dark:text-[#94a3b8] leading-relaxed">Virtual participation available with Slack channel support for Q&A between sessions.</p>
                    </div>
                  </div>
                  <a href="#" className="text-indigo-600 dark:text-[#a855f7] hover:text-indigo-700 dark:hover:text-white font-bold text-xs inline-flex items-center gap-1 mt-2">
                    Learn More
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Meet the Board Section */}
          <section className="py-16 px-6 lg:px-12 border-b border-slate-200 dark:border-slate-800 bg-white/85 dark:bg-[#0c1322]/85 transition-colors duration-300">
            <div className="max-w-7xl mx-auto">
              <span className="section-tag mb-3 block text-center mx-auto">Leadership</span>
              <h2 className="text-3xl font-black text-slate-900 dark:text-white text-center mb-12 tracking-tight uppercase">Meet the Board</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {[
                  { img: "/images/akash.jpeg", name: "Akash Kharabe", role: "President", desc: "AWS Cloud Club Captain" },
                  { img: "/images/shreyansh.jpeg", name: "Shreyansh Uttam", role: "Vice President", desc: "Fostering collaboration and supporting bold club goals." },
                  { img: "/images/lakshya.jpeg", name: "Lakshay Khtour", role: "General Secretary", desc: "Ensuring seamless execution behind the scenes for every initiative." },
                  { img: "/images/navya.jpeg", name: "Navya Srivastava", role: "Operational Lead", desc: "Orchestrating events and keeping the club running smoothly." },
                  { img: "/images/yash.jpg", name: "Yash Dhanraj Thakare", role: "Treasurer", desc: "Managing resources with integrity and fostering transparency." },
                ].map((member, i) => (
                  <div key={i} className="bg-slate-50 dark:bg-[#1e293b] border border-slate-200 dark:border-[#334155] p-6 rounded-xl text-center flex flex-col items-center hover:border-indigo-500 dark:hover:border-[#a855f7] shadow-sm hover:shadow-md transition duration-200">
                    <div className="w-24 h-24 mb-4 rounded-full overflow-hidden border-2 border-slate-200 dark:border-[#334155] shadow-sm">
                      <img src={member.img} alt={member.name} className="object-cover w-full h-full" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white mb-0.5">{member.name}</h3>
                    <p className="text-xs font-bold text-[#6a5acd] dark:text-[#6a5acd] mb-3">{member.role}</p>
                    <p className="text-xs text-slate-500 dark:text-[#94a3b8] leading-relaxed">{member.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-16 px-6 lg:px-12 bg-slate-50/90 dark:bg-[#0c1322]/90 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <div>
                <span className="section-tag mb-3 block mx-auto">Contact</span>
                <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight uppercase">Get in Touch</h2>
                <p className="text-sm text-slate-600 dark:text-[#94a3b8] mt-2">Have questions or want to learn more? Reach out to us!</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-[#1e293b] border border-slate-200 dark:border-[#334155] p-6 rounded-xl shadow-sm hover:shadow transition duration-150">
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">Email Us</h3>
                  <p className="text-sm text-[#6a5acd] dark:text-[#6a5acd] font-bold">aws@vitbhopal.ac.in</p>
                </div>
                <div className="bg-white dark:bg-[#1e293b] border border-slate-200 dark:border-[#334155] p-6 rounded-xl shadow-sm hover:shadow transition duration-150">
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-3">Follow Us</h3>
                  <div className="flex justify-center space-x-4">
                    <a href="https://www.instagram.com/awscloudclub.vitb" className="text-slate-400 hover:text-indigo-600 dark:hover:text-purple-400 transition duration-150" target="_blank" rel="noreferrer">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zM17.25 5.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5z" /></svg>
                    </a>
                    <a href="https://www.linkedin.com/company/aws-cloud-club-vitbhopaluniveristy/" className="text-slate-400 hover:text-indigo-600 dark:hover:text-purple-400 transition duration-150" target="_blank" rel="noreferrer">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="bg-slate-100 dark:bg-[#0b0f19] border-t border-slate-200 dark:border-slate-800 py-8 px-4 text-center text-slate-500 dark:text-[#94a3b8] text-xs transition-colors duration-300">
            <div className="max-w-7xl mx-auto space-y-2">
              <p>&copy; {new Date().getFullYear()} AWS Student Builder Group. All rights reserved.</p>
              <p>Designed with <span className="text-indigo-600 dark:text-purple-400">&hearts;</span> for cloud enthusiasts.</p>
            </div>
          </footer>
        </main>
      </div>
    </>
  );
};

export default Homepage;

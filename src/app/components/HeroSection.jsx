"use client";
import React, { useState } from "react";
import Image from "next/image";
import ExampleComponent from "./ExampleComponent";
import ExperienceModal from "./ExperienceModal";

const experienceData = [
  {
    company: "Northeastern University",
    role: "Graduate Student",
    duration: "Aug 2024 – Present",
    description:
      "Conducting research under Professor Hong P. to enhance reasoning capabilities in LLM-based autonomous agents, focusing on improving inference and self-correction mechanisms. Contributing to the advancement of AI agent technologies through academic research and literature synthesis.",
    url: "https://www.northeastern.edu/",
  },
  {
    company: "Apollo.io",
    role: "Sr. Software Engineer",
    duration: "1.5 Years",
    description:
      "Led key backend initiatives to optimize data systems and enhance user experience, driving efficiency improvements and increasing user engagement. Played a pivotal role in migrating and optimizing critical infrastructure for performance and scalability.",
    url: "https://app.apollo.io/",
  },
  {
    company: "Open Financial Technologies",
    role: "Software Engineer",
    duration: "8 Months",
    description:
      "Spearheaded architectural improvements to ensure the scalability and efficiency of the platform. Contributed to significant enhancements in system performance, enabling more efficient and streamlined processes for customers.",
    url: "https://open.money/",
  },
  {
    company: "Elocity",
    role: "Founding Software Engineer",
    duration: "2 Years",
    description:
      "As a founding team member, contributed to the early-stage development of EV charging solutions by building scalable infrastructure and optimizing platform performance. Led efforts to improve system efficiency and real-time analytics capabilities, driving product growth and adoption.",
    url: "https://elocitytech.com/",
  },
];

const handleResumeDownload = () => {
  track("Resume Download", {}, { flags: ["resume-download"] });
};

const HeroSection = () => {
  const [showExperienceModal, setShowExperienceModal] = useState(false);
  const resumeLink =
    "https://drive.google.com/file/d/1HGTehte3ifG6KYYnzDWxIgPAzyo12ZAC/view?usp=sharing";
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center size-auto sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold size-auto">
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600">
              Hello I'm {""}
            </span>
            <br />
            <ExampleComponent />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mt-6">
            A software engineer who loves untangling technical puzzles with
            people, not just for them. My journey into tech began with late
            nights, endless tutorials, and a stubborn belief that anyone can
            learn to code. That hustle paid off when I became a founding
            engineer at Elocity, where I wore every hat imaginable, from
            debugging at 2 AM to collaborating with tech team on product vision
            and brainstorming roadmaps over chai.
          </p>
          <div>
            <button
              onClick={() => setShowExperienceModal(true)}
              className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:opacity-90 text-white mt-3 transition-opacity"
            >
              3+ Years Experience
            </button>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-transparent hover:bg-slate-900 text-white border border-white mt-3 transition-colors">
              <a
                href={resumeLink}
                download="Daxil_Vala.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleResumeDownload}
              >
                Download CV
              </a>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-transparent w-[250] h-[250] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/studying.png"
              alt="hero image"
              className="absolute transform -tranlate-x-1/2 -translate-y-0.5 -top-0.5 -left-0.5"
              width={450}
              height={450}
            />
          </div>
        </div>
      </div>

      {showExperienceModal && (
        <ExperienceModal
          onClose={() => setShowExperienceModal(false)}
          jobs={experienceData}
        />
      )}
    </section>
  );
};

export default HeroSection;

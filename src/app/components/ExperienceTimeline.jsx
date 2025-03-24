// components/ExperienceTimeline.jsx
import React from "react";

const TimelineItem = ({ company, role, duration, description, url }) => {
  return (
    <div className="relative pl-8 border-l-2 border-[#33353F] mb-8">
      <div className="absolute w-4 h-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full -left-[9px] top-0"></div>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-white text-meduim font-bold mb-1 hover:text-blue-300 hover:underline transition-colors"
      >
        {company}
      </a>
      <p className="text-purple-400 font-2xl mb-1">{role}</p>
      <p className="text-[#ADB7BE] text-sm mb-2">{duration}</p>
      <p className="text-[#ADB7BE]">{description}</p>
    </div>
  );
};

const ExperienceTimeline = ({ jobs }) => {
  return (
    <div className="max-w-2xl mx-auto">
      {jobs.map((job, index) => (
        <TimelineItem key={index} {...job} />
      ))}
    </div>
  );
};

export default ExperienceTimeline;

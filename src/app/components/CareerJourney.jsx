"use client";
import React, { useState } from "react";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/solid";

const careerData = [
  {
    name: "Elocity",
    role: "Founding Software Engineer",
    duration: "Jan 2022 - Present",
    achievements: [
      "Led development of core product infrastructure",
      "Implemented scalable microservices architecture",
      "Reduced system latency by 40% through optimization",
    ],
  },
  {
    name: "TechNova Solutions",
    role: "Senior Software Developer",
    duration: "Jun 2019 - Dec 2021",
    achievements: [
      "Developed cross-platform mobile applications",
      "Integrated advanced AI-driven features",
      "Mentored junior development team",
    ],
  },
  {
    name: "DataCraft Innovations",
    role: "Junior Software Engineer",
    duration: "Aug 2017 - May 2019",
    achievements: [
      "Contributed to data analytics platform",
      "Implemented robust backend services",
      "Participated in agile development processes",
    ],
  },
];

const CareerJourney = () => {
  const [currentCompanyIndex, setCurrentCompanyIndex] = useState(0);

  const handleNext = () => {
    setCurrentCompanyIndex((prev) => (prev + 1) % careerData.length);
  };

  const handlePrevious = () => {
    setCurrentCompanyIndex((prev) =>
      prev === 0 ? careerData.length - 1 : prev - 1
    );
  };

  const currentCompany = careerData[currentCompanyIndex];

  return (
    <div className="bg-gradient-to-br from-blue-900/50 via-purple-900/50 to-pink-900/50 rounded-xl p-6 mt-4 shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={handlePrevious}
          className="text-white hover:text-purple-300"
        >
          <ChevronLeftIcon size={24} />
        </button>
        <h3 className="text-xl font-bold text-white">{currentCompany.name}</h3>
        <button
          onClick={handleNext}
          className="text-white hover:text-purple-300"
        >
          <ChevronRightIcon size={24} />
        </button>
      </div>

      <div className="text-center text-white">
        <p className="text-lg font-semibold">{currentCompany.role}</p>
        <p className="text-sm text-gray-300 mb-4">{currentCompany.duration}</p>

        <ul className="list-disc list-inside text-left text-gray-200 space-y-2">
          {currentCompany.achievements.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CareerJourney;

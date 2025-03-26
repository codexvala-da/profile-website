"use client";
"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

const projectsData = [
  {
    id: 1,
    title: "RareSense : AI diagnostic tool",
    motivation:
      "Rare diseases often go undiagnosed due to complex symptom profiles and limited diagnostic capabilities.",
    goal: "Develop an AI-powered tool that assists healthcare professionals in more accurately identifying and diagnosing rare diseases.",
    work: "Created an LLM-based system that extracts phenotypic information from clinical notes, prioritizes potential diagnoses, and suggests related phenotypes to improve diagnostic confidence.",
    skills: [
      "Large Language Models (LLMs)",
      "Natural Language Processing (NLP)",
      "Clinical Text Mining",
      "Python",
      "Prompt Engineering",
      "Flask",
      "Data Extraction",
      "Machine Learning",
    ],
    image: "/images/projects/1.png",
    gitUrl: "https://github.com/codexvala-da/Harvard-Rare-Diseases-Hackathon",
    previewUrl: "https://www.youtube.com/watch?v=8IrL0S5FiaA",
  },
  {
    id: 2,
    title: "Enhanced The Graph Network Subgraph Explorer",
    motivation:
      "Blockchain data querying can be inefficient and complex, limiting insights for developers and researchers.",
    goal: "Optimize GraphQL queries for Lido Finance subgraphs to improve data retrieval performance and scalability.",
    work: "Developed enhanced subgraph queries that streamline blockchain data indexing, making it easier to extract and analyze complex blockchain network information.",
    skills: [
      "GraphQL",
      "Subgraph Development",
      "The Graph Protocol",
      "Blockchain Data Indexing",
      "Optimization Techniques",
      "Query Performance",
      "TypeScript",
      "Node.js",
    ],
    image: "/images/projects/2.png",
    gitUrl: "https://github.com/codexvala-da/lido_modified_sub",
    previewUrl:
      "https://thegraph.com/explorer/subgraphs/fdeuzYk95szmAu7ZsNj6vXYrwNfGSudaVyXz8GkEMVY?view=Query&chain=arbitrum-one",
  },
  {
    id: 3,
    title: "Clickstream Processing & User Behavior Insights",
    motivation:
      "Understanding user behavior is crucial for improving online shopping experiences, especially in niche markets.",
    goal: "Analyze user interactions in an online maternity clothing store to identify browsing patterns and potential UX improvements.",
    work: "Conducted comprehensive clickstream data analysis using Python, extracting insights into user engagement, product interactions, and navigation patterns.",
    skills: [
      "Data Analysis",
      "Python",
      "Pandas & NumPy",
      "SQL",
      "Data Visualization",
      "Statistical Analysis",
      "Clickstream Processing",
    ],
    image: "/images/projects/3.png",
    gitUrl: "https://github.com/codexvala-da/Clickstream-Data-Analysis",
    previewUrl: "https://youtu.be/MSYzN7oJnAs?si=olESzLprfJQOomWE",
  },
];

const ProjectCarousel = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projectsData.length);
  };

  const prevProject = () => {
    setCurrentProject(
      (prev) => (prev - 1 + projectsData.length) % projectsData.length
    );
  };

  const project = projectsData[currentProject];

  return (
    <section
      id="projects"
      className="py-12 min-h-screen flex items-center justify-center"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-center text-4xl font-bold text-white mb-12">
          Projects
        </h2>

        <div className="relative flex flex-col md:flex-row items-center">
          {/* Previous Project Button - Desktop and Mobile */}
          <button
            onClick={prevProject}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[#2D2D2D]/60 hover:bg-[#3D3D3D] p-2 rounded-full shadow-lg 
            md:-translate-x-1/2 sm:block sm:z-20"
          >
            <ChevronLeftIcon className="h-6 w-6 md:h-8 md:w-8 text-white" />
          </button>

          {/* Project Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentProject}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="flex-grow bg-[#181818] rounded-xl shadow-2xl overflow-hidden flex flex-col md:flex-row w-full"
            >
              {/* Image Section */}
              <div className="md:w-1/2 h-64 md:h-[500px] relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-4">
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Project Details Section */}
              <div className="md:w-1/2 p-6 md:p-8 text-white flex flex-col justify-between overflow-y-auto max-h-[500px]">
                <div>
                  <div className="mb-4 md:mb-6">
                    <h4 className="text-lg md:text-xl font-semibold text-[#ADB7BE] mb-2">
                      Motivation
                    </h4>
                    <p className="text-sm md:text-base text-[#E5E7EB]">
                      {project.motivation}
                    </p>
                  </div>

                  <div className="mb-4 md:mb-6">
                    <h4 className="text-lg md:text-xl font-semibold text-[#ADB7BE] mb-2">
                      Goal
                    </h4>
                    <p className="text-sm md:text-base text-[#E5E7EB]">
                      {project.goal}
                    </p>
                  </div>

                  <div className="mb-4 md:mb-6">
                    <h4 className="text-lg md:text-xl font-semibold text-[#ADB7BE] mb-2">
                      Work
                    </h4>
                    <p className="text-sm md:text-base text-[#E5E7EB]">
                      {project.work}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg md:text-xl font-semibold text-[#ADB7BE] mb-2">
                      Tech Skills
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="text-xs bg-[#2D2D2D] text-[#ADB7BE] px-2 py-1 rounded-md"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Project Links */}
                <div className="mt-4 md:mt-6 flex space-x-4">
                  <a
                    href={project.gitUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#2D2D2D] hover:bg-[#3D3D3D] text-white px-4 py-2 rounded-md flex items-center text-sm md:text-base"
                  >
                    View Code
                  </a>
                  <a
                    href={project.previewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-md flex items-center text-sm md:text-base"
                  >
                    Preview
                  </a>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Next Project Button - Desktop and Mobile */}
          <button
            onClick={nextProject}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[#2D2D2D]/60 hover:bg-[#3D3D3D] p-2 rounded-full shadow-lg 
            md:translate-x-1/2 sm:block sm:z-20"
          >
            <ChevronRightIcon className="h-6 w-6 md:h-8 md:w-8 text-white" />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {projectsData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentProject(index)}
              className={`h-3 w-3 rounded-full ${
                index === currentProject
                  ? "bg-white"
                  : "bg-[#2D2D2D]/60 hover:bg-[#3D3D3D]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectCarousel;

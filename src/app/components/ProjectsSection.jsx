"use client";
import React, { useState, useRef } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "RareSense : AI diagnostic tool",
    description:
      "RareSense is a prototype leveraging LLM agents to improve differential diagnosis by prioritizing phenotypes. The system extracts relevant phenotypic information from clinical notes and suggests related phenotypes, enhancing the confidence score of diagnoses. The project aims to assist healthcare professionals in identifying rare diseases more effectively.",
    image: "/images/projects/1.png",
    gitUrl: "https://github.com/codexvala-da/Harvard-Rare-Diseases-Hackathon",
    previewUrl: "https://www.youtube.com/watch?v=8IrL0S5FiaA",
    skills: [
      "Large Language Models (LLMs)",
      "Natural Language Processing (NLP)",
      "Clinical Text Mining",
      "Python",
      "Prompt Engineering",
      "Flask",
      "Data Extraction and Preprocessing",
      "Machine Learning",
    ],
  },
  {
    id: 2,
    title: "Enhanced The Graph Network Subgraph Explorer",
    description:
      "Builds upon the foundational subgraphs of Lido Finance by incorporating optimized GraphQL queries for more efficient data retrieval. The enhancements improve the performance and scalability of querying blockchain data, making it easier to extract relevant insights from decentralized networks.",
    image: "/images/projects/2.png",
    gitUrl: "https://github.com/codexvala-da/lido_modified_sub",
    previewUrl:
      "https://thegraph.com/explorer/subgraphs/fdeuzYk95szmAu7ZsNj6vXYrwNfGSudaVyXz8GkEMVY?view=Query&chain=arbitrum-one",
    skills: [
      "GraphQL",
      "Subgraph Development",
      "The Graph Protocol",
      "Blockchain Data Indexing",
      "Optimization Techniques",
      "Query Performance Optimization",
      "TypeScript",
      "Node.js",
    ],
  },
  {
    id: 3,
    title: "Stock Price Prediction Using LSTM in PyTorch",
    description:
      "This project implements a Long Short-Term Memory (LSTM) model using PyTorch to predict Amazon stock prices based on the last seven trading sessions. It involves data preprocessing, model training, evaluation, and visualization of stock price trends to enhance predictive accuracy.",
    image: "/images/projects/2.png",
    gitUrl:
      "https://github.com/codexvala-da/lstm_implementation_using_pytorch/blob/main/LSTM_USING_PYTORCH.ipynb",
    previewUrl:
      "https://github.com/codexvala-da/lstm_implementation_using_pytorch/blob/main/README.md",
    skills: [
      "Deep Learning",
      "PyTorch",
      "LSTM Networks",
      "Time Series Analysis",
      "Data Preprocessing",
      "Python",
      "NumPy & Pandas",
      "Data Visualization",
    ],
  },
  {
    id: 4,
    title: "Clickstream Data Analysis for an Online Clothing Store",
    description:
      "This project analyzes user interactions with an online store specializing in maternity clothing. By studying clickstream data, it identifies browsing patterns, product engagement, and potential improvements in user experience.",
    image: "/images/projects/2.png",
    gitUrl: "https://github.com/codexvala-da/Clickstream-Data-Analysis",
    previewUrl: "https://youtu.be/MSYzN7oJnAs?si=olESzLprfJQOomWE",
    skills: [
      "Data Analysis",
      "Python",
      "Pandas & NumPy",
      "SQL",
      "Data Visualization (Matplotlib, Seaborn)",
      "Statistical Analysis",
      "Clickstream Data Processing",
    ],
  },
];

const ProjectsSection = () => {
  const [visibleProjects, setVisibleProjects] = useState(3);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleShowMore = () => {
    setVisibleProjects((prevVisible) => prevVisible + 3);
  };

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="py-1">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Projects
      </h2>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12 mb-8">
        {projectsData.slice(0, visibleProjects).map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
              skills={project.skills}
            />
          </motion.li>
        ))}
      </ul>
      {projectsData.length > visibleProjects && (
        <div className="flex justify-center">
          <button
            onClick={handleShowMore}
            className="group flex items-center justify-center p-2 rounded-full bg-primary-500 hover:bg-primary-600 transition duration-300"
            aria-label="Show more projects"
          >
            <ChevronDownIcon className="h-8 w-8 text-white group-hover:animate-bounce" />
          </button>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;

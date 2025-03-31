"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import { IconContext } from "react-icons";
import * as SimpleIcons from "simple-icons";
import { Code, GraduationCap, Award } from "lucide-react";

// Helper function to get tech stack icons
const getSkillIcon = (skillName) => {
  const iconName = skillName.toLowerCase().replace(/\./g, "");
  const simpleIconName = `si${
    iconName.charAt(0).toUpperCase() + iconName.slice(1)
  }`;

  const icon = SimpleIcons[simpleIconName];

  if (icon) {
    return (
      <IconContext.Provider value={{ size: "1.25em" }}>
        <svg
          role="img"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fill={`#${icon.hex}`}
          className="w-5 h-5 mr-2"
        >
          <path d={icon.path} />
        </svg>
      </IconContext.Provider>
    );
  }

  // Fallback to default icon
  return <Code className="w-5 h-5 text-gray-500" />;
};

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    icon: <Code className="w-6 h-6 mr-2" />,
    content: [
      {
        category: "Programming Languages",
        skills: [
          {
            name: "Typescript",
            icon: getSkillIcon("typescript"),
          },
          {
            name: "Python",
            icon: getSkillIcon("Python"),
          },
          {
            name: "Ruby",
            icon: getSkillIcon("ruby"),
          },
          {
            name: "Java",
            icon: getSkillIcon("java"),
          },
        ],
      },
      {
        category: "Frameworks",
        skills: [
          {
            name: "Spring Boot",
            icon: getSkillIcon("springboot"),
          },
          {
            name: "Node.js",
            icon: getSkillIcon("nodedotjs"),
          },
          {
            name: "Rails",
            icon: getSkillIcon("rubyonrails"),
          },
          {
            name: "Django",
            icon: getSkillIcon("django"),
          },
          {
            name: "Sidekiq",
            icon: getSkillIcon("sidekiq"),
          },
        ],
      },
      {
        category: "Databases",
        skills: [
          {
            name: "PostgreSQL",
            icon: getSkillIcon("PostgreSQL"),
          },
          {
            name: "MongoDB",
            icon: getSkillIcon("MongoDB"),
          },
          {
            name: "Elasticsearch",
            icon: getSkillIcon("elastic"),
          },
          {
            name: "Redis",
            icon: getSkillIcon("redis"),
          },
        ],
      },
      {
        category: "Cloud & DevOps",
        skills: [
          {
            name: "AWS",
            icon: getSkillIcon("amazonwebservices"),
          },
          {
            name: "Docker",
            icon: getSkillIcon("Docker"),
          },
          {
            name: "Apache Kafka",
            icon: getSkillIcon("apachekafka"),
          },
          {
            name: "Kubernetes",
            icon: getSkillIcon("kubernetes"),
          },
        ],
      },
      {
        category: "AI",
        skills: [
          {
            name: "Hugging Face",
            icon: getSkillIcon("huggingface"),
          },
          {
            name: "PyTorch",
            icon: getSkillIcon("pytorch"),
          },
          {
            name: "TensorFlow",
            icon: getSkillIcon("tensorflow"),
          },
          {
            name: "LangChain",
            icon: getSkillIcon("langchain"),
          },
        ],
      },
      {
        category: "Collaboration",
        skills: [
          {
            name: "Gitlab",
            icon: getSkillIcon("gitlab"),
          },
          {
            name: "Jira",
            icon: getSkillIcon("jira"),
          },
          {
            name: "Amazon IAM",
            icon: getSkillIcon("amazoniam"),
          },
        ],
      },
    ],
  },
  {
    title: "Education",
    id: "education",
    icon: <GraduationCap className="w-6 h-6 mr-2" />,
    content: [
      {
        institution: "Northeastern University",
        degree: "MS in Information Systems",
        year: "2024 - 2026",
        icon: <GraduationCap className="w-8 h-8 text-blue-500" />,
      },
      {
        institution: "National Institute of Technology Karnataka (Surathkal)",
        degree: "Undergraduate in Electrical Engineering",
        year: "2017 - 2021",
        icon: <GraduationCap className="w-8 h-8 text-green-500" />,
      },
    ],
  },
  {
    title: "Certifications",
    id: "certifications",
    icon: <Award className="w-6 h-6 mr-2" />,
    content: [
      {
        name: "Basics of Neo4j - GDS Library",
        issuer: "Neo4j",
        date: "Feb 2025",
        icon: <Award className="w-8 h-8 text-purple-500" />,
      },
      {
        name: "Professional Skills for Academic Success",
        issuer: "Northeastern University",
        date: "Oct 2024",
        icon: <Award className="w-8 h-8 text-blue-500" />,
      },
    ],
  },
];

const TabButton = ({ children, active, selectTab, icon }) => (
  <button
    onClick={selectTab}
    className={`
      flex items-center px-4 py-2 rounded-lg transition-all duration-300
      ${
        active
          ? "bg-primary-500 text-white"
          : "text-gray-400 hover:bg-gray-800 hover:text-white"
      }
      mr-2 mb-2 text-sm font-medium
    `}
  >
    {icon}
    {children}
  </button>
);

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  const renderTabContent = (tabData) => {
    switch (tabData.id) {
      case "skills":
        return (
          <div className="grid bg-black md:grid-cols-2 gap-4">
            {tabData.content.map((category, idx) => (
              <div key={idx} className="p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-3 text-white">
                  {category.category}
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {category.skills.map((skill, sidx) => (
                    <div
                      key={sidx}
                      className="flex items-center text-sm text-gray-300"
                    >
                      {skill.icon}
                      <span className="ml-2">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        );
      case "education":
        return (
          <div className="space-y-4">
            {tabData.content.map((edu, idx) => (
              <div
                key={idx}
                className="flex items-center p-4 rounded-lg shadow-md"
              >
                {edu.icon}
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-white">
                    {edu.institution}
                  </h3>
                  <p className="text-gray-400">{edu.degree}</p>
                  <p className="text-sm text-gray-500">{edu.year}</p>
                </div>
              </div>
            ))}
          </div>
        );
      case "certifications":
        return (
          <div className="space-y-4">
            {tabData.content.map((cert, idx) => (
              <div
                key={idx}
                className="flex items-center p-4 rounded-lg shadow-md"
              >
                {cert.icon}
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-white">
                    {cert.name}
                  </h3>
                  <p className="text-gray-400">{cert.issuer}</p>
                  <p className="text-sm text-gray-500">{cert.date}</p>
                </div>
              </div>
            ))}
          </div>
        );
    }
  };

  return (
    <section className="text-white" id="about">
      <div className="container mx-auto md:grid md:grid-cols-2 gap-8 items-center py-16 px-4 xl:gap-16">
        <div className="top-24 self-start">
          {" "}
          {/* Added sticky container */}
          <Image
            src="/images/LinkedIn.jpeg"
            width={500}
            height={500}
            alt="Portrait of Daxil Vala"
            className="rounded-xl shadow-lg"
            objectPosition="top"
          />
        </div>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg text-gray-300 mb-8">
            My journey into tech began in an unlikely place: a bachelor&apos;s
            degree in Electrical and Electronics Engineering. However, along the
            way, I realized that my true passion lay not just in understanding
            hardware but in building software that could solve real-world
            problems at scale. This curiosity led me to explore programming,
            algorithms, and system design, ultimately steering me toward a
            career as a SDE. <br />
            When I&apos;m not engineering, I&apos;m probably hunting down
            hole-in-the-wall restaurants to try new cuisines (ask me about the
            best biryani in town!) or balancing out all that indulgence with
            evening runs. <br />
            If I&apos;m lucky, I&apos;ll bump into my neighbor&apos;s dog,
            who&apos;s become my unofficial running buddy who always demands the
            belly rubs I owe him. <br />
            P.S. I&apos;ve learned that debugging code and winning over shy dogs
            share a secret -- success hinges on patience, persistence, and most
            importantly snacks.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {TAB_DATA.map((tabItem) => (
              <TabButton
                key={tabItem.id}
                selectTab={() => handleTabChange(tabItem.id)}
                active={tab === tabItem.id}
                icon={tabItem.icon}
              >
                {tabItem.title}
              </TabButton>
            ))}
          </div>
          <div className="rounded-lg p-6 shadow-md">
            {renderTabContent(TAB_DATA.find((t) => t.id === tab))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

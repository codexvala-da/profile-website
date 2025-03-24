import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({
  imgUrl,
  title,
  description,
  gitUrl,
  previewUrl,
  skills = [],
}) => {
  const isExternalLink = (url) => {
    return url.startsWith("http") || url.startsWith("www");
  };

  const renderExternalLink = (url, children) => {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
      >
        {children}
      </a>
    );
  };

  return (
    <div className="bg-[#181818] rounded-xl shadow-lg">
      <div className="h-52 md:h-72 rounded-t-xl relative group overflow-hidden">
        <img
          src={imgUrl}
          alt={title}
          className="w-full h-full object-cover object-center"
        />
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818]/90 hidden group-hover:flex group-hover:bg-opacity-90 transition-all duration-500">
          {isExternalLink(gitUrl) ? (
            renderExternalLink(
              gitUrl,
              <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
            )
          ) : (
            <Link
              href={gitUrl}
              className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
            >
              <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
            </Link>
          )}

          {isExternalLink(previewUrl) ? (
            renderExternalLink(
              previewUrl,
              <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
            )
          ) : (
            <Link
              href={previewUrl}
              className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
            >
              <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
            </Link>
          )}
        </div>
      </div>
      <div className="text-white rounded-b-xl bg-[#181818] py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE] mb-4">{description}</p>

        {skills.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="text-xs bg-[#2D2D2D] text-[#ADB7BE] px-2 py-1 rounded-md"
              >
                {skill}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;

import React from "react";
import { Github } from "lucide-react";

type ProjectProps = {
  name: string;
  details: string;
  link: string;
  tools: string[];
};

const Project: React.FC<ProjectProps> = ({ name, details, link, tools }) => {
  return (
    <div className="flex flex-col bg-white p-4 w-full md:w-2/3 h-auto shadow transition-all duration-100 gap-4 border rounded-2xl justify-between self-center">
      <h1 className="font-kumbh text-lg md:text-2xl">{name}</h1>
      <p className="text-sm md:text-base text-zinc-700">{details}</p>
      <div className="flex flex-wrap gap-2">
        {tools.map((tool, index) => (
          <div
            key={index} // Added key for mapping
            className="rounded-xl bg-zinc-100 px-4 py-1 font-kumbh text-xs md:text-sm"
          >
            {tool}
          </div>
        ))}
      </div>
      <a
        href={link}
        className="rounded-3xl w-full md:w-28 flex justify-center items-center bg-white border border-black hover:shadow-lg transition-all duration-300"
      >
        <div className="flex flex-row items-center gap-2 p-1">
          <Github className="w-4" />
          <p className="font-kumbh text-sm">GitHub</p>
        </div>
      </a>
    </div>
  );
};

export default Project;

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
    <div className="flex flex-col bg-white p-2 w-2/3 h-48 shadow transition-all duration-100 gap-2 border rounded-2xl justify-around self-center min-w-[362px]">
      <h1 className="pl-1 font-kumbh text-2xl">{name}</h1>
      <p className="relative bottom-3 pl-1 h-1/6 text-zinc-700">{details}</p>
      <div className="flex flex-row text-xs gap-2">
        {tools.map((tool) => (
          <div className="rounded-xl bg-zinc-100 p-2 font-kumbh">{tool}</div>
        ))}
      </div>
      <a
        href="https://github.com/TDC28"
        className="rounded-3xl w-28 flex justify-around items-center bg-white border border-black hover:shadow-lg transition-all duration-300"
      >
        <div className="flex flex-row p-1 items-center">
          <Github className="mr-2 w-4" />
          <p className="font-kumbh text-sm">GitHub</p>
        </div>
      </a>
    </div>
  );
};

export default Project;

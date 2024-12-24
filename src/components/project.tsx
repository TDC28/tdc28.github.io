import React from "react";
import { ChevronRight } from "lucide-react";

type ProjectProps = {
  name: string;
  details: string;
  link: string;
};

const Project: React.FC<ProjectProps> = ({ name, details, link }) => {
  return (
    <a
      href={link}
      className="flex flex-col w-64 h-44 shadow hover:shadow-lg transition-all duration-100 gap-1"
    >
      <h1 className="font-kumbh text-xl">{name}</h1>
      <ChevronRight />
      <p>{details}</p>
    </a>
  );
};

export default Project;

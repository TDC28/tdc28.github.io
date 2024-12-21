import React from "react";

type JobProps = {
  name: string;
  role: string;
  start: string;
  end: string;
  location: string;
  details: string;
};

const Job: React.FC<JobProps> = ({
  name,
  role,
  start,
  end,
  location,
  details,
}) => {
  return (
    <div className="flex flex-row rounded-lg transition-all duration-200 p-2 w-full max-w-[700px] hover:bg-zinc-50">
      <div className="">
        <p className="relative top-1 min-w-36 text-sm font-light font-kumbh text-center">
          {start} - {end}
        </p>
      </div>
      <div className="">
        <h1 className="text-xl font-kumbh">
          {role} · {name}
        </h1>
        <p className="font-kumbh pt-1 pb-1 text-lg">{location}</p>
        <p className="text-md">{details}</p>
      </div>
    </div>
  );
};

export default Job;

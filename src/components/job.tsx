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
        <p className="relative top-[5px] md:top-1 right-1 md:right-0 min-w-28 md:min-w-36 text-xs md:text-sm font-light font-kumbh text-center">
          {start} - {end}
        </p>
      </div>
      <div className="">
        <h1 className="text-lg md:text-xl font-kumbh">
          {role} · {name}
        </h1>
        <p className="font-kumbh pt-1 pb-1 text-md md:text-lg">{location}</p>
        <p className="text-sm md:text-md">{details}</p>
      </div>
    </div>
  );
};

export default Job;

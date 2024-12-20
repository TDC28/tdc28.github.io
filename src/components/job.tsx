import React from "react";

type JobProps = {
  name: string;
  role: string;
  start: string;
  end: string;
  location: string;
  details: string;
  image: string;
};

const Job: React.FC<JobProps> = ({
  name,
  role,
  start,
  end,
  location,
  details,
  image,
}) => {
  return (
    <div className="border border-black p-2 rounded-xl w-[400px] h-60 hover:shadow-xl transition-all duration-300 bg-zinc-100">
      <div className="flex flex-row justify-between items-center -mt-1">
        <h1 className="font-kumbh text-2xl">{role}</h1>
        <img src={image} alt="" className="h-10" />
      </div>
      <p className="font-kumbh">{name}</p>
      <p className="font-kumbh">{location}</p>
      <p className="font-semibold pt-1 pb-1">
        {start} - {end}
      </p>
      <p>{details}</p>
    </div>
  );
};

export default Job;

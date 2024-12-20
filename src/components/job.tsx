import React from "react";

type JobProps = {
  name: string;
  role: string;
  location: string;
  start: string;
  end: string;
  details: string;
  image: string;
};

const Job: React.FC<JobProps> = ({
  name,
  role,
  location,
  start,
  end,
  details,
  image,
}) => {
  return (
    <div className="border p-2 rounded-xl w-96 h-60 hover:shadow-xl transition-all duration-300 bg-zinc-100">
      <div className="flex flex-row justify-between">
        <h1 className="font-kumbh text-2xl">{role}</h1>
        <img src={image} alt="" className="h-9" />
      </div>
      <p className="pt-2 pb-2 tracking-wide">
        {start} - {end}
      </p>
      <p className="tracking-wide">{name}</p>
      <p className="tracking-wide">{location}</p>
    </div>
  );
};

export default Job;

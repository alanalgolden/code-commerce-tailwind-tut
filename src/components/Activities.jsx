import React from "react";

const Activities = () => {
  return (
    <div className="m-auto mt-[-75px] w-full max-w-[1140px] md:flex">
      <div className="relative p-4">
        <h3 className="absolute left-[50%] top-[50%] z-10 translate-x-[-50%] translate-y-[-50%] text-2xl font-bold text-white">
          Resorts
        </h3>
        <img
          className="relative h-full w-full border-4 border-white object-cover shadow-lg"
          src="./beachhuts.png"
          alt="resort"
        />
      </div>
      <div className="relative p-4">
        <h3 className="absolute left-[50%] top-[50%] z-10 translate-x-[-50%] translate-y-[-50%] text-2xl font-bold text-white">
          Cruises
        </h3>
        <img
          className="relative h-full w-full border-4 border-white object-cover shadow-lg"
          src="./cruiseship.png"
          alt="cruise"
        />
      </div>
      <div className="relative p-4">
        <h3 className="absolute left-[50%] top-[50%] z-10 translate-x-[-50%] translate-y-[-50%] text-2xl font-bold text-white">
          Adventures
        </h3>
        <img
          className="relative h-full w-full border-4 border-white object-cover shadow-lg"
          src="./scubadive.png"
          alt="adventure"
        />
      </div>
    </div>
  );
};

export default Activities;

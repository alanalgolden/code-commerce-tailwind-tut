import React from "react";

const Hero = () => {
  return (
    <div className="h-[90vh] w-full">
      <img
        src="./tropicalbeach.png"
        alt="image"
        className="h-full w-full object-cover"
      />
      <div className="m-auto max-w-[1140px]">
        <div className="md:-[50%] absolute top-[40%] flex  w-full max-w-[600px] flex-col rounded-xl border-2 border-black/0 bg-black/30 p-4 text-white">
          <h1 className="text-4xl font-bold">Find Your Special Trip</h1>
          <h2 className="py-4 text-4xl italic">With Weekaway</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. A dolor,
            veniam harum officiis atque animi nesciunt numquam enim illo?
            Placeat dolorem aliquam blanditiis quo repellat asperiores
            consectetur iusto eveniet vel?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;

import React from "react";

const Gallery = () => {
  return (
    <div id="gallery" className="m-auto w-full max-w-[1140px] px-4 py-16">
      <h2 className="p-4 text-center text-gray-700">Gallery</h2>
      <div className="grid gap-4 sm:grid-cols-5">
        <div className="col-span-2 row-span-4 sm:col-span-3">
          <img
            className="h-full w-full object-cover"
            src="./whiteandorangehouse.png"
            alt="house"
          />
        </div>
        <div>
          <img
            className="h-full w-full object-cover"
            src="./surfboardontropicalbeach.png"
            alt="house"
          />
        </div>
        <div>
          <img
            className="h-full w-full object-cover"
            src="./cruiseshipsunset.png"
            alt="house"
          />
        </div>
        <div>
          <img
            className="h-full w-full object-cover"
            src="./tropicalconservatory.png"
            alt="house"
          />
        </div>
        <div>
          <img
            className="h-full w-full object-cover"
            src="./luxurybeachhouse.png"
            alt="house"
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;

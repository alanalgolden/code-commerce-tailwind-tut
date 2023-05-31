import React from "react";

const Booking = () => {
  return (
    <div id="deals" className="m-auto w-full max-w-[1140px] p-4">
      <form className="w-full items-center lg:flex lg:justify-between">
        <div className="my-2 flex flex-col py-2">
          <label htmlFor="from">Destination</label>
          <select className="rounded-md border p-2 md:w-full lg:w-[300px]">
            <option>Grande Antique</option>
            <option>Key West</option>
            <option>Maldives</option>
            <option>Cozumel</option>
          </select>
        </div>
        <div className="flex w-full">
          <div className="my-2 flex w-full flex-col p-2 lg:max-w-[250px]">
            <label>Check-In</label>
            <input className="rounded-md border p-2" type="date" />
          </div>
          <div className="my-2 flex w-full flex-col p-2 lg:max-w-[250px]">
            <label>Check-Out</label>
            <input className="rounded-md border p-2" type="date" />
          </div>
        </div>
        <div className="my-2 flex w-full flex-col p-2">
          <label>Search</label>
          <button className="w-full">Rates & Availabilities</button>
        </div>
      </form>
    </div>
  );
};

export default Booking;

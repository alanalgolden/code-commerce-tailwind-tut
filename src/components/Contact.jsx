import React from "react";

const Contact = () => {
  return (
    <div id="contact" class="m-auto w-full max-w-[1140px] px-4 py-16">
      {/* Should have made a container component for this */}
      <h2 className="text-center text-gray-700">Send us a message</h2>
      <p className="py-2 text-center text-gray-700">We're standing by!</p>

      <div className="grid md:grid-cols-2">
        <img
          className="max-h-[500px] w-full object-cover p-2 md:h-full"
          src="./tropicalbeacharial.png"
          alt="tropical beach"
        />
        <form>
          <div className="grid grid-cols-2">
            <input className="m-2 border p-2" type="text" placeholder="First" />
            <input className="m-2 border p-2" type="text" placeholder="Last" />
            <input
              className="m-2 border p-2"
              type="email"
              placeholder="Email"
            />
            <input className="m-2 border p-2" type="tel" placeholder="Phone" />
            <input
              className="col-span-2 m-2 border p-2"
              type="text"
              placeholder="Address"
            />
            <textarea
              className="col-span-2 m-2 border p-2"
              cols="30"
              rows="10"
            ></textarea>
            <button className="col-span-2 m-2">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;

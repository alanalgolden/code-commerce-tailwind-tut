import React from "react";
import { BsChatSquareDots } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="m-auto w-full max-w-[1140px] border-t-4 py-8">
      <div className="m-auto flex items-center justify-center">
        <BsChatSquareDots
          size={30}
          className="mr-2 text-[var(--primary-dark)]"
        />
        <h1 className="text-xl font-bold text-gray-700">WEEKAWAY</h1>
      </div>
    </div>
  );
};

export default Footer;

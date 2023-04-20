import React from "react";

const Footer = () => {
  return (
    <div className="bg-black">
      <div className="flex items-center justify-center px-5 py-5">
        <h2 className="text-white font-semibold text-lg">Connect</h2>
      </div>
      <hr />
      <div className="flex items-center justify-between px-5 py-5">
        <p className="text-white">All rights reserved</p>
        <div className="flex items-center justify-center">
          <p className="text-white">twitter</p>
          <p className="text-white">linked in</p>
          <p className="text-white">discord</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

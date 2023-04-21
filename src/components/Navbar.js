import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="bg-[#15171A]">
      {/* Top Navbar */}
      <div className="flex items-center justify-between px-5 py-5">
        <div></div>
        <Image src="/NodeShark Default.png" alt="logo" width={50} height={50} />
        <button className="text-white">Sign in</button>
      </div>
      <div className="bg-slate-400 w-full h-px"></div>
      {/* Links Navbar */}
      <div className="flex items-center justify-center px-5 py-5 shadow-xl">
        <ul className="flex items-center justify-center">
          <li className="text-white list-none mx-5">Home</li>
          <li className="text-white list-none mx-5">About us</li>
          <li className="text-white list-none mx-5">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

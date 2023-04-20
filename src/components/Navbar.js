import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="bg-black">
      {/* Top Navbar */}
      <div className="flex items-center justify-between px-5 py-5">
        <Image src="/NodeShark Default.png" alt="logo" width={50} height={50} />
        <button className="text-white">Sign in</button>
      </div>
      <hr />
      {/* Links Navbar */}
      <div className="flex items-center justify-center px-5 py-5">
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

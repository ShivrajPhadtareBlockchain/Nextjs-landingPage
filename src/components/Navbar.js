import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="bg-[#15171A]">
      {/* Top Navbar */}
      <div className="flex items-center justify-between px-5 py-5">
        <div></div>
        <Image src="/NodeShark Default.png" alt="logo" width={50} height={50} />
        <button className="text-slate-400 hover:text-white font-bold text-xl">Sign in</button>
      </div>
      <div className="bg-slate-400 w-full h-px"></div>
      {/* Links Navbar */}
      <div className="flex items-center justify-center px-5 py-5 shadow-xl">
        <ul className="flex items-center justify-center">
          <Link href="/">
            <li className="text-slate-400 hover:text-white list-none mx-5 text-lg">Home</li>
          </Link>
          <Link href="/about">
            <li className="text-slate-400 hover:text-white list-none mx-5 text-lg">About us</li>
          </Link>
          <Link href="/contact">
            <li className="text-slate-400 hover:text-white list-none mx-5 text-lg">Contact</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

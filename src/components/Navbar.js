import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React from "react";


const inter = Inter({ subsets: ["latin"] });

const Navbar = () => {
  return (
    <div className="bg-[#15171A]">
      {/* Top Navbar */}
      <div className="flex items-center justify-between px-5 py-5 mx-36">
        <div className="mr-36">
          <Image src="/search.svg" alt="search_icon" width={20} height={20} />
        </div>
        <div className="">
          <Image
            src="/NodeShark Default.png"
            alt="logo"
            width={40}
            height={40}
          />
        </div>
        <div className="">
          <button className={`hover:text-[#ccc] text-white text-base font- mr-2`}>
            Sign in
          </button>
          <button className={`${inter.className} text-[#15171A] bg-white rounded-full  px-4 py-1 font-medium hover:bg-[#f6f6f6] ml-2`}>
            Subscribe
          </button>
        </div>
      </div>
      <div className="bg-[#ffffff33] w-full h-px"></div>
      {/* Links Navbar */}
      <div className="flex items-center justify-center py-4 shadow-xl">
        <ul className="flex items-center justify-center">
          <Link href="/">
            <li className="hover:text-[#ccc] text-white list-none mx-5 text-sm font-medium">
              Home
            </li>
          </Link>
          <Link href="/#about">
            <li className="hover:text-[#ccc] text-white list-none mx-5 text-sm font-medium">
              About us
            </li>
          </Link>
          <Link href="/#contact">
            <li className="hover:text-[#ccc] text-white list-none mx-5 text-sm font-medium">
              Contact
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

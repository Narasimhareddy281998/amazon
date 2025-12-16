"use client";
import React from "react";
import Image from "next/image";
import { HiChevronDown } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";

const SellerNavbar = () => {
  return (
    <nav className="w-full bg-white shadow-sm py-4 px-8 flex items-center justify-between">
      
      {/* LEFT EMPTY SPACE (so Amazon moves to center) */}
      <div className="w-1/7"></div>

      {/* CENTER SECTION → Amazon + Menu */}
      <div className="w-1/7 flex items-first justify-end gap-10">

        {/* AMAZON LOGO - EXACT CENTER */}
        <Image
          src="/amazon.png"
          alt="amazon"
          width={130}
          height={40}
          className="object-contain"
        />

        {/* MENU ITEMS */}
        <ul className="flex items-center gap-6 text-gray-900 font-medium">
          <li className="flex items-center gap-1 cursor-pointer">
            Start <HiChevronDown />
          </li>
          <li className="flex items-center gap-1 cursor-pointer">
            Grow <HiChevronDown />
          </li>
          <li className="flex items-center gap-1 cursor-pointer">
            Pricing <HiChevronDown />
          </li>
          <li className="flex items-center gap-1 cursor-pointer">
            Resources <HiChevronDown />
          </li>
        </ul>

      </div>

      {/* RIGHT SECTION → EXACT 1/3 POSITION */}
      <div className="w-1/3 flex items-center gap-6 justify-center">

        {/* Start Selling button (1/3 area) */}
        <button className="bg-orange-500 text-white font-semibold px-6 py-2 rounded-full">
          Start Selling
        </button>

        <FiSearch size={22} className="text-gray-500 cursor-pointer" />
      </div>

    </nav>
  );
};

export default SellerNavbar;

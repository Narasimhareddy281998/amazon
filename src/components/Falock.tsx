"use client";
import React from "react";
import { FaLock } from "react-icons/fa";

const SellerLoginBar = () => {
  return (
    <div className="w-full bg-[#f5f3ef] py-3 px-6 flex justify-end">
      <div className="flex items-center gap-2 text-gray-800 font-semibold pr-[12%]">
        <FaLock size={14} />
        <span>Seller Login</span>
      </div>
    </div>
  );
};

export default SellerLoginBar;

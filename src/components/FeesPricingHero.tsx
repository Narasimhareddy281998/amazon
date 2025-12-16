"use client";

import React from "react";
import Image from "next/image";

const FeesPricingHero: React.FC = () => {
  return (
    <section className="w-full h-auto bg-[#f5f3ef] py-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-0 flex flex-col lg:flex-row items-center lg:items-start gap-12">

        {/* LEFT SIDE TEXT */}
        <div className="flex-1">
          {/* Breadcrumb */}
          <p className="text-sm text-gray-500 mb-4">
            <span className="underline cursor-pointer">Amazon Seller</span>
            <span> &gt; Fees and Pricing</span>
          </p>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#111827] leading-tight mb-6">
            Fees and Pricing for <br />
            Amazon.in sellers
          </h1>

          {/* Know more link */}
          <button className="flex items-center gap-2 text-base font-semibold text-gray-800 mb-6">
            Know more
            <span className="text-xl">&rarr;</span>
          </button>

          {/* Start Selling button */}
          <button className="bg-[#ff7a00] text-black font-semibold text-lg px-10 py-4 rounded-full mb-6 hover:bg-[#ff8a1a] transition">
            Start Selling
          </button>

          {/* Disclaimer */}
          <p className="text-sm text-gray-700 underline cursor-pointer">
            Disclaimer
          </p>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md aspect-square overflow-hidden">
            <Image
              src="/img1.webp" 
              alt="Amazon Sellers"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeesPricingHero;

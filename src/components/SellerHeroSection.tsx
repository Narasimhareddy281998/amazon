"use client";

import React from "react";
import Image from "next/image";

const StartSellerJourney: React.FC = () => {
  return (
    <section className="w-full bg-[#f5f3ef] pt-16 pb-0">
      {/* HERO */}
      <div className="max-w-6xl mx-auto px-6 lg:px-4 flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Left: Text */}
        <div className="max-w-xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight mb-4">
            Start your Seller Journey
          </h1>

          <p className="text-base md:text-lg text-slate-800 mb-8">
            Join our family of 12 Lakh+ businesses who sell on Amazon.in
          </p>

          <button className="inline-flex items-center justify-center rounded-full bg-[#ff8100] px-10 py-4 text-base md:text-lg font-semibold text-white shadow-md hover:bg-[#ff6a00] transition">
            Start Selling
          </button>

          <p className="mt-3 text-xs md:text-sm text-slate-700">
            It takes only 15 minutes to setup your account
          </p>
        </div>

        {/* Right: Illustration (replace src with your image) */}
        <div className="w-full lg:w-[420px] xl:w-[480px]">
          <Image
            src="/image1.png" // put your image in public/ folder
            alt="Amazon seller journey illustration"
            width={800}
            height={600}
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* DISCLAIMER ROW */}
      <div className="max-w-6xl mx-auto px-6 lg:px-4 mt-16 mb-8 flex items-center justify-center">
        <button className="flex items-center gap-1 text-sm font-semibold text-slate-800">
          Disclaimer <span className="text-lg">+</span>
        </button>
      </div>

      {/* BOTTOM FOOTER STRIP */}
      <footer className="w-full bg-[#111922] text-slate-200 py-6 mt-2">
        <div className="max-w-6xl mx-auto px-6 lg:px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-xs md:text-sm">
          {/* Logo */}
          <div className="flex items-center gap-2">
            {/* You can replace this with an Image logo */}
            <span className="text-lg font-bold">amazon.in</span>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center gap-4 justify-center">
            <button className="hover:underline">Sitemap</button>
            <button className="hover:underline">Confidentiality Policy</button>
            <button className="hover:underline">Terms of Use</button>
            <button className="hover:underline">Cookies</button>
          </div>

          {/* Copyright */}
          <p className="text-center md:text-right text-[11px] md:text-xs">
            © 2024 Amazon.com, Inc. or its affiliates. All rights reserved
          </p>
        </div>
      </footer>
    </section>
  );
};

export default StartSellerJourney;

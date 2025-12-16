"use client";

import React from "react";

const feeData = [
  {
    title: "REFERRAL FEES/ SELL ON AMAZON FEES",
    subtitle: "Product category based fees",
    desc: "Starts at 0%, varies based on product category",
  },
  {
    title: "CLOSING FEES",
    subtitle: "Based on price of item sold",
    desc: "Starts at ₹ 5, varies by product price range and fulfillment channel",
  },
  {
    title: "WEIGHT HANDLING FEES",
    subtitle: "Fees for Shipping/Delivery",
    desc: "Starts at Rs. 29 per item shipped, varies by item volume & distance",
  },
  {
    title: "OTHER FEES",
    subtitle: "Based on program/service",
    desc: "Only applicable for certain fulfillment channels or optional program/services subscribed to",
  },
];

const FeeFactors: React.FC = () => {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#111827] mb-12">
          Factors Influencing Seller Fees and Pricing on Amazon.in
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {feeData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-[0_4px_25px_rgba(0,0,0,0.08)] hover:shadow-lg transition"
            >
              <h3 className="text-sm font-bold text-gray-900 mb-3 leading-snug">
                {item.title}
              </h3>

              <h4 className="text-lg font-bold text-gray-900 mb-2">
                {item.subtitle}
              </h4>

              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default FeeFactors;




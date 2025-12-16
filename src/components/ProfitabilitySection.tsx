"use client";

import React from "react";

const ProfitabilitySection: React.FC = () => {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-6xl mx-auto px-4 space-y-6">
        {/* Main heading */}
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#111827]">
          Calculating Profitability for Sellers on Amazon.in
        </h2>

        {/* Cream card */}
        <div className="bg-[#f7f3ea] rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] px-8 py-8 md:px-10 md:py-10">
          {/* Card heading */}
          <h3 className="text-2xl md:text-3xl font-extrabold text-teal-700 mb-6">
            How to calculate profit?
          </h3>

          <div className="space-y-3 text-sm md:text-base text-gray-900">
            <p>
              <span className="font-semibold">Step 1:</span> Calculate the{" "}
              <a href="#" className="underline">
                referral fees
              </a>{" "}
              applicable
            </p>

            <p>
              <span className="font-semibold">Step 2:</span> Find the{" "}
              <a href="#" className="underline">
                closing fees
              </a>{" "}
              applicable
            </p>

            <p>
              <span className="font-semibold">Step 3:</span> Calculate the{" "}
              <a href="#" className="underline">
                shipping fees
              </a>{" "}
              applicable, or if you are using Self-Ship, check the cost of
              shipping
            </p>

            <p>
              <span className="font-semibold">Step 4:</span> Calculate Total
              Fees = Referral Fees + Closing Fees + Shipping Fees + Other fee
              (if applicable)
            </p>

            <p>
              <span className="font-semibold">Step 5:</span> Profit = Item Sale
              price - cost of product - Total Fees
            </p>
          </div>
        </div>

        {/* Note */}
        <p className="text-xs md:text-sm text-gray-700 italic">
          Please note that the fees mentioned are indicative. The final fee you
          will be subject to will be dependent on multiple factors such as
          product category, size, weight, volumetric weight, additional services
          availed, etc.
        </p>
      </div>
    </section>
  );
};

export default ProfitabilitySection;

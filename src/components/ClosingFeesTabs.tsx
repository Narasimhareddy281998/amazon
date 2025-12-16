"use client";

import React, { useState } from "react";
import { FiInfo } from "react-icons/fi";

const tabs = ["FC", "Easy Ship", "Self Ship", "Seller Flex"] as const;
type TabType = (typeof tabs)[number];

const fcRows = [
  { range: "₹ 0 - 300", all: "₹ 26", exception: "₹ 13*" },
  { range: "₹ 301 - 500", all: "₹ 21", exception: "₹ 13**" },
  { range: "₹ 501 - 1000", all: "₹ 26", exception: "₹ 26" },
  { range: "Above ₹ 1000", all: "₹ 51", exception: "₹ 71***" },
];

 const ClosingFeesTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>("FC");

  const renderContent = () => {
    if (activeTab !== "FC") {
      return (
        <div className="p-6 text-sm text-gray-600">
          Add {activeTab} closing fee table data here.
        </div>
      );
    }
  
    return (
      <div className="px-6 pb-6 pt-4">
        {/* table header row */}
        <div className="grid grid-cols-3 text-sm font-semibold text-gray-800 mb-3">
          <span>Item Price Range (INR)</span>
          <span className="text-center">All Categories</span>
          <span className="text-right">Categories with exception</span>
        </div>

        <hr className="border-gray-300 mb-2" />

        {/* table body */}
        <div className="space-y-2 text-sm">
          {fcRows.map((row, idx) => (
            <div
              key={idx}
              className="grid grid-cols-3 items-center py-2 border-b last:border-b-0 border-gray-100"
            >
              <span>{row.range}</span>

              <span className="text-center">{row.all}</span>

              <span className="flex items-center justify-end gap-1 font-semibold text-teal-700">
                {row.exception}
                {(row.exception.includes("*") || row.exception.includes("**")) && (
                  <FiInfo className="text-gray-500" size={14} />
                )}
              </span>
            </div>
          ))}
        </div>

        {/* notes */}
        <div className="mt-6 space-y-1 text-xs text-gray-800">
          <p>
            *Categories with FC Closing fee <span className="font-semibold">₹ 13</span> for
            Price range <span className="font-semibold">₹0–300</span> ↑
          </p>
          <p>
            **Categories with FC Closing fee <span className="font-semibold">₹ 13</span> for
            Price range <span className="font-semibold">₹301–500</span> ↑
          </p>
          <p>
            *, **, *** click{" "}
            <a
              href="#"
              className="underline font-semibold"
            >
              here
            </a>{" "}
            to view exception categories (Seller Central link)
          </p>
        </div>
      </div>
    );
  };

  return (
    <section className="w-full bg-white py-10">
      <div className="max-w-5xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.1)] overflow-hidden border border-gray-100">
          {/* Tabs */}
          <div className="flex bg-[#f4f0e9] border-b border-gray-300">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 text-sm font-semibold border-r last:border-r-0 transition
                  ${
                    activeTab === tab
                      ? "bg-[#111827] text-white"
                      : "text-gray-800 hover:bg-gray-100"
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Content */}
          {renderContent()}
        </div>
      </div>
    </section>
  );
};

export default ClosingFeesTabs;

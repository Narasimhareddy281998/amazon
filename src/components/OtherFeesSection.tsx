"use client";

import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const otherFees = [
  "Pick & Pack Fee (FC Only)",
  "Storage Fee (FC Only)",
  "FC Removal Fees (FC Only)",
];

const OtherFeesSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleRow = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-6xl mx-auto px-4 space-y-6">
        {/* Heading with blue bar */}
        <div className="flex items-start gap-3">
          <span className="w-1.5 h-8 rounded-full bg-[#0075c0] mt-1" />
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#111827]">
            Other Fees
          </h2>
        </div>

        {/* Description */}
        <p className="text-sm md:text-base text-gray-700 leading-relaxed">
          Most Amazon orders are subject to the above 3 fees. However, you may
          be subject to additional fees based on the Fulfillment Channel,
          program or service you are using. Below are some of the fees.
        </p>

        {/* Accordion box */}
        <div className="bg-white rounded-2xl shadow-[0_10px_25px_rgba(0,0,0,0.12)] border border-gray-200 overflow-hidden">
          {otherFees.map((label, index) => (
            <div key={label} className="border-b last:border-b-0 border-gray-300">
              <button
                onClick={() => toggleRow(index)}
                className="w-full flex items-center justify-between px-6 py-4 text-sm md:text-base font-semibold text-gray-900 bg-[#f7f3ea] hover:bg-[#f1ece1] transition"
              >
                <span>{label}</span>
                {openIndex === index ? (
                  <FiMinus size={18} className="text-gray-800" />
                ) : (
                  <FiPlus size={18} className="text-gray-800" />
                )}
              </button>

              {openIndex === index && (
                <div className="px-6 pb-4 pt-2 text-xs md:text-sm text-gray-700 bg-[#fdfaf4]">
                  Put description / detailed breakdown for{" "}
                  <span className="font-semibold">{label}</span> here. You can
                  replace this placeholder with actual tables or text.
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Notes */}
        <div className="space-y-2 text-xs md:text-sm text-gray-800">
          <p className="italic">
            <span className="font-semibold">NOTE 1:</span> All the fee types
            listed above are displayed excluding Goods and Services Tax (GST).
            We will apply 18% (eighteen percent) GST to all fees displayed
            above.
          </p>
          <p className="italic">
            <span className="font-semibold">NOTE 2:</span> When you sign up for{" "}
            <a href="#" className="underline">
              programs
            </a>{" "}
            like Amazon Launchpad or Amazon Business Advisory, you may be
            charged for the services provided over and above the fees discussed
            here.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OtherFeesSection;

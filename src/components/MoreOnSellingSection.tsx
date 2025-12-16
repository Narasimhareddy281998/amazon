"use client";
import React from "react";

const MoreOnSellingSection = () => {
  const cardClass =
    "block rounded-xl bg-white shadow-[0_6px_25px_rgba(0,0,0,0.08)] px-8 py-8 transition-transform hover:-translate-y-1 cursor-pointer";

  return (
    <section className="w-full bg-[#faf8f3] py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Top heading */}
        <h2 className="text-center text-sm text-gray-700 mb-8">
          More on selling on Amazon.in:
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className={cardClass}>
            <div className="flex items-center justify-between gap-4">
              <p className="text-base font-medium text-gray-900 leading-snug">
                How to register as a seller
              </p>
              <span className="text-xl">→</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className={cardClass}>
            <div className="flex items-center justify-between gap-4">
              <p className="text-base font-medium text-gray-900 leading-snug">
                Benefits of selling on Amazon.in
              </p>
              <span className="text-xl">→</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className={cardClass}>
            <div className="flex items-center justify-between gap-4">
              <p className="text-base font-medium text-gray-900 leading-snug">
                Shipping methods for sellers
              </p>
              <span className="text-xl">→</span>
            </div>
          </div>

          {/* Card 4 */}
          <div className={cardClass}>
            <div className="flex items-center justify-between gap-4">
              <p className="text-base font-medium text-gray-900 leading-snug">
                Listing a product on Amazon.in
              </p>
              <span className="text-xl">→</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoreOnSellingSection;

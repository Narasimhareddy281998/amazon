"use client";

import React from "react";

const ShippingFeesSection: React.FC = () => {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* TOP HEADING + BLUE BAR */}
        <div className="flex items-start gap-3 mb-4">
          <span className="w-1.5 h-8 rounded-full bg-[#0075c0] mt-1" />
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#111827]">
            Weight Handling Fees (Shipping Fees) Calculation
          </h2>
        </div>

        {/* DESCRIPTION */}
        <p className="text-sm md:text-base text-gray-700 mb-8 leading-relaxed">
          If you use Easy Ship or Fulfillment by Amazon (FC), Amazon will
          deliver your products to the customer and charge you a fee.{" "}
          <span className="font-semibold">
            (If you are choosing to Self-Ship, you will have to bear the cost of
            shipping
          </span>{" "}
          and deliver through 3rd party courier service/own delivery agents).
        </p>

        {/* CREAM CARD */}
        <div className="bg-[#f7f3ea] rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] px-8 py-8 md:px-10 md:py-10">
          {/* Card Heading */}
          <h3 className="text-2xl md:text-3xl font-extrabold text-teal-700 mb-4">
            How to calculate Shipping Fees?
          </h3>

          {/* FC & Easy Ship Shipping Fees */}
          <div className="space-y-3 mb-6">
            <h4 className="text-lg md:text-xl font-extrabold text-gray-900">
              FC &amp; Easy Ship Shipping Fees
            </h4>

            <p className="text-sm md:text-base text-gray-800">
              Total Shipping Fees = Fees based on item weight (refer size
              guidelines below) and distance (refer shipping regions below)
            </p>

            <p className="text-sm md:text-base text-gray-800">
              <span className="font-semibold">Example 1:</span> if an item
              (containing a book) weighing 700 gms is shipped from Delhi to
              Chandigarh (same region, but different city, i.e. Regional
              shipping) through FC then Shipping or Weight handling Fees =
              ₹ 54
            </p>

            <p className="text-sm md:text-base text-gray-800">
              <span className="font-semibold">Example 2:</span> If an item
              weighing 3.5 kg (containing an electronic item) is shipped by Easy
              Ship, then Flat Shipping fees = ₹ 122 + (₹ 34 + ₹17) = ₹ 173
            </p>

            <p className="text-sm md:text-base text-gray-800">
              <span className="font-semibold">Example 3:</span> if an item
              weighing 19 kg (containing a chimney, which is a Heavy and Bulky
              item) is shipped from a Bangalore warehouse to a customer address
              in the same city (Local shipping), using Easy Ship, then shipping
              fees = ₹192 + (₹35×7) = ₹ 227
            </p>
          </div>

          {/* Self Ship Fees */}
          <div className="space-y-2">
            <h4 className="text-lg md:text-xl font-extrabold text-gray-900">
              Self Ship Fees
            </h4>
            <p className="text-sm md:text-base text-gray-800">
              For Self-ship, there is no shipping fees levied by Amazon.in as
              you will have to take care of delivery yourself or with the help
              of a courier partner, who you will pay directly for the cost of
              delivery.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShippingFeesSection;

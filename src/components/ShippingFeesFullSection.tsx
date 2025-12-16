"use client";

import React, { useState } from "react";
import { FiPlus, FiMinus, FiArrowUpRight } from "react-icons/fi";

const sizeRows = [
  "For FC (Fulfilment Centre)",
  "For IXD (Inbound Cross Dock)",
  "For ES (Easy Ship)",
  "For SF (Seller Flex)",
];

const ShippingFeesFullSection: React.FC = () => {
  const [isSizeOpen, setIsSizeOpen] = useState<boolean>(true);
  const [openRow, setOpenRow] = useState<number | null>(null);

  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-6xl mx-auto px-4 space-y-10">
        {/* ================= TOP HEADING ================= */}
        <div>
          <div className="flex items-start gap-3 mb-4">
            <span className="w-1.5 h-8 rounded-full bg-[#0075c0] mt-1" />
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#111827]">
              Weight Handling Fees (Shipping Fees) Calculation
            </h2>
          </div>

          <p className="text-sm md:text-base text-gray-700 leading-relaxed">
            If you use Easy Ship or Fulfillment by Amazon (FC), Amazon will
            deliver your products to the customer and charge you a fee.{" "}
            <span className="font-semibold">
              (If you are choosing to Self-Ship, you will have to bear the cost
              of shipping
            </span>{" "}
            and deliver through 3rd party courier service/own delivery agents).
          </p>
        </div>

        {/* ================= MAIN SHIPPING FEES CARD ================= */}
        <div className="bg-[#f7f3ea] rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] px-8 py-8 md:px-10 md:py-10">
          <h3 className="text-2xl md:text-3xl font-extrabold text-teal-700 mb-4">
            How to calculate Shipping Fees?
          </h3>

          {/* FC & Easy Ship */}
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
              shipping) through FC then Shipping or Weight handling Fees = ₹ 54
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

          {/* Self Ship */}
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

        {/* ================= DISTANCE BULLETS ================= */}
        <div className="space-y-3 text-sm md:text-base text-gray-800">
          <p>Different fee rates are applicable based on distance:</p>

          <ul className="list-disc pl-6 space-y-1">
            <li>
              <span className="font-semibold">Local rate</span> will be
              applicable where the pickup and delivery happen in the same city
              i.e. intra-city pickup and delivery.
            </li>
            <li>
              <span className="font-semibold">Regional zone</span> consists of
              four regions.{" "}
              <span className="font-semibold">Regional rate</span> will apply if
              shipment moves within the same region and the service is not
              within the same city.
            </li>
            <li>
              <span className="font-semibold">National rate</span> will apply if
              shipment moves across regions.
            </li>
          </ul>

          <button className="inline-flex items-center gap-1 mt-1 text-sm font-semibold text-gray-900 underline decoration-1">
            View the shipping regions
            <FiArrowUpRight size={14} />
          </button>
        </div>

        {/* ================= SIZE GUIDELINES / REVISED FEES ================= */}
        <div className="space-y-4">
          <p className="text-sm md:text-base text-gray-800">
            The product size classification depends on the product weight and
            length, width &amp; height once packed:
          </p>

          {/* Size Guidelines Accordion */}
          <div className="bg-white rounded-2xl shadow-[0_10px_25px_rgba(0,0,0,0.12)] overflow-hidden border border-gray-200">
            {/* Size Guidelines header (accordion toggle) */}
            <button
              onClick={() => setIsSizeOpen((prev) => !prev)}
              className="w-full flex items-center justify-between px-6 py-4 text-sm font-semibold text-gray-900 bg-[#f5f1e9]"
            >
              <span>Size Guidelines</span>
              {isSizeOpen ? (
                <FiMinus size={18} className="text-gray-700" />
              ) : (
                <FiPlus size={18} className="text-gray-700" />
              )}
            </button>

            {isSizeOpen && (
              <div className="bg-[#f7f3ea] px-6 py-6">
                <h4 className="text-lg md:text-xl font-extrabold text-gray-900 mb-4">
                  Revised Weight Handling Fees
                </h4>

                <div className="divide-y divide-gray-300">
                  {sizeRows.map((label, index) => (
                    <div key={label}>
                      <button
                        onClick={() =>
                          setOpenRow(openRow === index ? null : index)
                        }
                        className="w-full flex items-center justify-between px-2 py-4 text-sm md:text-base font-semibold text-gray-900"
                      >
                        <span>{label}</span>
                        {openRow === index ? (
                          <FiMinus size={18} className="text-gray-700" />
                        ) : (
                          <FiPlus size={18} className="text-gray-700" />
                        )}
                      </button>

                      {openRow === index && (
                        <div className="px-2 pb-4 text-xs md:text-sm text-gray-700">
                          Put detailed weight handling fee table for{" "}
                          <span className="font-semibold">{label}</span> here.
                          (You can replace this text with actual rows/values
                          later.)
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ================= NOTE & LINK ================= */}
        <div className="space-y-2 text-xs md:text-sm text-gray-800">
          <p>
            <span className="font-semibold">NOTE:</span> These fee rates are
            applicable for new sellers who will join the &quot;Standard&quot;
            level in the Amazon STEP program. As sellers move up levels, they
            will be able to unlock multiple benefits including fee waivers,
            account management, faster disbursement cycles &amp; more.
          </p>

          <a href="#" className="underline font-semibold">
            Learn more about Amazon STEP
          </a>
        </div>
      </div>
    </section>
  );
};

export default ShippingFeesFullSection;

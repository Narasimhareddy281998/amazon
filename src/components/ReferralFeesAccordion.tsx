"use client";

import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const categories = [
  "Automotive, Car & Accessories",
  "Baby Products, Toys & Education",
  "Books, Music, Movies, Video Games, Entertainment",
  "Industrial, Medical, Scientific Supplies & Office Products",
  "Clothing, Fashion, Fashion Accessories, Jewellery, Luggage, Shoes",
  "Electronics (Camera, Mobile, PC, Wireless) & Accessories",
  "Grocery, Food & Pet Supplies",
  "Health, Beauty, Personal Care & Personal Care Appliances",
  "Home, Décor, Home Improvement, Furniture, Outdoor, Lawn & Garden",
  "Kitchen, Large & Small Appliances",
  "Sports, Gym & Sporting Equipment",
  "Others",
];

export const ReferralFeesAccordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">

        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-10">
          Referral Fees by Category
        </h2>

        {/* Table header */}
        <div className="flex justify-between text-sm font-semibold text-gray-700 mb-4">
          <span>Category</span>
          <span>Referral Fee Percentage</span>
        </div>

        <div className="bg-white rounded-2xl shadow-[0_10px_25px_rgba(0,0,0,0.1)] overflow-hidden">

          {categories.map((category, index) => (
            <div key={index}>

              {/* Row */}
              <div
                className="flex justify-between items-center px-6 py-4 border-t cursor-pointer hover:bg-gray-50"
                onClick={() => toggle(index)}
              >
                <span className="font-semibold text-gray-900">{category}</span>

                {/* + or - Icon */}
                {openIndex === index ? (
                  <FiMinus className="text-gray-600" size={20} />
                ) : (
                  <FiPlus className="text-gray-600" size={20} />
                )}
              </div>

              {/* Accordion Content */}
              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-600 text-sm bg-gray-50">
                  Referral fee varies by specific sub-category.
                  <br />
                  Update percentage as per Amazon latest fee chart.
                </div>
              )}

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default ReferralFeesAccordion;

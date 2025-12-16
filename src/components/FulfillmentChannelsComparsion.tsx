"use client";
import React, { useState } from "react";

const FulfillmentChannelsComparsion: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="w-full bg-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
          Amazon.in Fulfillment Channels Fee Comparsion
        </h2>

        {/* Description */}
        <p className="text-sm md:text-base text-slate-700 leading-relaxed mb-1">
          Each Fulfillment Channel has different fees associated with it and
          certain costs you (the seller) will bear when you choose it.
          <span className="font-semibold">
            {" "}
            Most sellers use a mix of different fulfillment channels,
          </span>{" "}
          as each channel has different benefits. You can see the comparsion in
          the sheet below.
        </p>

        {/* Quick guide link style text */}
        <button className="mt-6 mb-6 inline-flex items-center gap-2 text-sm md:text-base font-semibold text-slate-900">
          Quick guide on the fulfillment channels available
          <span className="text-lg">↗</span>
        </button>

        {/* Comparsion card */}
        <div className="bg-white rounded-2xl shadow-md border border-slate-100">
          {/* Table header */}
          <div className="grid grid-cols-4 text-sm md:text-base font-semibold text-slate-900 px-6 py-4 border-b border-slate-200">
            <div>Features</div>
            <div className="text-center">
              Fulfillment by Amazon <span className="block text-xs">(FC)</span>
            </div>
            <div className="text-center">Easy Ship</div>
            <div className="text-center">Self-Ship</div>
          </div>

          {/* Accordion row */}
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="w-full flex items-center justify-between px-6 py-5 text-left text-sm md:text-base bg-[#fbf9f5]"
          >
            <span className="font-semibold text-slate-900">
              Click the + button to view fee vs cost &amp; key benefits comparsion
            </span>
            <span className="text-2xl font-bold text-slate-900">
              {isOpen ? "−" : "+"}
            </span>
          </button>

          {/* Expanded content (optional, dummy text) */}
          {isOpen && (
            <div className="px-6 py-5 border-t border-slate-200 text-sm text-slate-700">
              {/* Replace this with real comparison rows later */}
              Here you can show detailed rows for fees, storage, delivery speed
              and other benefits for each fulfillment channel.
            </div>
          )}
        </div>

        {/* Bottom text */}
        <button className="mt-8 inline-flex items-center gap-2 text-sm md:text-base font-semibold text-slate-900">
          Calculate potential profitability
          <span className="text-lg">↑</span>
        </button>
      </div>
    </section>
  );
};

export default FulfillmentChannelsComparsion;

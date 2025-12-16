"use client";
import React from "react";

const PaymentCyclesSection = () => {
  return (
    <section className="w-full bg-white py-12">
      <div className="max-w-5xl mx-auto px-4">
        {/* Main heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
          Amazon.in Payment Cycles
        </h2>

        {/* Top description */}
        <p className="text-sm md:text-base text-slate-700 leading-relaxed mb-3">
          You are eligible to get paid for the order 7 days after the order is
          delivered. Amazon ensures payment for your sales (minus the Amazon
          Seller fees) is deposited securely into your bank account{" "}
          <span className="font-semibold">every 7 days</span>, including your
          Pay on Delivery orders. Eligible sellers will also receive options for
          faster payment cycles.
        </p>
        <p className="text-sm md:text-base text-slate-700 leading-relaxed mb-8">
          You can view your deposited balance along with tips to grow and
          expand your business in your Seller Central account.
        </p>

        {/* Quote card */}
        <div className="rounded-2xl border border-blue-300 bg-slate-50 px-6 md:px-10 py-8 md:py-10 shadow-sm mb-10">
          {/* Quotes icon */}
          <div className="text-5xl text-blue-500 mb-4 leading-none">““</div>

          {/* Quote text */}
          <p className="text-xl md:text-2xl font-semibold text-slate-900 leading-snug mb-6">
            Unlike offline sales where we have to wait 40-45 days for payments,
            on Amazon we are paid after 7 days of the sale.
          </p>

          {/* Author */}
          <div>
            <p className="text-lg font-bold text-slate-900">Vijay</p>
            <p className="text-sm text-slate-700">BlueRigger India</p>
          </div>
        </div>

        {/* Note text */}
        <p className="text-xs md:text-sm text-slate-700 leading-relaxed mb-4">
          <span className="font-semibold">NOTE:</span> The above information is
          applicable for new sellers who will join the &quot;Standard&quot;
          level in the Amazon STEP program. As sellers move up levels, they will
          be able to unlock multiple benefits including fee waivers, account
          management faster disbursement cycles, &amp; more.
        </p>

        {/* Link */}
        <button className="mt-2 text-sm font-semibold text-slate-900 underline underline-offset-4">
          Learn more about Amazon STEP
        </button>
      </div>
    </section>
  );
};

export default PaymentCyclesSection;

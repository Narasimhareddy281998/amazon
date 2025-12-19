"use client";

import React, { useEffect, useState } from "react";
import ReferralFeesAccordion from "./ReferralFeesAccordion";
import ClosingFeesTabs from "@/components/ClosingFeesTabs";
import ShippingFeesSection from "@/components/ShippingFeesSection";
import ShippingFeesFullSection from "@/components/ShippingFeesFullSection";
import OtherFeesSection from "@/components/OtherFeesSection";
import ProfitabilitySection from "@/components/ProfitabilitySection";
import PaymentCyclesSection from "@/components/PaymentCyclesSection";
import FulfillmentChannelsComparsion from "@/components/FulfillmentChannelsComparsion";

/* ✅ Menu with section IDs */
const leftMenu = [
  { id: "referral", label: "Referral Fee (based on Category)" },
  { id: "closing", label: "Closing Fee (based on Price)" },
  { id: "shipping", label: "Weight Handling Fee (Shipping Fee)" },
  { id: "other", label: "Other Fees" },
  { id: "profit", label: "Calculating Profitability" },
  { id: "payment", label: "Payment Cycles" },
  { id: "fulfillment", label: "Comparing Fulfillment Channels" },
];

const SellingFeesSection: React.FC = () => {
  const [active, setActive] = useState(leftMenu[0].id);

  /* ✅ Scroll spy logic */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.4 }
    );

    leftMenu.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  /* ✅ Click scroll */
  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-6xl mx-auto px-4 flex gap-12">
        {/* ================= LEFT MENU ================= */}
        <aside className="w-64 sticky top-28">
          <h3 className="text-lg font-bold text-gray-900 mb-6">
            Fees Charged
          </h3>

          <ul className="space-y-3 text-sm relative">
            {leftMenu.map((item) => (
              <li
                key={item.id}
                onClick={() => handleScroll(item.id)}
                className="flex items-start gap-3 cursor-pointer"
              >
                {/* Vertical line */}
                <span
                  className={`w-1 rounded-full transition-all duration-300 ${
                    active === item.id
                      ? "bg-teal-600 h-16"
                      : "bg-gray-200 h-16"
                  }`}
                />
                <span
                  className={`transition font-medium ${
                    active === item.id
                      ? "text-gray-900"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {item.label}
                </span>
              </li>
            ))}
          </ul>
        </aside>

        {/* ================= RIGHT CONTENT ================= */}
        <div className="flex-1 space-y-6">
          {/* Referral */}
          <section id="referral" className="scroll-mt-28">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#111827] mb-6">
              How to Calculate Amazon.in Selling Fees?
            </h2>
            <ReferralFeesAccordion />
          </section>

          {/* Closing */}
          <section id="closing" className="scroll-mt-28">
            <ClosingFeesTabs />
          </section>

          {/* Shipping */}
          <section id="shipping" className="scroll-mt-28">
            <ShippingFeesSection />
            <ShippingFeesFullSection />
          </section>

          {/* Other */}
          <section id="other" className="scroll-mt-28">
            <OtherFeesSection />
          </section>

          {/* Profit */}
          <section id="profit" className="scroll-mt-28">
            <ProfitabilitySection />
          </section>

          {/* Payment */}
          <section id="payment" className="scroll-mt-28">
            <PaymentCyclesSection />
          </section>

          {/* Fulfillment */}
          <section id="fulfillment" className="scroll-mt-28">
            <FulfillmentChannelsComparsion />
          </section>
        </div>
      </div>
    </section>
  );
};

export default SellingFeesSection;

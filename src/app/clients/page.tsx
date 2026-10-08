"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Hero from "@/components/Hero";
import LogoCard from "@/components/LogoCard";
import CtaBand from "@/components/CtaBand";
import { CLIENTS_DATA } from "@/data/siteData";
import { SectionHeader, transitionEase } from "@/components/motion/MotionUtils";

export default function ClientsPage() {
  const [activeTab, setActiveTab] = useState("Corporate");

  const tabs = [
    "Corporate",
    "Finance",
    "Real Estate",
    "Education",
    "Healthcare",
    "Transport",
  ];

  const filteredClients = CLIENTS_DATA.filter((client) => {
    if (activeTab === "Corporate") return true; // Show all 12 as shown in reference Screen 8
    return client.category === activeTab;
  });

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 1. Hero */}
      <Hero
        eyebrow="Our Clientele"
        title="TRUSTED ACROSS INDUSTRIES"
        subtitle="Long-standing partnerships with leading organizations."
        image="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80"
      />

      {/* 2. Clients Section */}
      <section className="py-20 bg-[#F3F5F8] border-b border-[#E3E7EE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Enterprise Partnerships"
            title="PORTFOLIO OF TRUST"
            subtitle="Explore our clientele spanning multinational corporations, banks, infrastructure operators, and healthcare providers."
            className="mb-12"
          />

          {/* Tab Pills with shared layoutId sliding background */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 no-scrollbar">
            {tabs.map((tab) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative px-5 py-2 text-xs font-bold uppercase tracking-wider rounded transition-colors cursor-pointer border whitespace-nowrap ${
                    isActive
                      ? "border-[#E5322D]"
                      : "border-[#E3E7EE] bg-white hover:bg-slate-200"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeClientTab"
                      className="absolute inset-0 bg-[#E5322D] rounded shadow-md shadow-red-900/20"
                      transition={{ type: "spring", stiffness: 450, damping: 32 }}
                    />
                  )}
                  <span
                    className={`relative z-10 transition-colors duration-150 ${
                      isActive ? "text-white" : "text-slate-700"
                    }`}
                  >
                    {tab}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Grid of White Logo Cards: AnimatePresence on tab change with stagger */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.05,
                  },
                },
                exit: { opacity: 0, transition: { duration: 0.2 } },
              }}
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6"
            >
              {filteredClients.map((client) => (
                <motion.div
                  key={client.id}
                  variants={{
                    hidden: { opacity: 0, scale: 0.95, y: 15 },
                    visible: {
                      opacity: 1,
                      scale: 1,
                      y: 0,
                      transition: { duration: 0.35, ease: transitionEase },
                    },
                  }}
                >
                  <LogoCard client={client} />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          <div className="mt-12 text-center text-xs text-slate-500">
            Proudly protecting over 4,500 facilities across India, UAE, and Qatar.
          </div>
        </div>
      </section>

      {/* Dark CTA Band */}
      <CtaBand
        title="JOIN OUR GROWING NETWORK OF ENTERPRISE CLIENTS"
        subtitle="Experience enterprise safety engineering backed by 65+ years of operational excellence."
        buttonText="Get in Touch"
        buttonHref="/contact"
      />
    </div>
  );
}

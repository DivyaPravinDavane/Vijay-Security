"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import Hero from "@/components/Hero";
import SolutionCard from "@/components/SolutionCard";
import CtaBand from "@/components/CtaBand";
import { SOLUTIONS_DATA } from "@/data/siteData";
import { transitionEase } from "@/components/motion/MotionUtils";

export default function SolutionsPage() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 1. Hero */}
      <Hero
        eyebrow="Complete Portfolio"
        title="INTEGRATED SOLUTIONS FOR COMPLETE PROTECTION"
        subtitle="Fire. Safety. Security. Automation. Monitoring. Maintenance."
        image="https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1600&q=80"
      />

      {/* 2. OUR SOLUTIONS: 3x3 Grid of Light Cards with Staggered Entrance */}
      <section className="py-20 bg-white border-b border-[#E3E7EE] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <div className="inline-flex items-center gap-2 mb-2.5">
              <motion.span
                initial={{ scaleX: shouldReduceMotion ? 1 : 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: transitionEase }}
                style={{ transformOrigin: "left" }}
                className="w-7 h-[2px] bg-[#E5322D] block shrink-0"
              />
              <span className="text-xs uppercase tracking-[0.25em] text-[#E5322D] font-bold">
                System Engineering
              </span>
            </div>

            <motion.h2
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: transitionEase }}
              className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase text-[#0F172A] tracking-tight"
            >
              OUR SOLUTIONS
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm text-slate-500 mt-2 max-w-2xl"
            >
              Turnkey design, supply, testing, installation, and commissioning of life-safety and security systems certified to international engineering standards.
            </motion.p>
          </div>

          {/* 3x3 Grid with Staggered Entrance */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {SOLUTIONS_DATA.map((solution, idx) => (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: 0.55,
                  delay: 0.08 * idx,
                  ease: transitionEase,
                }}
              >
                <SolutionCard solution={solution} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dark CTA Band */}
      <CtaBand
        title="LOOKING FOR A CUSTOM ENGINEERING SOLUTION?"
        subtitle="Our technical team designs custom life-safety and security architectures tailored to your facility."
        buttonText="Get in Touch"
        buttonHref="/contact"
      />
    </div>
  );
}

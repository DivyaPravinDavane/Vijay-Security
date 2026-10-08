"use client";

import React from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Hero from "@/components/Hero";
import IndustryTile from "@/components/IndustryTile";
import CtaBand from "@/components/CtaBand";
import { INDUSTRIES_DATA } from "@/data/siteData";
import { transitionEase } from "@/components/motion/MotionUtils";

export default function IndustriesPage() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 1. Hero with Airplane Image at Dusk */}
      <Hero
        eyebrow="Sector Coverage"
        title="INDUSTRIES WE PROTECT"
        subtitle="Tailored solutions for every sector."
        image="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1600&q=80"
      />

      {/* 2. 3x4 Grid of Image Tiles with Dark Label Bar + Dark CTA Cell */}
      <section className="py-20 bg-[#F3F5F8] border-b border-[#E3E7EE] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
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
                Domain Expertise
              </span>
            </div>

            <motion.h2
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: transitionEase }}
              className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase text-[#0F172A] tracking-tight"
            >
              MISSION-CRITICAL SECTORS
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm text-slate-500 mt-2 max-w-2xl"
            >
              Each vertical operates under distinct regulatory mandates and physical hazard profiles. We customize fire suppression, CCTV intelligence, and life safety to each environment.
            </motion.p>
          </div>

          {/* 3 Columns Grid with Staggered Entrance */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* 10 Industry Tiles with Stagger */}
            {INDUSTRIES_DATA.map((ind, idx) => (
              <motion.div
                key={ind.id}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.06 * idx,
                  ease: transitionEase,
                }}
              >
                <IndustryTile industry={ind} aspectRatio="aspect-[4/3]" />
              </motion.div>
            ))}

            {/* 11th/12th slot: Dark Card with Animated Red Gradient Border */}
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: 0.6, ease: transitionEase }}
              className="sm:col-span-2 lg:col-span-2 p-[2px] rounded-lg bg-gradient-to-r from-[#E5322D] via-slate-700 to-[#E5322D] animated-gradient-border shadow-xl"
            >
              <div className="h-full bg-[#0A0F1A] rounded-[6px] p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden group">
                {/* Subtle background glow */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#E5322D]/15 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10">
                  <span className="text-[11px] uppercase tracking-widest text-[#E5322D] font-bold block mb-2">
                    Comprehensive Protection
                  </span>
                  <h3 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-white max-w-xl leading-tight mb-4">
                    DIFFERENT INDUSTRIES. SAME COMMITMENT. YOUR SAFETY.
                  </h3>
                  <p className="text-sm text-slate-300 max-w-lg leading-relaxed">
                    Whether protecting 28km deep-sea port perimeters or sensitive server room assets, our engineering teams ensure flawless integration and 24x7 readiness.
                  </p>
                </div>

                <div className="mt-8 relative z-10">
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }} className="inline-block">
                    <Link
                      href="/contact"
                      className="btn-shine inline-flex items-center gap-2 px-7 py-3.5 bg-[#E5322D] hover:bg-[#d42722] text-white font-heading font-bold text-xs uppercase tracking-wider rounded transition-all duration-200 shadow-lg shadow-red-900/30 group"
                    >
                      <span>Get in Touch</span>
                      <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Dark CTA Band */}
      <CtaBand
        title="DISCUSS YOUR FACILITY'S SAFETY PROFILE"
        subtitle="Schedule a technical site survey with Vijay Security's certified engineering team."
        buttonText="Get in Touch"
        buttonHref="/contact"
      />
    </div>
  );
}

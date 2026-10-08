"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  Camera,
  Bell,
  ShieldCheck,
  Flame,
  Building2,
  Zap,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import { transitionEase } from "./motion/MotionUtils";

export default function TechnologyShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const techItems = [
    {
      id: "cctv",
      name: "CCTV",
      icon: Camera,
      badge: "01 CCTV",
      counter: "01",
      title: "LIVE SURVEILLANCE",
      desc: "Centralized command & control with AI-assisted video analytics, automated perimeter breach detection, and ultra-high-definition multi-screen monitoring walls.",
      image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1200&q=80",
      stats: "Sub-second AI tracking",
    },
    {
      id: "fire-detect",
      name: "Fire Detection",
      icon: Bell,
      badge: "02 FIRE DETECTION",
      counter: "02",
      title: "INTELLIGENT SENSING",
      desc: "High-sensitivity aspirating smoke detection (VESDA) combined with addressable multi-criteria optical sensors for ultra-early warning in high-risk zones.",
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
      stats: "0.001% obscuration/m",
    },
    {
      id: "access",
      name: "Access Control",
      icon: ShieldCheck,
      badge: "03 ACCESS CONTROL",
      counter: "03",
      title: "BIOMETRIC CONTROL",
      desc: "High-throughput optical turnstiles, contactless facial verification, and multi-credential cloud authorization preventing unauthorized campus breaches.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80",
      stats: "60+ pedestrians / min",
    },
    {
      id: "fire-suppress",
      name: "Fire Suppression",
      icon: Flame,
      badge: "04 FIRE SUPPRESSION",
      counter: "04",
      title: "CLEAN AGENT SUPPRESSION",
      desc: "Zero-residue chemical suppression (Novec 1230 & FM-200) paired with automated deluge systems for datacenters, server rooms, and critical power gear.",
      image: "/images/fire-protection.jpg",
      stats: "10-second discharge",
    },
    {
      id: "bms",
      name: "BMS",
      icon: Building2,
      badge: "05 BMS",
      counter: "05",
      title: "INTEGRATED IBMS",
      desc: "Unified building automation integrating HVAC, energy metering, emergency lighting, and life-safety protocols on an enterprise BACnet/IP backbone.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
      stats: "30% energy reduction",
    },
    {
      id: "ev-charging",
      name: "EV Charging",
      icon: Zap,
      badge: "06 EV CHARGING",
      counter: "06",
      title: "EV INFRASTRUCTURE",
      desc: "Commercial DC fast charging parks equipped with autonomous fire suppression canisters and automatic battery thermal runaway isolation switches.",
      image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=1200&q=80",
      stats: "Up to 240kW DC Fast",
    },
  ];

  // Autoplay functionality with progress
  useEffect(() => {
    if (isPaused || shouldReduceMotion) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev === techItems.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused, shouldReduceMotion, techItems.length]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? techItems.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === techItems.length - 1 ? 0 : prev + 1));
  };

  const current = techItems[activeIndex];

  return (
    <section className="py-20 bg-white border-b border-[#E3E7EE] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Expanding Red Line */}
        <div className="mb-10">
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
              Cutting-Edge Systems
            </span>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: transitionEase }}
            className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase text-[#0F172A] tracking-tight"
          >
            EXPLORE OUR TECHNOLOGY
          </motion.h2>
        </div>

        {/* Row of 6 Small Icon Tiles (Staggered Pop-in + Red Pulse Ring on Hover) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
          {techItems.map((item, index) => {
            const Icon = item.icon;
            const isSelected = activeIndex === index;
            return (
              <motion.button
                key={item.id}
                onClick={() => setActiveIndex(index)}
                initial={{ opacity: 0, scale: 0.88, y: 15 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: 0.06 * index,
                  ease: transitionEase,
                }}
                whileHover={{
                  y: -4,
                  transition: { type: "spring", stiffness: 350, damping: 20 },
                }}
                className={`relative flex flex-col items-center justify-center p-4 rounded-lg border text-center transition-colors duration-200 cursor-pointer group ${
                  isSelected
                    ? "bg-[#0A0F1A] border-[#E5322D] text-white shadow-lg"
                    : "bg-[#F3F5F8] border-[#E3E7EE] text-slate-700 hover:bg-white hover:border-[#E5322D]/40"
                }`}
              >
                {/* Icon Container with Pulsing Red Ring on Hover */}
                <div className="relative mb-2.5">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                      isSelected
                        ? "bg-[#E5322D] text-white"
                        : "bg-white text-[#E5322D] border border-slate-200 group-hover:bg-[#E5322D]/10"
                    }`}
                  >
                    <Icon className="w-5 h-5 transition-transform duration-200 group-hover:scale-110" />
                  </div>
                  {/* Subtle hover pulse ring */}
                  <span className="absolute inset-0 rounded-full border border-[#E5322D] opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-300 pointer-events-none" />
                </div>

                <span className="font-heading text-xs font-bold uppercase tracking-wider">
                  {item.name}
                </span>
              </motion.button>
            );
          })}
        </div>

        {/* Dark Featured Slider Panel */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="bg-[#0A0F1A] text-white rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative"
        >
          {/* Autoplay Progress Bar */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-white/10 z-20 overflow-hidden">
            <motion.div
              key={activeIndex}
              initial={{ width: "0%" }}
              animate={{ width: isPaused ? "0%" : "100%" }}
              transition={{ duration: 6, ease: "linear" }}
              className="h-full bg-[#E5322D]"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[420px]">
            {/* Left Controls & Text */}
            <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between z-10 bg-gradient-to-r from-[#0A0F1A] via-[#0A0F1A]/95 to-transparent">
              <div>
                {/* Counter & Category with Flip Animation */}
                <div className="inline-flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-[#E5322D] text-white text-[11px] font-heading font-black uppercase tracking-widest rounded-sm">
                    {current.badge}
                  </span>
                  <div className="text-xs text-slate-400 font-mono overflow-hidden h-4 inline-flex items-center">
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={current.counter}
                        initial={{ y: 12, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -12, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        {current.counter}
                      </motion.span>
                    </AnimatePresence>
                    <span className="mx-1">/</span>
                    <span>06</span>
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={current.id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.35, ease: transitionEase }}
                  >
                    <h3 className="font-heading text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-white mb-4">
                      {current.title}
                    </h3>

                    <p className="text-sm text-slate-300 leading-relaxed mb-6">
                      {current.desc}
                    </p>

                    <div className="inline-block px-3.5 py-1.5 rounded bg-white/5 border border-white/10 text-xs font-medium text-slate-300">
                      Core Metric: <strong className="text-white">{current.stats}</strong>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Bottom Actions & Prev/Next Arrows */}
              <div className="pt-8 border-t border-white/10 flex items-center justify-between mt-6">
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
                  <Link
                    href="/solutions"
                    className="btn-shine inline-flex items-center gap-2 px-5 py-2.5 bg-[#E5322D] hover:bg-[#d42722] text-white font-heading font-bold text-xs uppercase tracking-wider rounded transition-colors shadow-md group"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </motion.div>

                {/* Arrows with Hover Scale */}
                <div className="flex items-center gap-2">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handlePrev}
                    aria-label="Previous slide"
                    className="w-10 h-10 rounded border border-white/20 hover:border-[#E5322D] hover:bg-[#E5322D] text-white flex items-center justify-center transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleNext}
                    aria-label="Next slide"
                    className="w-10 h-10 rounded border border-white/20 hover:border-[#E5322D] hover:bg-[#E5322D] text-white flex items-center justify-center transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>
            </div>

            {/* Right: High-Tech Control Room Visual with Crossfade & Scan-line Overlay */}
            <div className="lg:col-span-7 relative min-h-[300px] lg:min-h-full overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: transitionEase }}
                  className="absolute inset-0"
                >
                  <Image
                    src={current.image}
                    alt={current.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover object-center"
                  />
                  {/* Subtle Scan-line Overlay on Monitor Image */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px] pointer-events-none opacity-60" />
                  <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-l from-transparent via-[#0A0F1A]/40 to-[#0A0F1A]" />
                </motion.div>
              </AnimatePresence>

              {/* Blinking Red REC Indicator */}
              <div className="absolute top-4 right-4 flex items-center gap-2 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 z-10">
                <span className="w-2 h-2 rounded-full bg-[#E5322D] animate-ping" />
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-300 font-bold">
                  REC • 1080P
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

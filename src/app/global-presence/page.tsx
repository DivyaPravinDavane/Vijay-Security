"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Shield,
  Cpu,
  Globe,
  CheckCircle2,
  Phone,
  Mail,
} from "lucide-react";
import Hero from "@/components/Hero";
import CtaBand from "@/components/CtaBand";
import {
  SectionHeader,
  FadeUp,
  transitionEase,
} from "@/components/motion/MotionUtils";

export default function GlobalPresencePage() {
  const [activeLocation, setActiveLocation] = useState<string>("india");

  const locations = [
    {
      id: "india",
      country: "INDIA",
      role: "Global Headquarters",
      city: "Mumbai, Maharashtra",
      address: "36, Chandivali, Off Saki Vihar Road, Andheri (E), Mumbai - 400 072",
      phone: "+91 22 2847 1999",
      email: "info@vijaysecurity.com",
      hubs: ["Mumbai (HQ)", "New Delhi / NCR", "Bengaluru", "Chennai", "Hyderabad"],
      metrics: "3,800+ Deliveries across 28 States",
      coords: { x: "68%", y: "45%" },
    },
    {
      id: "uae",
      country: "UNITED ARAB EMIRATES",
      role: "Middle East Regional Hub",
      city: "Dubai & Abu Dhabi",
      address: "Level 14, Business Bay Tower, Downtown Dubai, UAE",
      phone: "+971 4 388 9200",
      email: "dubai@vijaysecurity.com",
      hubs: ["Dubai Commercial Operations", "Abu Dhabi Industrial District"],
      metrics: "350+ Commercial & Hospitality Deployments",
      coords: { x: "60%", y: "42%" },
    },
    {
      id: "qatar",
      country: "STATE OF QATAR",
      role: "Infrastructure Operations",
      city: "Doha",
      address: "West Bay Commercial Avenue, Doha, Qatar",
      phone: "+974 4 412 8840",
      email: "qatar@vijaysecurity.com",
      hubs: ["Hamad International Airport", "Hamad Sea Port", "Doha Metro"],
      metrics: "Major Aviation & Maritime Mega-Projects",
      coords: { x: "57%", y: "44%" },
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#0A0F1A] text-white">
      {/* 1. Hero */}
      <Hero
        eyebrow="International Footprint"
        title="ENGINEERED IN INDIA. DELIVERED GLOBALLY."
        subtitle="Operations in India, UAE and Qatar."
        image="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1600&q=80"
      />

      {/* 2. Dark World Map Background (Dotted) with Red Location Pins */}
      <section className="py-20 bg-[#0A0F1A] border-b border-white/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Cross-Border Engineering"
            title="STRATEGIC OPERATIONAL CENTERS"
            subtitle="Click on each operational hub on the interactive map to inspect facilities and local support capabilities."
            className="mb-12"
          />

          {/* Dotted World Map Graphic Container with Fade In */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: transitionEase }}
            className="relative w-full h-[380px] sm:h-[480px] md:h-[540px] bg-[#0c1322] rounded-2xl border border-white/10 overflow-hidden shadow-2xl flex items-center justify-center p-4"
          >
            {/* World Map Dotted Texture / SVG */}
            <div className="absolute inset-0 opacity-40 pointer-events-none">
              <svg
                viewBox="0 0 1000 500"
                className="w-full h-full object-cover"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <pattern
                    id="map-dot-grid"
                    x="0"
                    y="0"
                    width="12"
                    height="12"
                    patternUnits="userSpaceOnUse"
                  >
                    <circle cx="2" cy="2" r="1.2" fill="#475569" />
                  </pattern>
                </defs>
                <rect width="1000" height="500" fill="url(#map-dot-grid)" />

                {/* Simplified Continents Silhouette */}
                <path
                  d="M150 120 Q 200 100 240 140 T 220 220 T 170 320 T 220 400 T 260 440"
                  fill="none"
                  stroke="#334155"
                  strokeWidth="35"
                  strokeLinecap="round"
                  opacity="0.3"
                />
                <path
                  d="M480 90 Q 520 80 560 120 T 520 200 T 500 280 T 530 380"
                  fill="none"
                  stroke="#334155"
                  strokeWidth="45"
                  strokeLinecap="round"
                  opacity="0.3"
                />
                <path
                  d="M580 150 Q 640 120 720 140 T 780 220 T 740 320"
                  fill="none"
                  stroke="#334155"
                  strokeWidth="60"
                  strokeLinecap="round"
                  opacity="0.35"
                />
                <path
                  d="M660 210 Q 680 250 690 300"
                  fill="none"
                  stroke="#334155"
                  strokeWidth="25"
                  strokeLinecap="round"
                  opacity="0.3"
                />
              </svg>
            </div>

            {/* Glowing Connection Dashed Arcs between India, UAE, Qatar */}
            <svg
              viewBox="0 0 1000 500"
              className="absolute inset-0 w-full h-full pointer-events-none z-10"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Arc from India to UAE */}
              <motion.path
                d="M 680 225 Q 640 185 600 210"
                fill="none"
                stroke="#E5322D"
                strokeWidth="2"
                strokeDasharray="6 6"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.8, ease: "easeInOut" }}
              />
              {/* Arc from UAE to Qatar */}
              <motion.path
                d="M 600 210 Q 585 195 570 220"
                fill="none"
                stroke="#E5322D"
                strokeWidth="2"
                strokeDasharray="6 6"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 1.2, ease: "easeInOut" }}
              />
            </svg>

            {/* Red Location Pins Dropping in with Bounce & Continuous Pulsing Ring */}
            {locations.map((loc, idx) => {
              const isSelected = activeLocation === loc.id;
              return (
                <motion.div
                  key={loc.id}
                  initial={{ y: -35, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    stiffness: 320,
                    damping: 14,
                    delay: 0.35 + idx * 0.25,
                  }}
                  style={{ top: loc.coords.y, left: loc.coords.x }}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer"
                  onClick={() => setActiveLocation(loc.id)}
                >
                  <div className="relative flex flex-col items-center group">
                    {/* Continuous pulsing ring */}
                    <motion.span
                      animate={{
                        scale: [1, 1.8, 2.2],
                        opacity: [0.8, 0.3, 0],
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 2,
                        ease: "easeOut",
                        delay: idx * 0.4,
                      }}
                      className="absolute -inset-1 rounded-full bg-[#E5322D]"
                    />
                    <div
                      className={`relative w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-200 ${
                        isSelected
                          ? "bg-[#E5322D] text-white scale-125 shadow-lg shadow-red-500/50"
                          : "bg-[#111827] text-[#E5322D] border-2 border-[#E5322D] hover:scale-110"
                      }`}
                    >
                      <MapPin className="w-4 h-4 fill-current" />
                    </div>

                    {/* Label Badge */}
                    <div
                      className={`mt-2 px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider whitespace-nowrap shadow-md transition-all ${
                        isSelected
                          ? "bg-[#E5322D] text-white"
                          : "bg-black/80 text-slate-300 border border-white/10"
                      }`}
                    >
                      {loc.country}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* 3 Columns Below: Country columns fade up in sync with their pin */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-14">
            {locations.map((loc, idx) => {
              const isSelected = activeLocation === loc.id;
              return (
                <motion.div
                  key={loc.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: 0.35 + idx * 0.25,
                    ease: transitionEase,
                  }}
                  whileHover={{
                    y: -6,
                    transition: { type: "spring", stiffness: 300, damping: 20 },
                  }}
                  onClick={() => setActiveLocation(loc.id)}
                  className={`p-6 sm:p-8 rounded-xl border transition-colors duration-300 cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? "bg-[#111827] border-[#E5322D] shadow-2xl shadow-red-950/30"
                      : "bg-[#0c1322] border-white/10 hover:border-white/30"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[11px] font-bold uppercase tracking-widest text-[#E5322D]">
                        {loc.role}
                      </span>
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    </div>

                    <h3 className="font-heading text-2xl font-extrabold uppercase text-white mb-1">
                      {loc.country}
                    </h3>

                    <p className="text-xs text-slate-400 mb-4">{loc.city}</p>

                    <p className="text-xs text-slate-300 mb-5 leading-relaxed">
                      {loc.address}
                    </p>

                    <div className="space-y-1.5 text-xs text-slate-400 mb-6">
                      <div className="flex items-center gap-2">
                        <Phone className="w-3.5 h-3.5 text-[#E5322D]" />
                        <span>{loc.phone}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="w-3.5 h-3.5 text-[#E5322D]" />
                        <span>{loc.email}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10 text-[11px] text-[#E5322D] font-bold uppercase tracking-wider flex items-center justify-between">
                    <span>{loc.metrics}</span>
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Icon Row: Safety Solutions, Engineering, International */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 pt-12 border-t border-white/10">
            <FadeUp delay={0.1}>
              <div className="flex items-center gap-4 p-5 rounded-lg bg-white/5 border border-white/10 hover:border-[#E5322D]/40 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-[#E5322D]/20 border border-[#E5322D]/40 flex items-center justify-center shrink-0">
                  <Shield className="w-6 h-6 text-[#E5322D]" />
                </div>
                <div>
                  <h4 className="font-heading text-base font-bold uppercase text-white">
                    Safety Solutions
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Universal compliance across NFPA, NBC & Civil Defense
                  </p>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div className="flex items-center gap-4 p-5 rounded-lg bg-white/5 border border-white/10 hover:border-[#E5322D]/40 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-[#E5322D]/20 border border-[#E5322D]/40 flex items-center justify-center shrink-0">
                  <Cpu className="w-6 h-6 text-[#E5322D]" />
                </div>
                <div>
                  <h4 className="font-heading text-base font-bold uppercase text-white">
                    Engineering
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Over 250 in-house design & field commissioning engineers
                  </p>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.3}>
              <div className="flex items-center gap-4 p-5 rounded-lg bg-white/5 border border-white/10 hover:border-[#E5322D]/40 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-[#E5322D]/20 border border-[#E5322D]/40 flex items-center justify-center shrink-0">
                  <Globe className="w-6 h-6 text-[#E5322D]" />
                </div>
                <div>
                  <h4 className="font-heading text-base font-bold uppercase text-white">
                    International
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Fast mobilized delivery across South Asia & GCC nations
                  </p>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Dark CTA Band */}
      <CtaBand
        title="COMMISSIONING AN INTERNATIONAL PROJECT?"
        subtitle="Connect with our global project engineering directors in Mumbai, Dubai, or Doha."
        buttonText="Get in Touch"
        buttonHref="/contact"
      />
    </div>
  );
}

"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Flame,
  Shield,
  Video,
  Cpu,
  Activity,
  Wrench,
} from "lucide-react";
import { transitionEase } from "./motion/MotionUtils";

export default function InfrastructureDiagram() {
  const shouldReduceMotion = useReducedMotion();

  const capabilities = [
    { title: "Fire", desc: "Detection, suppression & deluge life-safety", icon: Flame },
    { title: "Safety", desc: "Emergency voice evacuation & compliance", icon: Shield },
    { title: "Security", desc: "4K AI surveillance & biometric perimeter", icon: Video },
    { title: "Automation", desc: "BACnet integrated building management", icon: Cpu },
    { title: "Monitoring", desc: "24x7 centralized command center telemetry", icon: Activity },
    { title: "Maintenance", desc: "Preventive AMC & rapid disaster dispatch", icon: Wrench },
  ];

  return (
    <section className="py-20 bg-white border-b border-[#E3E7EE] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow & Headline with Expanding Red Line */}
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
              Turnkey Integrated Ecosystem
            </span>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: transitionEase }}
            className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase text-[#0F172A] tracking-tight max-w-2xl leading-tight"
          >
            ONE PARTNER FOR YOUR ENTIRE SECURITY INFRASTRUCTURE.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Vertical List with Staggered Slide-in & Icon Pop */}
          <div className="lg:col-span-5 space-y-3.5">
            {capabilities.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{
                    opacity: 0,
                    x: shouldReduceMotion ? 0 : -35,
                  }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.08 * idx,
                    ease: transitionEase,
                  }}
                  whileHover={{ x: 4, transition: { duration: 0.2 } }}
                  className="flex items-center gap-4 p-3.5 rounded-lg border border-[#E3E7EE] bg-[#F3F5F8]/70 hover:bg-white hover:border-[#E5322D]/40 transition-colors shadow-sm group"
                >
                  {/* Icon Pop */}
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 350, damping: 15 }}
                    className="w-10 h-10 rounded-md bg-white group-hover:bg-[#E5322D]/10 border border-[#E3E7EE] group-hover:border-[#E5322D]/30 flex items-center justify-center shrink-0 transition-colors shadow-sm"
                  >
                    <Icon className="w-5 h-5 text-[#E5322D]" />
                  </motion.div>
                  <div>
                    <h4 className="font-heading text-base font-bold uppercase text-[#0F172A] group-hover:text-[#E5322D] transition-colors leading-none">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-500 mt-1">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right: Architecture Diagram with SVG Drawing Lines */}
          <div className="lg:col-span-7 bg-[#F3F5F8] border border-[#E3E7EE] rounded-2xl p-6 sm:p-10 relative shadow-inner">
            {/* Diagram Background Grid Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:16px_16px] opacity-40 rounded-2xl pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center">
              {/* Central VSSL Node Fades In First */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85, y: -10 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: transitionEase }}
                className="px-8 py-3.5 bg-[#0A0F1A] text-white rounded-full border-2 border-[#E5322D] shadow-xl flex items-center gap-3 relative z-20"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-[#E5322D] animate-ping" />
                <span className="font-heading font-black text-xl sm:text-2xl uppercase tracking-wider">
                  VSSL
                </span>
                <span className="text-[10px] tracking-widest text-slate-300 font-mono hidden sm:inline">
                  CORE HUB
                </span>
              </motion.div>

              {/* Connecting Lines Draw Themselves (SVG Stroke Animation) */}
              <div className="w-full h-16 relative my-1">
                <svg
                  viewBox="0 0 400 64"
                  className="w-full h-full"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Vertical stem from VSSL */}
                  <motion.path
                    d="M 200 0 L 200 32"
                    stroke="#E5322D"
                    strokeWidth="2"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: 0.35, ease: "easeInOut" }}
                  />

                  {/* Horizontal distributor bar */}
                  <motion.path
                    d="M 66 32 L 334 32"
                    stroke="#94a3b8"
                    strokeWidth="2"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6, ease: "easeInOut" }}
                  />

                  {/* 3 Drop connectors */}
                  {/* Left Drop to FIRE */}
                  <motion.path
                    d="M 66 32 L 66 64"
                    stroke="#E5322D"
                    strokeWidth="2"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: 0.95, ease: "easeInOut" }}
                  />
                  {/* Center Drop to SECURITY */}
                  <motion.path
                    d="M 200 32 L 200 64"
                    stroke="#94a3b8"
                    strokeWidth="2"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: 0.95, ease: "easeInOut" }}
                  />
                  {/* Right Drop to BMS */}
                  <motion.path
                    d="M 334 32 L 334 64"
                    stroke="#94a3b8"
                    strokeWidth="2"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: 0.95, ease: "easeInOut" }}
                  />
                </svg>
              </div>

              {/* 3 Domain Cards Pop in with Stagger */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
                {/* FIRE Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.94 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 1.15, ease: transitionEase }}
                  whileHover={{ y: -6, transition: { type: "spring", stiffness: 300, damping: 20 } }}
                  className="bg-white rounded-xl p-5 border border-[#E3E7EE] shadow-sm hover:border-[#E5322D] hover:shadow-lg transition-colors"
                >
                  <div className="pb-3 mb-3 border-b border-slate-100 flex items-center justify-between">
                    <span className="font-heading text-base font-extrabold uppercase text-[#E5322D]">
                      FIRE
                    </span>
                    <Flame className="w-4 h-4 text-[#E5322D]" />
                  </div>
                  <ul className="space-y-2 text-xs text-slate-600 font-medium">
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E5322D]" />
                      <span>Detection</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E5322D]" />
                      <span>Protection</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E5322D]" />
                      <span>Suppression</span>
                    </li>
                  </ul>
                </motion.div>

                {/* SECURITY Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.94 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 1.3, ease: transitionEase }}
                  whileHover={{ y: -6, transition: { type: "spring", stiffness: 300, damping: 20 } }}
                  className="bg-white rounded-xl p-5 border border-[#E3E7EE] shadow-sm hover:border-slate-800 hover:shadow-lg transition-colors"
                >
                  <div className="pb-3 mb-3 border-b border-slate-100 flex items-center justify-between">
                    <span className="font-heading text-base font-extrabold uppercase text-[#0F172A]">
                      SECURITY
                    </span>
                    <Video className="w-4 h-4 text-slate-700" />
                  </div>
                  <ul className="space-y-2 text-xs text-slate-600 font-medium">
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                      <span>CCTV</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                      <span>Access</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                      <span>Intrusion</span>
                    </li>
                  </ul>
                </motion.div>

                {/* BMS Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.94 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 1.45, ease: transitionEase }}
                  whileHover={{ y: -6, transition: { type: "spring", stiffness: 300, damping: 20 } }}
                  className="bg-white rounded-xl p-5 border border-[#E3E7EE] shadow-sm hover:border-slate-800 hover:shadow-lg transition-colors"
                >
                  <div className="pb-3 mb-3 border-b border-slate-100 flex items-center justify-between">
                    <span className="font-heading text-base font-extrabold uppercase text-[#0F172A]">
                      BMS
                    </span>
                    <Cpu className="w-4 h-4 text-slate-700" />
                  </div>
                  <ul className="space-y-2 text-xs text-slate-600 font-medium">
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                      <span>Automation</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                      <span>Monitoring</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                      <span>Energy Optimization</span>
                    </li>
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

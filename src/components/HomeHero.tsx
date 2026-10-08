"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { transitionEase } from "./motion/MotionUtils";

export default function HomeHero() {
  const shouldReduceMotion = useReducedMotion();

  // Words for the animated word-by-word reveal
  const words = ["SECURITY", "SHOULD", "NEVER", "BE", "AN"];

  return (
    <section className="relative w-full min-h-[90vh] flex items-center bg-[#0A0F1A] text-white overflow-hidden pt-24 pb-16 md:pt-32 md:pb-20">
      {/* Background Building Image with Ken Burns zoom & slow motion */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
        <motion.div
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  scale: [1, 1.08, 1],
                  transition: { duration: 20, repeat: Infinity, ease: "linear" },
                }
          }
          className="relative w-full h-full"
        >
          <Image
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=85"
            alt="Modern glass skyscraper architecture at dusk"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-30 mix-blend-luminosity"
          />
        </motion.div>

        {/* Deep Navy/Black Gradient Overlay matching reference */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0F1A] via-[#0A0F1A]/85 to-[#0A0F1A]/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1A] via-transparent to-[#0A0F1A]/60" />

        {/* Faint Red Scanning-Line Effect Sweeping Across the Hero */}
        <div className="absolute inset-x-0 h-2 bg-gradient-to-b from-transparent via-[#E5322D]/25 to-transparent scanline-effect pointer-events-none" />

        {/* Ambient Red Glow */}
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-[#E5322D]/10 rounded-full blur-[120px] pointer-events-none" />
      </div>

      {/* Realistic Security Camera with Floating / Panning Motion */}
      <div className="absolute top-24 right-4 sm:right-12 md:right-20 lg:right-28 z-20 pointer-events-none hidden sm:block">
        <motion.div
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  y: [-4, 6, -4],
                  rotate: [-0.8, 1.2, -0.8],
                  transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                }
          }
          className="relative w-44 h-36 md:w-56 md:h-44"
        >
          <Image
            src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=600&q=80"
            alt="Surveillance Camera"
            fill
            className="object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.8)] filter brightness-95"
          />
          {/* Active status indicator LED */}
          <div className="absolute top-8 right-10 flex items-center gap-1.5 bg-black/70 px-2 py-0.5 rounded-full border border-red-500/30">
            <span className="w-2 h-2 rounded-full bg-[#E5322D] animate-ping" />
            <span className="text-[9px] font-mono tracking-widest text-red-400 font-bold">REC</span>
          </div>
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: transitionEase }}
            className="inline-flex items-center gap-2 mb-4 bg-white/5 border border-white/10 px-3 py-1 rounded-sm"
          >
            <span className="w-2 h-2 rounded-full bg-[#E5322D] animate-pulse" />
            <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-slate-300">
              Turnkey Life Safety & Security
            </span>
          </motion.div>

          {/* Main Headline H1 with Word-by-Word 3D Reveal */}
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight text-white leading-[1.05] mb-5 [perspective:1000px]">
            {words.map((word, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, y: 35, rotateX: 30 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.2 + idx * 0.08,
                  ease: transitionEase,
                }}
                className="inline-block mr-3"
              >
                {word}
              </motion.span>
            ))}

            {/* "AFTERTHOUGHT." scaling in last in red with a brief glow pulse */}
            <motion.span
              initial={{ opacity: 0, scale: 0.75, y: 20 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
                textShadow: [
                  "0 0 0px rgba(229,50,45,0)",
                  "0 0 35px rgba(229,50,45,0.8)",
                  "0 0 10px rgba(229,50,45,0.3)",
                ],
              }}
              transition={{
                duration: 0.75,
                delay: 0.68,
                ease: transitionEase,
              }}
              className="inline-block text-[#E5322D]"
            >
              AFTERTHOUGHT.
            </motion.span>
          </h1>

          {/* Subtext Fades Up */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.85, ease: transitionEase }}
            className="text-base sm:text-lg md:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl mb-9"
          >
            Integrated Fire, Safety & Security Systems engineered for critical environments.
          </motion.p>

          {/* Buttons Slide Up with Stagger */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0, ease: transitionEase }}
            className="flex flex-wrap items-center gap-4"
          >
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/solutions"
                className="btn-shine group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#E5322D] hover:bg-[#d42722] text-white font-heading font-bold text-xs sm:text-sm uppercase tracking-wider rounded transition-all duration-200 shadow-lg shadow-red-900/30 hover:shadow-red-900/50"
              >
                <span>Explore Solutions</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-7 py-3.5 bg-transparent hover:bg-white/10 text-white border border-white/60 hover:border-white font-heading font-bold text-xs sm:text-sm uppercase tracking-wider rounded transition-all duration-200"
              >
                Talk to Our Experts
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

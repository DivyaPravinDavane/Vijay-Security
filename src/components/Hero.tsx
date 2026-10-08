"use client";

import React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { transitionEase } from "./motion/MotionUtils";

interface HeroProps {
  title: string;
  subtitle: string;
  image: string;
  eyebrow?: string;
  actions?: React.ReactNode;
}

export default function Hero({
  title,
  subtitle,
  image,
  eyebrow,
  actions,
}: HeroProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative w-full pt-28 pb-16 md:pt-36 md:pb-24 bg-[#0A0F1A] text-white overflow-hidden border-b border-white/10">
      {/* Background Image with Slow Subtle Motion */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none overflow-hidden">
        <motion.div
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  scale: [1.02, 1.08, 1.02],
                  transition: { duration: 22, repeat: Infinity, ease: "linear" },
                }
          }
          className="relative w-full h-full"
        >
          <Image
            src={image}
            alt={title}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-40 mix-blend-luminosity"
          />
        </motion.div>
        {/* Navy gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0F1A] via-[#0A0F1A]/90 to-[#0A0F1A]/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1A] via-transparent to-transparent" />
        {/* Subtle red accent glow in corner */}
        <div className="absolute -top-40 right-10 w-96 h-96 bg-[#E5322D]/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {eyebrow && (
            <div className="inline-flex items-center gap-2 mb-3">
              <motion.span
                initial={{ scaleX: shouldReduceMotion ? 1 : 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, ease: transitionEase }}
                style={{ transformOrigin: "left" }}
                className="w-6 h-[2px] bg-[#E5322D] block shrink-0"
              />
              <motion.span
                initial={{ opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-xs uppercase tracking-[0.25em] font-semibold text-[#E5322D]"
              >
                {eyebrow}
              </motion.span>
            </div>
          )}

          {/* Mask / Clip-path Wipe for Heading */}
          <motion.h1
            initial={
              shouldReduceMotion
                ? { opacity: 0 }
                : { clipPath: "inset(0 100% 0 0)", opacity: 0.8 }
            }
            animate={{ clipPath: "inset(0 0% 0 0)", opacity: 1 }}
            transition={{ duration: 0.85, delay: 0.15, ease: transitionEase }}
            className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white leading-[1.08] mb-4"
          >
            {title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: transitionEase }}
            className="text-base sm:text-lg md:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl"
          >
            {subtitle}
          </motion.p>

          {actions && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              {actions}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}

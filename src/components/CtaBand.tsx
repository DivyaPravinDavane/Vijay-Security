"use client";

import React from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { transitionEase } from "./motion/MotionUtils";

interface CtaBandProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonHref?: string;
}

export default function CtaBand({
  title = "ENGINEERED FOR A SAFER TOMORROW",
  subtitle = "Talk to our experts to customize your security and fire protection needs.",
  buttonText = "Get in Touch",
  buttonHref = "/contact",
}: CtaBandProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative py-16 md:py-20 bg-[#0A0F1A] text-white border-t border-white/10 overflow-hidden">
      {/* Background glow & subtle pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(229,50,45,0.12)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#E5322D]/60 to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Heading Reveals Line by Line */}
        <motion.h2
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: transitionEase }}
          className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-white mb-4 leading-tight"
        >
          {title}
        </motion.h2>

        {/* Subtext Fades Up */}
        <motion.p
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15, ease: transitionEase }}
          className="text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl mx-auto mb-8 font-normal leading-relaxed"
        >
          {subtitle}
        </motion.p>

        {/* Red Button with Attention Ring & Shine Sweep */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="inline-block"
        >
          <Link
            href={buttonHref}
            className="btn-shine animate-attention group inline-flex items-center gap-2 px-8 py-3.5 bg-[#E5322D] hover:bg-[#d42722] text-white font-heading font-bold text-xs sm:text-sm uppercase tracking-wider rounded transition-all duration-200 shadow-xl shadow-red-900/30"
          >
            <span>{buttonText}</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

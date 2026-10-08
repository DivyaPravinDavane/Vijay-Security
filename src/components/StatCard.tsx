"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { transitionEase } from "./motion/MotionUtils";

interface StatCardProps {
  value: string;
  label: string;
  sublabel: string;
  isFirst?: boolean;
}

export default function StatCard({ value, label, sublabel }: StatCardProps) {
  const [animatedNumber, setAnimatedNumber] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (!isInView) return;
    if (shouldReduceMotion) return;

    let start = 0;
    let target = 0;
    let stepDuration = 1400;

    if (value.includes("1959")) {
      start = 1900;
      target = 1959;
      stepDuration = 1200;
    } else if (value.includes("65+")) {
      start = 0;
      target = 65;
    } else if (value.includes("4,500+")) {
      start = 0;
      target = 4500;
    } else {
      return;
    }

    let startTime: number;
    let frame: number;

    const run = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / stepDuration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(start + (target - start) * easeOut);
      setAnimatedNumber(current);

      if (progress < 1) {
        frame = requestAnimationFrame(run);
      } else {
        setAnimatedNumber(target);
      }
    };

    frame = requestAnimationFrame(run);
    return () => cancelAnimationFrame(frame);
  }, [isInView, value, shouldReduceMotion]);

  const displayValue = () => {
    if (value.includes("1959")) {
      return `EST. ${animatedNumber !== null ? animatedNumber : 1959}`;
    }
    if (value.includes("65+")) {
      return `${animatedNumber !== null ? animatedNumber : 65}+`;
    }
    if (value.includes("4,500+")) {
      return `${(animatedNumber !== null ? animatedNumber : 4500).toLocaleString()}+`;
    }
    if (value.includes("24×7")) return "24×7";
    return label;
  };

  return (
    <div
      ref={ref}
      className="relative flex flex-col items-center sm:items-start text-center sm:text-left px-4 py-5 md:py-6 group"
    >
      <motion.div
        whileHover={{ y: -2 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <div className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight group-hover:text-[#E5322D] transition-colors duration-200">
          {displayValue()}
        </div>
        <div className="text-xs sm:text-sm font-medium text-slate-400 mt-1 uppercase tracking-wider">
          {sublabel}
        </div>
      </motion.div>

      {/* Thin Red Divider Drawing In on Scroll */}
      <motion.span
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: transitionEase }}
        style={{ transformOrigin: "top" }}
        className="hidden sm:block absolute top-4 bottom-4 right-0 w-[1px] bg-gradient-to-b from-transparent via-[#E5322D]/40 to-transparent group-last:hidden"
      />
    </div>
  );
}

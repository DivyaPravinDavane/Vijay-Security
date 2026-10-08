"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { transitionEase } from "./MotionUtils";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if preloader was already shown in this session
    const hasLoaded = sessionStorage.getItem("vssl_preloader_shown");
    if (hasLoaded) {
      setLoading(false);
      return;
    }

    const timer = setTimeout(() => {
      setLoading(false);
      sessionStorage.setItem("vssl_preloader_shown", "true");
    }, 1300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{
            y: "-100%",
            transition: { duration: 0.65, ease: transitionEase },
          }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0A0F1A] text-white"
        >
          {/* Ambient red radial glow */}
          <div className="absolute w-72 h-72 rounded-full bg-[#E5322D]/15 blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center">
            {/* SVG Shield with Stroke Drawing Animation */}
            <div className="w-16 h-20 relative mb-4">
              <svg
                viewBox="0 0 24 28"
                className="w-full h-full"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Shield Outline Path */}
                <motion.path
                  d="M12 1L2 5v9c0 7.5 4.3 14.5 10 15 5.7-.5 10-7.5 10-15V5L12 1z"
                  stroke="#E5322D"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                />

                {/* V Mark Path */}
                <motion.path
                  d="M7.5 9l4.5 9 4.5-9"
                  stroke="#FFFFFF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.35, ease: "easeInOut" }}
                />
              </svg>
            </div>

            {/* Brand Title Stagger */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.55 }}
              className="flex flex-col items-center"
            >
              <span className="font-heading text-lg sm:text-xl font-extrabold uppercase tracking-widest text-white leading-none">
                VIJAY SECURITY
              </span>
              <span className="text-[9px] tracking-[0.3em] text-slate-400 font-semibold uppercase mt-1">
                SYSTEMS PVT. LTD.
              </span>
            </motion.div>

            {/* Progress line */}
            <div className="w-28 h-[2px] bg-white/10 rounded-full mt-6 overflow-hidden">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 1.1, ease: "easeInOut" }}
                className="w-full h-full bg-[#E5322D]"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

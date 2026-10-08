"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? scrollY / docHeight : 0;

      setScrollProgress(progress);
      if (scrollY > 600) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const strokeDashoffset = 126 - 126 * scrollProgress;

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          key="scroll-top-btn"
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.6 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToTop}
          aria-label="Scroll to top of page"
          className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-[#0A0F1A] border border-white/20 shadow-2xl flex items-center justify-center cursor-pointer group"
        >
          {/* Circular SVG Progress Ring */}
          <svg className="w-12 h-12 absolute inset-0 -rotate-90 pointer-events-none" viewBox="0 0 44 44">
            <circle
              cx="22"
              cy="22"
              r="20"
              fill="none"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="2.5"
            />
            <circle
              cx="22"
              cy="22"
              r="20"
              fill="none"
              stroke="#E5322D"
              strokeWidth="2.5"
              strokeDasharray="126"
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              className="transition-[stroke-dashoffset] duration-75"
            />
          </svg>

          {/* Arrow Icon */}
          <ChevronUp className="w-5 h-5 text-white group-hover:text-[#E5322D] transition-colors" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

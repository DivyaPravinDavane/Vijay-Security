"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Flame,
  Bell,
  Camera,
  ShieldCheck,
  Radar,
  Building2,
  Droplets,
  Megaphone,
  Zap,
  ArrowRight,
  X,
  CheckCircle2,
} from "lucide-react";
import { SolutionItem } from "@/data/siteData";
import { transitionEase } from "./motion/MotionUtils";

interface SolutionCardProps {
  solution: SolutionItem;
}

export default function SolutionCard({ solution }: SolutionCardProps) {
  const [modalOpen, setModalOpen] = useState(false);

  const getIcon = (iconName: string) => {
    const props = { className: "w-6 h-6 text-[#E5322D]" };
    switch (iconName) {
      case "Flame":
        return <Flame {...props} />;
      case "Bell":
        return <Bell {...props} />;
      case "Camera":
        return <Camera {...props} />;
      case "ShieldCheck":
        return <ShieldCheck {...props} />;
      case "Radar":
        return <Radar {...props} />;
      case "Building2":
        return <Building2 {...props} />;
      case "Droplets":
        return <Droplets {...props} />;
      case "Megaphone":
        return <Megaphone {...props} />;
      case "Zap":
        return <Zap {...props} />;
      default:
        return <ShieldCheck {...props} />;
    }
  };

  return (
    <>
      <motion.div
        onClick={() => setModalOpen(true)}
        whileHover={{
          y: -8,
          transition: { type: "spring", stiffness: 300, damping: 20 },
        }}
        whileTap={{ scale: 0.98 }}
        className="group relative bg-[#F3F5F8] hover:bg-white border border-[#E3E7EE] hover:border-[#E5322D]/40 rounded-lg p-6 sm:p-7 transition-colors duration-300 hover:shadow-2xl cursor-pointer flex flex-col justify-between"
      >
        <div>
          {/* Red Icon with Small Bounce on Hover */}
          <motion.div
            className="w-12 h-12 rounded-md bg-white group-hover:bg-[#E5322D]/10 flex items-center justify-center mb-5 border border-[#E3E7EE] group-hover:border-[#E5322D]/30 transition-colors shadow-sm"
          >
            <div className="transition-transform duration-200 group-hover:scale-110">
              {getIcon(solution.iconName)}
            </div>
          </motion.div>

          {/* Uppercase Title */}
          <h3 className="font-heading text-lg sm:text-xl font-bold uppercase tracking-tight text-[#0F172A] group-hover:text-[#E5322D] transition-colors mb-2">
            {solution.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-[#64748B] leading-relaxed line-clamp-2">
            {solution.description}
          </p>
        </div>

        {/* Explore Link with Slide-right Arrow & Animated Underline */}
        <div className="mt-6 pt-4 border-t border-[#E3E7EE]/60 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#E5322D]">
          <span className="relative">
            Explore
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#E5322D] group-hover:w-full transition-all duration-300" />
          </span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1.5" />
        </div>
      </motion.div>

      {/* Interactive Modal */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm"
            onClick={() => setModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 15 }}
              transition={{ duration: 0.3, ease: transitionEase }}
              className="bg-white rounded-xl max-w-xl w-full p-6 sm:p-8 relative shadow-2xl border border-slate-200"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setModalOpen(false)}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-md bg-[#E5322D]/10 flex items-center justify-center border border-[#E5322D]/20">
                  {getIcon(solution.iconName)}
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-widest text-[#E5322D] font-bold">
                    System Specification
                  </span>
                  <h3 className="font-heading text-2xl font-extrabold uppercase text-[#0F172A]">
                    {solution.title}
                  </h3>
                </div>
              </div>

              <p className="text-slate-600 mb-6 leading-relaxed text-sm">
                {solution.description}
              </p>

              <div className="space-y-4 mb-6">
                <h4 className="text-xs uppercase tracking-wider font-bold text-slate-800">
                  Key System Capabilities
                </h4>
                <ul className="space-y-2 text-sm text-slate-700">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#E5322D] shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#F3F5F8] p-3.5 rounded-lg border border-[#E3E7EE] text-xs text-slate-600 mb-6">
                <span className="font-bold text-[#0F172A] block mb-0.5">
                  Standards & Compliance:
                </span>
                {solution.specs}
              </div>

              <div className="flex justify-end gap-3">
                <button
                  onClick={() => setModalOpen(false)}
                  className="px-4 py-2 border border-slate-300 text-xs font-semibold uppercase tracking-wider text-slate-700 rounded hover:bg-slate-50 transition-colors"
                >
                  Close
                </button>
                <a
                  href="/contact"
                  className="btn-shine px-5 py-2 bg-[#E5322D] hover:bg-[#d42722] text-white text-xs font-heading font-bold uppercase tracking-wider rounded transition-colors"
                >
                  Request Quote
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

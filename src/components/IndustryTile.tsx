"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X, ShieldCheck } from "lucide-react";
import { IndustryItem } from "@/data/siteData";
import { transitionEase } from "./motion/MotionUtils";

interface IndustryTileProps {
  industry: IndustryItem;
  aspectRatio?: string;
}

export default function IndustryTile({
  industry,
  aspectRatio = "aspect-[4/3]",
}: IndustryTileProps) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <motion.div
        onClick={() => setModalOpen(true)}
        whileHover={{
          y: -6,
          transition: { type: "spring", stiffness: 300, damping: 20 },
        }}
        whileTap={{ scale: 0.98 }}
        className={`group relative overflow-hidden rounded-md cursor-pointer border border-[#E3E7EE] bg-[#0A0F1A] shadow-sm hover:shadow-2xl transition-shadow duration-300 ${aspectRatio}`}
      >
        {/* Background Image with Hover Zoom */}
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={industry.image}
            alt={industry.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
            className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
          />
          {/* Subtle gradient vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1A] via-[#0A0F1A]/40 to-transparent opacity-85 group-hover:opacity-75 transition-opacity duration-300" />
        </div>

        {/* Hover Red Accent Line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-[#E5322D] transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300" />

        {/* Bottom Label Bar Slides Up on Hover */}
        <div className="absolute bottom-0 inset-x-0 p-3 sm:p-4 bg-gradient-to-t from-[#0A0F1A] via-[#0A0F1A]/90 to-transparent transition-transform duration-300 group-hover:-translate-y-1">
          <div className="flex items-center justify-between">
            <h3 className="font-heading text-sm sm:text-base font-bold uppercase tracking-wider text-white group-hover:text-[#E5322D] transition-colors drop-shadow-sm relative">
              {industry.name}
              {/* Expanding red underline on hover */}
              <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-[#E5322D] group-hover:w-full transition-all duration-300" />
            </h3>
            <span className="opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1 duration-200 text-[#E5322D]">
              <ArrowRight className="w-4 h-4" />
            </span>
          </div>
          <p className="text-[11px] text-slate-300 line-clamp-1 mt-0.5 opacity-90 group-hover:opacity-100">
            {industry.projectsCount}
          </p>
        </div>
      </motion.div>

      {/* Industry Details Modal */}
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
              className="bg-white rounded-xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-200"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-48 w-full">
                <Image
                  src={industry.image}
                  alt={industry.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1A] to-transparent opacity-80" />
                <button
                  onClick={() => setModalOpen(false)}
                  className="absolute top-3 right-3 p-1.5 bg-black/60 hover:bg-black/80 text-white rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-[11px] uppercase tracking-widest text-[#E5322D] font-bold">
                    Sector Overview
                  </span>
                  <h3 className="font-heading text-2xl font-bold uppercase text-white">
                    {industry.name}
                  </h3>
                </div>
              </div>

              <div className="p-6">
                <p className="text-sm text-slate-600 mb-5 leading-relaxed">
                  {industry.description}
                </p>

                <div className="mb-5">
                  <h4 className="text-xs uppercase font-bold text-slate-800 tracking-wider mb-2.5">
                    Tailored Security & Safety Deployments
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {industry.solutions.map((sol, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#F3F5F8] border border-[#E3E7EE] text-xs font-medium text-slate-700 rounded"
                      >
                        <ShieldCheck className="w-3.5 h-3.5 text-[#E5322D]" />
                        {sol}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-500 font-medium">
                    Track Record:{" "}
                    <strong className="text-slate-900">{industry.projectsCount}</strong>
                  </span>
                  <a
                    href="/contact"
                    className="btn-shine px-4 py-2 bg-[#E5322D] text-white text-xs font-heading font-bold uppercase tracking-wider rounded transition-colors"
                  >
                    Consult Sector Expert
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

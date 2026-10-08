"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowRight, X, Award, ShieldCheck, CheckCircle2 } from "lucide-react";
import { CertificateItem } from "@/data/siteData";
import { transitionEase } from "./motion/MotionUtils";

interface CertificateCardProps {
  certificate: CertificateItem;
}

export default function CertificateCard({
  certificate,
}: CertificateCardProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const shouldReduceMotion = useReducedMotion();

  // Close modal on Esc key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setModalOpen(false);
    };
    if (modalOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [modalOpen]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setTilt({
      x: -(y / rect.height) * 10,
      y: (x / rect.width) * 10,
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <>
      <motion.div
        onClick={() => setModalOpen(true)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{
          rotateX: tilt.x,
          rotateY: tilt.y,
        }}
        transition={{ type: "spring", stiffness: 350, damping: 25 }}
        whileHover={{
          y: -7,
          transition: { type: "spring", stiffness: 300, damping: 20 },
        }}
        whileTap={{ scale: 0.98 }}
        style={{ perspective: 1000 }}
        className="group bg-[#F3F5F8] hover:bg-white border border-[#E3E7EE] hover:border-[#E5322D]/40 rounded-lg p-5 sm:p-6 transition-colors duration-300 hover:shadow-2xl cursor-pointer flex flex-col justify-between"
      >
        <div>
          {/* Document Thumbnail Preview */}
          <div className="relative w-full h-44 sm:h-48 bg-white border border-slate-300/80 rounded p-3 mb-5 shadow-sm group-hover:shadow-md transition-shadow flex flex-col justify-between overflow-hidden">
            {/* Certificate Ornamental Border */}
            <div className="absolute inset-1.5 border border-amber-800/20 pointer-events-none rounded-[2px]" />
            <div className="absolute inset-2 border border-dashed border-amber-800/30 pointer-events-none" />

            {/* Top Header of Certificate Thumbnail */}
            <div className="flex items-center justify-between border-b border-slate-200 pb-2 relative z-10">
              <div className="w-6 h-6 rounded-full bg-amber-600/10 flex items-center justify-center text-amber-700">
                <Award className="w-3.5 h-3.5" />
              </div>
              <span className="text-[9px] uppercase tracking-widest text-slate-400 font-semibold">
                Official Credential
              </span>
              <div className="w-5 h-5 rounded-full bg-red-600/10 flex items-center justify-center text-[#E5322D]">
                <ShieldCheck className="w-3 h-3" />
              </div>
            </div>

            {/* Certificate Thumbnail Center Text */}
            <div className="my-auto text-center px-2 py-3 relative z-10">
              <div className="text-[9px] uppercase tracking-wider text-slate-500 font-semibold mb-1">
                Certificate of Compliance
              </div>
              <div className="font-heading text-sm sm:text-base font-bold text-slate-800 uppercase tracking-tight line-clamp-2">
                {certificate.title}
              </div>
              <div className="text-[10px] text-slate-500 mt-1 line-clamp-1 italic">
                {certificate.authority}
              </div>
            </div>

            {/* Certificate Bottom Seal & Signature Line */}
            <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-[8px] text-slate-400 relative z-10">
              <span>NO: {certificate.docNumber}</span>
              <div className="w-5 h-5 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-[7px] font-bold text-amber-800">
                ★
              </div>
              <span>{certificate.validity}</span>
            </div>
          </div>

          {/* Certificate Title */}
          <h3 className="font-heading text-base sm:text-lg font-bold uppercase tracking-tight text-[#0F172A] group-hover:text-[#E5322D] transition-colors mb-1.5">
            {certificate.title}
          </h3>

          <p className="text-xs text-[#64748B] line-clamp-2 leading-relaxed">
            {certificate.description}
          </p>
        </div>

        {/* View Certificate Link with Slide Arrow */}
        <div className="mt-5 pt-3 border-t border-[#E3E7EE]/60 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#E5322D]">
          <span className="relative">
            View Certificate
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#E5322D] group-hover:w-full transition-all duration-300" />
          </span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1.5" />
        </div>
      </motion.div>

      {/* Lightbox Modal with Scale & Fade */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 15 }}
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

              {/* Document display card */}
              <div className="border-4 border-double border-amber-800/30 bg-amber-50/30 p-6 sm:p-8 rounded-lg mb-6 relative">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-red-600/10 flex items-center justify-center text-[#E5322D]">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-[#E5322D] font-bold block">
                        Vijay Security Systems Pvt. Ltd.
                      </span>
                      <span className="text-[9px] text-slate-500 uppercase tracking-wider">
                        Accreditation Registry
                      </span>
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-amber-600 bg-amber-100 flex items-center justify-center text-amber-800 text-xs font-bold shadow-sm">
                    ★ SEAL ★
                  </div>
                </div>

                <div className="text-center my-6">
                  <span className="text-[11px] uppercase tracking-widest text-slate-500 font-semibold">
                    This Certifies That
                  </span>
                  <h3 className="font-heading text-2xl font-bold uppercase text-[#0F172A] mt-1 mb-2">
                    {certificate.title}
                  </h3>
                  <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                    Has been officially awarded and verified by{" "}
                    <strong>{certificate.authority}</strong> under compliance
                    standard guidelines for life safety engineering.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-amber-800/20 text-xs">
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase">
                      Registration No:
                    </span>
                    <span className="font-mono font-semibold text-slate-800">
                      {certificate.docNumber}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-slate-400 block text-[10px] uppercase">
                      Status / Validity:
                    </span>
                    <span className="font-semibold text-emerald-700 flex items-center justify-end gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      {certificate.validity}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-xs text-slate-600 mb-6 leading-relaxed">
                {certificate.description}
              </p>

              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-500">
                  Category: <strong>{certificate.category}</strong>
                </span>
                <button
                  onClick={() => setModalOpen(false)}
                  className="btn-shine px-5 py-2 bg-[#E5322D] hover:bg-[#d42722] text-white text-xs font-heading font-bold uppercase tracking-wider rounded transition-colors"
                >
                  Close Verification
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

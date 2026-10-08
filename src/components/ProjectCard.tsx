"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X, CheckCircle2 } from "lucide-react";
import { ProjectItem } from "@/data/siteData";
import { transitionEase } from "./motion/MotionUtils";

interface ProjectCardProps {
  project: ProjectItem;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <motion.div
        onClick={() => setModalOpen(true)}
        whileHover={{
          y: -7,
          transition: { type: "spring", stiffness: 300, damping: 20 },
        }}
        whileTap={{ scale: 0.98 }}
        className="group relative overflow-hidden rounded-lg cursor-pointer border border-[#E3E7EE] bg-[#0A0F1A] shadow-md hover:shadow-2xl transition-shadow duration-300 flex flex-col h-full"
      >
        {/* Project Image with Zoom */}
        <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-slate-900">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
          />
          {/* Subtle gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1A] via-[#0A0F1A]/30 to-transparent" />

          {/* Region Tag */}
          <div className="absolute top-3 left-3">
            <span className="px-2.5 py-1 bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-bold uppercase tracking-wider text-white rounded">
              {project.category}
            </span>
          </div>
        </div>

        {/* Dark Caption Area */}
        <div className="p-5 sm:p-6 bg-[#0A0F1A] flex flex-col justify-between flex-grow border-t border-white/5">
          <div>
            <h3 className="font-heading text-xl sm:text-2xl font-bold uppercase tracking-tight text-white group-hover:text-[#E5322D] transition-colors mb-2">
              {project.title}
            </h3>

            {/* Tags / Subtitle */}
            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-300 mb-4">
              {project.tags.map((tag, i) => (
                <span key={i} className="flex items-center gap-1.5">
                  <span>{tag}</span>
                  {i < project.tags.length - 1 && (
                    <span className="text-slate-600">|</span>
                  )}
                </span>
              ))}
            </div>
          </div>

          {/* Red Link with Animated Arrow */}
          <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#E5322D]">
            <span className="relative">
              View Project
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#E5322D] group-hover:w-full transition-all duration-300" />
            </span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1.5" />
          </div>
        </div>
      </motion.div>

      {/* Project Lightbox Modal */}
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
              initial={{ scale: 0.92, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 15 }}
              transition={{ duration: 0.3, ease: transitionEase }}
              className="bg-white rounded-xl max-w-2xl w-full overflow-hidden shadow-2xl border border-slate-200"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-64 sm:h-72 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1A] via-[#0A0F1A]/50 to-transparent" />
                <button
                  onClick={() => setModalOpen(false)}
                  className="absolute top-4 right-4 p-2 bg-black/60 hover:bg-black/90 text-white rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="absolute bottom-5 left-6 right-6">
                  <span className="text-xs uppercase tracking-widest text-[#E5322D] font-bold">
                    {project.category} Project Showcase
                  </span>
                  <h3 className="font-heading text-3xl font-extrabold uppercase text-white mt-1">
                    {project.title}
                  </h3>
                </div>
              </div>

              <div className="p-6 sm:p-8">
                {/* Meta Information Row */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6 p-3.5 bg-[#F3F5F8] rounded-lg border border-[#E3E7EE] text-xs">
                  <div>
                    <span className="text-slate-400 block uppercase tracking-wider text-[10px]">
                      Client
                    </span>
                    <strong className="text-slate-800">{project.client}</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block uppercase tracking-wider text-[10px]">
                      Location
                    </span>
                    <strong className="text-slate-800">{project.location}</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block uppercase tracking-wider text-[10px]">
                      Timeline
                    </span>
                    <strong className="text-slate-800">{project.year}</strong>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-xs uppercase font-bold text-slate-900 tracking-wider mb-2">
                    Project Scope & Implementation
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="text-xs uppercase font-bold text-slate-900 tracking-wider mb-2">
                    Delivered Metrics
                  </h4>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#E5322D]/10 text-[#E5322D] border border-[#E5322D]/20 rounded font-semibold text-xs">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>{project.metrics}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
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
                    Discuss Similar Project
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

"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { PROJECTS_DATA } from "@/data/siteData";
import { transitionEase } from "./motion/MotionUtils";

export default function FeaturedProjectShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const featured = PROJECTS_DATA.slice(0, 4);
  const shouldReduceMotion = useReducedMotion();

  const prevProject = () => {
    setCurrentIndex((prev) => (prev === 0 ? featured.length - 1 : prev - 1));
  };

  const nextProject = () => {
    setCurrentIndex((prev) => (prev === featured.length - 1 ? 0 : prev + 1));
  };

  const current = featured[currentIndex];

  return (
    <section className="py-20 bg-white border-b border-[#E3E7EE] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Expanding Red Line */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 mb-2.5">
              <motion.span
                initial={{ scaleX: shouldReduceMotion ? 1 : 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: transitionEase }}
                style={{ transformOrigin: "left" }}
                className="w-7 h-[2px] bg-[#E5322D] block shrink-0"
              />
              <span className="text-xs uppercase tracking-[0.25em] text-[#E5322D] font-bold">
                Proven Track Record
              </span>
            </div>

            <motion.h2
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: transitionEase }}
              className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase text-[#0F172A] tracking-tight"
            >
              FEATURED PROJECTS
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              href="/projects"
              className="group inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#E5322D] hover:underline"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>

        {/* Large Featured Card Sliding in from the Right */}
        <motion.div
          initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 45 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: transitionEase }}
          className="bg-[#F3F5F8] border border-[#E3E7EE] rounded-2xl overflow-hidden shadow-lg transition-all duration-300 group"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left Building Image with Inner Parallax / Zoom */}
            <div className="lg:col-span-7 relative min-h-[320px] sm:min-h-[420px] bg-slate-900 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: transitionEase }}
                  className="absolute inset-0"
                >
                  <Image
                    src={current.image}
                    alt={current.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#0A0F1A]/70 via-transparent to-transparent" />
                </motion.div>
              </AnimatePresence>

              <div className="absolute top-4 left-4 z-10">
                <span className="px-3 py-1 bg-black/60 backdrop-blur-md border border-white/20 text-white text-[11px] font-bold uppercase tracking-wider rounded">
                  {current.category} Showcase
                </span>
              </div>
            </div>

            {/* Right Project Details */}
            <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between bg-white">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4, ease: transitionEase }}
                >
                  <span className="text-xs font-bold uppercase tracking-widest text-[#E5322D] block mb-1">
                    Case Study
                  </span>
                  <h3 className="font-heading text-2xl sm:text-3xl font-extrabold uppercase text-[#0F172A] tracking-tight mb-4">
                    {current.title}
                  </h3>

                  <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                    {current.description}
                  </p>

                  {/* Bullet List Items Appearing One by One */}
                  <div className="space-y-3 mb-8">
                    {current.tags.map((tag, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.15 + idx * 0.1, duration: 0.35 }}
                        className="flex items-center gap-2.5 text-sm font-semibold text-slate-800"
                      >
                        <span className="w-2 h-2 rounded-full bg-[#E5322D]" />
                        <span>{tag}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Bottom Row */}
              <div className="pt-6 border-t border-[#E3E7EE] flex items-center justify-between">
                <Link
                  href="/projects"
                  className="group inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#E5322D]"
                >
                  <span>View Project</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1.5" />
                </Link>

                {/* Pagination arrows with Spring Scale */}
                <div className="flex items-center gap-2">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={prevProject}
                    aria-label="Previous project"
                    className="w-9 h-9 rounded border border-slate-300 hover:border-[#E5322D] hover:bg-[#E5322D] hover:text-white text-slate-700 flex items-center justify-center transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={nextProject}
                    aria-label="Next project"
                    className="w-9 h-9 rounded border border-slate-300 hover:border-[#E5322D] hover:bg-[#E5322D] hover:text-white text-slate-700 flex items-center justify-center transition-colors"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Carousel Indicator Dots with Spring Transitions */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {featured.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2 transition-all duration-300 rounded-full ${
                currentIndex === idx
                  ? "w-8 bg-[#E5322D]"
                  : "w-2 bg-slate-300 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

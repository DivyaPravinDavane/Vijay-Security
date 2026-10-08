"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import CtaBand from "@/components/CtaBand";
import { PROJECTS_DATA } from "@/data/siteData";
import { transitionEase } from "@/components/motion/MotionUtils";

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const filterPills = [
    "All",
    "India",
    "International",
    "Fire",
    "Security",
    "CCTV",
    "Access",
    "Infrastructure",
  ];

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "India") return project.category === "India";
    if (activeFilter === "International") return project.category === "International";
    if (activeFilter === project.discipline) return true;
    return project.tags.some((tag) =>
      tag.toLowerCase().includes(activeFilter.toLowerCase())
    );
  });

  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage) || 1;
  const currentProjects = filteredProjects.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    setCurrentPage(1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 1. Hero */}
      <Hero
        eyebrow="Case Studies & Deliveries"
        title="ENGINEERING SECURITY AT SCALE"
        subtitle="Explore selected fire, safety and security projects delivered across India and internationally."
        image="https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1600&q=80"
      />

      {/* 2. Projects Showcase Section */}
      <section className="py-16 md:py-20 bg-white border-b border-[#E3E7EE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Pill Row with Shared layoutId sliding background */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
            {filterPills.map((pill) => {
              const isActive = activeFilter === pill;
              return (
                <button
                  key={pill}
                  onClick={() => handleFilterChange(pill)}
                  className={`relative px-5 py-2 text-xs font-bold uppercase tracking-wider rounded transition-colors whitespace-nowrap cursor-pointer border ${
                    isActive
                      ? "border-[#E5322D]"
                      : "border-[#E3E7EE] bg-[#F3F5F8] hover:bg-slate-200"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeFilterPill"
                      className="absolute inset-0 bg-[#E5322D] rounded shadow-md shadow-red-900/20"
                      transition={{ type: "spring", stiffness: 450, damping: 32 }}
                    />
                  )}
                  <span
                    className={`relative z-10 transition-colors duration-150 ${
                      isActive ? "text-white" : "text-slate-700"
                    }`}
                  >
                    {pill}
                  </span>
                </button>
              );
            })}
          </div>

          {/* 2x2 Project Cards Grid with Layout Animations & AnimatePresence */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <AnimatePresence mode="popLayout">
              {currentProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -15 }}
                  transition={{ duration: 0.35, ease: transitionEase }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Carousel Arrows and Dots below with spring transitions */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-[#E3E7EE]">
            <span className="text-xs text-slate-500 font-medium">
              Showing {(currentPage - 1) * itemsPerPage + 1} -{" "}
              {Math.min(currentPage * itemsPerPage, filteredProjects.length)} of{" "}
              {filteredProjects.length} Projects
            </span>

            <div className="flex items-center gap-4">
              {/* Pagination Dots with spring transition */}
              <div className="flex items-center gap-1.5">
                {Array.from({ length: totalPages }).map((_, idx) => {
                  const isActive = currentPage === idx + 1;
                  return (
                    <button
                      key={idx}
                      onClick={() => setCurrentPage(idx + 1)}
                      aria-label={`Go to page ${idx + 1}`}
                      className="relative h-2 rounded-full cursor-pointer focus:outline-none"
                    >
                      <motion.div
                        animate={{
                          width: isActive ? 24 : 8,
                          backgroundColor: isActive ? "#E5322D" : "#cbd5e1",
                        }}
                        transition={{ type: "spring", stiffness: 400, damping: 25 }}
                        className="h-2 rounded-full"
                      />
                    </button>
                  );
                })}
              </div>

              {/* Prev / Next Arrows with spring hover/tap */}
              <div className="flex items-center gap-2">
                <motion.button
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.92 }}
                  onClick={handlePrevPage}
                  disabled={currentPage === 1}
                  aria-label="Previous page"
                  className="w-9 h-9 rounded border border-slate-300 hover:border-[#E5322D] hover:bg-[#E5322D] hover:text-white disabled:opacity-40 disabled:hover:bg-transparent disabled:hover:text-slate-400 text-slate-700 flex items-center justify-center transition-colors cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.92 }}
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                  aria-label="Next page"
                  className="w-9 h-9 rounded border border-slate-300 hover:border-[#E5322D] hover:bg-[#E5322D] hover:text-white disabled:opacity-40 disabled:hover:bg-transparent disabled:hover:text-slate-400 text-slate-700 flex items-center justify-center transition-colors cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dark CTA Band */}
      <CtaBand
        title="NEED ENTERPRISE TURNKEY DEPLOYMENT?"
        subtitle="Review engineering references or request custom RFP proposals for your enterprise infrastructure."
        buttonText="Get in Touch"
        buttonHref="/contact"
      />
    </div>
  );
}

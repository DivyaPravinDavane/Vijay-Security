"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Flame, Bell, Camera } from "lucide-react";
import HomeHero from "@/components/HomeHero";
import StatCard from "@/components/StatCard";
import InfrastructureDiagram from "@/components/InfrastructureDiagram";
import TechnologyShowcase from "@/components/TechnologyShowcase";
import IndustryTile from "@/components/IndustryTile";
import FeaturedProjectShowcase from "@/components/FeaturedProjectShowcase";
import CtaBand from "@/components/CtaBand";
import { SITE_STATS, INDUSTRIES_DATA } from "@/data/siteData";
import { transitionEase } from "@/components/motion/MotionUtils";

export default function HomePage() {
  const shouldReduceMotion = useReducedMotion();

  const homeSolutions = [
    {
      title: "FIRE PROTECTION",
      desc: "Automatic deluge, high-pressure hydrants & clean gas suppression.",
      image: "/images/fire-protection.jpg",
      href: "/solutions",
      icon: Flame,
    },
    {
      title: "FIRE DETECTION",
      desc: "Early-warning aspirating smoke detectors & addressable panels.",
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
      href: "/solutions",
      icon: Bell,
    },
    {
      title: "SECURITY & SURVEILLANCE",
      desc: "Ultra-HD optical & thermal cameras with AI behavioral analytics.",
      image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80",
      href: "/solutions",
      icon: Camera,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 1. Hero Section */}
      <HomeHero />

      {/* 2. Stats Strip (Dark) */}
      <section className="bg-[#0A0F1A] border-y border-white/10 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            {SITE_STATS.map((stat, i) => (
              <StatCard
                key={i}
                value={stat.value}
                label={stat.label}
                sublabel={stat.sublabel}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 3. One Partner For Your Entire Security Infrastructure */}
      <InfrastructureDiagram />

      {/* 4. Our Solutions (3 Image Cards with Staggered Rise & Hover Zoom) */}
      <section className="py-20 bg-white border-b border-[#E3E7EE] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                  Core Competencies
                </span>
              </div>

              <motion.h2
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1, ease: transitionEase }}
                className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase text-[#0F172A] tracking-tight"
              >
                OUR SOLUTIONS
              </motion.h2>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link
                href="/solutions"
                className="group inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#E5322D] hover:underline"
              >
                <span>View All Solutions</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {homeSolutions.map((sol, idx) => {
              const Icon = sol.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.12 * idx,
                    ease: transitionEase,
                  }}
                  whileHover={{
                    y: -8,
                    transition: { type: "spring", stiffness: 300, damping: 20 },
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    href={sol.href}
                    className="group relative h-80 sm:h-96 rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-[#E3E7EE] flex flex-col justify-end block"
                  >
                    <Image
                      src={sol.image}
                      alt={sol.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    {/* Dark Overlay Lightens on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1A] via-[#0A0F1A]/70 to-transparent opacity-95 group-hover:opacity-75 transition-opacity duration-300" />

                    {/* Red Bottom Border Grows on Hover */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#E5322D] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />

                    {/* Dark Label Overlay Slides Up */}
                    <div className="relative z-10 p-6 transition-transform duration-300 group-hover:-translate-y-1">
                      <div className="w-9 h-9 rounded bg-[#E5322D] flex items-center justify-center text-white mb-3 shadow-md transition-transform duration-200 group-hover:scale-105">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-heading text-xl sm:text-2xl font-bold uppercase tracking-tight text-white group-hover:text-[#E5322D] transition-colors mb-2">
                        {sol.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-300 line-clamp-2 mb-4 leading-relaxed">
                        {sol.desc}
                      </p>
                      <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#E5322D]">
                        <span className="relative">
                          Explore System
                          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#E5322D] group-hover:w-full transition-all duration-300" />
                        </span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1.5" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Explore Our Technology (6 Icon Tiles + Live Surveillance Slider Panel) */}
      <TechnologyShowcase />

      {/* 6. Industries We Protect (Staggered Grid Reveal) */}
      <section className="py-20 bg-[#F3F5F8] border-b border-[#E3E7EE] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                  Specialized Sector Expertise
                </span>
              </div>

              <motion.h2
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1, ease: transitionEase }}
                className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase text-[#0F172A] tracking-tight"
              >
                INDUSTRIES WE PROTECT
              </motion.h2>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link
                href="/industries"
                className="group inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#E5322D] hover:underline"
              >
                <span>View All Industries</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>

          {/* Staggered 2 Rows x 5 Columns Image Tiles */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {INDUSTRIES_DATA.map((ind, i) => (
              <motion.div
                key={ind.id}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.05 * i,
                  ease: transitionEase,
                }}
              >
                <IndustryTile industry={ind} aspectRatio="aspect-square" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Featured Projects (Telenor India Showcase) */}
      <FeaturedProjectShowcase />

      {/* 8. Dark CTA Band */}
      <CtaBand
        title="ENGINEERED FOR A SAFER TOMORROW"
        subtitle="Talk to our experts to customize your security and fire protection needs."
        buttonText="Get in Touch"
        buttonHref="/contact"
      />
    </div>
  );
}

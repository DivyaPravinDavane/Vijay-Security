"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ShieldCheck, Award, Lightbulb, Users } from "lucide-react";
import Hero from "@/components/Hero";
import CertificateCard from "@/components/CertificateCard";
import CtaBand from "@/components/CtaBand";
import { TIMELINE_DATA, CERTIFICATES_DATA } from "@/data/siteData";
import { transitionEase } from "@/components/motion/MotionUtils";

export default function AboutPage() {
  const shouldReduceMotion = useReducedMotion();

  const values = [
    {
      title: "Integrity",
      desc: "Uncompromising ethics in life-safety engineering and client confidentiality.",
      icon: ShieldCheck,
    },
    {
      title: "Excellence",
      desc: "Zero-defect delivery matching NFPA, NBC, and global ISO benchmarks.",
      icon: Award,
    },
    {
      title: "Innovation",
      desc: "Pioneering AI surveillance, IoT sensors, and eco-friendly gas suppression.",
      icon: Lightbulb,
    },
    {
      title: "Customer Focus",
      desc: "24x7 mission-critical emergency support protecting human lives and capital assets.",
      icon: Users,
    },
  ];

  const featuredCertificate = CERTIFICATES_DATA[0];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 1. Hero with Mask Wipe */}
      <Hero
        eyebrow="Our Heritage"
        title="ENGINEERING TRUST SINCE 1959"
        subtitle="A legacy of safety, innovation and excellence."
        image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80"
      />

      {/* 2. OUR JOURNEY (Self-drawing Horizontal Timeline) */}
      <section className="py-20 bg-white border-b border-[#E3E7EE] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
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
                65+ Years of Evolution
              </span>
            </div>

            <motion.h2
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: transitionEase }}
              className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase text-[#0F172A] tracking-tight"
            >
              OUR JOURNEY
            </motion.h2>
          </div>

          {/* Horizontal Timeline Container */}
          <div className="relative overflow-x-auto pb-8 pt-4 no-scrollbar">
            <div className="min-w-[800px] relative px-4">
              {/* Red Horizontal Connecting Line Drawing Left to Right on Scroll */}
              <motion.div
                initial={{ scaleX: shouldReduceMotion ? 1 : 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: transitionEase }}
                style={{ transformOrigin: "left" }}
                className="absolute top-5 left-10 right-10 h-0.5 bg-[#E5322D]"
              />

              <div className="grid grid-cols-6 gap-6 relative z-10">
                {TIMELINE_DATA.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: 0.2 + 0.15 * index,
                      ease: transitionEase,
                    }}
                    className="flex flex-col items-center text-center group"
                  >
                    {/* Sequential Red Dot with Ripple Ring */}
                    <div className="relative w-10 h-10 rounded-full bg-white border-4 border-[#E5322D] flex items-center justify-center shadow-md mb-6 group-hover:scale-110 transition-transform">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#E5322D]" />
                      <span className="absolute inset-0 rounded-full border border-[#E5322D] animate-ping opacity-25 pointer-events-none" />
                    </div>

                    {/* Milestone Year Badge */}
                    <span className="font-heading font-black text-lg sm:text-xl text-[#0F172A] uppercase tracking-tight group-hover:text-[#E5322D] transition-colors mb-1.5">
                      {item.year}
                    </span>

                    {/* Milestone Title */}
                    <h4 className="font-heading text-xs sm:text-sm font-bold uppercase text-slate-800 tracking-wide mb-2 leading-snug">
                      {item.title}
                    </h4>

                    <p className="text-[11px] text-slate-500 leading-relaxed max-w-[140px]">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR LEADERSHIP (Image Clip-path Wipe & Text Slide-in) */}
      <section className="py-20 bg-[#F3F5F8] border-b border-[#E3E7EE] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
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
                Visionary Governance
              </span>
            </div>

            <motion.h2
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: transitionEase }}
              className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase text-[#0F172A] tracking-tight"
            >
              OUR LEADERSHIP
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left: Boardroom Image Reveals with Clip-path Wipe from Left */}
            <motion.div
              initial={
                shouldReduceMotion
                  ? { opacity: 0 }
                  : { clipPath: "inset(0 100% 0 0)", opacity: 0.6 }
              }
              whileInView={{ clipPath: "inset(0 0% 0 0)", opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: transitionEase }}
              className="lg:col-span-7 relative min-h-[340px] sm:min-h-[420px] rounded-xl overflow-hidden shadow-lg border border-[#E3E7EE] bg-slate-900"
            >
              <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
                alt="Executive Boardroom Conference Table"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1A]/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#E5322D] block mb-1">
                  Executive Headquarters
                </span>
                <p className="text-white text-base sm:text-lg font-heading font-bold uppercase">
                  Vijay Security Systems Directorate • Mumbai, India
                </p>
              </div>
            </motion.div>

            {/* Right: Text Card Slides in from Right */}
            <motion.div
              initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, ease: transitionEase }}
              className="lg:col-span-5 bg-white p-8 sm:p-10 rounded-xl border border-[#E3E7EE] shadow-sm flex flex-col justify-between"
            >
              <div>
                <span className="text-xs uppercase tracking-widest text-[#E5322D] font-bold block mb-2">
                  Executive Board
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl font-extrabold uppercase text-[#0F172A] tracking-tight mb-5 leading-snug">
                  A TEAM DRIVEN BY VISION, EXPERIENCE AND COMMITMENT TO SAFETY.
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  Founded by pioneering engineers in 1959, Vijay Security Systems is helmed by seasoned industry veterans with deep expertise in hazardous fire dynamics, aerospace defense systems, and smart campus automation.
                </p>
                <p className="text-sm text-slate-600 leading-relaxed mb-8">
                  Our directors maintain active leadership in national safety bodies and contribute to the evolution of India&apos;s National Building Code (NBC) for fire & life safety.
                </p>
              </div>

              <div>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
                  <Link
                    href="/contact"
                    className="btn-shine inline-flex items-center gap-2 px-6 py-3 bg-[#0A0F1A] hover:bg-slate-800 text-white font-heading font-bold text-xs uppercase tracking-wider rounded transition-colors shadow group"
                  >
                    <span>Meet Our Team</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. OUR VALUES (4 Icon Circles Pop in with Stagger & Soft Red Tint Hover) */}
      <section className="py-20 bg-white border-b border-[#E3E7EE] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.25em] text-[#E5322D] font-bold block mb-2">
              What Defines Us
            </span>
            <motion.h2
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: transitionEase }}
              className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase text-[#0F172A] tracking-tight"
            >
              OUR VALUES
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((val, idx) => {
              const Icon = val.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 25, scale: 0.92 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 0.08 * idx,
                    ease: transitionEase,
                  }}
                  whileHover={{
                    y: -6,
                    transition: { type: "spring", stiffness: 300, damping: 20 },
                  }}
                  className="flex flex-col items-center text-center p-6 rounded-xl border border-[#E3E7EE] bg-[#F3F5F8] hover:bg-white hover:border-[#E5322D]/40 transition-colors duration-300 hover:shadow-xl group"
                >
                  {/* Circular Icon with Soft Red Tint on Hover */}
                  <div className="w-20 h-20 rounded-full bg-white border-2 border-[#E3E7EE] group-hover:border-[#E5322D] group-hover:bg-[#E5322D]/10 flex items-center justify-center mb-6 transition-all duration-300 shadow-sm">
                    <Icon className="w-8 h-8 text-[#E5322D] transition-transform duration-300 group-hover:scale-115 group-hover:rotate-6" />
                  </div>

                  <h3 className="font-heading text-lg font-bold uppercase tracking-tight text-[#0F172A] group-hover:text-[#E5322D] transition-colors mb-2">
                    {val.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {val.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. CERTIFICATIONS & COMPLIANCE Preview Card with Tilt */}
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
                  Certified Quality
                </span>
              </div>

              <motion.h2
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1, ease: transitionEase }}
                className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase text-[#0F172A] tracking-tight"
              >
                CERTIFICATIONS & COMPLIANCE
              </motion.h2>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link
                href="/certifications"
                className="group inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#E5322D] hover:underline"
              >
                <span>View All</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 25, rotate: -2.5 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: transitionEase }}
            className="max-w-md"
          >
            <CertificateCard certificate={featuredCertificate} />
          </motion.div>
        </div>
      </section>

      {/* Dark CTA Band */}
      <CtaBand
        title="READY TO PARTNER WITH AN INDUSTRY LEADER?"
        subtitle="Contact our engineers to assess your infrastructure safety requirements."
        buttonText="Get in Touch"
        buttonHref="/contact"
      />
    </div>
  );
}

"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Wrench,
  ClipboardCheck,
  AlertTriangle,
  Headphones,
  Siren,
  Flame,
  Bell,
  Camera,
  ShieldCheck,
  Building2,
  Cpu,
  ArrowRight,
} from "lucide-react";
import Hero from "@/components/Hero";
import { AMC_MONITORING_SERVICES, AMC_EQUIPMENT_LIST } from "@/data/siteData";
import {
  SectionHeader,
  FadeUp,
  Stagger,
  StaggerItem,
  springTransition,
} from "@/components/motion/MotionUtils";

export default function ServicesPage() {
  const getMonitoringIcon = (iconName: string) => {
    const props = { className: "w-6 h-6 text-[#E5322D]" };
    switch (iconName) {
      case "Wrench":
        return <Wrench {...props} />;
      case "ClipboardCheck":
        return <ClipboardCheck {...props} />;
      case "AlertTriangle":
        return <AlertTriangle {...props} />;
      case "Headphones":
        return <Headphones {...props} />;
      case "Siren":
        return <Siren {...props} />;
      default:
        return <Wrench {...props} />;
    }
  };

  const getEquipmentIcon = (iconName: string) => {
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
      case "Building2":
        return <Building2 {...props} />;
      case "Cpu":
        return <Cpu {...props} />;
      default:
        return <ShieldCheck {...props} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 1. Hero with Technician Image */}
      <Hero
        eyebrow="Annual Maintenance & Support"
        title="PROTECTION DOESN'T END AFTER INSTALLATION."
        subtitle="Reliable maintenance. Continuous monitoring. Total peace of mind."
        image="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1600&q=80"
      />

      {/* 2. 24X7 MONITORING Section (5 Icon Items) */}
      <section className="py-20 bg-white border-b border-[#E3E7EE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-2">
              <span className="relative inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-extrabold uppercase tracking-widest text-[#E5322D] bg-[#E5322D]/10">
                <span className="absolute -inset-1 rounded-full border border-[#E5322D] animate-ping opacity-30" />
                24×7
              </span>
              <span className="text-xs uppercase tracking-[0.25em] text-[#E5322D] font-bold">
                Proactive Reliability
              </span>
            </div>
            <SectionHeader title="24×7 MONITORING & MAINTENANCE" className="!mb-0" />
          </div>

          <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {AMC_MONITORING_SERVICES.map((item, idx) => (
              <StaggerItem key={idx}>
                <motion.div
                  whileHover={{ y: -6, transition: springTransition }}
                  className="h-full bg-[#F3F5F8] border border-[#E3E7EE] hover:border-[#E5322D]/40 rounded-xl p-6 flex flex-col items-center text-center hover:bg-white hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="w-14 h-14 rounded-full bg-white group-hover:bg-[#E5322D]/10 border border-[#E3E7EE] group-hover:border-[#E5322D]/30 flex items-center justify-center mb-5 transition-colors shadow-sm">
                    {getMonitoringIcon(item.icon)}
                  </div>

                  <h3 className="font-heading text-base font-bold uppercase text-[#0F172A] group-hover:text-[#E5322D] transition-colors mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-500 leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* 3. WE PROVIDE AMC FOR Section (6 Icon Items) */}
      <section className="py-20 bg-[#F3F5F8] border-b border-[#E3E7EE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Coverage Scope"
            title="WE PROVIDE AMC FOR"
            className="mb-14"
          />

          <Stagger className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            {AMC_EQUIPMENT_LIST.map((item, idx) => (
              <StaggerItem key={idx}>
                <motion.div
                  whileHover={{ y: -6, transition: springTransition }}
                  className="h-full bg-white border border-[#E3E7EE] hover:border-[#E5322D]/40 rounded-xl p-5 flex flex-col items-center text-center hover:shadow-lg transition-all duration-200 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-[#F3F5F8] group-hover:bg-[#E5322D]/10 flex items-center justify-center mb-3 transition-colors">
                    {getEquipmentIcon(item.icon)}
                  </div>

                  <h3 className="font-heading text-sm font-bold uppercase text-[#0F172A] group-hover:text-[#E5322D] transition-colors mb-1.5">
                    {item.title}
                  </h3>

                  <p className="text-[11px] text-slate-500 line-clamp-2">
                    {item.desc}
                  </p>
                </motion.div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* 4. Dark CTA Strip: KEEP YOUR SYSTEMS RUNNING */}
      <section className="py-16 bg-[#0A0F1A] text-white border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <FadeUp>
              <span className="text-xs uppercase tracking-widest text-[#E5322D] font-bold block mb-1">
                Zero Downtime Guarantee
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase text-white tracking-tight">
                KEEP YOUR SYSTEMS RUNNING
              </h2>
              <p className="text-sm text-slate-400 mt-1 max-w-xl">
                Customized comprehensive and non-comprehensive Annual Maintenance Contracts with guaranteed SLA response times.
              </p>
            </FadeUp>

            <FadeUp delay={0.15}>
              <Link
                href="/contact"
                className="btn-shine inline-flex items-center gap-2 px-7 py-3.5 bg-[#E5322D] hover:bg-[#d42722] text-white font-heading font-bold text-xs uppercase tracking-wider rounded transition-all shadow-lg shadow-red-900/30 whitespace-nowrap shrink-0 group active:scale-95"
              >
                <span>Request AMC Support</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </FadeUp>
          </div>
        </div>
      </section>
    </div>
  );
}

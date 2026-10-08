"use client";

import React from "react";
import { motion } from "framer-motion";
import { ClientItem } from "@/data/siteData";

interface LogoCardProps {
  client: ClientItem;
}

export default function LogoCard({ client }: LogoCardProps) {
  const renderLogo = () => {
    switch (client.id) {
      case "adobe":
        return (
          <div className="flex items-center gap-2">
            <svg className="w-6 h-6 text-[#FF0000] fill-current" viewBox="0 0 24 24">
              <path d="M13.966 22h3.945L22 3.633H16.89L13.966 22zM2 3.633L6.089 22h3.945L7.11 3.633H2zm8.56 10.428l1.44 4.09h1.77L11.96 4.975h-.372l-3.818 10.63h1.76l1.03-1.544z" />
            </svg>
            <span className="font-bold text-lg tracking-tight text-[#FF0000]">Adobe</span>
          </div>
        );

      case "airtel":
        return (
          <div className="flex items-center gap-1.5">
            <span className="w-3.5 h-3.5 rounded-full bg-[#ED1B24]" />
            <span className="font-extrabold text-xl tracking-tight text-[#ED1B24] font-sans">airtel</span>
          </div>
        );

      case "cbre":
        return (
          <div className="flex items-center">
            <span className="font-extrabold text-2xl tracking-wider text-[#003F2D] font-mono">CBRE</span>
          </div>
        );

      case "dupont":
        return (
          <div className="px-3 py-1 rounded-full border-2 border-[#DA291C] flex items-center justify-center">
            <span className="font-extrabold text-sm tracking-widest text-[#DA291C]">DUPONT</span>
          </div>
        );

      case "ikea":
        return (
          <div className="bg-[#0058A3] px-3.5 py-1.5 rounded flex items-center justify-center">
            <div className="bg-[#FFDA1A] px-2 py-0.5 rounded-full flex items-center justify-center">
              <span className="font-black text-sm tracking-widest text-[#0058A3]">IKEA</span>
            </div>
          </div>
        );

      case "lt":
        return (
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#0B4EA2] flex items-center justify-center text-white font-bold text-xs">
              L&T
            </div>
            <span className="font-bold text-base tracking-tight text-[#0B4EA2]">LARSEN & TOUBRO</span>
          </div>
        );

      case "wipro":
        return (
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-purple-600 via-pink-500 to-amber-400" />
            <span className="font-medium text-lg tracking-tight text-[#3B115A]">wipro</span>
          </div>
        );

      case "mastercard":
        return (
          <div className="flex items-center gap-1.5">
            <div className="flex -space-x-2.5 items-center">
              <div className="w-5 h-5 rounded-full bg-[#EB001B] opacity-90" />
              <div className="w-5 h-5 rounded-full bg-[#F79E1B] opacity-90" />
            </div>
            <span className="font-semibold text-sm tracking-tight text-slate-800">mastercard</span>
          </div>
        );

      case "bank-of-america":
        return (
          <div className="flex items-center gap-2">
            <div className="grid grid-cols-2 gap-0.5 w-4 h-4">
              <div className="bg-[#012169]" />
              <div className="bg-[#E31837]" />
              <div className="bg-[#E31837]" />
              <div className="bg-[#012169]" />
            </div>
            <span className="font-bold text-xs tracking-tight text-[#012169]">Bank of America</span>
          </div>
        );

      case "hsbc":
        return (
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-[#DB0011] relative flex items-center justify-center">
              <div className="w-2.5 h-2.5 bg-white transform rotate-45" />
            </div>
            <span className="font-black text-base tracking-tight text-slate-900">HSBC</span>
          </div>
        );

      case "sbi":
        return (
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-[#280071] flex items-center justify-center relative">
              <div className="w-2 h-2 rounded-full bg-white absolute top-1" />
              <div className="w-1 h-3 bg-white absolute bottom-0.5" />
            </div>
            <span className="font-black text-lg tracking-wider text-[#280071]">SBI</span>
          </div>
        );

      case "tata":
        return (
          <div className="flex items-center gap-1.5">
            <div className="w-6 h-6 rounded-full border-2 border-[#0F4C81] flex items-center justify-center">
              <span className="text-[10px] font-black text-[#0F4C81]">T</span>
            </div>
            <span className="font-extrabold text-base tracking-widest text-[#0F4C81]">TATA</span>
          </div>
        );

      default:
        return (
          <span className="font-bold text-base text-slate-800 tracking-wider">
            {client.name}
          </span>
        );
    }
  };

  return (
    <motion.div
      whileHover={{
        y: -6,
        transition: { type: "spring", stiffness: 300, damping: 20 },
      }}
      className="group bg-white hover:bg-[#F3F5F8] border border-[#E3E7EE] hover:border-[#E5322D]/40 rounded-lg p-6 sm:p-7 flex items-center justify-center h-28 sm:h-32 shadow-sm hover:shadow-xl transition-all duration-300"
    >
      {/* Logos go from grayscale and 70% opacity to full color and 100% on hover */}
      <div className="filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-105">
        {renderLogo()}
      </div>
    </motion.div>
  );
}

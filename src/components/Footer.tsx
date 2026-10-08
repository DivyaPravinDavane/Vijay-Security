"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { transitionEase } from "./motion/MotionUtils";

export default function Footer() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const links = [
    { name: "Solutions", href: "/solutions" },
    { name: "Industries", href: "/industries" },
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Services / AMC", href: "/services" },
    { name: "Certifications", href: "/certifications" },
    { name: "Clients", href: "/clients" },
    { name: "Global Presence", href: "/global-presence" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-[#0A0F1A] border-t border-white/10 text-slate-400 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: transitionEase }}
          className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/5"
        >
          {/* Logo with Shine Sweep on Viewport Entrance */}
          <Link href="/" className="flex items-center gap-3 group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-shine relative w-8 h-9 flex items-center justify-center bg-[#E5322D] rounded-sm shadow-md"
            >
              <svg
                viewBox="0 0 24 28"
                className="w-5 h-5 text-white fill-current"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 0L2 4v9c0 7.5 4.3 14.5 10 15 5.7-.5 10-7.5 10-15V4L12 0zm0 3.2l7.2 2.9v6.9c0 5.6-3.1 11-7.2 11.8-4.1-.8-7.2-6.2-7.2-11.8V6.1L12 3.2z" />
                <path d="M7.5 8l4.5 9 4.5-9h-2.5l-2 4.2-2-4.2H7.5z" />
              </svg>
            </motion.div>
            <div className="flex flex-col text-left">
              <span className="font-heading text-lg font-bold tracking-wider text-white uppercase leading-none">
                VIJAY SECURITY
              </span>
              <span className="text-[8px] tracking-[0.25em] text-slate-400 font-medium uppercase mt-0.5">
                SYSTEMS PVT. LTD.
              </span>
            </div>
          </Link>

          {/* Navigation Links Row with Sliding Red Underlines */}
          <div
            onMouseLeave={() => setHoveredLink(null)}
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium uppercase tracking-wider text-slate-300"
          >
            {links.map((link) => {
              const isHovered = hoveredLink === link.name;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onMouseEnter={() => setHoveredLink(link.name)}
                  className="hover:text-[#E5322D] transition-colors relative py-1"
                >
                  {link.name}
                  {isHovered && (
                    <motion.span
                      layoutId="footerHoverLine"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#E5322D]"
                      transition={{ type: "spring", stiffness: 350, damping: 25 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>
        </motion.div>

        {/* Bottom copyright row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4"
        >
          <p>© 2024 Vijay Security Systems Pvt. Ltd. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-400 cursor-pointer transition-colors">
              Privacy Policy
            </span>
            <span className="text-slate-700">|</span>
            <span className="hover:text-slate-400 cursor-pointer transition-colors">
              Terms of Service
            </span>
            <span className="text-slate-700">|</span>
            <span className="hover:text-slate-400 cursor-pointer transition-colors">
              ISO 9001:2015 Certified
            </span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

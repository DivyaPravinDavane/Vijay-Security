"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
import { transitionEase } from "./motion/MotionUtils";

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Solutions", href: "/solutions" },
    { name: "Industries", href: "/industries" },
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
  ];

  const resourceLinks = [
    { name: "Services / AMC", href: "/services", desc: "24/7 Monitoring & Maintenance" },
    { name: "Certifications & Compliance", href: "/certifications", desc: "ISO & Government Accreditations" },
    { name: "Clients", href: "/clients", desc: "Trusted by Fortune 500 & Governments" },
    { name: "Global Presence", href: "/global-presence", desc: "Operations in India, UAE & Qatar" },
  ];

  const isResourceActive = resourceLinks.some((r) => pathname === r.href);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0A0F1A]/85 backdrop-blur-md shadow-xl border-b border-white/10 py-2.5 sm:py-3"
          : "bg-[#0A0F1A] border-b border-white/5 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="relative w-9 h-10 flex items-center justify-center bg-[#E5322D] rounded-sm shadow-md"
            >
              {/* Shield V Mark */}
              <svg
                viewBox="0 0 24 28"
                className="w-6 h-6 text-white fill-current"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 0L2 4v9c0 7.5 4.3 14.5 10 15 5.7-.5 10-7.5 10-15V4L12 0zm0 3.2l7.2 2.9v6.9c0 5.6-3.1 11-7.2 11.8-4.1-.8-7.2-6.2-7.2-11.8V6.1L12 3.2z" />
                <path d="M7.5 8l4.5 9 4.5-9h-2.5l-2 4.2-2-4.2H7.5z" />
              </svg>
            </motion.div>
            <div className="flex flex-col">
              <span className="font-heading text-lg sm:text-xl font-bold tracking-wider text-white uppercase leading-none">
                VIJAY SECURITY
              </span>
              <span className="text-[9px] tracking-[0.25em] text-slate-400 font-medium uppercase mt-0.5">
                SYSTEMS PVT. LTD.
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav
            onMouseLeave={() => setHoveredNav(null)}
            className="hidden md:flex items-center space-x-7 lg:space-x-9"
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              const isHovered = hoveredNav === link.name;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onMouseEnter={() => setHoveredNav(link.name)}
                  className={`text-sm font-medium tracking-wide transition-colors duration-150 relative py-1 ${
                    isActive
                      ? "text-[#E5322D] font-semibold"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  {link.name}
                  {/* Active / Hover Animated Underline */}
                  {isActive && (
                    <motion.span
                      layoutId="navActiveLine"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#E5322D] rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {!isActive && isHovered && (
                    <motion.span
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      exit={{ scaleX: 0 }}
                      style={{ transformOrigin: "left" }}
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#E5322D]/80 rounded-full"
                    />
                  )}
                </Link>
              );
            })}

            {/* Resources Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => {
                setResourcesOpen(true);
                setHoveredNav("Resources");
              }}
              onMouseLeave={() => {
                setResourcesOpen(false);
                setHoveredNav(null);
              }}
            >
              <button
                type="button"
                className={`flex items-center gap-1 text-sm font-medium tracking-wide transition-colors duration-150 py-1 ${
                  isResourceActive
                    ? "text-[#E5322D] font-semibold"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                <span>Resources</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    resourcesOpen ? "rotate-180 text-[#E5322D]" : ""
                  }`}
                />
                {isResourceActive && (
                  <motion.span
                    layoutId="navActiveLine"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#E5322D] rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>

              {/* Dropdown Menu */}
              <AnimatePresence>
                {resourcesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 w-64 pt-2 z-50"
                  >
                    <div className="bg-[#0f172a] border border-white/10 rounded-md shadow-2xl p-2 py-2 backdrop-blur-xl">
                      {resourceLinks.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={() => setResourcesOpen(false)}
                          className={`block px-3 py-2.5 rounded text-xs transition-colors group ${
                            pathname === item.href
                              ? "bg-[#E5322D]/15 text-[#E5322D]"
                              : "text-slate-300 hover:bg-white/5 hover:text-white"
                          }`}
                        >
                          <div className="font-semibold text-white group-hover:text-[#E5322D] transition-colors">
                            {item.name}
                          </div>
                          <div className="text-[11px] text-slate-400 mt-0.5">
                            {item.desc}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/contact"
              onMouseEnter={() => setHoveredNav("Contact")}
              className={`text-sm font-medium tracking-wide transition-colors duration-150 relative py-1 ${
                pathname === "/contact"
                  ? "text-[#E5322D] font-semibold"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              Contact
              {pathname === "/contact" && (
                <motion.span
                  layoutId="navActiveLine"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#E5322D] rounded-full"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          </nav>

          {/* Right Action Button with Shine & Press Scale */}
          <div className="hidden md:flex items-center gap-4">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/contact"
                className="btn-shine group inline-flex items-center justify-center gap-1.5 px-5 py-2.5 bg-[#E5322D] hover:bg-[#d42722] text-white font-heading font-bold text-xs uppercase tracking-wider rounded transition-all duration-150 shadow-md hover:shadow-lg active:scale-95"
              >
                <span>Get in Touch</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>

          {/* Mobile Animated Hamburger Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="text-slate-300 hover:text-white p-2 rounded focus:outline-none w-10 h-10 flex flex-col items-center justify-center gap-1.5"
              aria-label="Toggle navigation menu"
            >
              <motion.span
                animate={mobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                className="w-6 h-0.5 bg-white block rounded-full origin-center transition-transform"
              />
              <motion.span
                animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-6 h-0.5 bg-white block rounded-full transition-opacity"
              />
              <motion.span
                animate={mobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                className="w-6 h-0.5 bg-white block rounded-full origin-center transition-transform"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-in Drawer from Right with Staggered Links */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.35, ease: transitionEase }}
            className="md:hidden fixed top-[60px] right-0 bottom-0 w-80 max-w-[85vw] bg-[#0A0F1A] border-l border-white/10 shadow-2xl px-6 pt-6 pb-8 space-y-4 overflow-y-auto z-50 flex flex-col justify-between"
          >
            <div className="space-y-3">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, ease: transitionEase }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-3 py-2 text-base font-medium rounded ${
                      pathname === link.href
                        ? "bg-[#E5322D] text-white"
                        : "text-slate-300 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              <div className="pt-3 border-t border-white/10">
                <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold px-3 block mb-2">
                  Resources
                </span>
                {resourceLinks.map((item, i) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + 0.04 * i, ease: transitionEase }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block px-3 py-2 text-sm rounded ${
                        pathname === item.href
                          ? "text-[#E5322D] font-medium"
                          : "text-slate-300 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2 text-base font-medium rounded ${
                    pathname === "/contact"
                      ? "bg-[#E5322D] text-white"
                      : "text-slate-300 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  Contact
                </Link>
              </motion.div>
            </div>

            <div className="pt-6 border-t border-white/10">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full btn-shine flex items-center justify-center gap-2 py-3 bg-[#E5322D] text-white font-heading font-bold text-sm uppercase tracking-wider rounded shadow-lg active:scale-95"
              >
                <span>Get in Touch</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

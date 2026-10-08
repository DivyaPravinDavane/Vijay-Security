"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Loader2,
} from "lucide-react";
import { transitionEase } from "./motion/MotionUtils";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    industry: "Corporate & IT",
    solution: "Fire Protection",
    projectLocation: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = "Full name is required";
    if (!formData.company.trim()) errs.company = "Company name is required";
    if (!formData.email.trim()) {
      errs.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = "Please enter a valid email address";
    }
    if (!formData.phone.trim()) {
      errs.phone = "Phone number is required";
    } else if (!/^[0-9+\s\-()]{7,20}$/.test(formData.phone)) {
      errs.phone = "Please enter a valid phone number";
    }
    if (!formData.projectLocation.trim())
      errs.projectLocation = "Project location is required";
    if (!formData.message.trim())
      errs.message = "Please enter your message or query";
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        industry: "Corporate & IT",
        solution: "Fire Protection",
        projectLocation: "",
        message: "",
      });
    }, 1300);
  };

  // Field shake animation for validation error
  const shakeAnimation = {
    x: [-6, 6, -4, 4, -2, 2, 0],
    transition: { duration: 0.4 },
  };

  const [focusedField, setFocusedField] = useState<string | null>(null);

  const fieldVariant = {
    hidden: { opacity: 0, y: 14 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: transitionEase } },
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
      {/* Left Column: Send us a message form with Stagger */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: transitionEase }}
        className="lg:col-span-7 bg-white p-6 sm:p-8 md:p-10 rounded-xl border border-[#E3E7EE] shadow-sm"
      >
        <div className="mb-8">
          <span className="text-xs uppercase tracking-widest text-[#E5322D] font-bold block mb-1">
            Inquire Online
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl font-extrabold uppercase text-[#0F172A] tracking-tight">
            Send Us A Message
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Our engineering team will assess your site specifications and respond within 24 hours.
          </p>
        </div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45, ease: transitionEase }}
            className="bg-emerald-50 border border-emerald-200 rounded-lg p-6 sm:p-8 text-center"
          >
            {/* Self-drawing SVG Checkmark */}
            <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-emerald-600" viewBox="0 0 24 24" fill="none">
                <motion.path
                  d="M5 13l4 4L19 7"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.55, ease: "easeOut" }}
                />
              </svg>
            </div>
            <h3 className="font-heading text-xl font-bold uppercase text-emerald-900 mb-2">
              Message Sent Successfully!
            </h3>
            <p className="text-xs sm:text-sm text-emerald-700 max-w-md mx-auto mb-6">
              Thank you for contacting Vijay Security Systems. A senior project consultant will connect with you shortly.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="btn-shine px-5 py-2.5 bg-[#E5322D] hover:bg-[#d42722] text-white font-heading font-bold text-xs uppercase tracking-wider rounded transition-colors"
            >
              Send Another Query
            </button>
          </motion.div>
        ) : (
          <motion.form
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.08 },
              },
            }}
            onSubmit={handleSubmit}
            className="space-y-4 sm:space-y-5"
          >
            <motion.div variants={fieldVariant} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Name */}
              <motion.div animate={errors.name ? shakeAnimation : undefined}>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                  Name <span className="text-[#E5322D]">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField(null)}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className={`w-full px-3.5 py-2.5 rounded border text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none transition-colors ${
                      errors.name
                        ? "border-red-400 bg-red-50/20"
                        : "border-[#E3E7EE] focus:border-[#E5322D]"
                    }`}
                  />
                  <motion.div
                    initial={false}
                    animate={{ scaleX: focusedField === "name" ? 1 : 0 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#E5322D] origin-center pointer-events-none rounded-b"
                  />
                </div>
                {errors.name && (
                  <span className="text-[11px] text-red-500 mt-1 block">
                    {errors.name}
                  </span>
                )}
              </motion.div>

              {/* Company */}
              <motion.div animate={errors.company ? shakeAnimation : undefined}>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                  Company <span className="text-[#E5322D]">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Enterprise Ltd."
                    value={formData.company}
                    onFocus={() => setFocusedField("company")}
                    onBlur={() => setFocusedField(null)}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                    className={`w-full px-3.5 py-2.5 rounded border text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none transition-colors ${
                      errors.company
                        ? "border-red-400 bg-red-50/20"
                        : "border-[#E3E7EE] focus:border-[#E5322D]"
                    }`}
                  />
                  <motion.div
                    initial={false}
                    animate={{ scaleX: focusedField === "company" ? 1 : 0 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#E5322D] origin-center pointer-events-none rounded-b"
                  />
                </div>
                {errors.company && (
                  <span className="text-[11px] text-red-500 mt-1 block">
                    {errors.company}
                  </span>
                )}
              </motion.div>
            </motion.div>

            <motion.div variants={fieldVariant} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Email */}
              <motion.div animate={errors.email ? shakeAnimation : undefined}>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                  Email <span className="text-[#E5322D]">*</span>
                </label>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="name@company.com"
                    value={formData.email}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className={`w-full px-3.5 py-2.5 rounded border text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none transition-colors ${
                      errors.email
                        ? "border-red-400 bg-red-50/20"
                        : "border-[#E3E7EE] focus:border-[#E5322D]"
                    }`}
                  />
                  <motion.div
                    initial={false}
                    animate={{ scaleX: focusedField === "email" ? 1 : 0 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#E5322D] origin-center pointer-events-none rounded-b"
                  />
                </div>
                {errors.email && (
                  <span className="text-[11px] text-red-500 mt-1 block">
                    {errors.email}
                  </span>
                )}
              </motion.div>

              {/* Phone */}
              <motion.div animate={errors.phone ? shakeAnimation : undefined}>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                  Phone <span className="text-[#E5322D]">*</span>
                </label>
                <div className="relative">
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onFocus={() => setFocusedField("phone")}
                    onBlur={() => setFocusedField(null)}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className={`w-full px-3.5 py-2.5 rounded border text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none transition-colors ${
                      errors.phone
                        ? "border-red-400 bg-red-50/20"
                        : "border-[#E3E7EE] focus:border-[#E5322D]"
                    }`}
                  />
                  <motion.div
                    initial={false}
                    animate={{ scaleX: focusedField === "phone" ? 1 : 0 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#E5322D] origin-center pointer-events-none rounded-b"
                  />
                </div>
                {errors.phone && (
                  <span className="text-[11px] text-red-500 mt-1 block">
                    {errors.phone}
                  </span>
                )}
              </motion.div>
            </motion.div>

            <motion.div variants={fieldVariant} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                  Industry
                </label>
                <div className="relative">
                  <select
                    value={formData.industry}
                    onChange={(e) =>
                      setFormData({ ...formData, industry: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded border border-[#E3E7EE] text-sm text-slate-800 bg-white focus:outline-none focus:border-[#E5322D]"
                  >
                    <option value="Corporate & IT">Corporate & IT</option>
                    <option value="Airports">Airports & Aviation</option>
                    <option value="Hotels">Hotels & Hospitality</option>
                    <option value="Banking & Finance">Banking & Finance</option>
                    <option value="Healthcare">Healthcare & Hospitals</option>
                    <option value="Education">Education & Universities</option>
                    <option value="Manufacturing">Manufacturing & Heavy Industry</option>
                    <option value="Warehouses">Warehouses & Logistics</option>
                    <option value="Residential">Residential Mega-Projects</option>
                    <option value="Government">Government & Defense</option>
                    <option value="Other">Other Sector</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                  Solution Required
                </label>
                <div className="relative">
                  <select
                    value={formData.solution}
                    onChange={(e) =>
                      setFormData({ ...formData, solution: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded border border-[#E3E7EE] text-sm text-slate-800 bg-white focus:outline-none focus:border-[#E5322D]"
                  >
                    <option value="Fire Protection">Fire Protection (Sprinkler/Gas)</option>
                    <option value="Fire Detection">Fire Detection & Alarm (VESDA)</option>
                    <option value="CCTV Surveillance">CCTV & Video Analytics</option>
                    <option value="Access Control">Access Control & Turnstiles</option>
                    <option value="Building Management">Building Management (BMS)</option>
                    <option value="Annual Maintenance">Annual Maintenance (AMC)</option>
                    <option value="Integrated Security">Full Turnkey Integrated Systems</option>
                  </select>
                </div>
              </div>
            </motion.div>

            {/* Project Location */}
            <motion.div variants={fieldVariant} animate={errors.projectLocation ? shakeAnimation : undefined}>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                Project Location <span className="text-[#E5322D]">*</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="e.g. Mumbai, NCR, Dubai, Doha"
                  value={formData.projectLocation}
                  onFocus={() => setFocusedField("projectLocation")}
                  onBlur={() => setFocusedField(null)}
                  onChange={(e) =>
                    setFormData({ ...formData, projectLocation: e.target.value })
                  }
                  className={`w-full px-3.5 py-2.5 rounded border text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none transition-colors ${
                    errors.projectLocation
                      ? "border-red-400 bg-red-50/20"
                      : "border-[#E3E7EE] focus:border-[#E5322D]"
                  }`}
                />
                <motion.div
                  initial={false}
                  animate={{ scaleX: focusedField === "projectLocation" ? 1 : 0 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#E5322D] origin-center pointer-events-none rounded-b"
                />
              </div>
              {errors.projectLocation && (
                <span className="text-[11px] text-red-500 mt-1 block">
                  {errors.projectLocation}
                </span>
              )}
            </motion.div>

            {/* Message */}
            <motion.div variants={fieldVariant} animate={errors.message ? shakeAnimation : undefined}>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                Message <span className="text-[#E5322D]">*</span>
              </label>
              <div className="relative">
                <textarea
                  rows={4}
                  placeholder="Briefly describe your site safety requirements or inquiry..."
                  value={formData.message}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className={`w-full px-3.5 py-2.5 rounded border text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none transition-colors resize-none ${
                    errors.message
                      ? "border-red-400 bg-red-50/20"
                      : "border-[#E3E7EE] focus:border-[#E5322D]"
                  }`}
                />
                <motion.div
                  initial={false}
                  animate={{ scaleX: focusedField === "message" ? 1 : 0 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#E5322D] origin-center pointer-events-none rounded-b"
                />
              </div>
              {errors.message && (
                <span className="text-[11px] text-red-500 mt-1 block">
                  {errors.message}
                </span>
              )}
            </motion.div>

            <motion.div variants={fieldVariant}>
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="btn-shine inline-flex items-center justify-center gap-2 px-8 py-3 bg-[#E5322D] hover:bg-[#d42722] disabled:opacity-70 text-white font-heading font-bold text-xs uppercase tracking-wider rounded transition-all duration-200 shadow-md hover:shadow-lg active:scale-95 group cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <span>Submit</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </>
                )}
              </motion.button>
            </motion.div>
          </motion.form>
        )}
      </motion.div>

      {/* Right Column: Office info & Interactive Map with Bouncing Pin */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.15, ease: transitionEase }}
        className="lg:col-span-5 flex flex-col justify-between space-y-6"
      >
        <div className="bg-[#F3F5F8] p-6 sm:p-8 rounded-xl border border-[#E3E7EE]">
          <span className="text-[11px] uppercase tracking-widest text-[#E5322D] font-bold block mb-1">
            Headquarters
          </span>
          <h3 className="font-heading text-xl sm:text-2xl font-bold uppercase text-[#0F172A] tracking-tight mb-4">
            Vijay Security Systems Pvt. Ltd.
          </h3>

          <div className="space-y-4 text-xs sm:text-sm text-slate-600">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#E5322D] shrink-0 mt-0.5" />
              <span>
                36, Chandivali, Off Saki Vihar Road, Andheri (E), Mumbai - 400 072, Maharashtra, India
              </span>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-[#E5322D] shrink-0 mt-0.5" />
              <div>
                <a href="tel:02228471999" className="hover:text-[#E5322D] block">
                  022-28471999
                </a>
                <a href="tel:02228470933" className="hover:text-[#E5322D] block">
                  022-28470933
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-[#E5322D] shrink-0" />
              <a
                href="mailto:info@vijaysecurity.com"
                className="hover:text-[#E5322D] font-medium"
              >
                info@vijaysecurity.com
              </a>
            </div>
          </div>
        </div>

        {/* Embedded styled interactive map card with pin */}
        <div className="bg-white rounded-xl border border-[#E3E7EE] overflow-hidden shadow-sm flex flex-col">
          <div className="relative h-60 w-full bg-slate-200 overflow-hidden">
            {/* Map Graphics Simulation */}
            <div className="absolute inset-0 bg-[#e5e9ec] opacity-90">
              <svg className="w-full h-full text-slate-300" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid-pattern-contact" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#cbd5e1" strokeWidth="1.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid-pattern-contact)" />
                <path d="M-20 60 Q 150 110 380 40 T 600 120" fill="none" stroke="#f8fafc" strokeWidth="12" />
                <path d="M-20 60 Q 150 110 380 40 T 600 120" fill="none" stroke="#f1f5f9" strokeWidth="6" />
                <path d="M 180 -20 L 180 300" fill="none" stroke="#f8fafc" strokeWidth="10" />
                <path d="M 290 -20 L 250 300" fill="none" stroke="#f8fafc" strokeWidth="10" />
              </svg>
            </div>

            {/* Glowing Red Pin that Bounces on Load */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{
                  y: [-18, 0, -8, 0, -3, 0],
                  opacity: 1,
                }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="relative flex items-center justify-center"
              >
                <span className="animate-ping absolute inline-flex h-9 w-9 rounded-full bg-[#E5322D] opacity-40" />
                <div className="relative w-8 h-8 rounded-full bg-[#E5322D] text-white flex items-center justify-center shadow-lg border-2 border-white">
                  <MapPin className="w-4 h-4 fill-current" />
                </div>
              </motion.div>
              <div className="mt-1 px-2.5 py-1 bg-[#0A0F1A] text-white text-[10px] font-bold uppercase tracking-wider rounded shadow-md whitespace-nowrap">
                VSSL Head Office
              </div>
            </div>
          </div>

          <div className="p-4 bg-white flex items-center justify-between border-t border-[#E3E7EE]">
            <span className="text-xs text-slate-600 font-medium">
              Chandivali, Andheri East, Mumbai
            </span>
            <a
              href="https://maps.google.com/?q=Vijay+Security+Systems+Chandivali+Andheri+Mumbai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#E5322D] hover:underline"
            >
              <span>Get Directions</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

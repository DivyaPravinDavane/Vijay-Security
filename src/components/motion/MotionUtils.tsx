"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView, useReducedMotion, Variants } from "framer-motion";

// Global Entrance Easing
export const transitionEase = [0.22, 1, 0.36, 1] as const;
export const springTransition = { type: "spring", stiffness: 300, damping: 20 } as const;

// 1. FadeUp Component
interface FadeUpProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  distance?: number;
  className?: string;
}

export function FadeUp({
  children,
  delay = 0,
  duration = 0.6,
  distance = 30,
  className = "",
}: FadeUpProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay }}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration,
        delay,
        ease: transitionEase,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// 2. Stagger Container Component
interface StaggerProps {
  children: React.ReactNode;
  delayChildren?: number;
  staggerChildren?: number;
  className?: string;
}

export function Stagger({
  children,
  delayChildren = 0.1,
  staggerChildren = 0.1,
  className = "",
}: StaggerProps) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren,
        delayChildren,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// 3. StaggerItem Component
interface StaggerItemProps {
  children: React.ReactNode;
  distance?: number;
  className?: string;
}

export function StaggerItem({
  children,
  distance = 24,
  className = "",
}: StaggerItemProps) {
  const shouldReduceMotion = useReducedMotion();

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : distance,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.55,
        ease: transitionEase,
      },
    },
  };

  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
}

// 4. LiftCard Component (Consistent Spring Hover Lift)
interface LiftCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  liftAmount?: number;
}

export function LiftCard({
  children,
  className = "",
  onClick,
  liftAmount = -8,
}: LiftCardProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      onClick={onClick}
      whileHover={
        shouldReduceMotion
          ? undefined
          : {
              y: liftAmount,
              transition: { type: "spring", stiffness: 300, damping: 20 },
            }
      }
      whileTap={{ scale: 0.98 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// 5. Counter Component (Count-up numbers on view)
interface CounterProps {
  from?: number;
  to: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}

export function Counter({
  from = 0,
  to,
  duration = 1.6,
  suffix = "",
  prefix = "",
  className = "",
}: CounterProps) {
  const [count, setCount] = useState(from);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (!isInView) return;
    if (shouldReduceMotion) {
      setCount(to);
      return;
    }

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      // Ease out expo
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = Math.floor(from + (to - from) * easeProgress);
      setCount(current);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(to);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, from, to, duration, shouldReduceMotion]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

// 6. SectionHeader with Animated Heading + Expanding Red Eyebrow Line
interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  rightAction?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
  dark?: boolean;
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  rightAction,
  align = "left",
  className = "",
  dark = false,
}: SectionHeaderProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      className={`mb-10 sm:mb-12 ${
        align === "center" ? "text-center mx-auto max-w-2xl" : ""
      } ${className}`}
    >
      <div
        className={`flex flex-col sm:flex-row ${
          align === "center"
            ? "items-center justify-center"
            : "items-start sm:items-end justify-between"
        } gap-4`}
      >
        <div>
          {eyebrow && (
            <div
              className={`inline-flex items-center gap-2 mb-2.5 ${
                align === "center" ? "justify-center" : ""
              }`}
            >
              {/* Expanding Red Line */}
              <motion.span
                initial={{ scaleX: shouldReduceMotion ? 1 : 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: transitionEase }}
                style={{ transformOrigin: "left" }}
                className="w-7 h-[2px] bg-[#E5322D] block shrink-0"
              />
              <span className="text-xs uppercase tracking-[0.25em] text-[#E5322D] font-bold">
                {eyebrow}
              </span>
            </div>
          )}

          <motion.h2
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: transitionEase }}
            className={`font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight leading-tight ${
              dark ? "text-white" : "text-[#0F172A]"
            }`}
          >
            {title}
          </motion.h2>

          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: transitionEase }}
              className={`text-xs sm:text-sm mt-2 max-w-2xl ${
                dark ? "text-slate-400" : "text-slate-500"
              }`}
            >
              {subtitle}
            </motion.p>
          )}
        </div>

        {rightAction && (
          <motion.div
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="shrink-0"
          >
            {rightAction}
          </motion.div>
        )}
      </div>
    </div>
  );
}

// 7. Reveal Component (Clip-path mask wipe)
interface RevealProps {
  children: React.ReactNode;
  direction?: "left" | "right" | "up" | "down";
  duration?: number;
  delay?: number;
  className?: string;
}

export function Reveal({
  children,
  direction = "left",
  duration = 0.8,
  delay = 0,
  className = "",
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  const getInitialClip = () => {
    switch (direction) {
      case "left":
        return "inset(0 100% 0 0)";
      case "right":
        return "inset(0 0 0 100%)";
      case "up":
        return "inset(100% 0 0 0)";
      case "down":
        return "inset(0 0 100% 0)";
    }
  };

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ clipPath: getInitialClip(), opacity: 0.5 }}
      whileInView={{ clipPath: "inset(0 0% 0 0)", opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration, delay, ease: transitionEase }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// 8. ParallaxBg Component
interface ParallaxBgProps {
  children: React.ReactNode;
  className?: string;
}

export function ParallaxBg({ children, className = "" }: ParallaxBgProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? undefined : { scale: 1 }}
      animate={
        shouldReduceMotion
          ? undefined
          : {
              scale: [1, 1.06, 1],
              transition: { duration: 24, repeat: Infinity, ease: "linear" },
            }
      }
      className={className}
    >
      {children}
    </motion.div>
  );
}

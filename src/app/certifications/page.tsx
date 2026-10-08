"use client";

import React from "react";
import Hero from "@/components/Hero";
import CertificateCard from "@/components/CertificateCard";
import CtaBand from "@/components/CtaBand";
import { CERTIFICATES_DATA } from "@/data/siteData";
import { SectionHeader, Stagger, StaggerItem } from "@/components/motion/MotionUtils";

export default function CertificationsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 1. Hero */}
      <Hero
        eyebrow="Government & Quality Accreditations"
        title="CERTIFICATIONS & COMPLIANCE"
        subtitle="Our commitment to quality, safety and industry standards."
        image="https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1600&q=80"
      />

      {/* 2. 3x2 Grid of Certificate Cards */}
      <section className="py-20 bg-white border-b border-[#E3E7EE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Verified Compliance"
            title="AUTHORIZED ACCREDITATIONS"
            subtitle="Vijay Security Systems maintains rigorous adherence to ISO, government fire service rules, and international safety quality frameworks."
            className="mb-14"
          />

          {/* 3x2 Grid with Stagger Entrance */}
          <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CERTIFICATES_DATA.map((cert) => (
              <StaggerItem key={cert.id}>
                <CertificateCard certificate={cert} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Dark CTA Band */}
      <CtaBand
        title="NEED AUDIT DOCUMENTATION FOR YOUR TENDER?"
        subtitle="Request official certified true copies and compliance dossiers for statutory submission."
        buttonText="Get in Touch"
        buttonHref="/contact"
      />
    </div>
  );
}

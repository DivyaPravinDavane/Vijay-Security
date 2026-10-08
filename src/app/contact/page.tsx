import React from "react";
import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F3F5F8]">
      {/* 1. Hero */}
      <Hero
        eyebrow="Direct Engineering Inquiry"
        title="LET'S START A CONVERSATION"
        subtitle="Quick. Simple. Reliable."
        image="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80"
      />

      {/* 2. Contact Main Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm />
        </div>
      </section>
    </div>
  );
}

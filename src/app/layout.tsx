import type { Metadata } from "next";
import { Barlow_Semi_Condensed, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Preloader from "@/components/motion/Preloader";
import CustomCursor from "@/components/motion/CustomCursor";
import ScrollToTop from "@/components/motion/ScrollToTop";
import SmoothScroll from "@/components/motion/SmoothScroll";
import PageTransition from "@/components/motion/PageTransition";

const barlow = Barlow_Semi_Condensed({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vijay Security Systems Pvt. Ltd. | Integrated Fire & Security Solutions",
  description:
    "Integrated Fire, Safety & Security Systems engineered for critical environments. Legacy of engineering trust since 1959 with 4,500+ projects delivered.",
  keywords: [
    "Vijay Security Systems",
    "Fire Protection",
    "CCTV Surveillance",
    "Access Control",
    "Building Management System",
    "AMC Services",
    "Security India",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${barlow.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col bg-white text-slate-900 font-sans selection:bg-[#E5322D] selection:text-white">
        <SmoothScroll>
          <Preloader />
          <CustomCursor />
          <Navbar />
          <main className="flex-grow">
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
          <ScrollToTop />
        </SmoothScroll>
      </body>
    </html>
  );
}

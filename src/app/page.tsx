import React from "react";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] relative">
      <Analytics />
      <SpeedInsights />

      {/* Video Background */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <video
          autoPlay
          loop
          muted
          className="absolute top-1/2 left-1/2 min-w-full min-h-full transform -translate-x-1/2 -translate-y-1/2 object-cover"
        >
          <source src="/images/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Overlay to make video less distracting */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Content with slightly higher z-index */}
      <div className="relative z-10">
        <Navbar />
        <div className="container mt-24 mx-auto px-12 py-4">
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <EmailSection />
        </div>
        <Footer />
      </div>
    </main>
  );
}

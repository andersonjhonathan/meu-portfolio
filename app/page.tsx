"use client"; // ⚠️ IMPORTANTE: coloca no topo do arquivo

import { useEffect } from "react";
import HeroSection from "@/components/hero-section";
import ProjectsSection from "@/components/projects-section";
import AboutSection from "@/components/about-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault(); // bloqueia o botão direito
    };

    document.addEventListener("contextmenu", handleContextMenu);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);

  return (
    <main className="min-h-screen">
      <HeroSection />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  );
}

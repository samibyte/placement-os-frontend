import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import MissionSection from "@/components/about/MissionSection";
import StatsStrip from "@/components/about/StatsStrip";
import WhySection from "@/components/about/WhySection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "About — PlacementOS",
  description:
    "PlacementOS helps students and early professionals build stronger CVs, track opportunities, and get career-ready — all in one place.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar active="About" />
      <main>
        <AboutHero />
        <WhySection />
        <StatsStrip />
        <MissionSection />
      </main>
      <Footer />
    </>
  );
}

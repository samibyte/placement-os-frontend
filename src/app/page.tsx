import FeaturedJobs from "@/components/FeaturedJobs";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Navbar from "@/components/Navbar";
import StatsBanner from "@/components/StatsBanner";
import { getFeaturedJobs } from "@/lib/api";
import { getHeroData } from "@/lib/hero";

export default async function Home() {
  const [jobs, hero] = await Promise.all([getFeaturedJobs(), getHeroData()]);
  return (
    <div className="bg-canvas text-ink">
      <Navbar />
      <main>
        <Hero data={hero} />
        <Features />
        <HowItWorks />
        <FeaturedJobs jobs={jobs} />
        <StatsBanner />
      </main>
      <Footer />
    </div>
  );
}

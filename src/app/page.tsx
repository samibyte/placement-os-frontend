import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import FeaturedJobs from "@/components/FeaturedJobs";
import StatsBanner from "@/components/StatsBanner";
import Footer from "@/components/Footer";
import { getFeaturedJobs } from "@/lib/api";
import { getHeroData } from "@/lib/hero";

export default async function Home() {
  const [jobs, hero] = await Promise.all([getFeaturedJobs(), getHeroData()]);
  return (
    <>
      <Navbar />
      <main>
        <Hero data={hero} />
        <Features />
        <HowItWorks />
        <FeaturedJobs jobs={jobs} />
        <StatsBanner />
      </main>
      <Footer />
    </>
  );
}

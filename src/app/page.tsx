import SplashScreen from "@/components/SplashScreen";
import Navbar from "@/layout/Navbar";
import Hero from "@/components/Hero";
import MidStatement from "@/components/MidStatement";
import TechMarquee from "@/components/TechMarquee";
import Services from "@/components/Services"
import Footer from "@/layout/Footer";
import BusinessProcess from "@/components/BusinessProcess";
import CallToAction from "@/components/CallToAction";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Avarice Tech | Software House & Digital Agency",
  description: "Avarice Tech provides full stack web development, digital transformation, and business intelligence solutions for B2B enterprises.",
};


export default function Home() {
  return (
    <main>
      <SplashScreen />
      <Navbar />
      <Hero />
      <MidStatement />
      <TechMarquee />
      <Services />
      <BusinessProcess />
      <CallToAction />
      <Footer />
    </main>
  );
}
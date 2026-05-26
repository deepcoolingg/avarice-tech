import SplashScreen from "@/components/SplashScreen";
import Navbar from "@/layout/Navbar";
import Hero from "@/components/Hero";
import MidStatement from "@/components/MidStatement";
import TechMarquee from "@/components/TechMarquee";
import Services from "@/components/Services"
import Footer from "@/layout/Footer";
import BusinessProcess from "@/components/BusinessProcess";


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
      <Footer />
    </main>
  );
}
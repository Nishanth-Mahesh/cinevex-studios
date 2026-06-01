import AnnouncementBar from "@/components/ui/AnnouncementBar";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Services from "@/components/sections/Services";
import WhyCinevex from "@/components/sections/WhyCinevex";
import Process from "@/components/sections/Process";
import Portfolio from "@/components/sections/Portfolio";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <AnnouncementBar />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <WhyCinevex />
        <Process />
        <Portfolio />
        <Testimonials />
        <Contact />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

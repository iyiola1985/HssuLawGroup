import { About } from "@/components/site/About";
import { ClientEnhancements } from "@/components/site/ClientEnhancements";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { Hero } from "@/components/site/Hero";
import { Navbar } from "@/components/site/Navbar";
import { PracticeAreas } from "@/components/site/PracticeAreas";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";

export default function Home() {
  return (
    <>
      <ClientEnhancements />
      <Navbar />
      <main className="relative flex-1">
        <Hero />
        <About />
        <PracticeAreas />
        <WhyChooseUs />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

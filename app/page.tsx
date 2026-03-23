import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import References from "@/components/References";
import About from "@/components/About";
import Partners from "@/components/Partners";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#0a0a0a]">
      <Navigation />
      <Hero />
      <Stats />
      <Services />
      <References />
      <About />
      <Partners />
      <CTA />
      <Footer />
    </main>
  );
}

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Pricing from "./components/Pricing";
import WhyChooseUs from "./components/WhyChooseUs";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import { motion, useScroll, useSpring } from "motion/react";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative min-h-screen bg-brand-dark text-white selection:bg-brand-primary/30 selection:text-white">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand-primary z-[60] origin-left"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main>
        <Hero />
        
        <div className="relative">
          {/* Decorative background blur */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
            <div className="absolute top-[10%] -left-20 w-96 h-96 bg-brand-primary/5 blur-[120px] rounded-full" />
            <div className="absolute top-[40%] -right-20 w-96 h-96 bg-brand-secondary/5 blur-[120px] rounded-full" />
            <div className="absolute top-[70%] -left-20 w-96 h-96 bg-brand-accent/5 blur-[120px] rounded-full" />
          </div>

          <Services />
          <Projects />
          <WhyChooseUs />
          <Pricing />
          <CTA />
        </div>
      </main>

      <Footer />
    </div>
  );
}

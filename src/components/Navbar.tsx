import { motion } from "motion/react";
import { Menu, X, Cpu } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Pricing", href: "#pricing" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-6 left-0 w-full z-50 flex justify-center px-6">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className={`flex items-center justify-between gap-4 px-4 py-3.5 rounded-full border border-white/10 transition-all duration-500 ${
          scrolled 
            ? "bg-brand-dark/60 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] w-full max-w-xl" 
            : "bg-white/5 backdrop-blur-md w-full max-w-2xl"
        }`}
      >
        <motion.div
          className="flex items-center gap-2.5 group cursor-pointer shrink-0"
        >
          {/* Logo Icon */}
          <div className="relative w-7 h-7 flex items-center justify-center">
            <div className="absolute inset-0 bg-brand-primary/20 blur-sm rounded-full group-hover:bg-brand-primary/40 transition-colors" />
            <svg viewBox="0 0 24 24" className="w-5 h-5 relative z-10" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" className="text-brand-accent" />
              <path d="M2 12H22" className="text-brand-primary opacity-50" />
              <path d="M12 2V22" className="text-brand-primary opacity-50" />
              <path d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2Z" className="text-brand-secondary" />
              <path d="M7 3L4 3L4 21L7 21" className="text-brand-primary" strokeWidth="2" />
              <path d="M17 3L20 3L20 21L17 21" className="text-brand-primary" strokeWidth="2" />
            </svg>
          </div>

          <div className="relative font-display font-black text-sm md:text-base tracking-tighter flex items-center">
            <div className="relative">
              <span className="relative z-10 text-white">NEXELENCE</span>
              <span className="absolute top-0.5 left-0.5 text-brand-primary opacity-70 z-0">NEXELENCE</span>
              <span className="absolute -top-0.5 -left-0.5 text-brand-secondary opacity-70 z-0">NEXELENCE</span>
            </div>
          </div>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-4 lg:gap-5">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[10px] lg:text-[11px] uppercase tracking-widest font-bold text-white/60 hover:text-brand-primary transition-colors whitespace-nowrap"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden sm:block px-4 py-1.5 bg-brand-primary text-brand-dark font-bold rounded-full text-[10px] lg:text-[11px] hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-all whitespace-nowrap"
          >
            Get a Quote
          </motion.button>

          {/* Mobile Toggle */}
          <button className="md:hidden text-white p-1" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          className="md:hidden absolute top-full left-6 right-6 mt-4 bg-brand-dark/95 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 flex flex-col gap-4 shadow-2xl"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-white/70 hover:text-brand-primary border-b border-white/5 pb-2"
            >
              {link.name}
            </a>
          ))}
          <button className="w-full py-4 bg-brand-primary text-brand-dark font-bold rounded-2xl mt-2 shadow-[0_0_20px_rgba(6,182,212,0.3)]">
            Get a Quote
          </button>
        </motion.div>
      )}
    </nav>
  );
}

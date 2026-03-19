import { motion } from "motion/react";
import { Send } from "lucide-react";

export default function CTA() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative p-12 md:p-20 rounded-[3rem] overflow-hidden text-center bg-gradient-to-br from-brand-primary/20 via-brand-secondary/20 to-brand-dark border border-white/10"
        >
          {/* Background effects */}
          <div className="absolute top-0 left-0 w-full h-full grid-pattern opacity-20" />
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-7xl font-bold tracking-tighter mb-8">
              Ready to Build <br />
              <span className="text-brand-primary">The Future?</span>
            </h2>
            <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-12">
              Let's collaborate to create something extraordinary. Our team is ready to turn your vision into a digital reality.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a 
                href="mailto:info@nexelence.co.za"
                className="group px-10 py-5 bg-white text-brand-dark font-black rounded-full flex items-center gap-3 hover:bg-brand-primary hover:text-brand-dark transition-all"
              >
                Get Started Now
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
              <button className="px-10 py-5 bg-white/5 border border-white/10 font-bold rounded-full hover:bg-white/10 transition-all">
                Schedule a Call
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

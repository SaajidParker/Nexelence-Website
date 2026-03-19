import { motion } from "motion/react";
import { Zap, Shield, Rocket, Users } from "lucide-react";

const values = [
  {
    title: "Lightning Speed",
    description: "We optimize every line of code to ensure your site loads in the blink of an eye.",
    icon: Zap,
  },
  {
    title: "Ironclad Security",
    description: "Your data and your users' privacy are our top priorities. We build with security first.",
    icon: Shield,
  },
  {
    title: "Future-Proof",
    description: "We use modern stacks that are scalable and maintainable for years to come.",
    icon: Rocket,
  },
  {
    title: "Client-Centric",
    description: "We work closely with you to ensure the final product exceeds your expectations.",
    icon: Users,
  },
];

export default function WhyChooseUs() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
              Why Choose <span className="text-brand-accent">Nexelence?</span>
            </h2>
            <p className="text-white/60 text-lg mb-10 leading-relaxed">
              We don't just build websites; we build digital legacies. Our team combines artistic vision with technical precision to deliver results that matter.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {values.map((value, i) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="space-y-3"
                >
                  <div className="p-3 bg-white/5 rounded-xl w-fit">
                    <value.icon className="w-5 h-5 text-brand-accent" />
                  </div>
                  <h3 className="text-xl font-bold">{value.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="aspect-square rounded-3xl overflow-hidden glass-card relative z-10 p-1"
            >
              <img 
                src="https://picsum.photos/seed/tech/800/800" 
                alt="Tech Innovation" 
                className="w-full h-full object-cover rounded-[22px] opacity-60"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent" />
            </motion.div>
            
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-primary/20 blur-[60px] rounded-full" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-secondary/20 blur-[60px] rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}

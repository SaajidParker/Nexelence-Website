import { motion } from "motion/react";
import { Code, ShoppingCart, Search, BarChart3, Settings } from "lucide-react";

const services = [
  {
    title: "Web Development",
    description: "Bespoke, high-performance websites built with the latest technologies like React, Next.js, and Node.",
    icon: Code,
    color: "text-brand-primary",
  },
  {
    title: "E-commerce",
    description: "Scalable online stores designed for conversion, featuring seamless checkout and robust inventory management.",
    icon: ShoppingCart,
    color: "text-brand-secondary",
  },
  {
    title: "SEO Optimization",
    description: "Data-driven strategies to boost your search rankings and drive organic traffic to your digital doorstep.",
    icon: Search,
    color: "text-brand-accent",
  },
  {
    title: "Analytics & Insights",
    description: "Advanced tracking and reporting to help you understand user behavior and optimize your business decisions.",
    icon: BarChart3,
    color: "text-brand-primary",
  },
  {
    title: "Maintenance",
    description: "Continuous support and updates to ensure your platform remains secure, fast, and up-to-date.",
    icon: Settings,
    color: "text-brand-secondary",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Our Digital <span className="text-brand-primary">Arsenal.</span>
            </h2>
            <p className="text-white/60 text-lg">
              We leverage cutting-edge tools and innovative strategies to build the future of the web.
            </p>
          </div>
          <div className="hidden md:block">
            <div className="text-right">
              <span className="text-5xl font-display font-bold text-white/5">01</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-8 rounded-3xl hover:border-brand-primary/50 transition-all group"
            >
              <div className={`p-4 bg-white/5 rounded-2xl w-fit mb-6 group-hover:scale-110 transition-transform ${service.color}`}>
                <service.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-white/50 leading-relaxed mb-6">
                {service.description}
              </p>
              <button className="text-sm font-bold text-brand-primary flex items-center gap-2 group/btn">
                Learn More
                <div className="w-0 group-hover/btn:w-4 h-[1px] bg-brand-primary transition-all" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

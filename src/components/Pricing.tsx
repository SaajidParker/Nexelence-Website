import { motion } from "motion/react";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "Starter",
    price: "7,500",
    description: "Perfect for small businesses and landing pages.",
    features: ["Custom UI Design", "Responsive Layout", "Basic SEO", "3 Pages", "1 Month Support"],
    popular: false,
  },
  {
    name: "Professional",
    price: "13,000",
    description: "Ideal for growing startups and corporate sites.",
    features: ["Everything in Starter", "Advanced Animations", "CMS Integration", "10 Pages", "3 Months Support", "Analytics Setup"],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Full-scale solutions for complex requirements.",
    features: ["Everything in Professional", "E-commerce Functionality", "Custom Backend", "Unlimited Pages", "Priority Support", "Security Audits"],
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-white/5 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Transparent <span className="text-brand-secondary">Pricing.</span>
          </h2>
          <p className="text-white/60 text-lg">
            Choose the plan that fits your vision. No hidden fees, just pure technical excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative p-8 rounded-3xl border ${
                tier.popular ? "bg-brand-dark border-brand-primary shadow-[0_0_40px_rgba(6,182,212,0.15)]" : "bg-white/5 border-white/10"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-primary text-brand-dark text-[10px] font-black uppercase tracking-widest px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-display font-bold">
                    {tier.price !== "Custom" && "R"}
                    {tier.price}
                  </span>
                  {tier.price !== "Custom" && <span className="text-white/40 text-sm">/project</span>}
                </div>
                <p className="text-white/50 text-sm mt-4">{tier.description}</p>
              </div>

              <div className="space-y-4 mb-8">
                {tier.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <div className="p-1 bg-brand-primary/10 rounded-full">
                      <Check className="w-3 h-3 text-brand-primary" />
                    </div>
                    <span className="text-sm text-white/70">{feature}</span>
                  </div>
                ))}
              </div>

              <button
                className={`w-full py-4 rounded-2xl font-bold transition-all ${
                  tier.popular ? "bg-brand-primary text-brand-dark hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]" : "bg-white/10 hover:bg-white/20 text-white"
                }`}
              >
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

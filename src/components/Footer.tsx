import { Cpu, Github, Twitter, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-20 border-t border-white/5 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="relative font-display font-black text-xl tracking-tighter flex items-center">
                <span className="text-brand-accent">&lt;</span>
                <div className="relative">
                  <span className="relative z-10 text-white">NEXELENCE</span>
                  <span className="absolute top-0.5 left-0.5 text-brand-primary opacity-70 z-0">NEXELENCE</span>
                  <span className="absolute -top-0.5 -left-0.5 text-brand-secondary opacity-70 z-0">NEXELENCE</span>
                </div>
                <span className="text-brand-accent">&gt;</span>
              </div>
            </div>
            <p className="text-white/40 text-sm leading-relaxed mb-8">
              Pushing the boundaries of web development with futuristic design and technical excellence.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-brand-primary/20 hover:text-brand-primary transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-brand-primary/20 hover:text-brand-primary transition-all">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-brand-primary/20 hover:text-brand-primary transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-white/40">Services</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><a href="#" className="hover:text-brand-primary transition-colors">Web Development</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">E-commerce</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">SEO Optimization</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Analytics</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-white/40">Company</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><a href="#" className="hover:text-brand-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Our Work</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-white/40">Contact</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li>
                <a href="mailto:info@nexelence.co.za" className="hover:text-brand-primary transition-colors flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  info@nexelence.co.za
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-white/40">Newsletter</h4>
            <p className="text-sm text-white/40 mb-6">Stay updated with the latest in tech.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm w-full focus:outline-none focus:border-brand-primary transition-colors"
              />
              <button className="p-2 bg-brand-primary text-brand-dark rounded-xl">
                <Mail className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-4">
          <p className="text-white/30 text-xs">
            © 2026 Nexelence Agency. All rights reserved.
          </p>
          <div className="flex gap-8 text-xs text-white/30">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

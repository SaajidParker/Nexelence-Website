import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ExternalLink, ArrowUpRight } from "lucide-react";

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  link: string;
  color: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Quantum Analytics",
    category: "SaaS Dashboard",
    description: "A high-performance data visualization platform for enterprise-level metrics and real-time monitoring.",
    image: "https://picsum.photos/seed/quantum/1200/800",
    link: "https://example.com",
    color: "from-cyan-500/20 to-blue-500/20",
  },
  {
    id: 2,
    title: "Nova Real Estate",
    category: "Marketplace",
    description: "A luxury property marketplace featuring immersive 3D tours and AI-driven valuation tools.",
    image: "https://picsum.photos/seed/nova/1200/800",
    link: "https://example.com",
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    id: 3,
    title: "Zenith Fitness",
    category: "Wellness App",
    description: "A comprehensive wellness platform connecting elite coaches with high-performance athletes.",
    image: "https://picsum.photos/seed/zenith/1200/800",
    link: "https://example.com",
    color: "from-emerald-500/20 to-teal-500/20",
  },
  {
    id: 4,
    title: "Aether E-commerce",
    category: "Fashion Store",
    description: "A minimalist, high-end fashion store built for speed and seamless mobile shopping experiences.",
    image: "https://picsum.photos/seed/aether/1200/800",
    link: "https://example.com",
    color: "from-orange-500/20 to-red-500/20",
  },
];

interface ProjectCardProps {
  project: Project;
  index: number;
  total: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, total }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <div 
      ref={container} 
      className="h-[80vh] md:h-screen flex items-center justify-center sticky top-0 px-4 md:px-0"
      style={{ zIndex: index }}
    >
      <motion.div
        style={{ scale, opacity }}
        className={`relative w-full max-w-5xl aspect-[4/5] sm:aspect-[16/10] md:aspect-[16/9] rounded-2xl md:rounded-3xl overflow-hidden border border-white/10 bg-brand-dark shadow-2xl group`}
      >
        {/* Background Gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-50 group-hover:opacity-70 transition-opacity duration-700`} />
        
        {/* Image */}
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000"
          referrerPolicy="no-referrer"
        />

        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12 bg-gradient-to-t from-brand-dark via-brand-dark/60 to-transparent">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-[10px] uppercase tracking-widest font-bold mb-3 md:mb-4"
            >
              {project.category}
            </motion.span>
            
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-2xl md:text-5xl font-display font-black text-white mb-2 md:mb-4 tracking-tighter"
            >
              {project.title}
            </motion.h3>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-white/60 text-xs md:text-lg mb-6 md:mb-8 leading-relaxed line-clamp-3 md:line-clamp-none"
            >
              {project.description}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <a 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 md:px-6 md:py-3 bg-white text-brand-dark font-bold rounded-full hover:bg-brand-primary transition-all group/btn text-xs md:text-base"
              >
                View Project
                <ArrowUpRight className="w-3 h-3 md:w-4 md:h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </a>
            </motion.div>
          </div>
        </div>

        {/* Index Indicator */}
        <div className="absolute top-4 right-4 md:top-8 md:right-8 font-display text-4xl md:text-8xl font-black text-white/5 select-none">
          0{project.id}
        </div>
      </motion.div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="work" className="relative bg-brand-dark py-20">
      <div className="container mx-auto px-4 mb-20">
        <div className="max-w-3xl">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-brand-primary font-mono text-sm tracking-widest uppercase mb-4 block"
          >
            Selected Works
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-display font-black text-white tracking-tighter leading-none"
          >
            Digital protocols <br />
            <span className="text-white/20">brought to life.</span>
          </motion.h2>
        </div>
      </div>

      <div className="relative">
        {projects.map((project, index) => (
          <ProjectCard 
            key={project.id} 
            project={project} 
            index={index} 
            total={projects.length} 
          />
        ))}
      </div>

      {/* Spacer to allow the last card to be scrolled past */}
      <div className="h-[20vh]" />
    </section>
  );
};

export default Projects;

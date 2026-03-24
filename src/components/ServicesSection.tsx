import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Cpu, Palette, BarChart3, Zap } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Product Design",
    desc: "User-centric design that bridges the gap between business goals and delightful user experiences.",
  },
  {
    icon: Cpu,
    title: "AI Integration",
    desc: "Leverage generative AI, LLMs, and machine learning to build intelligent, data-driven products.",
  },
  {
    icon: BarChart3,
    title: "Data Science",
    desc: "Turn raw data into actionable insights with advanced analytics and visualization.",
  },
  {
    icon: Zap,
    title: "Digital Transformation",
    desc: "Modernize your tech stack and processes to stay competitive in a rapidly evolving landscape.",
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-32 bg-card" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <p className="text-primary font-display font-medium tracking-widest uppercase text-sm mb-4">
            Services
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            What we really know
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-8 rounded-xl border border-border bg-background hover:border-primary/30 transition-all duration-300 hover:shadow-[var(--shadow-glow)]"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <s.icon className="text-primary" size={24} />
              </div>
              <h3 className="font-display font-semibold text-lg mb-3">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

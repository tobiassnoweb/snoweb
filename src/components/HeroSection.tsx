import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
//import snowflake from "@/assets/snoweb-animation.gif";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background" />
      </div>

      <div className="container relative z-10 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-3 mb-6"
          >
            <p className="text-primary font-display font-medium tracking-widest uppercase text-sm">
              Consulting · AI · Product Design
            </p>
          </motion.div>

          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-8">
            We build
            <br />
            <span className="text-gradient">digital products</span>
            <br />
            that matter.
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-12 leading-relaxed">
            A boutique consultancy specializing in product design, AI
            integration, and digital transformation. Turning ideas into
            high-performing digital experiences.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-display font-semibold text-sm hover:opacity-90 transition-opacity glow"
            >
              View our work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg border border-border text-foreground font-display font-semibold text-sm hover:border-primary/50 transition-colors"
            >
              Get in touch
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a
          href="#about"
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowDown size={20} className="animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  { name: "Product Design", pct: 95 },
  { name: "Artificial Intelligence", pct: 90 },
  { name: "User Interface", pct: 92 },
  { name: "Data Science", pct: 85 },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 relative" ref={ref}>
      <div className="container">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="text-primary font-display font-medium tracking-widest uppercase text-sm mb-4">
              About us
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Entrepreneurial agility meets{" "}
              <span className="text-gradient">technical excellence</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Snoweb Consulting is a boutique consultancy group specializing in
              product design, AI integration, and digital transformation. Founded
              by Tobias Tornqvist, a seasoned Web Developer and Entrepreneur, we
              bring a unique blend of strategic insight and hands-on expertise to
              every project.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We combine entrepreneurial agility with technical excellence,
              ensuring every project is delivered with precision, innovation, and
              measurable impact.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="font-display font-semibold text-lg mb-4">Our Skills</p>
            {skills.map((s, i) => (
              <div key={s.name}>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-foreground">{s.name}</span>
                  <span className="text-sm text-muted-foreground">{s.pct}%</span>
                </div>
                <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-primary rounded-full"
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${s.pct}%` } : {}}
                    transition={{ duration: 1, delay: 0.3 + i * 0.15, ease: "easeOut" }}
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

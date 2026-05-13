import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const credentials = [
  { label: "Verizon", detail: "ML-driven demand radar — enterprise UX at scale" },
  { label: "Sibros", detail: "AI-driven vehicle diagnostics — generative AI + LLMs" },
  { label: "LiquidAmber", detail: "AI research platform — co-founded, led product" },
  { label: "SS&C / Fintech", detail: "Enterprise AI workflows & knowledge systems" },
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
              About
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight">
              We've shipped AI products{" "}
              <span className="text-gradient">in the real world</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Snoweb Consulting is a boutique AI product consultancy founded by
              Tobias Tornqvist — a product designer, AI engineer, and entrepreneur
              who has led end-to-end delivery for startups, enterprise innovation
              labs, and Fortune 500 teams.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We don't just advise — we design, build, and ship. From LLM
              integration and AI copilots to full product strategy and frontend
              engineering, we bring the full stack needed to move fast without
              cutting corners.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-4"
          >
            <p className="font-display font-semibold text-lg mb-4">Trusted by</p>
            {credentials.map((c, i) => (
              <motion.div
                key={c.label}
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="flex items-start gap-4 p-4 rounded-lg border border-border bg-card"
              >
                <span className="text-primary font-display font-bold text-sm shrink-0 w-28">{c.label}</span>
                <span className="text-sm text-muted-foreground leading-snug">{c.detail}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

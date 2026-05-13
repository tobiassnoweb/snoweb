import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Rocket, Building2, Users } from "lucide-react";

const offers = [
  {
    icon: Rocket,
    label: "Offer 1",
    title: "AI Product Accelerator",
    tagline: "For startups and innovation teams.",
    deliverables: [
      "AI feature strategy",
      "Rapid prototype",
      "LLM integration",
      "UX flows",
      "Production-ready frontend",
    ],
    clients: ["Seed to Series B startups", "Innovation labs", "Enterprise pilots"],
  },
  {
    icon: Building2,
    label: "Offer 2",
    title: "Enterprise AI UX Modernization",
    tagline: "For enterprises building the next layer of intelligent tooling.",
    deliverables: [
      "AI copilots & assistants",
      "AI-assisted workflows",
      "Verification & review tooling",
      "Knowledge systems",
      "Operational AI UX",
    ],
    clients: ["Financial services", "Automotive & IoT", "Enterprise software teams"],
  },
  {
    icon: Users,
    label: "Offer 3",
    title: "Fractional AI Product Lead",
    tagline: "Senior AI product leadership without the full-time overhead.",
    deliverables: [
      "1–2 days/week advisory",
      "Architecture guidance",
      "AI product strategy",
      "Design systems",
      "Frontend leadership & hiring support",
    ],
    clients: ["Early-stage startups", "Teams between hires", "Uncertain-market pivots"],
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
            How we work
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Three ways to engage
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {offers.map((o, i) => (
            <motion.div
              key={o.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-8 rounded-xl border border-border bg-background hover:border-primary/30 transition-all duration-300 hover:shadow-[var(--shadow-glow)] flex flex-col"
            >
              <div className="flex items-start gap-4 mb-5">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <o.icon className="text-primary" size={24} />
                </div>
                <div>
                  <p className="text-xs text-primary font-display font-medium tracking-widest uppercase mb-1">{o.label}</p>
                  <h3 className="font-display font-semibold text-lg leading-tight">{o.title}</h3>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-5 leading-relaxed">{o.tagline}</p>

              <div className="mb-5">
                <p className="text-xs font-display font-semibold uppercase tracking-wider text-foreground mb-3">Deliverables</p>
                <ul className="space-y-1.5">
                  {o.deliverables.map((d) => (
                    <li key={d} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-primary mt-0.5 shrink-0">—</span>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto pt-5 border-t border-border">
                <p className="text-xs font-display font-semibold uppercase tracking-wider text-foreground mb-3">Ideal for</p>
                <ul className="space-y-1.5">
                  {o.clients.map((c) => (
                    <li key={c} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-primary mt-0.5 shrink-0">·</span>
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

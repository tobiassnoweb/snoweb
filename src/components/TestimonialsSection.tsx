import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      `At Verizon, Tobias identified a critical gap in our Design System infrastructure: we lacked a systematic, data-driven way to identify unmet needs. This often left us planning roadmaps based on anecdotes and reacting to duplicate work rather than preventing it.

Tobias led the initiative to architect the "Demand Radar" to solve this. He built a Machine Learning pipeline designed to analyze community patterns and detect widespread usage trends automatically. His work provided the foundational infrastructure we needed to move from reactive work to data-backed prioritization.

Tobias has a unique talent for building intelligent tools and solid technical foundations. I highly recommend them for any role requiring deep technical aptitude and innovation.`,
    author: "Senior Leader, Design Systems",
    company: "Verizon",
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="testimonials" className="py-32 bg-card" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <p className="text-primary font-display font-medium tracking-widest uppercase text-sm mb-4">
            Testimonials
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            What clients say
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative p-10 rounded-2xl border border-border bg-background"
            >
              <Quote
                size={40}
                className="text-primary/20 absolute top-8 right-8"
                aria-hidden
              />
              <div className="space-y-4">
                {t.quote.split("\n\n").map((para, j) => (
                  <p key={j} className="text-muted-foreground leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-border flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="text-primary font-display font-bold text-sm">
                    {t.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-display font-semibold text-sm text-foreground">
                    {t.author}
                  </p>
                  <p className="text-xs text-muted-foreground">{t.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

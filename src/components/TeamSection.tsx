import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Linkedin } from "lucide-react";

const team = [
  {
    name: "Tobias Tornqvist",
    role: "Founder & Product Lead",
    bio: "Specialized in product strategy, UX/UI design, and front-end development with a strong focus on AI-driven solutions and fintech.",
    image: "https://tobiassnoweb.github.io/snoweb/img/team/headshot.png",
    linkedin: "https://www.linkedin.com/in/tobias-tornqvist-5970103/",
  },
  {
    name: "Benoit Marsot",
    role: "Senior Software Developer",
    bio: "Experienced developer with deep knowledge of relational databases, genetic programming, and cutting-edge technologies including MR and Hololens 2.",
    image: "https://tobiassnoweb.github.io/snoweb/img/team/benoit-headshot.png",
    linkedin: "https://www.linkedin.com/in/benoitmarsot/",
  },
  {
    name: "Sven Linus Tornqvist",
    role: "AI Developer",
    bio: "Visionary developer creating viral games, social apps, and cutting-edge AI solutions with deep expertise in neural networks.",
    image: "https://tobiassnoweb.github.io/snoweb/img/team/sven-linus.png",
    linkedin: "https://www.linkedin.com/in/sven-linus-t%C3%B6rnqvist/",
  },
];

const TeamSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="team" className="py-32 bg-card" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <p className="text-primary font-display font-medium tracking-widest uppercase text-sm mb-4">
            Team
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Meet our experts
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group text-center"
            >
              <div className="relative w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border-2 border-border group-hover:border-primary/50 transition-colors">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-display font-bold text-xl mb-1">{t.name}</h3>
              <p className="text-primary text-sm font-medium mb-3">{t.role}</p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4 max-w-xs mx-auto">
                {t.bio}
              </p>
              <a
                href={t.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

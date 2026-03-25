import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ExternalLink, X } from "lucide-react";

import verizonBookmarkSrc from "../assets/verizon-bookmark.mov?url";
import verizonClusterSrc from "../assets/verizon-cluster.mov?url";
import verizonDemandRadarImg from "../assets/verizon-demand-radar.png";
import liquidAmberPreviewSrc from "../assets/liquidamber.webp";
import sibrosSrc from "../assets/sibros.jpg";

import musicGeneratorSrc from "../assets/music-generator.webp";
import liquidAmberSrc from "../assets/liquidamberHZ.mov?url";
import sibrosVideoSrc from "../assets/sibros-demo.mov?url";
import musicVideoSrc from "../assets/music-generator.mov?url";

interface VideoItem {
  src: string;
  label: string;
}

interface Project {
  title: string;
  category: string;
  desc: string;
  detail: string;
  link: string | null;
  image: string;
  videos: VideoItem[];
}

const projects: Project[] = [
  {
    title: "Verizon: Demand Radar",
    category: "Machine Learning",
    desc: "Led product design and UX engineering for Demand Radar, a machine learning–driven platform that identifies emerging trends in network demand and behavioral patterns.",
    detail: `Led product design and UX engineering for Demand Radar, a machine learning–driven platform that identifies emerging trends in network demand and behavioral patterns. Designed interfaces that translate high-dimensional data into intuitive visual systems, including exploratory 3D clustering models that surface hidden relationships and anomalies in real time.

Focused on making complex ML outputs accessible and actionable for cross-functional teams, enabling faster, data-informed decisions across planning, operations, and marketing. Partnered closely with data science and engineering to shape model interpretation, workflow integration, and scalable UI architecture.`,
    link: null,
    image: verizonDemandRadarImg,
    videos: [
      { src: verizonBookmarkSrc, label: "Bookmark Demo" },
      { src: verizonClusterSrc, label: "Cluster Demo" },
    ],
  },
  {
    title: "LiquidAmber",
    category: "AI Application",
    desc: "Co-founded and led product design for LiquidAmber, LiquidAmber is an AI-powered research and storytelling platform built for modern newsrooms and research institutions",
    detail: `LiquidAmber is an AI-powered research and storytelling platform built for modern newsrooms and research institutions. It transforms fragmented archives into a living, queryable knowledge system—enabling journalists to surface context, identify patterns, and develop stories with greater speed and depth.

At its core, LiquidAmber combines large language models with structured newsroom data to create a research-centric workflow. Journalists can explore historical coverage, uncover emerging narratives, and generate follow-up angles through an interface designed around how reporting actually happens—not how systems are traditionally organized.

The platform is both LLM-agnostic and CMS-agnostic, integrating directly into existing editorial environments without requiring migration or lock-in. Through a flexible API and MCP-based architecture, LiquidAmber connects archives, live data, and newsroom tools into a unified layer of intelligence.

Purpose-built for efficiency and scale, LiquidAmber reduces the friction of archival research while increasing the quality and continuity of storytelling. It empowers newsrooms to do more with what they already have—unlocking institutional knowledge and turning it into a competitive advantage.`,
    link: null,
    image: liquidAmberPreviewSrc,
    videos: [{ src: liquidAmberSrc, label: "Platform Demo" }],
  },
  {
    title: "Sibros: AI-Driven Diagnostics",
    category: "Generative AI",
    desc: "Led the design and implementation of a cutting-edge diagnostic tool powered by generative AI and LLMs. User-centric design with real-time intelligent diagnostics.",
    detail: `Showcase for an AI-Driven Diagnostic Tool

Role: Led the design and implementation of a cutting-edge diagnostic tool powered by generative AI and large language models (LLMs). Spearheaded product development from concept to execution, focusing on user-centric design, seamless functionality, and leveraging AI to deliver intelligent, real-time diagnostics.`,
    link: "https://www.sibros.tech/post/transforming-vehicle-maintenance-with-ai-driven-diagnostics?utm_source=LinkedIn&utm_medium=Social+media+&utm_campaign=Transforming+Vehicle+Maintenance+with+AI-Driven+Diagnostics",
    image: sibrosSrc,
    videos: [{ src: sibrosVideoSrc, label: "Demo" }],
  },
  {
    title: "AI Music Generator",
    category: "AI Experiment",
    desc: "Mood-based AI Music Generator that creates personalized music in real-time based on the user's emotional state using AI-driven sentiment analysis.",
    detail: `The Mood-Based AI Music Generator is an intelligent tool that creates personalized music in real-time based on the user's emotional state. Using AI-driven sentiment analysis, biometrics, or user input, the system dynamically generates or curates music that aligns with the detected mood.`,
    link: "https://github.com/svenlinus/AI-Generated-Music-Pytorch-Flask",
    image: musicGeneratorSrc,
    videos: [{ src: musicVideoSrc, label: "Demo" }],
  },
];

const PortfolioSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const selected = selectedProject !== null ? projects[selectedProject] : null;

  useEffect(() => {
    if (selectedProject !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  return (
    <>
      <section id="portfolio" className="py-32" ref={ref}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16"
          >
            <p className="text-primary font-display font-medium tracking-widest uppercase text-sm mb-4">
              Portfolio
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              What we are proud of
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                onMouseEnter={() => setHoveredIdx(i)}
                onMouseLeave={() => setHoveredIdx(null)}
                onClick={() => setSelectedProject(i)}
                className="group relative rounded-xl overflow-hidden border border-border bg-card aspect-[16/10] cursor-pointer"
              >
                <img
                  src={p.image}
                  alt={p.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-30 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <span className="text-xs text-primary font-display font-medium tracking-wider uppercase">
                    {p.category}
                  </span>
                  <h3 className="font-display font-bold text-xl md:text-2xl mt-2 mb-2">
                    {p.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                    {p.desc}
                  </p>
                  <span
                    className={`inline-block mt-3 text-xs text-primary font-medium tracking-wide transition-opacity duration-200 ${hoveredIdx === i ? "opacity-100" : "opacity-0"}`}
                  >
                    View details →
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selected && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm p-4 md:p-8"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              key="panel"
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.97 }}
              transition={{ duration: 0.3 }}
              className="relative bg-card border border-border rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Hero image */}
              <div className="relative aspect-[16/7] rounded-t-2xl overflow-hidden">
                <img
                  src={selected.image}
                  alt={selected.title}
                  className="w-full h-full object-cover opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
              </div>

              <div className="p-6 md:p-8">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 rounded-lg bg-background/60 hover:bg-background text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Close"
                >
                  <X size={18} />
                </button>

                <span className="text-xs text-primary font-display font-medium tracking-wider uppercase">
                  {selected.category}
                </span>
                <h2 className="font-display font-bold text-2xl md:text-3xl mt-2 mb-6">
                  {selected.title}
                </h2>

                <p className="text-muted-foreground leading-relaxed whitespace-pre-line mb-8">
                  {selected.detail}
                </p>

                {/* Videos */}
                <div
                  className={`grid gap-6 mb-8 ${selected.videos.length > 1 ? "md:grid-cols-2" : ""}`}
                >
                  {selected.videos.map((video, idx) => (
                    <div key={idx}>
                      {selected.videos.length > 1 && (
                        <p className="text-sm font-medium text-muted-foreground mb-2">
                          {video.label}
                        </p>
                      )}
                      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
                      <video
                        src={video.src}
                        controls
                        className="w-full rounded-lg border border-border"
                        preload="metadata"
                      />
                    </div>
                  ))}
                </div>

                {selected.link && (
                  <a
                    href={selected.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-primary hover:underline font-medium"
                  >
                    Read full story
                    <ExternalLink size={13} />
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PortfolioSection;

import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import sliceHub from "@/assets/proj-slicehub.jpg";
import horizonTravel from "@/assets/proj-travel.jpg";
import adSync from "@/assets/proj-adsync.jpg";
import iplDashboard from "@/assets/proj-ipl.jpg";
import medicareAssist from "@/assets/proj-medicare.jpg";
import resumeAnalyzer from "@/assets/proj-resume-analyzer.jpg";
import fashionClassifier from "@/assets/proj-fashion.jpg";
import projPortfolio from "@/assets/proj-portfolio.jpg";

const projects = [

  {
    title: "Slice Hub - Food Ordering platform",
    category: "Full Stack Web",
    desc: "Developed a web-based platform for managing and browsing food ordering services with a clean user interface.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT Auth", "Gemini API"],
    image: sliceHub,
    accent: "cyan",
    github: "https://github.com/MalshaJayamanne/slice-hub",
    live: "#",
  },
  {
    title: "Horizon Travel - Travel Planner",
    category: "Full Stack Web",
    desc: "Built a travel planning application that allows users to explore destinations and organize trip itineraries.",
    tech: ["Next.js 16", "TypeScript", "Prisma 7", "PostgreSQL", "NextAuth.js", "Gemini AI", "Leaflet", "Recharts", "Cloudinary"],
    image: horizonTravel,
    accent: "blue",
    github: "https://github.com/MalshaJayamanne",
    live: "#",
  },
  {
    title: "AdSync (UI/UX Design)",
    category: "Backend & Systems",
    desc: "Contributed with designing an advertising synchronization system to manage and streamline ad content distribution across platforms.",
    tech: ["Figma", "Next.js 16", "PostgreSQL", "TypeScript", "Vercel", "Git"],
    image: adSync,
    accent: "cyan",
    github: "https://github.com/MalshaJayamanne",
    live: "#",
  },
  {
    title: "AI Resume Analyzer",
    category: "AI & NLP",
    desc: "Developed an AI-based tool to analyze resumes and provide scoring and suggestions. Used NLP techniques to extract and evaluate key resume sections.",
    tech: ["Python", "NLP", "Scikit-learn", "Flask", "HTML/CSS"],
    image: resumeAnalyzer,
    accent: "blue",
    github: "https://github.com/MalshaJayamanne",
    live: "#",
  },
  {
    title: "Fashion Image Classifier",
    category: "AI / Computer Vision",
    desc: "Convolutional Neural Network classifying 10 clothing categories and real-time inference dashboard with confidence visualization.",
    tech: ["Python", "TensorFlow", "CNN", "Streamlit"],
    image: fashionClassifier,
    accent: "cyan",
    github: "https://github.com/MalshaJayamanne",
    live: "#",
  },
  {
    title: "IPL Dashboard (Power BI)",
    category: "Data Analytics",
    desc: "An interactive dashboard to analyze IPL cricket data from 2008–2025. Visualized key insights.",
    tech: ["Power BI", "Excel", "Data Analytics"],
    image: iplDashboard,
    accent: "blue",
    powerbi:"",
    live: "#",
  },
  {
    title: "MediCare Assist – AI Health Risk Monitor",
    category: "AI & Machine Learning",
    desc: "Built an AI-powered system to predict health risks for Diabetes, Stroke, and Heart Disease. Integrated machine learning models with a web interface for real-time predictions.",
    tech: ["Python", "Scikit-learn", "Pandas", "NumPy", "React.js", "Node.js", "MongoDB"],
    image: medicareAssist,
    accent: "cyan",
    github: "https://github.com/MalshaJayamanne/health-monitor",
    live: "#",
  },
  {
    title: "Developer Portfolio",
    category: "My Portfolio",
    desc: "Developed this modern, responsive portfolio showcasing projects, technical skills, and credentials. Built with a sleek dark theme, glassmorphism, and smooth interactive animations.",
    tech: ["React.js", "TypeScript", "Tailwind CSS", "Vite"],
    image: projPortfolio,
    accent: "cyan",
    github: "https://github.com/MalshaJayamanne/portfolio",
    live: "#",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-12 md:py-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.25em] text-primary mb-4">Projects</p>
            <h2 className="text-4xl md:text-5xl font-bold">
              Selected <span className="text-gradient">work</span>.
            </h2>
          </div>
          <a
            href="https://github.com/MalshaJayamanne"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition"
          >
            View all on GitHub <ExternalLink className="size-3.5" />
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group glass-card rounded-3xl overflow-hidden hover:-translate-y-1 transition-all duration-500 relative"
            >
              <div className="relative aspect-[2/1] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  width={1024}
                  height={640}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                <div
                  className={`absolute top-3 left-3 text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded-full glass ${
                    p.accent === "cyan" ? "text-accent" : "text-primary"
                  }`}
                >
                  {p.category}
                </div>
              </div>
              <div className="p-5 -mt-5 relative">
                <h3 className="text-xl font-bold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                <ul className="mt-3.5 flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <li
                      key={t}
                      className="text-[10px] px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-muted-foreground"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex items-center gap-3">
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium hover:text-primary transition"
                    >
                      <FaGithub className="size-3.5" /> Code
                    </a>
                  )}
                  {p.live && p.live !== "#" && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium hover:text-accent transition"
                    >
                      <ExternalLink className="size-3.5" /> Live demo
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}


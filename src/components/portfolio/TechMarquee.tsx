import { motion } from "motion/react";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNextdotjs,
  SiPostgresql,
  SiTensorflow,
  SiPytorch,
  SiPandas,
  SiScikitlearn,
} from "react-icons/si";

const SiPowerbi = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M9.011 20.727V9.458c0-.462.375-.836.837-.836h3.693c.462 0 .836.374.836.836v11.27c0 .462-.374.836-.836.836H9.848a.837.837 0 0 1-.837-.837zM1.463 20.727v-5.632c0-.462.374-.836.836-.836h3.693c.462 0 .836.374.836.836v5.632c0 .462-.374.836-.836.836H2.299a.837.837 0 0 1-.836-.836zm15.111 0V3.791c0-.462.374-.836.836-.836H21.1c.463 0 .837.374.837.836v16.936c0 .462-.374.836-.837.836h-3.69c-.462 0-.836-.374-.836-.836z" />
  </svg>
);

const SiMicrosoftazure = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M13.605 0L1.248 17.242h8.977L22.752 0zM0 18.667l4.135 5.333h14.595L8.358 18.667z" />
  </svg>
);

const techStack = [
  { name: "React", icon: FaReact, color: "text-sky-400" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-foreground" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" },
  { name: "Python", icon: FaPython, color: "text-yellow-500" },
  { name: "PyTorch", icon: SiPytorch, color: "text-orange-500" },
  { name: "TensorFlow", icon: SiTensorflow, color: "text-amber-500" },
  { name: "Pandas", icon: SiPandas, color: "text-indigo-400" },
  { name: "Scikit-Learn", icon: SiScikitlearn, color: "text-emerald-400" },
  { name: "Power BI", icon: SiPowerbi, color: "text-yellow-500" },
  { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-400" },
  { name: "Docker", icon: FaDocker, color: "text-sky-500" },
  { name: "Azure", icon: SiMicrosoftazure, color: "text-sky-500" },
  { name: "Git", icon: FaGitAlt, color: "text-red-500" },
];

export function TechMarquee() {
  // Duplicate stack to ensure smooth infinite loop
  const marqueeItems = [...techStack, ...techStack, ...techStack];

  return (
    <section className="py-8 overflow-hidden relative select-none">
      <div className="container mx-auto px-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-white/5 light:bg-black/5" />
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground font-medium">
            Tech Stack & Tools
          </p>
          <div className="h-px flex-1 bg-white/5 light:bg-black/5" />
        </div>
      </div>

      <div className="relative w-full flex items-center overflow-hidden py-3">
        {/* Soft edge masking gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex items-center gap-6">
          {marqueeItems.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-3 rounded-2xl border border-white/5 light:border-black/5 bg-white/[0.02] light:bg-black/[0.01] backdrop-blur-md px-6 py-3 hover:border-primary/30 transition-all duration-300 group"
              >
                <Icon className={`size-5 transition-transform group-hover:scale-110 ${tech.color}`} />
                <span className="text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors duration-300">
                  {tech.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

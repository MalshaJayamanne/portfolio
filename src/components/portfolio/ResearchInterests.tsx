import { motion } from "motion/react";
import {
  BrainCircuit,
  Cpu,
  Eye,
  Network,
  BarChart3,
  ShieldCheck,
  Camera,
  Code2,
  GitBranch,
} from "lucide-react";

const interests = [
  { title: "Artificial Intelligence", icon: BrainCircuit, desc: "Intelligent agents and decision-making systems." },
  { title: "Machine Learning", icon: Cpu, desc: "Statistical learning theory and predictive modeling." },
  { title: "Explainable AI (XAI)", icon: Eye, desc: "Making deep learning models transparent and interpretable." },
  { title: "Deep Learning", icon: Network, desc: "Neural network architectures for complex patterns." },
  { title: "Data Analytics", icon: BarChart3, desc: "Data pipelines, predictive modeling, and business insights." },
  { title: "Intelligent Software Systems", icon: Code2, desc: "Self-adaptive and autonomous software systems." },
];

export function ResearchInterests() {
  return (
    <section id="research" className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mb-14">
          <p className="text-sm uppercase tracking-[0.25em] text-primary mb-4">Focus</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            My <span className="text-gradient">Interests</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Domains I am eager to explore further, build upon, and contribute to through engineering.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {interests.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="glass-card rounded-2xl p-6 hover:-translate-y-1 hover:border-primary/40 transition-all duration-300 group"
            >
              <div className="size-11 rounded-xl grid place-items-center bg-white/5 border border-white/10 group-hover:bg-[var(--gradient-neon)] group-hover:glow-cyan mb-4 transition duration-300">
                <item.icon className="size-5 text-primary group-hover:text-white light:group-hover:text-black transition" />
              </div>
              <h3 className="font-semibold text-lg leading-snug group-hover:text-primary transition duration-300">
                {item.title}
              </h3>
              <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

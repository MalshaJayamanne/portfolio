import { motion } from "motion/react";
import { BrainCircuit, Cpu, Eye, Network, BarChart3, Code2 } from "lucide-react";

const cards = [
  { icon: BrainCircuit, title: "Artificial Intelligence", text: "Intelligent agents and decision-making systems." },
  { icon: Cpu, title: "Machine Learning", text: "Statistical learning theory and predictive modeling." },
  { icon: Eye, title: "Explainable AI (XAI)", text: "Making deep learning models transparent and interpretable." },
  { icon: Network, title: "Deep Learning", text: "Neural network architectures for complex patterns." },
  { icon: BarChart3, title: "Data Analytics", text: "Data pipelines, predictive modeling, and business insights." },
  { icon: Code2, title: "Intelligent Software Systems", text: "Self-adaptive and autonomous software systems." },
];

export function About() {
  return (
    <section id="about" className="py-12 md:py-32">
      <div className="container mx-auto px-4 grid lg:grid-cols-[1.1fr_1.3fr] gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm uppercase tracking-[0.25em] text-primary mb-4">About</p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Engineering at the intersection of{" "}
            <span className="text-gradient">code, analytics & intelligence</span>.
          </h2>
          <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
            I'm a Software Engineering undergraduate passionate about Data Analytics, Artificial Intelligence, Machine Learning, and Full Stack Development. I enjoy building scalable applications and intelligent software solutions that transform data into meaningful insights and solve real-world problems.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Currently exploring Explainable AI, Deep Learning, and Design-led
            Engineering. Open to internship and project/research collaboration
            opportunities.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass-card rounded-2xl p-5 hover:-translate-y-1 hover:border-primary/40 transition-all duration-300 group"
            >
              <div className="size-10 rounded-xl grid place-items-center bg-white/5 border border-white/10 group-hover:bg-[var(--gradient-neon)] group-hover:glow-cyan mb-4 transition duration-300">
                <c.icon className="size-5 text-primary group-hover:text-white light:group-hover:text-black transition" />
              </div>
              <h3 className="font-semibold text-base sm:text-lg leading-snug group-hover:text-primary transition duration-300">{c.title}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1.5 leading-relaxed">{c.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
import { motion } from "motion/react";
import { Brain, Code, Layers, Rocket } from "lucide-react";

const cards = [
  { icon: Code, title: "Full Stack", text: "MERN, Spring Boot, REST APIs, scalable architectures." },
  { icon: Brain, title: "AI / ML", text: "TensorFlow, CNNs, XAI, model deployment pipelines." },
  { icon: Layers, title: "Systems", text: "Database design, distributed systems, performance." },
  { icon: Rocket, title: "Product", text: "UI/UX systems, accessibility, fast shipping." },
];

export function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-start">
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
              className="glass-card rounded-2xl p-6 hover:-translate-y-1 hover:border-primary/40 transition-all"
            >
              <div className="size-11 rounded-xl grid place-items-center bg-[var(--gradient-neon)] glow-cyan mb-4">
                <c.icon className="size-5 text-background" />
              </div>
              <h3 className="font-semibold text-lg">{c.title}</h3>
              <p className="text-sm text-muted-foreground mt-1.5">{c.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
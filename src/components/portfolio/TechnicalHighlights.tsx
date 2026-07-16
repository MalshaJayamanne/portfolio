import { motion } from "motion/react";
import { CheckCircle2, Star } from "lucide-react";

const highlights = [
  "Software Engineering Undergraduate",
  "15+ Academic & Personal Projects",
  "ML Enthusiast",
  "Data Analytics Enthusiast",
  "MERN Stack Developer",
  "Built Production-Ready Full Stack Applications",
  "Experience with TensorFlow, Scikit-learn, Power BI",
  "Passionate about Explainable AI and Intelligent Systems",
  "Open to Internship Opportunities",
];

export function TechnicalHighlights() {
  return (
    <section id="highlights" className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 items-center">
          {/* Left Side: Summary */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="size-11 grid place-items-center rounded-xl bg-[var(--gradient-neon)] glow-cyan">
                <Star className="size-5 text-white light:text-black" />
              </div>
              <p className="text-sm uppercase tracking-[0.25em] text-primary font-semibold">Quick Summary</p>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Technical <span className="text-gradient">Highlights</span>
            </h2>
            <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
              A high-level overview of my academic foundation, key expertise, and professional focus for quick review.
            </p>
          </motion.div>

          {/* Right Side: Highlight Items */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((highlight, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="glass-card rounded-2xl p-5 flex items-start gap-4 hover:border-primary/30 transition duration-300 group"
              >
                <span className="mt-0.5 size-6 rounded-lg grid place-items-center bg-primary/10 border border-primary/20 text-primary group-hover:bg-primary group-hover:text-background transition duration-300">
                  <CheckCircle2 className="size-4" />
                </span>
                <span className="text-sm font-medium text-foreground/90 group-hover:text-foreground transition duration-300 leading-snug">
                  {highlight}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

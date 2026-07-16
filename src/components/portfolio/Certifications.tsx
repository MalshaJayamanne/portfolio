import { motion } from "motion/react";
import { Award, ExternalLink } from "lucide-react";

const certs = [
  { name: "Google Analytics", by: "Google · 2026" },
  { name: "Web Designing for Beginners", by: "University of Moratuwa · 2023" },
  { name: "Miscrosoft Azure for Deployments", by: "Microsoft · 2026" },
  { name: "Machince Learning and Advanced AI Techniques", by: "Alison · 2026" },
];

export function Certifications() {
  return (
    <section id="certifications" className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mb-14">
          <p className="text-sm uppercase tracking-[0.25em] text-accent mb-4">Credentials</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Certifications & <span className="text-gradient">Training</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Continuous learning and structured courses to deepen my technical expertise.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certs.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card rounded-3xl p-6 flex flex-col justify-between hover:border-accent/40 transition group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="size-11 grid place-items-center rounded-xl bg-white/5 border border-white/10 group-hover:bg-[var(--gradient-neon)] group-hover:glow-blue transition duration-300">
                    <Award className="size-5 text-accent group-hover:text-white light:group-hover:text-black transition" />
                  </div>
                  <span className="text-xs font-mono text-accent">✓ Verified</span>
                </div>
                <h4 className="font-semibold text-lg leading-snug group-hover:text-accent transition duration-300">
                  {c.name}
                </h4>
                <p className="text-sm text-muted-foreground mt-2">{c.by}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

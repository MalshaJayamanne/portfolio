import { motion } from "motion/react";
import { Briefcase } from "lucide-react";

const items = [
  {
    when: "2024",
    title: "Industrial Visits",
    where: "IFS, CodeGen, Zone24x7, LSEG",
    text: "Studied enterprise softwares, work process, middleware integration patterns, and large-scale ERP delivery practices.",
  },
  {
    when: "2022 — Now",
    title: "University Group Projects",
    where: "Software Engineering Dept.",
    text: "Lead engineer on multiple cross-functional teams shipping research tools and full-stack applications.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mb-14">
          <p className="text-sm uppercase tracking-[0.25em] text-accent mb-4">Experience</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Where I've been <span className="text-gradient">building</span>.
          </h2>
        </div>

        <div className="relative pl-6 md:pl-10">
          <div className="absolute left-2 md:left-4 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-accent to-transparent" />
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative mb-8 last:mb-0"
            >
              <div className="absolute -left-[18px] md:-left-[26px] top-6 size-3 rounded-full bg-primary glow-cyan" />
              <div className="glass-card rounded-2xl p-6 hover:border-primary/40 transition">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div className="flex items-center gap-3">
                    <div className="size-9 grid place-items-center rounded-lg bg-white/5">
                      <Briefcase className="size-4 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg">{it.title}</h3>
                  </div>
                  <span className="text-xs text-muted-foreground font-mono">{it.when}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-3">{it.where}</p>
                <p className="mt-3 leading-relaxed">{it.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

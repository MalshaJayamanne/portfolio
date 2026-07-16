import { motion } from "motion/react";

const groups = [
  {
    title: "Programming Languages",
    items: ["Python", "JavaScript", "TypeScript", "C/C++", "SQL"],
  },
  {
    title: "Frontend",
    items: ["React", "Next", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "Flask", "REST APIs", "JWT Authentication"],
  },
  {
    title: "Databases",
    items: ["MongoDB", "MySQL", "PostgreSQL"],
  },
  {
    title: "AI / Machine Learning",
    items: ["Jupyter Notebook", "TensorFlow", "Scikit-learn", "Pandas", "NumPy", "CNN", "Deep Learning", "XAI", "Keras"],
  },
  {
    title: "Data Analytics",
    items: ["Power BI", "Excel", "SQL", "EDA", "Data Visualizations"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "VS Code", "Pycharm", "Postman", "Superbase", "Vercel"],
  },
];

const marquee = [
  "React", "Node.js", "Python", "Jupyter", "TensorFlow", "MongoDB", "Next", "JavaScript", "Git", "VSCode",
  "TypeScript", "C", "C++", "PostgreSQL", "Power BI", "Pandas", "Scikit-learn", "MySQL", "Flask", "HTML5", "CSS", "Tailwind CSS"
];

export function Skills() {
  return (
    <section id="skills" className="py-12 md:py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mb-14">
          <p className="text-sm uppercase tracking-[0.25em] text-accent mb-4">Skills</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            The <span className="text-gradient">stack</span> I build with.
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            A modern toolkit spanning AI, web platforms, and systems engineering.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {groups.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="glass-card rounded-2xl p-6 group relative overflow-hidden"
            >
              <div className="absolute -top-12 -right-12 size-32 rounded-full bg-[var(--gradient-neon)] opacity-0 group-hover:opacity-20 blur-2xl transition-opacity" />
              <h3 className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
                {g.title}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <li
                    key={s}
                    className="text-sm rounded-lg px-3 py-1.5 tag-label hover:border-primary/50 hover:text-primary transition"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from "motion/react";
import { GraduationCap } from "lucide-react";

const courses = [
  "Machine Learning",
  "Artificial Intelligence",
  "Software Reliability",
  "Distributed Systems",
  "UI/UX Engineering",
  "Data Structures & Algorithms",
  "Software Architecture",
  "Human-Computer Interaction",
  "Internet of Things (IoT)",
  "ERP Systems",
  "Object-Oriented Programming (OOP)",
  "DBMS",
  "Software Security",
  "Quality Assurance (QA)",
  "Big Data Analysis",
];

const educationHistory = [
  {
    degree: "BComp (Hons) in Software Engineering",
    school: "University of Sri Jayewardenepura",
    period: "2023 — 2027 (Expected)",
    description: "Focused coursework across systems engineering, AI, and full stack development. Current GPA is above 3.5 after 5 semesters.",
  },
  {
    degree: "Diploma in Aquinas English & Literature",
    school: "BCI Campus",
    period: "2022 — 2023",
    description: "Comprehensive diploma program focusing on advanced English language, creative writing, and classic literature studies.",
  },
  {
    degree: "Primary & Secondary Education",
    school: "De Mazenod College",
    period: "2008 — 2022",
    description: "Completed primary and secondary education, built a strong academic foundation in physical science (3Bs in A/Ls, 9As in O/Ls).",
  },
];

export function Education() {
  return (
    <section id="education" className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 items-start">
          {/* Left Column: Heading and Coursework */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-3xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="size-11 grid place-items-center rounded-xl bg-[var(--gradient-neon)] glow-cyan">
                <GraduationCap className="size-5 text-white light:text-black" />
              </div>
              <p className="text-sm uppercase tracking-[0.25em] text-primary font-semibold">Education</p>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Academic <span className="text-gradient">Journey</span>
            </h2>
            <p className="text-muted-foreground mb-8 text-sm md:text-base leading-relaxed">
              My educational background has provided me with a solid foundation in software engineering principles, algorithm design, and advanced computing paradigms.
            </p>

            <div className="pt-6 border-t border-white/5 light:border-black/5">
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4 font-semibold">
                Relevant Coursework
              </p>
              <ul className="flex flex-wrap gap-2">
                {courses.map((c) => (
                  <li
                    key={c}
                    className="text-xs rounded-lg px-3 py-1.5 bg-white/5 border border-white/10 hover:border-primary/30 transition-colors"
                  >
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right Column: Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="glass-card rounded-3xl p-8"
          >
            <div className="space-y-8 relative before:absolute before:left-2.5 before:top-2 before:bottom-2 before:w-px before:bg-white/10 light:before:bg-black/10">
              {educationHistory.map((edu, i) => (
                <div key={i} className="relative pl-8 group">
                  <div className="absolute left-1.5 top-2.5 size-2 rounded-full bg-primary group-hover:scale-125 transition-transform animate-pulse-glow" />
                  <h4 className="font-bold text-lg leading-snug text-foreground group-hover:text-primary transition-colors">
                    {edu.degree}
                  </h4>
                  <p className="text-sm font-semibold text-muted-foreground mt-1">
                    {edu.school} · <span className="text-xs font-mono font-normal">{edu.period}</span>
                  </p>
                  <p className="text-sm text-muted-foreground/80 mt-2 leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

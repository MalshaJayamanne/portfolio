import { motion } from "motion/react";
import { ArrowRight, Download, Mail, Sparkles } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import avatar from "@/assets/avatar.jpg";
import heroBg from "@/assets/hero-bg.jpg";

export function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div
        className="absolute inset-0 -z-10 opacity-30"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          maskImage: "linear-gradient(to bottom, black 30%, transparent)",
        }}
      />
      <div className="absolute inset-0 -z-10 grid-bg" />

      <div className="container mx-auto px-4 grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs text-muted-foreground mb-6"
          >
            <span className="size-2 rounded-full bg-primary animate-pulse-glow" />
            Available for internships & freelance
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="font-display font-bold text-5xl md:text-7xl leading-[1.05] tracking-tight"
          >
            I'm <span className="text-gradient">Malsha Jayamanne</span>
            <br />
            <span className="text-foreground/90">building intelligent</span>
            <br />
            <span className="text-foreground/90">software systems.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-6 max-w-xl text-lg text-muted-foreground"
          >
            Software Engineering undergraduate passionate about{" "}
            <span className="text-foreground">AI/ML</span>,{" "}
            <span className="text-foreground">Data Analytics</span>,{" "}
            <span className="text-foreground">Full Stack Development</span>, and
            intelligent systems that ship to production.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl px-5 py-3 font-medium bg-[var(--gradient-neon)] text-white light:text-black glow-cyan hover:opacity-95 transition"
            >
              View projects
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-xl px-5 py-3 font-medium glass hover:bg-white/5 transition"
            >
              <Download className="size-4" />
              Resume
            </a>
            <div className="flex items-center gap-2 ml-1">
              {[
                { icon: FaGithub, href: "https://github.com/MalshaJayamanne" },
                { icon: FaLinkedin, href: "https://www.linkedin.com/in/malsha-jayamanne-957048302/" },
                { icon: Mail, href: "mailto:malshasulakshan4@gmail.com" },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  className="size-10 grid place-items-center rounded-xl glass hover:text-primary hover:border-primary/40 transition"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 grid grid-cols-3 max-w-md gap-3"
          >
            {[
              { k: "15+", v: "Projects" },
              { k: "3+", v: "Years coding" },
              { k: "8+", v: "Technologies" },
            ].map((s) => (
              <div key={s.v} className="glass-card rounded-xl p-4">
                <div className="text-2xl font-bold text-gradient">{s.k}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.v}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative justify-self-center lg:justify-self-end"
        >
          <div className="absolute -inset-8 bg-[var(--gradient-neon)] opacity-30 blur-3xl rounded-full animate-pulse-glow" />
          <div className="relative animate-float">
            <div className="absolute -inset-1 rounded-3xl bg-[var(--gradient-neon)] opacity-80 blur-sm" />
            <div className="relative rounded-3xl overflow-hidden glass-card p-2">
              <img
                src={avatar}
                alt="Portrait of Malsha Jayamanne"
                width={420}
                height={420}
                className="rounded-2xl w-[300px] sm:w-[380px] aspect-square object-cover"
              />
            </div>
            <div className="absolute -top-4 -right-4 glass-card rounded-xl px-3 py-2 flex items-center gap-2 text-xs">
              <Sparkles className="size-3.5 text-primary" />
              DA/AI/ML Enthusiast
            </div>
            <div className="absolute -bottom-4 -left-4 glass-card rounded-xl px-3 py-2 text-xs">
              <span className="text-accent">●</span> Full Stack
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

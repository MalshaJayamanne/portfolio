import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ArrowRight, Download, Mail, Sparkles } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import avatar from "@/assets/avatar.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const roles = ["AI/ML Enthusiast", "Full Stack Developer", "Data Analytics Explorer", "Software Engineering Undergraduate"];

export function Hero() {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [text, setText] = useState("");

  useEffect(() => {
    if (subIndex === roles[index].length + 1 && !reverse) {
      const timeout = setTimeout(() => setReverse(true), 1500);
      return () => clearTimeout(timeout);
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 30 : 80);

    return () => clearTimeout(timeout);
  }, [subIndex, reverse, index]);

  useEffect(() => {
    setText(roles[index].substring(0, subIndex));
  }, [subIndex, index]);
  return (
    <section id="top" className="relative pt-36 pb-12 lg:pt-32 lg:pb-16 overflow-hidden">
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

      <div className="container mx-auto px-4 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-6 items-center">
        <div className="order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="font-display font-bold text-4xl sm:text-5xl lg:text-7xl leading-[1.05] tracking-tight"
          >
            I'm <span className="text-gradient">Malsha Jayamanne</span>
            <br className="hidden lg:inline" />{" "}
            <span className="text-foreground/90">building intelligent</span>
            <br className="hidden lg:inline" />{" "}
            <span className="text-foreground/90">software systems.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-6 max-w-xl text-base sm:text-lg text-muted-foreground"
          >
            Software Engineering Undergraduate specializing in AI/ML, Data Analytics, and Full Stack Development. Passionate about designing intelligent, scalable software solutions that solve real-world problems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3 w-full"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl px-5 py-3 font-medium bg-[var(--gradient-neon)] text-white light:text-black glow-cyan hover:opacity-95 transition"
            >
              View Projects
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="/MalshaJayamanne_CV.pdf"
              download="MalshaJayamanne_CV.pdf"
              className="inline-flex items-center gap-2 rounded-xl px-5 py-3 font-medium glass hover:bg-white/5 transition"
            >
              <Download className="size-4" />
              Download CV
            </a>
            <div className="flex items-center justify-center gap-2 ml-0 lg:ml-1 mt-2 sm:mt-0">
              {[
                { icon: FaGithub, href: "https://github.com/MalshaJayamanne" },
                { icon: FaLinkedin, href: "https://www.linkedin.com/in/malsha-jayamanne/" },
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
            className="mt-12 grid grid-cols-3 max-w-md gap-2.5 w-full"
          >
            {[
              { k: "10+", v: "Projects" },
              { k: "3+", v: "Years Coding" },
              { k: "15+", v: "Tech" },
            ].map((s) => (
              <div key={s.v} className="glass-card rounded-xl p-3 sm:p-4 text-center">
                <div className="text-xl sm:text-2xl font-bold text-gradient">{s.k}</div>
                <div className="text-[10px] sm:text-xs text-muted-foreground mt-1 whitespace-nowrap">{s.v}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative justify-self-center lg:justify-self-center order-1 lg:order-2 flex flex-col items-center"
        >
          <div className="absolute -inset-8 bg-[var(--gradient-neon)] opacity-30 blur-3xl rounded-full animate-pulse-glow" />
          <div className="relative animate-float flex flex-col items-center">
            {/* The Avatar Container */}
            <div className="relative">
              {/* Spinning animated gradient border (snake chase effect) */}
              <div className="absolute -inset-[4px] rounded-3xl overflow-hidden -z-10">
                <div
                  className="absolute inset-0 bg-[conic-gradient(from_0deg,transparent_70%,var(--color-primary)_90%,var(--color-accent)_100%)] animate-[spin_3.5s_linear_infinite]"
                  style={{ margin: "-100%" }}
                />
              </div>
              {/* Spinning soft glow blur in sync with the snake line */}
              <div className="absolute -inset-[4px] rounded-3xl overflow-hidden -z-15 blur-md opacity-60">
                <div
                  className="absolute inset-0 bg-[conic-gradient(from_0deg,transparent_70%,var(--color-primary)_90%,var(--color-accent)_100%)] animate-[spin_3.5s_linear_infinite]"
                  style={{ margin: "-100%" }}
                />
              </div>
              {/* Card wrapper */}
              <div className="relative rounded-3xl overflow-hidden bg-transparent">
                <img
                  src={avatar}
                  alt="Portrait of Malsha Jayamanne"
                  width={420}
                  height={420}
                  className="rounded-3xl w-full max-w-[300px] sm:max-w-[380px] aspect-square object-cover"
                />
              </div>
              {/* Available Badge on Avatar Border */}
              <div className="absolute -top-4 -right-4 tag-label rounded-xl px-3 py-1.5 flex items-center gap-2 text-xs font-medium">
                <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-muted-foreground whitespace-nowrap">
                  <span className="sm:hidden">Available</span>
                  <span className="hidden sm:inline">Available for interns & projects</span>
                </span>
              </div>
            </div>

            {/* Fields/Roles display after avatar with typing animation */}
            <div className="mt-6 h-8 flex items-center justify-center">
              <span className="font-mono text-sm sm:text-base text-accent tracking-wider font-semibold uppercase">
                {text}
              </span>
              <span className="w-[2px] h-4 sm:h-5 bg-accent ml-1 animate-[pulse_1s_infinite]" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

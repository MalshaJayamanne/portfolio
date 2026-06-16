import { motion } from "motion/react";
import { Mail, Send, Phone, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative glass-card rounded-3xl p-8 md:p-14 overflow-hidden"
        >
          <div className="absolute -top-32 -right-32 size-80 rounded-full bg-[var(--gradient-neon)] opacity-25 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 size-80 rounded-full bg-accent opacity-20 blur-3xl" />

          <div className="grid lg:grid-cols-2 gap-12 relative">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-primary mb-4">Contact</p>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Let's build <span className="text-gradient">something</span> together.
              </h2>
              <p className="mt-5 text-muted-foreground text-lg">
                I'm currently open to internships, freelance projects, and
                research collaboration. Drop a message and I'll reply within 24h.
              </p>
              <div className="mt-8 space-y-3">
                {[
                  { icon: Mail, label: "malshasulakshan4@gmail.com", href: "mailto:malshasulakshan4@gmail.com" },
                  { icon: Phone, label: "+94 70 426 8110", href: "tel:+94704268110" },
                  { icon: MapPin, label: "Ja Ela, Sri Lanka", href: "#" },
                  { icon: FaGithub, label: "github.com/MalshaJayamanne", href: "https://github.com/MalshaJayamanne" },
                  { icon: FaLinkedin, label: "linkedin.com/in/malsha-jayamanne", href: "https://www.linkedin.com/in/malsha-jayamanne-957048302/" },
                ].map((c) => (
                  <a
                    key={c.label}
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel={c.href.startsWith("http") ? "noreferrer" : undefined}
                    className="flex items-center gap-3 group"
                  >
                    <span className="size-10 grid place-items-center rounded-xl glass group-hover:border-primary/40 transition">
                      <c.icon className="size-4" />
                    </span>
                    <span className="text-muted-foreground group-hover:text-foreground transition">
                      {c.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thanks! I'll be in touch soon.");
              }}
              className="space-y-4"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  required
                  placeholder="Name"
                  className="w-full rounded-xl glass px-4 py-3 outline-none focus:border-primary/60 transition"
                />
                <input
                  required
                  type="email"
                  placeholder="Email"
                  className="w-full rounded-xl glass px-4 py-3 outline-none focus:border-primary/60 transition"
                />
              </div>
              <input
                placeholder="Subject"
                className="w-full rounded-xl glass px-4 py-3 outline-none focus:border-primary/60 transition"
              />
              <textarea
                required
                placeholder="Tell me about your project…"
                rows={6}
                className="w-full rounded-xl glass px-4 py-3 outline-none focus:border-primary/60 transition resize-none"
              />
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3.5 font-medium bg-[var(--gradient-neon)] text-white light:text-black glow-cyan hover:opacity-95 transition"
              >
                Send message <Send className="size-4" />
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
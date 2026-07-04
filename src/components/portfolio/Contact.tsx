import { useState } from "react";
import { motion } from "motion/react";
import { Mail, Send, Phone, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { toast } from "sonner";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY as string,
          name: formData.name,
          email: formData.email,
          subject: formData.subject || "Contact Form Submission",
          message: formData.message,
          from_name: "Developer Portfolio",
        }),
      });

      const result = await response.json();

      if (response.status === 200 && result.success) {
        toast.success("Message sent successfully! I'll get back to you soon.");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        toast.error(result.message || "Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("An error occurred. Please check your network and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative glass-card rounded-3xl p-4 sm:p-8 md:p-14 overflow-hidden"
        >
          <div className="absolute -top-32 -right-32 size-80 rounded-full bg-[var(--gradient-neon)] opacity-25 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 size-80 rounded-full bg-accent opacity-20 blur-3xl" />

          <div className="grid lg:grid-cols-2 gap-12 relative">
            <div className="min-w-0">
              <p className="text-sm uppercase tracking-[0.25em] text-primary mb-4">Contact</p>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Let's build <span className="text-gradient">something</span> together.
              </h2>
              <p className="mt-5 text-muted-foreground text-lg">
                I'm currently open to internships, industry, freelance projects, and
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
                    className="flex items-center gap-3 group min-w-0 w-full"
                  >
                    <span className="size-10 shrink-0 grid place-items-center rounded-xl glass group-hover:border-primary/40 transition">
                      <c.icon className="size-4" />
                    </span>
                    <span className="text-muted-foreground group-hover:text-foreground transition text-sm sm:text-base break-all">
                      {c.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                I'm actively seeking internship opportunities in Machine Learning, Software Engineering, and Data Analytics. I'm also open to research collaborations and freelance software development projects.
              </p>
              <form onSubmit={onSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    className="w-full rounded-xl glass px-4 py-3 outline-none focus:border-primary/60 transition"
                  />
                  <input
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="w-full rounded-xl glass px-4 py-3 outline-none focus:border-primary/60 transition"
                  />
                </div>
                <input
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className="w-full rounded-xl glass px-4 py-3 outline-none focus:border-primary/60 transition"
                />
                <textarea
                  required
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project…"
                  rows={6}
                  className="w-full rounded-xl glass px-4 py-3 outline-none focus:border-primary/60 transition resize-none"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3.5 font-medium bg-[var(--gradient-neon)] text-white light:text-black glow-cyan hover:opacity-95 transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send message"} <Send className="size-4" />
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
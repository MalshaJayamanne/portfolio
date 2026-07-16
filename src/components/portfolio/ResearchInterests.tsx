import { motion } from "motion/react";
import { GraduationCap, BarChart3, Eye, Zap } from "lucide-react";

export function ResearchInterests() {
  return (
    <section id="research" className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative glass-card rounded-3xl p-8 md:p-12 overflow-hidden border border-primary/20"
        >
          {/* Animated glow background elements */}
          <div className="absolute -top-32 -left-32 size-80 rounded-full bg-primary opacity-15 blur-3xl" />
          <div className="absolute -bottom-32 -right-32 size-80 rounded-full bg-accent opacity-15 blur-3xl" />

          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 relative items-center">
            <div>
              <span className="inline-flex items-center gap-2 glass border border-primary/20 rounded-full px-4 py-1.5 text-xs font-semibold text-primary mb-6 uppercase tracking-wider">
                <GraduationCap className="size-4 animate-pulse" />
                Ongoing Research & FYP
              </span>
              <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                Intelligent Student <span className="text-gradient">Success Analytics</span> Platform
              </h2>
              <p className="mt-6 text-muted-foreground text-base md:text-lg leading-relaxed">
                Developing an AI-powered student success analytics platform that predicts academic performance and identifies at-risk students using machine learning. The system combines predictive analytics, Explainable AI (XAI), and interactive dashboards to provide personalized insights for students and educators, enabling early intervention and data-driven academic decision-making.
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  icon: BarChart3,
                  title: "Predictive Analytics",
                  desc: "Forecasts student performance metrics and GPA trends by identifying subtle behavioral and academic patterns early."
                },
                {
                  icon: Eye,
                  title: "Explainable AI (XAI)",
                  desc: "Uses SHAP/LIME frameworks to make model predictions transparent, helping educators understand 'why' a student is flagged."
                },
                {
                  icon: Zap,
                  title: "Interactive Dashboards",
                  desc: "Role-based dashboards delivering real-time actionable insights and customized recommendations for students and teachers."
                }
              ].map((f, idx) => (
                <div
                  key={f.title}
                  className="flex gap-4 p-5 rounded-2xl glass border border-white/5 hover:border-primary/20 transition-all duration-300 group"
                >
                  <span className="size-11 shrink-0 grid place-items-center rounded-xl bg-white/5 border border-white/10 group-hover:bg-[var(--gradient-neon)] group-hover:glow-cyan transition duration-300">
                    <f.icon className="size-5 text-primary group-hover:text-white light:group-hover:text-black transition" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-base sm:text-lg group-hover:text-primary transition duration-300">{f.title}</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground mt-1 leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

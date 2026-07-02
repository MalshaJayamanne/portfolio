import { useEffect, useState } from "react";
import { Code2, Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { motion, AnimatePresence } from "motion/react";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#highlights", label: "Highlights" },
  { href: "#research", label: "Research" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-6 inset-x-0 z-50 transition-all duration-300 px-4 max-w-[95%] md:max-w-[80%] lg:max-w-[75%] mx-auto`}
    >
      <div className="w-full relative">
        <nav
          className={`rounded-2xl px-4 md:px-6 py-3 flex items-center justify-between border transition-all duration-300 ${
            scrolled || isOpen
              ? "bg-card/90 border-primary/20 shadow-[0_12px_40px_rgba(0,0,0,0.5)] backdrop-blur-xl"
              : "bg-white/[0.02] border-white/5 backdrop-blur-md"
          }`}
        >
          <a href="#top" className="flex items-center gap-2 font-display font-bold">
            <span className="size-8 rounded-lg grid place-items-center bg-[var(--gradient-neon)] glow-cyan">
              <Code2 className="size-4 text-white light:text-black" />
            </span>
            <span className="text-gradient">malshajayamanne.dev</span>
          </a>

          {/* Desktop Navigation Links */}
          <ul className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="hover:text-foreground transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-primary hover:after:w-full after:transition-all"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium bg-[var(--gradient-neon)] text-white light:text-black hover:opacity-90 transition"
            >
              Hire me
            </a>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden size-9 grid place-items-center rounded-xl border border-white/10 bg-white/5 text-foreground hover:bg-white/10 transition"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="size-4" /> : <Menu className="size-4" />}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="md:hidden absolute top-full inset-x-0 mt-3 p-4 rounded-2xl border border-primary/20 bg-card/95 backdrop-blur-xl shadow-2xl flex flex-col gap-2 z-50"
            >
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2.5 rounded-xl hover:bg-white/5 text-sm text-muted-foreground hover:text-foreground transition-all"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="mt-2 text-center rounded-xl py-3 text-sm font-medium bg-[var(--gradient-neon)] text-white light:text-black hover:opacity-90 transition"
              >
                Open for colabarations
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

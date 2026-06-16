import { useEffect, useState } from "react";
import { Code2 } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed top-6 md:top-7 inset-x-0 z-50 transition-all duration-300 px-4 md:px-6 lg:px-8 max-w-[75%] mx-auto`}
    >
      <div className="w-full">
        <nav
          className={`rounded-2xl px-4 md:px-6 py-3 flex items-center justify-between border transition-all duration-300 ${
            scrolled
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
          </div>
        </nav>
      </div>
    </header>
  );
}

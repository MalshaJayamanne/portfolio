export function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="container mx-auto px-4 flex flex-wrap items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>
          © {new Date().getFullYear()} <span className="text-gradient font-semibold">Malsha Jayamanne</span>.
        </p>
        <p>
          Built with ❤️ using React, TypeScript & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}

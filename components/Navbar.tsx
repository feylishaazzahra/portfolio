const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 sm:px-8">
      <nav className="liquid-glass mx-auto flex max-w-7xl items-center justify-between rounded-full px-4 py-3">
        <a
          href="#home"
          className="text-sm font-semibold tracking-[0.22em] text-violet-950"
        >
          FEYLISHA
        </a>
        <div className="hidden items-center gap-6 text-sm font-medium text-violet-950/70 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition hover:text-violet-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
            >
              {item.label}
            </a>
          ))}
        </div>
        <a
          href="mailto:azzahrafeylisha@gmail.com"
          className="rounded-full border border-white/70 bg-lavender-300/42 px-4 py-2 text-sm font-semibold text-violet-950 shadow-[inset_0_1px_0_rgba(255,255,255,0.82),0_14px_36px_rgba(126,34,206,0.16)] backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-lavender-200/62 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
        >
          Hire Me
        </a>
      </nav>
    </header>
  );
}

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
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/70 bg-white/55 px-4 py-3 shadow-[0_18px_60px_rgba(119,60,167,0.14)] backdrop-blur-2xl">
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
          className="rounded-full bg-violet-950 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-violet-900/20 transition hover:bg-violet-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
        >
          Hire Me
        </a>
      </nav>
    </header>
  );
}

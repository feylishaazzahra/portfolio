import { skillGroups } from "@/data/skills";
import SectionReveal from "@/components/SectionReveal";

export default function SkillsSection() {
  return (
    <section id="skills" className="relative px-5 py-24 sm:px-8 lg:px-12">
      <div className="absolute inset-x-0 top-0 -z-10 h-full bg-[linear-gradient(180deg,transparent_0%,rgba(233,213,255,0.34)_48%,transparent_100%)]" />
      <div className="mx-auto max-w-7xl">
        <SectionReveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-fuchsia-700">
            Skills
          </p>
          <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-normal text-violet-950 sm:text-5xl">
            Design craft, product thinking, and technical foundations.
          </h2>
        </SectionReveal>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {skillGroups.map((group, index) => (
            <SectionReveal
              key={group.title}
              delay={index * 0.05}
              className="liquid-glass group relative overflow-hidden rounded-[1.75rem] p-5 transition duration-300 hover:-translate-y-1 hover:bg-white/76 hover:shadow-[0_24px_80px_rgba(119,60,167,0.16)]"
            >
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-fuchsia-200/0 blur-2xl transition group-hover:bg-fuchsia-200/50" />
              <h3 className="text-lg font-semibold text-violet-950">
                {group.title}
              </h3>
              <ul className="mt-4 space-y-2 text-sm leading-6 text-violet-950/70">
                {group.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-fuchsia-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

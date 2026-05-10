import { experiences } from "@/data/experience";
import SectionReveal from "@/components/SectionReveal";

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="px-5 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionReveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-fuchsia-700">
            Experience
          </p>
          <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-normal text-violet-950 sm:text-5xl">
            Freelance practice and creative leadership across organizations.
          </h2>
        </SectionReveal>

        <div className="mt-12 space-y-5">
          {experiences.map((experience, index) => (
            <SectionReveal
              key={`${experience.role}-${experience.organization}`}
              delay={index * 0.06}
              className="liquid-glass grid gap-5 rounded-[1.9rem] p-5 transition duration-300 hover:-translate-y-1 lg:grid-cols-[0.3fr_0.7fr] lg:p-7"
            >
              <div>
                <p className="text-sm font-semibold text-fuchsia-700">
                  {experience.period}
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-violet-950">
                  {experience.role}
                </h3>
                <p className="mt-2 text-violet-950/62">
                  {experience.organization}
                </p>
                {experience.location ? (
                  <p className="mt-1 text-sm font-medium text-violet-950/48">
                    {experience.location}
                  </p>
                ) : null}
              </div>
              <ul className="space-y-3 text-sm leading-7 text-violet-950/72 sm:text-base">
                {experience.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-500" />
                    <span>{point}</span>
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

import { Activity, Glasses, Mic, Smartphone } from "lucide-react";
import { featuredProject } from "@/data/projects";
import SectionReveal from "@/components/SectionReveal";

const highlights = [
  {
    label: "Smart glass pairing",
    icon: Glasses,
  },
  {
    label: "Real-time transcription",
    icon: Mic,
  },
  {
    label: "High-legibility dashboard",
    icon: Smartphone,
  },
  {
    label: "Communication metrics",
    icon: Activity,
  },
];

export default function FeaturedProject() {
  return (
    <section className="px-5 py-24 sm:px-8 lg:px-12">
      <SectionReveal className="glass-panel mx-auto grid max-w-7xl gap-8 overflow-hidden rounded-[2.5rem] p-5 lg:grid-cols-[0.95fr_1.05fr] lg:p-8">
        <div className="relative min-h-[420px] overflow-hidden rounded-[1.9rem] bg-gradient-to-br from-cyan-100 via-violet-100 to-fuchsia-100 p-5">
          <div className="absolute right-6 top-6 h-24 w-24 rounded-full bg-white/50 blur-2xl" />
          <img
            src={featuredProject.image}
            alt={`${featuredProject.title} project preview`}
            className="h-full min-h-[380px] w-full rounded-[1.35rem] object-cover shadow-[0_24px_70px_rgba(76,29,149,0.2)]"
          />
          <div className="absolute bottom-8 left-8 right-8 rounded-[1.25rem] border border-white/45 bg-white/34 p-4 text-violet-950 shadow-2xl backdrop-blur-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-fuchsia-700">
              Featured Case Study
            </p>
            <h3 className="mt-2 text-2xl font-semibold">HearLens</h3>
          </div>
        </div>

        <div className="flex flex-col justify-center p-2 lg:p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-fuchsia-700">
            UI/UX Highlight
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-normal text-violet-950 sm:text-5xl">
            Smart Glass Interface & Real-Time Transcription
          </h2>
          <p className="mt-6 text-base leading-8 text-violet-950/72">
            {featuredProject.description} The concept focuses on device
            connectivity, transcription clarity, soft-tech aesthetics, and
            accessible information hierarchy for deaf users.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="flex items-center gap-3 rounded-2xl border border-white/70 bg-white/66 p-4 text-violet-950 shadow-[0_14px_40px_rgba(119,60,167,0.08)] backdrop-blur-xl"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-violet-100 text-violet-700">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="text-sm font-semibold">{item.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}

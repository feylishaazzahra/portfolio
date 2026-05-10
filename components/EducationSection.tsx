import SectionReveal from "@/components/SectionReveal";

export default function EducationSection() {
  return (
    <section id="education" className="px-5 py-20 sm:px-8 lg:px-12">
      <SectionReveal className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.25rem] border border-violet-100 bg-violet-950 p-6 text-white shadow-[0_28px_90px_rgba(76,29,149,0.24)] sm:p-8 lg:p-10">
        <div className="absolute -right-16 -top-24 h-72 w-72 rounded-full bg-fuchsia-400/30 blur-3xl" />
        <div className="absolute -bottom-28 left-12 h-72 w-72 rounded-full bg-lavender-300/20 blur-3xl" />
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-fuchsia-200">
              Education
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-normal sm:text-5xl">
              Bachelor of Information System
            </h2>
          </div>
          <div className="rounded-[1.5rem] border border-white/15 bg-white/10 p-5 backdrop-blur-xl">
            <p className="text-2xl font-semibold">
              Universitas Pembangunan Nasional Veteran Jakarta
            </p>
            <p className="mt-3 text-white/72">2025 - Present</p>
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}

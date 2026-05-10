import SectionReveal from "@/components/SectionReveal";

export default function AboutSection() {
  return (
    <section id="about" className="relative px-5 py-24 sm:px-8 lg:px-12">
      <div className="absolute left-0 top-1/3 -z-10 h-56 w-56 rounded-full bg-fuchsia-200/35 blur-3xl" />
      <SectionReveal className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-fuchsia-700">
            About
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-normal text-violet-950 sm:text-5xl">
            A visual designer shaping clear, expressive digital experiences.
          </h2>
          <div className="mt-8 grid grid-cols-2 gap-3">
            {["Visual hierarchy", "Typography", "Color systems", "User flows"].map(
              (item) => (
                <div
                  key={item}
                  className="liquid-glass rounded-2xl p-4 text-sm font-semibold text-violet-950/72"
                >
                  {item}
                </div>
              ),
            )}
          </div>
        </div>
        <div className="liquid-glass-strong relative overflow-hidden rounded-[2.25rem] p-6 text-violet-950/76 sm:p-8">
          <div className="absolute right-6 top-6 h-24 w-24 rounded-full bg-lavender-300/36 blur-2xl" />
          <p className="text-lg leading-8">
            Feylisha Azzahra is an undergraduate Information Systems student at
            Universitas Pembangunan Nasional Veteran Jakarta with strong
            interest in UI/UX design, visual design, and photography.
          </p>
          <p className="relative mt-5 text-base leading-8">
            Her work blends visual hierarchy, typography, color, composition,
            and user-centered thinking to create digital solutions that feel
            intuitive, polished, and aesthetically pleasing. She is comfortable
            working independently and collaboratively across freelance,
            organizational, and academic creative projects.
          </p>
        </div>
      </SectionReveal>
    </section>
  );
}

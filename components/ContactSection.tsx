"use client";

import { ExternalLink, Mail, Phone } from "lucide-react";
import SectionReveal from "@/components/SectionReveal";
import { GlassButton } from "@/components/ui/apple-tahoe-liquid-glass-button";

const email = "azzahrafeylisha@gmail.com";
const whatsappUrl = "https://wa.me/62895320635970";
const linkedinUrl = "https://www.linkedin.com/in/feylisha-azzahra/";

export default function ContactSection() {
  return (
    <section id="contact" className="px-5 py-24 sm:px-8 lg:px-12">
      <SectionReveal className="relative mx-auto grid max-w-7xl gap-8 overflow-hidden rounded-[2.5rem] border border-white/30 bg-gradient-to-br from-violet-950 via-purple-900 to-fuchsia-800 p-6 text-white shadow-[0_30px_110px_rgba(76,29,149,0.28)] lg:grid-cols-[1fr_0.85fr] lg:p-10">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-fuchsia-400/28 blur-3xl" />
        <div className="absolute -bottom-24 left-1/3 h-72 w-72 rounded-full bg-lavender-300/18 blur-3xl" />
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-fuchsia-100">
            Contact
          </p>
          <h2 className="mt-4 max-w-2xl text-4xl font-semibold tracking-normal sm:text-6xl">
            Let&apos;s work together.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-8 text-white/72">
            Available for graphic design, social media visuals, branding assets,
            UI/UX concepts, and creative collaboration.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <GlassButton
              size="default"
              glassColor="oklch(0.94 0.06 312 / 72%)"
              className="text-violet-950"
              contentClassName="font-semibold"
              onClick={() => {
                window.location.href = `mailto:${email}`;
              }}
            >
              Send Email
            </GlassButton>
            <GlassButton
              size="default"
              glassColor="oklch(0.98 0.03 310 / 64%)"
              className="text-violet-950"
              contentClassName="font-semibold"
              onClick={() => {
                window.location.href = whatsappUrl;
              }}
            >
              WhatsApp
            </GlassButton>
          </div>
        </div>

        <div className="grid content-center gap-3">
          <a
            href={`mailto:${email}`}
            className="liquid-glass-dark flex items-center gap-3 rounded-2xl p-4 text-white transition hover:-translate-y-0.5 hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <Mail className="h-5 w-5" aria-hidden="true" />
            <span>{email}</span>
          </a>
          <a
            href={whatsappUrl}
            className="liquid-glass-dark flex items-center gap-3 rounded-2xl p-4 text-white transition hover:-translate-y-0.5 hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <Phone className="h-5 w-5" aria-hidden="true" />
            <span>+62895320635970</span>
          </a>
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noreferrer"
            className="liquid-glass-dark flex items-center gap-3 rounded-2xl p-4 text-white transition hover:-translate-y-0.5 hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <ExternalLink className="h-5 w-5" aria-hidden="true" />
            <span>linkedin.com/in/feylisha-azzahra</span>
          </a>
        </div>
      </SectionReveal>
    </section>
  );
}

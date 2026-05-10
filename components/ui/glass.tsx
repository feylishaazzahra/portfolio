import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function GlassCard({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("liquid-glass rounded-[1.5rem]", className)} {...props} />;
}

export function GlassPanel({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("liquid-glass-strong rounded-[2rem]", className)}
      {...props}
    />
  );
}

export function SectionBadge({
  className,
  ...props
}: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn(
        "liquid-glass inline-flex w-fit items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-fuchsia-700",
        className,
      )}
      {...props}
    />
  );
}

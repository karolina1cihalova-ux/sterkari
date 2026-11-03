"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

gsap.registerPlugin(ScrollTrigger);

type SectionRevealProps = {
  children: React.ReactNode;
  className?: string;
};

export function SectionReveal({ children, className }: SectionRevealProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const reduceMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (reduceMotion || !rootRef.current) return;

    const targets = rootRef.current.querySelectorAll("[data-reveal]");
    if (!targets.length) return;

    gsap.set(targets, { opacity: 0, y: 32 });

    const trigger = ScrollTrigger.create({
      trigger: rootRef.current,
      start: "top 82%",
      once: true,
      onEnter: () => {
        gsap.to(targets, {
          opacity: 1,
          y: 0,
          duration: 0.75,
          stagger: 0.1,
          ease: "power3.out",
        });
      },
    });

    return () => {
      trigger.kill();
    };
  }, [reduceMotion]);

  return (
    <div ref={rootRef} className={className}>
      {children}
    </div>
  );
}

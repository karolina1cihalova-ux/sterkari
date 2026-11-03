"use client";

import { ReactLenis } from "lenis/react";
import { useEffect, useState } from "react";

import "lenis/dist/lenis.css";

type LenisProviderProps = {
  children: React.ReactNode;
};

export function LenisProvider({ children }: LenisProviderProps) {
  const [reduceMotion, setReduceMotion] = useState(true);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  if (reduceMotion) {
    return children;
  }

  return (
    <ReactLenis root options={{ autoRaf: true, anchors: true }}>
      {children}
    </ReactLenis>
  );
}

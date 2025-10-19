"use client";
import { ReactLenis } from "lenis/react";
import type { LenisRef } from "lenis/react";
import { cancelFrame, frame } from "framer-motion";
import { useEffect, useRef } from "react";

export const globalLenisRef: { current: LenisRef | null } = { current: null };

export default function SmoothScrollWrapper() {
  const lenisRef = useRef<LenisRef>(null);

  useEffect(() => {
    globalLenisRef.current = lenisRef.current;

    function update(data: { timestamp: number }) {
      const time = data.timestamp;
      lenisRef.current?.lenis?.raf(time);
    }

    frame.update(update, true);
    return () => cancelFrame(update);
  }, []);

  return <ReactLenis root options={{ autoRaf: false }} ref={lenisRef} />;
}

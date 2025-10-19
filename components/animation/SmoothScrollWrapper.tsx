"use client";
import { ReactLenis } from "lenis/react";
import type { LenisRef } from "lenis/react";
import { cancelFrame, frame } from "framer-motion";
import { useEffect, useRef } from "react";
import { useScrollStore } from "@/store/smoothScorller";

export default function SmoothScrollWrapper() {
  const { SmoothScrolling } = useScrollStore();
  const lenisRef = useRef<LenisRef>(null);
  useEffect(() => {
    function update(data: { timestamp: number }) {
      const time = data.timestamp;
      lenisRef.current?.lenis?.raf(time);
    }

    frame.update(update, true);
    return () => cancelFrame(update);
  }, []);
  if (SmoothScrolling) {
    return <ReactLenis root="asChild" options={{ autoRaf: true }} />;
  } else {
    return null;
  }
}

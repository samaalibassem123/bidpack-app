"use client";
import React from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

interface Props {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  opacity?: number;
  y?: number;
}

export default function SlideUpAnimation({
  children,
  className,
  delay,
  duration = 1,
  opacity = 1,
  y = 0,
}: Props) {
  const pathname = usePathname();

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: opacity, y: 1 }}
      transition={{ delay: delay, duration: duration, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

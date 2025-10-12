"use client";
import { cn } from "@/utils/utils";

import React, { useEffect, useState } from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function Header({ children, className }: Props) {
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // scrolling down
        setHidden(true);
      } else {
        // scrolling up
        setHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);
  return (
    <header
      className={cn(
        " sticky top-10 sm:px-[80px] px-5  py-[10px] text-white  z-50 transition-all     duration-400 delay-150   flex items-center justify-between backdrop-blur-[8px] border-y border-y-white/20 bg-white/10 rounded-[50px]",
        hidden
          ? " opacity-0 -translate-y-full invisible"
          : "translate-y-0 opacity-100",
        className
      )}
    >
      {children}
    </header>
  );
}

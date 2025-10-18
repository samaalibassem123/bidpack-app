import React from "react";
import SlideUpScrollAnimation from "../../../animation/SlideUpScrollAnimation";
import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function FunctionalitieCard({ children, className }: Props) {
  return (
    <SlideUpScrollAnimation delay={0.5}>
      <div
        className={cn(
          "relative cursor-pointer drop hover:scale-101 hover:opacity-95 group scale-100 hover:shadow-gray-400/10 shadow-lg transition-all duration-200 flex flex-col justify-end gap-3 bg-[#FFFFFF1A] sm:w-[280px] text-start   pl-[20px] pb-[20px] h-[190px] rounded-[10px] border border-white/20",
          className
        )}
      >
        {children}
      </div>
    </SlideUpScrollAnimation>
  );
}

const FunctionalitieIcon = ({ children, className }: Props) => {
  return (
    <div
      className={cn(
        " group-hover:scale-105  transition-all absolute inset-0 -top-7 -left-7 w-[86px] h-[86px] p-[17px] rounded-[86px] flex items-center justify-center bg-gradient-to-br from-[#20273b] to-white/20 backdrop-blur-[3px] text-white  ",
        className
      )}
    >
      <div className=" absolute inset-0 -z-10 w-[86px] h-[86px] p-[17px] rotate-30 rounded-[86px] flex items-center justify-center   border-x-[1.5px] border-white/30  "></div>
      {children}
    </div>
  );
};
FunctionalitieCard.FunctionalitieIcon = FunctionalitieIcon;

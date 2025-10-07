import { cn } from "@/utils/utils";
import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function FunctionalitieCard({ children, className }: Props) {
  return (
    <div
      className={cn(
        " relative bg-[#FFFFFF1A] sm:w-[280px] h-[190px] p-[20px] rounded-[10px] border border-white/20",
        className
      )}
    >
      {children}
    </div>
  );
}

const FunctionalitieIcon = ({ children, className }: Props) => {
  return (
    <div
      className={cn(
        " absolute inset-0 -top-10 -left-10 w-[86px] h-[86px] p-[17px] rounded-[86px] flex items-center justify-center bg-[#5473C133] backdrop-blur-[8px] text-white bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.1),rgba(0,0,0,0.5))]  border border-white/10 shadow-[inset_2px_2px_10px_rgba(255,255,255,0.1),inset_-2px_-2px_8px_rgba(0,0,0,0.4)] ",
        className
      )}
    >
      {children}
    </div>
  );
};
FunctionalitieCard.FunctionalitieIcon = FunctionalitieIcon;

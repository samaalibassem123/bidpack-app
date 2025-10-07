import { cn } from "@/utils/utils";
import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function Feature({ children, className }: Props) {
  return (
    <div
      className={cn("flex flex-col gap-1 text-center  items-center", className)}
    >
      {children}
    </div>
  );
}

const FeatureIcon = ({ children, className }: Props) => {
  return (
    <div
      className={cn(
        " flex items-center mb-4 justify-center p-[10px]  w-[50px] h-[50px] bg-[#5473C133] text-[#5473C1] rounded-[50px]",
        className
      )}
    >
      {children}
    </div>
  );
};

Feature.Icon = FeatureIcon;

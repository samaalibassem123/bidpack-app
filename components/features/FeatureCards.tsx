import { cn } from "@/utils/utils";
import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function FeatureCards({ children, className }: Props) {
  return (
    <div
      className={cn(
        " mt-10 flex sm:flex-row    flex-col gap-[39px] w-full sm:items-start items-center justify-center",
        className
      )}
    >
      {children}
    </div>
  );
}
const LeftSide = ({ children, className }: Props) => {
  return (
    <div className={cn("flex flex-col gap-[62px]  items-center", className)}>
      {children}
    </div>
  );
};

const RightSide = ({ children, className }: Props) => {
  return (
    <div className={cn("flex flex-col gap-[62px]  items-center", className)}>
      {children}
    </div>
  );
};

FeatureCards.LeftSide = LeftSide;
FeatureCards.RightSide = RightSide;

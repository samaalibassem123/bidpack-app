import { cn } from "@/utils/utils";
import React from "react";
interface Props {
  children: React.ReactNode;
  className?: string;
}
export default function Features({ children, className }: Props) {
  return (
    <div
      id="learn-more"
      className={cn(
        "flex  text-center p-10   flex-col gap-3 items-center  justify-center min-h-lvh  ",
        className
      )}
    >
      {children}
    </div>
  );
}

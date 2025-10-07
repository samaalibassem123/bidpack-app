import { cn } from "@/utils/utils";
import React from "react";
interface Props {
  children: React.ReactNode;
  className?: string;
}
export default function Features({ children, className }: Props) {
  return (
    <div
      className={cn(
        "flex  text-center pt-25 flex-col gap-3 items-center justify-center min-h-svh  ",
        className
      )}
    >
      {children}
    </div>
  );
}

import { cn } from "@/utils/utils";
import React from "react";
interface Props {
  children: React.ReactNode;
  className?: string;
}
export default function Functionalities({ children, className }: Props) {
  return (
    <div
      className={cn(
        "h-svh text-center justify-center  flex flex-col  gap-3",
        className
      )}
    >
      {children}
    </div>
  );
}

import { cn } from "@/utils/utils";
import React from "react";
interface Props {
  children: React.ReactNode;
  className?: string;
}
export default function Functionalities({ children, className }: Props) {
  return (
    <section
      className={cn(
        "min-h-svh text-center justify-center p-5 pt-40  flex flex-col  gap-3",
        className
      )}
    >
      {children}
    </section>
  );
}

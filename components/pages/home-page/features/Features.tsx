import { cn } from "@/lib/utils";
import React from "react";
interface Props {
  children: React.ReactNode;
  className?: string;
}
export default function Features({ children, className }: Props) {
  return (
    <section
      id="why-choose-us"
      className={cn(
        "flex  text-center p-10 pt-30   flex-col gap-3 items-center  justify-center min-h-lvh  ",
        className
      )}
    >
      {children}
    </section>
  );
}

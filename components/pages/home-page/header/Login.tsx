import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

interface Props {
  className?: string;
}

export default function Login({ className }: Props) {
  return (
    <Link
      href={"/register"}
      className={cn("hover:opacity-80 transition-all font-semibold", className)}
    >
      Login
    </Link>
  );
}

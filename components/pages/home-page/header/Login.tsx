import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

interface Props {
  className?: string;
}
const LOGIN_URL = "https://bidpackapp.com/workspace/navigate";
export default function Login({ className }: Props) {
  return (
    <Link
      href={LOGIN_URL}
      className={cn("hover:opacity-80 transition-all font-semibold", className)}
    >
      Login
    </Link>
  );
}

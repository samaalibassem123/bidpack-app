import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Merge clsx + tailwind-merge
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

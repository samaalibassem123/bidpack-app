import React from "react";
import { Spinner } from "@/components/ui/spinner";
import Logo from "@/components/ui/Logo";

export default function loading() {
  return (
    <div className=" text-4xl gap-5 animate-pulse flex-col  h-lvh w-full flex items-center justify-center">
      <Logo id="Lading-logo" />
      <Spinner className=" size-10" />
    </div>
  );
}

import React from "react";

import Image from "next/image";
import Copyright from "@/components/ui/Copyright";
import TermsC from "@/components/TermsC";
import Privacy from "@/components/Privacy";
import Contact from "@/components/Contact";

export default function Footer() {
  return (
    <footer className=" z-50 text-white  flex flex-col gap-10 items-center justify-center py-[66px] bg-[#232a3f] ">
      <Image src={"/logo.svg"} alt="app logo" width={120} height={120} />
      <nav className="flex gap-10 px-3 text-sm text-center">
        <Privacy />
        <TermsC />
        <Contact />
      </nav>
      <Copyright />
    </footer>
  );
}

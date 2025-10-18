import React from "react";

import Copyright from "@/components/ui/Copyright";
import TermsC from "@/components/TermsC";
import Privacy from "@/components/Privacy";
import Contact from "@/components/Contact";
import Logo from "@/components/ui/Logo";

export default function Footer() {
  return (
    <footer className=" z-50 text-white  flex flex-col gap-10 items-center justify-center py-[66px] bg-[#232a3f] ">
      <Logo id="footer-logo" />
      <nav className="flex gap-10 px-3 text-sm text-center">
        <Privacy />
        <TermsC />
        <Contact />
      </nav>
      <Copyright />
    </footer>
  );
}

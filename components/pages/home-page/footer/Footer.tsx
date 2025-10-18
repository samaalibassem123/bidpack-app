import React from "react";

import Link from "next/link";
import Image from "next/image";
import Copyright from "@/components/ui/Copyright";

export default function Footer() {
  return (
    <footer className=" text-white  flex flex-col gap-10 items-center justify-center py-[66px] bg-[#232a3f] ">
      <Image src={"/logo.svg"} alt="app logo" width={120} height={120} />
      <nav className="flex gap-10 px-3 text-sm text-center">
        <Link
          href={"/privacy-policy"}
          target="_blank"
          className=" hover:underline hover:scale-102 transition-all"
        >
          BidPack – Privacy Policy
        </Link>
        <Link
          href={"/terms-conditions"}
          target="_blank"
          className=" hover:underline hover:scale-102 transition-all"
        >
          Terms & Conditions
        </Link>
        <Link
          href={"/contact"}
          target="_blank"
          className=" hover:underline hover:scale-102 transition-all"
        >
          Contact Information
        </Link>
      </nav>
      <Copyright />
    </footer>
  );
}

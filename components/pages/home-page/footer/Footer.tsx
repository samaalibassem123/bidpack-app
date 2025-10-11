import React from "react";
import Logo from "../../../ui/Logo";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className=" text-white  flex flex-col gap-10 items-center justify-center py-[66px] bg-[#232a3f] ">
      <Logo />
      <nav className="flex gap-14">
        <Link href={"#"}>Why Us</Link>
        <Link href={"#"}>Features</Link>
        <Link href={"#"}>Contacts</Link>
      </nav>
    </footer>
  );
}

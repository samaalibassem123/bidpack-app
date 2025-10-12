import React from "react";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className=" text-white  flex flex-col gap-10 items-center justify-center py-[66px] bg-[#232a3f] ">
      <Image src={"/logo.svg"} alt="app logo" width={120} height={120} />
      <nav className="flex gap-14">
        <Link href={"#"}>Why Us</Link>
        <Link href={"#"}>Features</Link>
        <Link href={"#"}>Contacts</Link>
      </nav>
    </footer>
  );
}

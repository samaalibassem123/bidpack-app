import Header from "@/components/pages/home-page/header/Header";
import Copyright from "@/components/ui/Copyright";
import Logo from "@/components/ui/Logo";
import Title from "@/components/ui/Title";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div className="flex items-center flex-col md:px-50 gap-10 p-5  pt-10">
      <Header className="w-full  gap-10">
        <Link href={"/"}>
          <Logo id="terms-header-logo" />
        </Link>
        <Title className="z-10 sm:text-xl w-fit p-0 text-md  text-start">
          Contact
        </Title>
      </Header>

      <div className=" text-center font-[300] tracking-wide flex items-center justify-center flex-col gap-3">
        <p>
          If you have questions, concerns, or requests regarding this Privacy
          Policy, please contact us at:{" "}
        </p>

        <span className=" select-all selection:text-black selection:bg-white border-b border-white font-normal w-fit">
          support@bidpack.co
        </span>
        <p>
          Vision Age Company FZ LLC Fujairah Creative City, United Arab Emirates
        </p>
        <Copyright />
      </div>
    </div>
  );
}

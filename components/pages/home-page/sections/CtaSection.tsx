import React from "react";
import Title from "../../../ui/Title";
import DescriptionText from "../../../ui/DescriptionText";
import Link from "next/link";
import SlideUpScrollAnimation from "../../../animation/SlideUpScrollAnimation";

export default function CtaSection() {
  return (
    <section className="flex flex-col gap-3 w-full items-center justify-center min-h-[50svh] text-center">
      <SlideUpScrollAnimation>
        <Title className="text-3xl">Ready To Get Started?</Title>
      </SlideUpScrollAnimation>
      <SlideUpScrollAnimation>
        <DescriptionText className="text-lg">
          Join the network and start connecting with top-tier talent <br /> and
          leading studios today
        </DescriptionText>
      </SlideUpScrollAnimation>

      <Link
        href={"/register"}
        className=" bg-gradient-to-br mt-10  text-white hover:opacity-80 transition-all from-[#5473C133] to-white/10 inset-shadow-lg w-[180px] text-center px-[24px] py-[10px]  backdrop-blur-[8px] border-y border-y-white/20 rounded-[12px]"
      >
        Join Now
      </Link>
    </section>
  );
}

"use client";
import SlideUpAnimation from "@/components/animation/SlideUpAnimation";
import NotifyMeForm from "@/components/notify-me-form/NotifyMeForm";
import Logo from "@/components/ui/Logo";
import NotifyMeBackground from "@/components/ui/NotifyMeBackground";
import Title from "@/components/ui/Title";

export default function page() {
  return (
    <div className="relative w-full h-lvh flex flex-col gap-4 items-center justify-center text-white p-5">
      <NotifyMeBackground />
      <SlideUpAnimation opacity={1}>
        <Logo className="size-60  h-fit " />
      </SlideUpAnimation>
      <SlideUpAnimation delay={0.2} opacity={1}>
        <Title className="sm:text-6xl text-5xl">Coming Soon !</Title>
      </SlideUpAnimation>
      <SlideUpAnimation delay={0.3} opacity={1}>
        <span className="text-lg text-[#B2B2B2] text-center">
          Get ready everyone! We are currently <br /> working on something
          awesome.
        </span>
      </SlideUpAnimation>
      <NotifyMeForm />
    </div>
  );
}

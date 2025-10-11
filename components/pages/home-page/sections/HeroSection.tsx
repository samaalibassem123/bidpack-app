import React from "react";
import Hero from "../hero-section/Hero";
import SlideUpScrollAnimation from "@/components/animation/SlideUpScrollAnimation";
import HeroTitle from "../hero-section/HeroTitle";
import HeroDesc from "../hero-section/HeroDesc";
import HeroButtonsContainer from "../hero-section/HeroButtonsContainer";
import GetStarted from "../hero-section/GetStarted";
import LearnMore from "../hero-section/LearnMore";

export default function HeroSection() {
  return (
    <Hero>
      <div className="flex flex-col sm:gap-4 gap-6  text-center">
        <SlideUpScrollAnimation>
          <HeroTitle />
        </SlideUpScrollAnimation>
        <SlideUpScrollAnimation delay={0.1}>
          <HeroDesc />
        </SlideUpScrollAnimation>
      </div>
      <SlideUpScrollAnimation delay={0.2}>
        <HeroButtonsContainer>
          <GetStarted />
          <LearnMore />
        </HeroButtonsContainer>
      </SlideUpScrollAnimation>
    </Hero>
  );
}

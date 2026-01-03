"use client";

import React from "react";
import Feature from "@/components/pages/home-page/features/Feature";
import FeatureCards from "@/components/pages/home-page/features/FeatureCards";
import Features from "@/components/pages/home-page/features/Features";
import SlideUpScrollAnimation from "@/components/animation/SlideUpScrollAnimation";
import Title from "@/components/ui/Title";
import DescriptionText from "@/components/ui/DescriptionText";
import {
  Briefcase,
  Building,
  Network,
  PenBox,
  TrainTrackIcon,
  Users2Icon,
} from "lucide-react";

import { DottedGlowBackgroundLogo } from "../features/DottedGlowBackgroundLogo";

export default function FeaturesSection() {
  return (
    <Features className="px-0 relative">
      <SlideUpScrollAnimation>
        <Title className="text-xl">Why Choose Us?</Title>
      </SlideUpScrollAnimation>
      <SlideUpScrollAnimation>
        <Title className="text-3xl">Streamline Your Production Pipeline</Title>
      </SlideUpScrollAnimation>
      <SlideUpScrollAnimation>
        <DescriptionText className="text-center">
          BidPack bridges the gap between production houses and creative
          vendors. Our platform is designed to simplify <br /> discovery,
          enhance collaboration, and manage your entire workflow from a single,
          unified dashboard.
        </DescriptionText>
      </SlideUpScrollAnimation>

      <SlideUpScrollAnimation className="relative">
        <Feature>
          <Feature.Icon className="text-lg font-bold">1</Feature.Icon>
          <div className="flex items-center gap-2">
            <Title className="text-xl"> Create Your Company Profile</Title>
          </div>

          <DescriptionText>
            Your profile becomes your identity <br /> within the BidPack
            ecosystem.
          </DescriptionText>
        </Feature>
        <FeatureCards>
          <FeatureCards.LeftSide className="flex-1">
            <Feature>
              <Feature.Icon className="text-lg font-bold">6</Feature.Icon>

              <Title className="text-xl"> Track & Manage the Project</Title>
              <DescriptionText>
                Monitor progress, deliveries, and <br /> collaboration in real
                time. <br /> Keep full transparency across <br /> vendors,
                tasks, and timelines.
              </DescriptionText>
            </Feature>
            <Feature>
              <Feature.Icon className="text-lg font-bold">5</Feature.Icon>

              <Title className="text-xl">Assign Vendors to Your Project</Title>
              <DescriptionText>
                Select vendors from your pool and assign <br /> them to specific
                services or tasks. Control access,
                <br /> responsibilities, and visibility.
              </DescriptionText>
            </Feature>
          </FeatureCards.LeftSide>

          <DottedGlowBackgroundLogo />

          <FeatureCards.RightSide className="flex-1">
            <Feature>
              <Feature.Icon className="text-lg font-bold">2</Feature.Icon>
              <Title className="text-xl">Build Your Network</Title>
              <DescriptionText>
                Connect with studios and vendors worldwide.
              </DescriptionText>
            </Feature>
            <Feature>
              <Feature.Icon className="text-lg font-bold">3</Feature.Icon>
              <Title className="text-xl">Build Your Vendor Pool</Title>
              <DescriptionText>
                Create your own curated <br /> vendor pool from trusted partners{" "}
                <br /> and past collaborations. <br /> Your vendor pool becomes
                your <br />
                private outsourcing network.
              </DescriptionText>
            </Feature>
          </FeatureCards.RightSide>
        </FeatureCards>
        <Feature>
          <Feature.Icon className="text-lg font-bold">4</Feature.Icon>

          <Title className="text-xl">Create Your Project</Title>
          <DescriptionText>
            Set up your project, define scope, <br /> services, timelines,{" "}
            <br />
            and collaboration rules. <br /> Prepare a clean <br />
            and structured outsourcing environment.
          </DescriptionText>
        </Feature>
      </SlideUpScrollAnimation>
    </Features>
  );
}

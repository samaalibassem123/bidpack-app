import React from "react";
import Feature from "@/components/pages/home-page/features/Feature";
import FeatureCards from "@/components/pages/home-page/features/FeatureCards";
import Features from "@/components/pages/home-page/features/Features";
import SlideUpScrollAnimation from "@/components/animation/SlideUpScrollAnimation";
import Title from "@/components/ui/Title";
import DescriptionText from "@/components/ui/DescriptionText";
import { Briefcase, FileStack, Lock, Search } from "lucide-react";
import Image from "next/image";
import { MacbookImage } from "@/components/ui/macbook-image";

export default function FeaturesSection() {
  return (
    <Features>
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

      <SlideUpScrollAnimation>
        <FeatureCards>
          <FeatureCards.LeftSide>
            <Feature>
              <Feature.Icon>
                <Search />
              </Feature.Icon>
              <Title className="text-xl">Find the right vendor instantly</Title>
              <DescriptionText>
                Search and filter vendors by services,
                <br /> certifications, workflow, tools, and availability. <br />{" "}
                Build your own Vendor Pools and keep <br /> everything in one
                place.
              </DescriptionText>
            </Feature>
            <Feature>
              <Feature.Icon>
                <Briefcase />
              </Feature.Icon>
              <Title className="text-xl">Real-time bids & ETA</Title>
              <DescriptionText>
                Get accurate bids and delivery estimates <br /> directly on the
                platform, without endless email <br /> exchanges.
              </DescriptionText>
            </Feature>
          </FeatureCards.LeftSide>

          <FeatureCards.RightSide>
            <Feature>
              <Feature.Icon>
                <Lock />
              </Feature.Icon>
              <Title className="text-xl">
                Request & confirm <br /> availability in one click
              </Title>
              <DescriptionText>
                Share project details securely, invite vendors, <br /> and
                receive instant confirmation of availability.
              </DescriptionText>
            </Feature>
            <Feature>
              <Feature.Icon>
                <FileStack />
              </Feature.Icon>
              <Title className="text-xl">Seamless project tracking</Title>
              <DescriptionText>
                Assign tasks, share briefs and project data, <br /> and track
                progress in real-time with complete <br /> transparency.
              </DescriptionText>
            </Feature>
          </FeatureCards.RightSide>
        </FeatureCards>
      </SlideUpScrollAnimation>
    </Features>
  );
}

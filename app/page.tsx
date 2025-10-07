import Feature from "@/components/features/Feature";
import FeatureCards from "@/components/features/FeatureCards";
import Features from "@/components/features/Features";
import FunctionalitieCard from "@/components/functionalities/FunctionalitieCard";
import Functionalities from "@/components/functionalities/Functionalities";
import ButtonsContainer from "@/components/header/ButtonsContainer";
import Header from "@/components/header/Header";
import Login from "@/components/header/Login";
import Register from "@/components/header/Register";
import Description from "@/components/hero-section/Description";
import GetStarted from "@/components/hero-section/GetStarted";
import Hero from "@/components/hero-section/Hero";
import HeroButtonsContainer from "@/components/hero-section/HeroButtonsContainer";
import LearnMore from "@/components/hero-section/LearnMore";

import Background from "@/components/ui/Background";
import DescriptionText from "@/components/ui/DescriptionText";
import Logo from "@/components/ui/Logo";
import Title from "@/components/ui/Title";
import {
  Briefcase,
  FileStack,
  FunctionSquareIcon,
  Lock,
  Search,
} from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" relative min-h-lvh sm:px-[70px] px-4 pt-[43px]">
      <Background />
      <Header>
        <Logo />
        <ButtonsContainer>
          <Login />
          <Register />
        </ButtonsContainer>
      </Header>
      <Hero>
        <Title>Connect, Collaborate, And Create.</Title>
        <Description>
          BidPack is the all-in-one platform that connects VFX studios and
          vendors, making outsourcing <br /> and project management faster,
          safer, and more transparent.
        </Description>
        <HeroButtonsContainer>
          <GetStarted />
          <LearnMore />
        </HeroButtonsContainer>
      </Hero>
      <Features>
        <Title className="text-xl">Why Choose Us?</Title>
        <Title className="text-3xl">Streamline Your Production Pipeline</Title>
        <DescriptionText className="text-center">
          BidPack bridges the gap between production houses and creative
          vendors. Our platform is designed to simplify <br /> discovery,
          enhance collaboration, and manage your entire workflow from a single,
          unified dashboard.
        </DescriptionText>
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

          <Image
            src={"/Rectangle 1.svg"}
            width={300}
            height={500}
            alt="feature image"
            className="  bg-gray-300 h-full  "
          />

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
      </Features>
      <Functionalities>
        <Title className=" text-3xl">Everything You Need in One Place</Title>
        <DescriptionText>
          A comprehensive suite of tools to power your entire production
          lifecycle, from discovery to delivery.
        </DescriptionText>
        <FunctionalitieCard>
          <FunctionalitieCard.FunctionalitieIcon>
            <Search className="size-10" />
          </FunctionalitieCard.FunctionalitieIcon>
        </FunctionalitieCard>
      </Functionalities>
    </div>
  );
}

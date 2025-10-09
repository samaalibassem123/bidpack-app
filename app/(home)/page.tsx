import SlideUpAnimation from "@/components/animation/SlideUpAnimation";
import SmoothScrollWrapper from "@/components/animation/SmoothScrollWrapper";
import CtaSection from "@/components/CTA/CtaSection";
import Feature from "@/components/features/Feature";
import FeatureCards from "@/components/features/FeatureCards";
import Features from "@/components/features/Features";
import Footer from "@/components/footer/Footer";
import FunctionalitieCard from "@/components/functionalities/FunctionalitieCard";
import Functionalities from "@/components/functionalities/Functionalities";
import ButtonsContainer from "@/components/header/ButtonsContainer";
import Header from "@/components/header/Header";
import Login from "@/components/header/Login";
import Register from "@/components/header/Register";
import GetStarted from "@/components/hero-section/GetStarted";
import Hero from "@/components/hero-section/Hero";
import HeroButtonsContainer from "@/components/hero-section/HeroButtonsContainer";
import HeroDesc from "@/components/hero-section/HeroDesc";
import HeroTitle from "@/components/hero-section/HeroTitle";
import LearnMore from "@/components/hero-section/LearnMore";

import Background from "@/components/ui/Background";
import DescriptionText from "@/components/ui/DescriptionText";
import Logo from "@/components/ui/Logo";
import Title from "@/components/ui/Title";

import {
  Briefcase,
  FileStack,
  ListTodo,
  Lock,
  MessagesSquare,
  Search,
} from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <SmoothScrollWrapper />
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
          <div className="flex flex-col sm:gap-4 gap-6  text-center">
            <SlideUpAnimation>
              <HeroTitle />
            </SlideUpAnimation>
            <SlideUpAnimation delay={0.1}>
              <HeroDesc />
            </SlideUpAnimation>
          </div>
          <SlideUpAnimation delay={0.2}>
            <HeroButtonsContainer>
              <GetStarted />
              <LearnMore />
            </HeroButtonsContainer>
          </SlideUpAnimation>
        </Hero>
        <Features>
          <SlideUpAnimation>
            <Title className="text-xl">Why Choose Us?</Title>
          </SlideUpAnimation>
          <SlideUpAnimation>
            <Title className="text-3xl">
              Streamline Your Production Pipeline
            </Title>
          </SlideUpAnimation>
          <SlideUpAnimation>
            <DescriptionText className="text-center">
              BidPack bridges the gap between production houses and creative
              vendors. Our platform is designed to simplify <br /> discovery,
              enhance collaboration, and manage your entire workflow from a
              single, unified dashboard.
            </DescriptionText>
          </SlideUpAnimation>

          <SlideUpAnimation>
            <FeatureCards>
              <FeatureCards.LeftSide>
                <Feature>
                  <Feature.Icon>
                    <Search />
                  </Feature.Icon>
                  <Title className="text-xl">
                    Find the right vendor instantly
                  </Title>
                  <DescriptionText>
                    Search and filter vendors by services,
                    <br /> certifications, workflow, tools, and availability.{" "}
                    <br /> Build your own Vendor Pools and keep <br />{" "}
                    everything in one place.
                  </DescriptionText>
                </Feature>
                <Feature>
                  <Feature.Icon>
                    <Briefcase />
                  </Feature.Icon>
                  <Title className="text-xl">Real-time bids & ETA</Title>
                  <DescriptionText>
                    Get accurate bids and delivery estimates <br /> directly on
                    the platform, without endless email <br /> exchanges.
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
                    Assign tasks, share briefs and project data, <br /> and
                    track progress in real-time with complete <br />{" "}
                    transparency.
                  </DescriptionText>
                </Feature>
              </FeatureCards.RightSide>
            </FeatureCards>
          </SlideUpAnimation>
        </Features>
        <Functionalities>
          <SlideUpAnimation>
            <Title className=" text-3xl">
              Everything You Need in One Place
            </Title>
          </SlideUpAnimation>
          <SlideUpAnimation>
            <DescriptionText>
              A comprehensive suite of tools to power your entire production
              lifecycle, from discovery to delivery.
            </DescriptionText>
          </SlideUpAnimation>

          <div className="pt-20 flex flex-wrap xl:gap-0 gap-30 xl:justify-between justify-center">
            <FunctionalitieCard>
              <FunctionalitieCard.FunctionalitieIcon>
                <Search className="size-10" />
              </FunctionalitieCard.FunctionalitieIcon>
              <Title className="text-xl">Vendor Discovery</Title>
              <DescriptionText className="text-sm">
                Find the perfect studio with powerful search filters and
                detailed profiles.
              </DescriptionText>
            </FunctionalitieCard>
            <FunctionalitieCard>
              <FunctionalitieCard.FunctionalitieIcon>
                <Briefcase className="size-10" />
              </FunctionalitieCard.FunctionalitieIcon>
              <Title className="text-xl">Project Management</Title>
              <DescriptionText className="text-sm">
                Keep your projects on track with clear dashboards and progress
                monitoring.
              </DescriptionText>
            </FunctionalitieCard>
            <FunctionalitieCard>
              <FunctionalitieCard.FunctionalitieIcon>
                <ListTodo className="size-10" />
              </FunctionalitieCard.FunctionalitieIcon>
              <Title className="text-xl">Integrated Task Tracking</Title>
              <DescriptionText className="text-sm">
                Assign tasks, set deadlines, and monitor progress from start to
                finish.
              </DescriptionText>
            </FunctionalitieCard>
            <FunctionalitieCard>
              <FunctionalitieCard.FunctionalitieIcon>
                <MessagesSquare className="size-10" />
              </FunctionalitieCard.FunctionalitieIcon>
              <Title className="text-xl">
                Real-Time <br /> Communication
              </Title>
              <DescriptionText className="  text-sm">
                Chat with vendors and team members directly within the platform.
              </DescriptionText>
            </FunctionalitieCard>
          </div>
        </Functionalities>
        <CtaSection />
      </div>
      <Footer />
    </>
  );
}

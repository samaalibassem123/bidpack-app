import CtaSection from "@/components/pages/home-page/sections/CtaSection";
import Footer from "@/components/pages/home-page/footer/Footer";

import ButtonsContainer from "@/components/pages/home-page/header/ButtonsContainer";
import Header from "@/components/pages/home-page/header/Header";
import Login from "@/components/pages/home-page/header/Login";
import Register from "@/components/pages/home-page/header/Register";
import FeaturesSection from "@/components/pages/home-page/sections/FeaturesSection";

import HeroSection from "@/components/pages/home-page/sections/HeroSection";

import Background from "@/components/ui/Background";
import Logo from "@/components/ui/Logo";
import FunctionalitiesSection from "@/components/pages/home-page/sections/FunctionalitiesSection";

import { ScrollImages } from "@/components/ui/ScrollImages";
import Link from "next/link";
import MobileNavBar from "@/components/pages/home-page/header/MobileNavBar";

export default function Home() {
  return (
    <>
      <main className=" relative min-h-lvh sm:px-[70px] px-4 pt-[43px]">
        <Background />
        <Header>
          <Logo id="header-logo" className="header-logo" />
          <ButtonsContainer className=" lg:flex hidden">
            <Link href={"#Features"}>Features</Link>
            <Link href={"#functionalities"}>Functionalities</Link>
            <Link href={"#why-choose-us"}>Why Choose Us?</Link>
            <Link href={"#join"}>Ready To Get Started ?</Link>
            <div className="h-8 bg-white/20 w-[1px]"></div>
            <Login />
            <Register />
          </ButtonsContainer>
          <MobileNavBar />
        </Header>
        <HeroSection />
        <ScrollImages />
        <FeaturesSection />
        <FunctionalitiesSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}

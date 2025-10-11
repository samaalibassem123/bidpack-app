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

export default function Home() {
  return (
    <>
      <main className=" relative min-h-lvh sm:px-[70px] px-4 pt-[43px]">
        <Background />
        <Header>
          <Logo />
          <ButtonsContainer>
            <Login />
            <Register />
          </ButtonsContainer>
        </Header>
        <HeroSection />
        <FeaturesSection />
        <FunctionalitiesSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}

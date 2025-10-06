import ButtonsContainer from "@/components/header/ButtonsContainer";
import Header from "@/components/header/Header";
import Login from "@/components/header/Login";
import Register from "@/components/header/Register";
import Background from "@/components/ui/Background";
import Logo from "@/components/ui/Logo";

export default function Home() {
  return (
    <div className=" px-[70px] pt-[43px]">
      <Background />
      <Header>
        <Logo />
        <ButtonsContainer>
          <Login />
          <Register />
        </ButtonsContainer>
      </Header>
    </div>
  );
}

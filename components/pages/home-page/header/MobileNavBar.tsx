import { Menu } from "lucide-react";
import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import ButtonsContainer from "./ButtonsContainer";
import Link from "next/link";
import Login from "./Login";
import Register from "./Register";
import Logo from "@/components/ui/Logo";
import Copyright from "@/components/ui/Copyright";

export default function MobileNavBar() {
  return (
    <div className="lg:hidden flex">
      <Sheet>
        <SheetTrigger className=" cursor-pointer">
          <Menu />
        </SheetTrigger>
        <SheetContent className=" bg-transparent backdrop-blur-3xl">
          <SheetHeader>
            <SheetTitle className=" text-lg font-normal">Menu</SheetTitle>
          </SheetHeader>
          <ButtonsContainer className="  flex-col h-full  justify-around text-lg">
            <SheetClose asChild>
              <Link href={"#"}>Home</Link>
            </SheetClose>
            <SheetClose asChild>
              <Link href={"#Features"}>Features</Link>
            </SheetClose>
            <SheetClose asChild>
              <Link href={"#functionalities"}>Functionalities</Link>
            </SheetClose>
            <SheetClose asChild>
              <Link href={"#why-choose-us"}>Why Choose Us?</Link>
            </SheetClose>
            <SheetClose asChild>
              <Link href={"#join"}>Ready To Get Started ?</Link>
            </SheetClose>
            <ButtonsContainer>
              <Login className="border px-5 bg-white text-black py-2 rounded-lg" />
              <Register />
            </ButtonsContainer>
          </ButtonsContainer>
          <SheetFooter className=" flex items-center justify-center">
            <Logo id="navbar-logo" className=" size-30" />
            <Copyright />
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}

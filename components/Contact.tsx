import React from "react";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import Copyright from "./ui/Copyright";

export default function Contact() {
  return (
    <Drawer>
      <DrawerTrigger className=" hover:underline  cursor-pointer">
        Contact Information
      </DrawerTrigger>
      <DrawerContent className="z-50">
        <DrawerHeader>
          <DrawerTitle>Contact</DrawerTitle>
          <DrawerDescription>
            <Copyright />
          </DrawerDescription>
        </DrawerHeader>
        <div className=" p-10 text-center font-[300] tracking-wide flex items-center justify-center flex-col gap-3">
          <p>
            If you have questions, concerns, or requests regarding this Privacy
            Policy, please contact us at:{" "}
          </p>

          <span className=" select-all selection:text-black selection:bg-white border-b border-white font-normal w-fit">
            support@bidpack.co
          </span>
          <p>
            Vision Age Company FZ LLC Fujairah Creative City, United Arab
            Emirates
          </p>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

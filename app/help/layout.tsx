"use client";
import React, { useState } from "react";
import Header from "@/components/pages/home-page/header/Header";
import ScrollRevealContentA, {
  ItemContent,
} from "@/components/scroll-reveal-content-a";
import Logo from "@/components/ui/Logo";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import Background from "@/components/ui/Background";
import TextGradient from "@/components/text-gradient";
import { cn } from "@/lib/utils";
interface Item {
  title: string;
  url: string;
  icon?: string;
}
const items: Item[] = [
  {
    title: "Introduction",
    url: "/help",
  },
  {
    title: "1.Authentication",
    url: "/help",
  },
  {
    title: "2.Build Company Profile",
    url: "/help",
  },
  {
    title: "3.Studios & Vendors",
    url: "/help",
  },
  {
    title: "4.Vendor Pool",
    url: "/help",
  },
  {
    title: "5.Set up Projects",
    url: "/help",
  },
  {
    title: "6.Assign Vendors",
    url: "/help",
  },
  {
    title: "7.Manage Tasks & Outsourcing",
    url: "/help",
  },
  {
    title: "8.Communication",
    url: "/help",
  },
  {
    title: "9.Vendor Availability by Service",
    url: "/help",
  },
];

const content = [
  {
    title: "Step One",
    description: "...",
    image: {
      url: "/assets/CheckAvailability.png",
      width: 1000,
      height: 1000,
      alt: "A",
    },
  },
  {
    title: "Step Two",
    description: "...",
    image: {
      url: "/assets/BuildVendorPool.png",
      width: 800,
      height: 600,
      alt: "B",
    },
  },
  {
    title: "Step Three",
    description: "...",
    image: {
      url: "/assets/BuildVendorPool.png",
      width: 800,
      height: 600,
      alt: "C",
    },
  },
  {
    title: "Step Four",
    description: "...",
    image: {
      url: "/assets/BuildVendorPool.png",
      width: 800,
      height: 600,
      alt: "D",
    },
  },
];

export default function HelpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [tab, setTab] = useState<string>("Introduction");
  const [active, setActive] = useState(0);
  return (
    <main className="w-full">
      <SidebarProvider>
        <Sidebar
          className="  bg-gradient-to-b backdrop-blur-2xl from-black/20  to-background/20 "
          variant="sidebar"
        >
          <SidebarHeader className="p-3 flex items-center justify-center">
            <Logo id="help logo" className="h-10 w-20" />
          </SidebarHeader>
          <Separator />
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel className="gap-1 text-lg  ">
                Bidpack Help
              </SidebarGroupLabel>

              <SidebarGroupContent className="pl-3 mt-5 ">
                <SidebarMenu className="relative ">
                  <span
                    className="  absolute inset-0 w-full text-center  bg-secondary transition-all rounded-lg "
                    style={{
                      height: `${100 / items.length}%`,
                      transform: `translateY(${active * 100}%)`,
                    }}
                  ></span>
                  {items.map((item, i) => (
                    <SidebarMenuItem
                      className={cn(
                        " relative  rounded-lg pl-3 transition-all",
                        item.title == tab && "font-semibold "
                      )}
                      key={item.title}
                      onClick={() => {
                        setTab(item.title);
                        setActive(i);
                      }}
                    >
                      <SidebarMenuButton render={<Link href={item.url} />}>
                        {item.icon && <item.icon />}
                        <span>{item.title}</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>

          <SidebarFooter>
            <div className=" p-4">
              <Link
                href={"/"}
                className="flex gap-1 items-center hover:gap-2 group-hover transition-all duration-150"
              >
                <ArrowLeft className="h-5 w-5" />
                <span className="font-semibold text-sm">
                  Go back to home page
                </span>
              </Link>
            </div>
          </SidebarFooter>
        </Sidebar>

        <main className=" w-full h-full p-2">
          <SidebarTrigger className="  cursor-pointer hover:bg-secondary" />

          {/* Main content going here */}
          <div className=" mb-30 p-4 pt-20 max-h-full">{children}</div>
        </main>
      </SidebarProvider>
    </main>
  );
}

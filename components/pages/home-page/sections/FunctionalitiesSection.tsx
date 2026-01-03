import React from "react";
import FunctionalitieCard from "@/components/pages/home-page/functionalities/FunctionalitieCard";
import Functionalities from "@/components/pages/home-page/functionalities/Functionalities";
import SlideUpScrollAnimation from "@/components/animation/SlideUpScrollAnimation";
import DescriptionText from "@/components/ui/DescriptionText";
import { Briefcase, ListTodo, MessagesSquare, Search } from "lucide-react";
import Title from "@/components/ui/Title";

export default function FunctionalitiesSection() {
  return (
    <Functionalities>
      <SlideUpScrollAnimation>
        <Title className=" text-3xl">Everything You Need in One Place</Title>
      </SlideUpScrollAnimation>
      <SlideUpScrollAnimation>
        <DescriptionText>
          A unified platform designed for vendor collaboration, not internal
          production management.
        </DescriptionText>
      </SlideUpScrollAnimation>

      <div className="pt-20 flex flex-wrap xl:gap-0 gap-30 xl:justify-between justify-center">
        <FunctionalitieCard>
          <FunctionalitieCard.FunctionalitieIcon>
            <Search className="size-10" />
          </FunctionalitieCard.FunctionalitieIcon>
          <Title className="text-xl">Vendor Discovery & Selection</Title>
          <DescriptionText className="text-sm">
            Find the right outsourcing partners using advanced filters based on
            services, location, time zone, tools, workflow, and availability.
            Discover studios and vendors that truly match your production needs.
          </DescriptionText>
        </FunctionalitieCard>
        <FunctionalitieCard>
          <FunctionalitieCard.FunctionalitieIcon>
            <Briefcase className="size-10" />
          </FunctionalitieCard.FunctionalitieIcon>
          <Title className="text-xl">
            Vendor Pool & Collaboration Management
          </Title>
          <DescriptionText className="text-sm">
            Build and manage your own vendor pool from trusted partners and
            long-term collaborators. Keep full control over who you work with,
            project after project.
          </DescriptionText>
        </FunctionalitieCard>
        <FunctionalitieCard>
          <FunctionalitieCard.FunctionalitieIcon>
            <ListTodo className="size-10" />
          </FunctionalitieCard.FunctionalitieIcon>
          <Title className="text-xl">Outsourced Task & Delivery Tracking</Title>
          <DescriptionText className="text-sm">
            Share tasks, briefs, deadlines, and materials with your vendors.
            Track outsourced work, deliveries, and progress with full
            transparency—without micromanagement.
          </DescriptionText>
        </FunctionalitieCard>
        <FunctionalitieCard>
          <FunctionalitieCard.FunctionalitieIcon>
            <MessagesSquare className="size-10" />
          </FunctionalitieCard.FunctionalitieIcon>
          <Title className="text-xl">Centralized Vendor Communication</Title>
          <DescriptionText className="  text-sm">
            Communicate with vendors directly inside BidPack. All discussions
            stay linked to projects and tasks, ensuring clarity, traceability,
            and faster decisions.
          </DescriptionText>
        </FunctionalitieCard>
      </div>
    </Functionalities>
  );
}

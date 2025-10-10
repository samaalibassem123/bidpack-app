import React from "react";
import FunctionalitieCard from "@/components/pages/home-page/functionalities/FunctionalitieCard";
import Functionalities from "@/components/pages/home-page/functionalities/Functionalities";
import SlideUpAnimation from "@/components/animation/SlideUpAnimation";
import DescriptionText from "@/components/ui/DescriptionText";
import { Briefcase, ListTodo, MessagesSquare, Search } from "lucide-react";
import Title from "@/components/ui/Title";

export default function FunctionalitiesSection() {
  return (
    <Functionalities>
      <SlideUpAnimation>
        <Title className=" text-3xl">Everything You Need in One Place</Title>
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
            Find the perfect studio with powerful search filters and detailed
            profiles.
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
  );
}

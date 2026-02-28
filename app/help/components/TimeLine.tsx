"use client";
import {
  TimelineSteps,
  TimelineStepsConnector,
  TimelineStepsContent,
  TimelineStepsDescription,
  TimelineStepsHeader,
  TimelineStepsIcon,
  TimelineStepsItem,
  TimelineStepsTime,
  TimelineStepsTitle,
} from "@/components/ui/timeline-steps";
import {
  ScrollSpy,
  ScrollSpyNav,
  ScrollSpyLink,
  ScrollSpyViewport,
  ScrollSpySection,
} from "@/components/ui/scroll-spy";
import { useState } from "react";
import { cn } from "@/lib/utils";

export interface TimeLineItem {
  step: string;
  icon: string | React.ReactNode;
  title: string;
  description: string;
  img_url: string;
}

interface Props {
  timelineItems: TimeLineItem[];
}

export default function TimeLine({ ...props }: Props) {
  const [value, setValue] = useState("step1");

  return (
    <ScrollSpy
      offset={10}
      value={value}
      onValueChange={setValue}
      defaultValue="step1"
    >
      <ScrollSpyNav className=" z-40  hidden md:flex  fixed top-0 right-0  p-10  h-svh ">
        {props.timelineItems.map((item) => (
          <ScrollSpyLink
            key={item.step}
            value={item.step}
            className={cn(
              value === item.step && "bg-secondary rounded-lg scale-105"
            )}
          >
            {item.title}
          </ScrollSpyLink>
        ))}
      </ScrollSpyNav>
      <TimelineSteps>
        <ScrollSpyViewport>
          {props.timelineItems.map((item) => (
            <ScrollSpySection key={item.step} value={item.step}>
              <TimelineStepsItem>
                <TimelineStepsConnector />
                <TimelineStepsHeader>
                  <TimelineStepsIcon>{item.icon}</TimelineStepsIcon>
                  <TimelineStepsTitle className=" font-semibold text-lg">
                    {item.title}
                  </TimelineStepsTitle>
                </TimelineStepsHeader>
                <TimelineStepsContent>
                  <TimelineStepsDescription className="w-100 text-white/80 p-3">
                    {item.description}
                  </TimelineStepsDescription>
                  <img src={item.img_url} className="w-200" />
                </TimelineStepsContent>
              </TimelineStepsItem>
            </ScrollSpySection>
          ))}
        </ScrollSpyViewport>
      </TimelineSteps>
    </ScrollSpy>
  );
}

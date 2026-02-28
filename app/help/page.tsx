import React from "react";
import TimeLine from "./components/TimeLine";
import type { TimeLineItem } from "./components/TimeLine";

const items: TimeLineItem[] = [
  {
    icon: "1",
    step: "step1",
    title: "Add Basic Information",
    description:
      "Add your company name, logo, contact details, and timezone. This is the foundation of your public profile and helps clients identify and reach you easily.",
    img_url: "/assets/CompanyProfile.png",
  },
  {
    icon: "2",
    step: "step2",
    title: "Company Overview",
    description:
      "Introduce your company. Explain what you do, who you serve, and what makes you different. Keep it clear, professional, and focused on value.",
    img_url: "/assets/CompanyProfile.png",
  },
  {
    icon: "3",
    step: "step3",
    title: "Services Offered",
    description:
      "List the services your company provides. Describe what clients can expect, the problems you solve, and the results you deliver.",
    img_url: "/assets/CompanyProfile.png",
  },
];

export default function page() {
  return (
    <div>
      <TimeLine timelineItems={items} />
    </div>
  );
}

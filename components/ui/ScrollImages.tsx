"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
interface SlideData {
  title: string;
  src: string;
  desc: string;
  text: string;
}

const images: SlideData[] = [
  {
    title: "Build Your Company Profile",
    desc: "Showcase your expertise and become visible in vendor searches",
    text: `Create your company profile to showcase your expertise and become visible in vendors and studios searches. Highlight your services, tools, team, and certifications to attract the right partners.`,
    src: "/assets/CompanyProfile.png", // placeholder, replace with your image path
  },
  {
    title: "Discover Studios & Vendors",
    desc: "Find the best partners worldwide with advanced filters",
    text: `Find studios and vendors worldwide using advanced filters such as location, time zone, industry, services, and tools. Identify the best partners for your production needs in just a few clicks.`,
    src: "/assets/DiscoverVendors.png",
  },
  {
    title: "Build Your Vendor Pool",
    desc: "Curate a network of trusted connections and long-term partners",
    text: `Build your own vendor pool from trusted connections and long-term partners. Create a curated network of vendors you know, trust, and want to collaborate with again.`,
    src: "/assets/BuildVendorPool.png",
  },
  {
    title: "Set Up Your Projects",
    desc: "Define project scope, timelines, and collaboration settings",
    text: `Create and structure your projects easily. Define project scope, timelines, services needed, and collaboration settings to prepare a clear and efficient outsourcing workflow.`,
    src: "/assets/SetUpProjects.png",
  },
  {
    title: "Assign Trusted Vendors",
    desc: "Choose the right partner for each service",
    text: `Assign vendors from your pool directly to your projects. Choose the right partner for each service and control access based on your collaboration strategy.`,
    src: "/assets/AssignVendors.png",
  },
  {
    title: "Manage Tasks & Outsourcing",
    desc: "Track progress and maintain full visibility",
    text: `Share tasks, briefs, materials, deadlines, and updates with your vendors. Track progress, manage deliveries, and maintain full visibility over outsourced work in one place.`,
    src: "/assets/ManageTasks.png",
  },
  {
    title: "Communicate in Real Time",
    desc: "Centralize discussions, feedback, and decisions",
    text: `Communicate with your vendors in real time through integrated messaging. Centralize discussions, feedback, and decisions to keep collaboration fast, clear, and efficient.`,
    src: "/assets/CommunicateRealTime.png",
  },
  {
    title: "Check Vendor Availability by Service",
    desc: "Plan assignments with confidence using availability data",
    text: `Check your vendor’s availability per service and time period. Instantly see when a vendor is available, limited, or unavailable for a specific service to plan assignments with confidence.`,
    src: "/assets/CheckAvailability.png",
  },
];

export function ScrollImages() {
  return (
    <div
      id="Features"
      className=" h-[120lvh] relative flex items-center w-full"
    >
      <Carousel className="w-full">
        <CarouselContent>
          {images.map((img, index) => (
            <CarouselItem
              key={index}
              className="flex lg:flex-row flex-col gap-10 items-center"
            >
              <img
                src={img.src}
                height={60}
                width={630}
                className=" rounded-3xl"
                alt={img.title}
              />
              <div className=" space-y-4">
                <div>
                  <h1 className="text-4xl font-semibold">{img.title}</h1>
                  <span className="text-sm text-gray-500 capitalize">
                    {img.desc}
                  </span>
                </div>
                <p className="text-lg text-pretty">{img.text}</p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

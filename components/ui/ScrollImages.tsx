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
    title:
      "Create and manage your outsourced projects with your preferred vendors",
    desc: "Centralized project management for all your external collaborations",
    src: "/assets/MyProjects.jpeg",
    text: `Organize all your outsourced productions in one place. Assign services to external vendors, monitor their progress, deadlines, and delivery stages — keeping every collaboration transparent and efficient.`,
  },
  {
    title: "Build your Vendor Pool and manage trusted collaborations",
    desc: "A personalized list of approved external studios and service providers",
    src: "/assets/VendorPool.jpeg",
    text: `Create your own list of trusted vendors. Review their profiles, check availability, and add them to your pool to always find the right partner for each outsourced project.`,
  },
  {
    title: "Collaborate in real time with your external partners",
    desc: "Built-in messaging system for smooth communication",
    src: "/assets/Messages.jpeg",
    text: `Chat directly with your vendors and studios through our built-in messaging system. Discuss briefs, share updates, and manage communication professionally across all your ongoing collaborations.`,
  },
  {
    title: "Stay in control of who joins your network",
    desc: "Approve or decline vendor connection requests securely",
    src: "/assets/ConnectionReq.jpeg",
    text: `Review and approve connection requests from studios and vendors who want to collaborate with you. Build and maintain a secure network of reliable outsourcing partners that grows with your needs.`,
  },
  {
    title: "Invite multiple vendors with Silent Bid",
    desc: "Confidential bidding process for fair and efficient outsourcing",
    src: "/assets/SilentBid.jpeg",
    text: `Share a task with several vendors without revealing competition. Each vendor submits a private offer, and you choose the most suitable bid — ensuring a fair, confidential, and efficient process.`,
  },
  {
    title: "Track quality and alerts through the Ping Center",
    desc: "Centralized hub for alerts, performance updates, and feedback",
    src: "/assets/PingCenter.jpeg",
    text: `Centralize all performance alerts, feedback, and quality control updates from your vendors. Stay informed on every change — from ETA adjustments to delivery issues — and keep your projects on track.`,
  },
  {
    title: "Request bids and delivery estimates instantly",
    desc: "Instant quotes and timeline comparison",
    src: "/assets/BidEstimates.jpeg",
    text: `Get fast, accurate quotes and delivery timelines from your vendors. Compare offers, evaluate availability, and make data-driven outsourcing decisions — without endless back-and-forth emails.`,
  },
  {
    title: "Analyze vendor performance and optimize collaborations",
    desc: "Performance analytics and insights for continuous improvement",
    src: "/assets/VendorAnalytics.jpeg",
    text: `Access real-time insights on vendor performance based on response speed, delivery accuracy, and quality feedback. Identify your best partners and refine your outsourcing strategy with every new project.`,
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

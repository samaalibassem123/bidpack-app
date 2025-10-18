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
    text: `Collaborate in real time with your partners.
Our built-in messaging system lets you chat directly with studios and vendors, discuss project details, share updates, and keep communication organized and professional.`,
    title: "Collaborate in real time with your vendors",
    desc: "a messagary system where you can send and recieve messages with your team",
    src: "/assets/Messages.jpeg",
  },
  {
    text: `Stay in control of who joins your network.
Review and approve incoming connection requests from studios and vendors interested in collaborating with you. Build trusted relationships with a single click.
        `,
    title: "Stay in control of who joins your network",
    desc: "connections requests",
    src: "/assets/ConnectionReq.jpeg",
  },
  {
    text: `Build your own pool of trusted vendors.
Add approved studios and service providers, review their profiles, and manage availability — ensuring you always have the right talent for every project.`,
    title: "Create your Vendor Pool",
    desc: "where you can find vendors",
    src: "/assets/VendorPool.jpeg",
  },
  {
    text: `Keep track of every project in one place.
Easily monitor progress, deadlines, and statuses of your ongoing and completed projects. Manage tasks efficiently and stay updated on every stage of production.`,
    title: "Create your projects and assign them to your prefered Vendors",
    desc: "Check your projects ",
    src: "/assets/MyProjects.jpeg",
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

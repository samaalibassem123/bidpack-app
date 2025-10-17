"use client";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

const images = [
  {
    quote: `Build your own pool of trusted vendors.
Add approved studios and service providers, review their profiles, and manage availability — ensuring you always have the right talent for every project.`,
    name: "Vendor Pool",
    designation: "where you can find vendors",
    src: "/assets/VendorPool.jpeg",
  },
  {
    quote: `Keep track of every project in one place.
Easily monitor progress, deadlines, and statuses of your ongoing and completed projects. Manage tasks efficiently and stay updated on every stage of production.`,
    name: "Projects",
    designation: "Check your projects ",
    src: "/assets/MyProjects.jpeg",
  },
  {
    quote: `Collaborate in real time with your partners.
Our built-in messaging system lets you chat directly with studios and vendors, discuss project details, share updates, and keep communication organized and professional.`,
    name: "Meesages",
    designation:
      "a messagary system where you can send and recieve messages with your team",
    src: "/assets/Messages.jpeg",
  },
  {
    quote: `Stay in control of who joins your network.
Review and approve incoming connection requests from studios and vendors interested in collaborating with you. Build trusted relationships with a single click.
        `,
    name: "Connections",
    designation: "connections requests",
    src: "/assets/ConnectionReq.jpeg",
  },
  {
    quote: `Manage and grow your professional network effortlessly.
View all your existing connections, send new invitations, and explore studios or vendors that match your project needs — all from one organized dashboard.
        `,
    name: "Connections",
    designation: "see connections",
    src: "/assets/MyConnections.jpeg",
  },
];

export function ScrollImages() {
  return (
    <div className="h-[100lvh] flex items-center ">
      <AnimatedTestimonials testimonials={images} />
    </div>
  );
}

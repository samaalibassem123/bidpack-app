"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import Header from "@/components/pages/home-page/header/Header";
import Logo from "@/components/ui/Logo";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { DottedGlowBackgroundLogo } from "@/components/pages/home-page/features/DottedGlowBackgroundLogo";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Message sent!", {
          description: "We will get back to you as soon as possible.",
        });

        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        throw new Error("Error while sending");
      }
    } catch (error) {
      toast.error("Error", {
        description: "An error occurred while sending the message.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="p-3 w-full min-h-lvh">
      <Header>
        <Logo id="contact logo" />
        <Link
          href={"/"}
          className="flex gap-1 items-center hover:gap-2 group-hover transition-all duration-150"
        >
          <ArrowLeft className="h-5 w-5" />
          <span className="font-semibold text-sm">Go back to home page</span>
        </Link>
      </Header>

      <div className="w-full min-h-lvh flex lg:flex-row flex-col p-10 sm:items-center sm:justify-around">
        <div className="lg:inline-block hidden">
          <DottedGlowBackgroundLogo />
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 md:w-lg">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">Contact Us</h1>
            <p className="text-muted-foreground">
              Fill out the form below and we will respond quickly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">Last Name</Label>
              <Input
                id="firstName"
                placeholder="Your last name"
                value={formData.firstName}
                onChange={(e) =>
                  setFormData({ ...formData, firstName: e.target.value })
                }
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="lastName">First Name</Label>
              <Input
                id="lastName"
                placeholder="Your first name"
                value={formData.lastName}
                onChange={(e) =>
                  setFormData({ ...formData, lastName: e.target.value })
                }
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Your Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="your.email@example.com"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="subject">Subject</Label>
            <Select
              value={formData.subject}
              onValueChange={(value) =>
                setFormData({ ...formData, subject: value })
              }
              required
            >
              <SelectTrigger id="subject">
                <SelectValue placeholder="Select a subject" />
              </SelectTrigger>
              <SelectContent className="bg-background">
                <SelectItem value="hello@bidpack.co" className="bg-background">
                  General
                </SelectItem>
                <SelectItem
                  value="support@bidpack.co"
                  className="bg-background"
                >
                  Technical Support
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              placeholder="Your message..."
              rows={6}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              required
            />
          </div>

          <div className="w-full justify-end flex">
            <Button
              type="submit"
              variant={"ghost"}
              className="bg-gradient-to-br mt-10 cursor-pointer text-white hover:opacity-80 transition-all hover:from-[#5473C133] from-[#5473C133] hover:to-white/10 to-white/10 inset-shadow-lg w-[180px] text-center px-[24px] py-[10px] backdrop-blur-[8px] border-y border-y-white/20 rounded-[12px]"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </div>
        </form>
      </div>
    </main>
  );
}

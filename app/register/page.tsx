"use client";

import NotifyMeForm from "@/components/pages/register/notify-me-form/NotifyMeForm";
import Logo from "@/components/ui/Logo";
import NotifyMeBackground from "@/components/ui/NotifyMeBackground";
import Title from "@/components/ui/Title";
import { motion } from "framer-motion";

const showAnimation = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
};

export default function page() {
  return (
    <main className="relative w-full h-lvh flex flex-col gap-4 items-center justify-center text-white p-5">
      <NotifyMeBackground />
      <motion.div
        variants={showAnimation}
        initial="initial"
        animate="animate"
        transition={{ delay: 0.1, duration: 1, ease: "easeOut" }}
      >
        <Logo className="size-60  h-fit " />
      </motion.div>
      <motion.div
        variants={showAnimation}
        initial="initial"
        animate="animate"
        transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
      >
        <Title className="sm:text-6xl text-5xl">Coming Soon !</Title>
      </motion.div>
      <motion.div
        variants={showAnimation}
        initial="initial"
        animate="animate"
        transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
      >
        <span className="text-lg text-[#B2B2B2] text-center">
          Get ready everyone! We are currently <br /> working on something
          awesome.
        </span>
      </motion.div>
      <NotifyMeForm />
    </main>
  );
}

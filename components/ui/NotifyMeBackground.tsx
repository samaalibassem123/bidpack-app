"use client";
import React from "react";
import { motion } from "framer-motion";

const Animation = {
  animate: {
    opacity: [0.6, 1, 0.6],
    transition: {
      duration: 3,
      repeat: Infinity,
    },
  },
};

export default function NotifyMeBackground() {
  return (
    <>
      <motion.div
        variants={Animation}
        animate="animate"
        className=" absolute inset-0  sm:size-100   -z-10 rounded-full blur-2xl  bg-[#5473C1]/8"
      ></motion.div>
      <motion.div
        variants={Animation}
        animate="animate"
        className=" absolute right-10 bottom-0   size-100   -z-10 rounded-full blur-2xl  bg-[#5473C1]/5"
      ></motion.div>

      <motion.div
        variants={Animation}
        animate="animate"
        className=" absolute right-10 top-0   size-50   sm:inline-block hidden -z-10 rounded-full blur-2xl  bg-[#5473C1]/10"
      ></motion.div>

      <motion.div
        variants={Animation}
        animate="animate"
        className=" absolute left-10 bottom-0 sm:inline-block hidden   size-50   -z-10 rounded-full blur-2xl  bg-[#5473C1]/5"
      ></motion.div>

      <div className=" absolute w-full h-full -z-20 inset-0   bg-[#17181D]"></div>
    </>
  );
}

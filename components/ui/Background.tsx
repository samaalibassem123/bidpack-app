"use client";
import React from "react";
import { motion } from "framer-motion";
const bg =
  "[background:radial-gradient(100%_120%_at_50%_-10%,#42598f_25%,#17181D_90%)]";
export default function Background() {
  return (
    <>
      <motion.div
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 3, repeat: Infinity }}
        className=" h-[200vh] rounded-[600px] w-full  bg-radial blur-2xl  from-[#42598f] from-10%   to-[#17181D]  -z-10 absolute inset-0 -top-[100vh]"
      ></motion.div>
      <div className="absolute inset-0 -z-20 h-full w-full bg-[#17181D] " />
    </>
  );
}

"use client";
import { useActionState, useState } from "react";
import { addEmailToGoogleSheet } from "./actions/NotifyMe";
import { Spinner } from "@/components/ui/spinner";

import { motion } from "framer-motion";

export default function NotifyMeForm() {
  const [email, setEmail] = useState("");
  const [state, action, pending] = useActionState(
    addEmailToGoogleSheet,
    undefined
  );

  return (
    <form action={action} className="flex flex-col gap-5 sm:w-fit w-full">
      {state?.success ? (
        <div className="w-full text-center flex flex-col gap-4 items-center justify-center ">
          <div className="border rounded-full p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-check-icon lucide-check size-15"
            >
              <motion.path
                d="M20 6 9 17l-5-5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1, ease: "easeInOut" }}
              />
            </svg>
          </div>
          <p className=" text-green-300 flex flex-col gap-2">
            <span className=" font-semibold">{email}</span> Added Succefully to
            the waiting List !
          </p>
        </div>
      ) : (
        <>
          <input
            type="email"
            required
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            placeholder="Email address"
            className="border border-[#5473C133] sm:w-sm w-full outline-none  p-4 rounded-md"
          />
          {state?.MailError && (
            <p className="text-sm text-red-400 ">* {state.MailError}</p>
          )}
          <button
            disabled={pending}
            className="border-y flex items-center justify-center gap-2 disabled:cursor-progress disabled:opacity-75 disabled:scale-95 transition-all border-white/20 px-5 py-3 cursor-pointer  rounded-md bg-gradient-to-br from-[#5473C133] from-50% to-white/10  hover: "
          >
            {pending && <Spinner />}
            Notify Me
          </button>
        </>
      )}
    </form>
  );
}

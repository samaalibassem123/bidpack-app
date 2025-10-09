import Link from "next/link";
import React from "react";

export default function Login() {
  return (
    <Link
      href={"/register"}
      className=" hover:opacity-80 transition-all font-semibold"
    >
      Login
    </Link>
  );
}

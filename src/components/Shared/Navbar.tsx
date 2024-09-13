"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Navbar() {
  const pathName = usePathname();

  const links = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Search Room",
      path: "/search",
    },
    {
      title: "Rewards",
      path: "/rewards",
    },
    {
      title: "Print Booking",
      path: "/print",
    },
  ];

  return (
    <div
      className={`${
        pathName === "/privacy-policy" || pathName === "/about"
          ? "hidden"
          : "block"
      }`}
    >
      <div className="navbar bg-base-100 max-w-screen-xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links.map((link) => (
                <li
                  className={`${
                    pathName === link.path &&
                    "text-[#2ECA7F] border-b-2 border-[#2ECA7F]"
                  }`}
                  key={link.path}
                >
                  <Link href={link.path}>{link.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <Link href="/" className="text-3xl font-bold text-[#2ECA7F]">
            OYO<span className="text-[#FFBA00]">Rooms</span>
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="gap-8 menu-horizontal px-1 text-lg font-semibold">
            {links.map((link) => (
              <li
                className={`${
                  pathName === link.path &&
                  "text-[#2ECA7F] border-b-2 border-[#2ECA7F]"
                }`}
                key={link.path}
              >
                <Link href={link.path}>{link.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

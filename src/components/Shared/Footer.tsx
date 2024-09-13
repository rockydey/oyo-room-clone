"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Footer = () => {
  const pathname = usePathname();

  return (
    <div className={`bg-neutral ${(pathname === "/privacy-policy" || pathname === "/search") && "hidden"}`}>
      <footer className="footer max-w-screen-xl mx-auto text-neutral-content p-10">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <Link href="/about" className="link link-hover">
            About us
          </Link>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <Link href="/privacy-policy" className="link link-hover">
            Privacy Policy
          </Link>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;

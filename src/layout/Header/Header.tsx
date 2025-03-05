"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Fade } from "react-awesome-reveal";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative">
      <header className="fixed inset-x-0 md:top-2 z-50 w-full">
        <nav
          className={cn(
            "flex items-center justify-between px-4 py-3 transition-all duration-300 shadow-md md:px-6 lg:mx-auto lg:max-w-[1600px] md:rounded-full",
            isScrolled ? "bg-gray-800/60 backdrop-blur-lg" : "bg-primary-dark"
          )}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="https://www.hiacuity.com/static/media/logo%20Main%202.9982694dad756def5917.png"
              alt="HiAcuity Logo"
              width={150}
              height={80}
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex gap-x-8">
            {[
              { href: "/", label: "Home" },
              { href: "/job-openings", label: "Job Openings" },
              { href: "/employee-assements", label: "Assessments" },
              { href: "/pricing", label: "Pricing" },
              { href: "/about", label: "About Us" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={` transition hover:text-gray-300 ${
                  pathname === link.href ? "text-primary-light" : "text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Contact Button */}
          <div className="hidden lg:flex">
            <Link
              href="/contact"
              className="rounded-full bg-primary-light px-4 py-2 text-sm font-semibold text-primary-dark shadow-md transition hover:bg-primary-dark hover:text-white"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(true)}
            className="lg:hidden p-2 rounded-full text-white transition hover:scale-105"
          >
            <FiMenu size={28} />
          </button>
        </nav>

        {/* Mobile Overlay */}
        {isOpen && (
          <div
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity"
            onClick={() => setIsOpen(false)}
          ></div>
        )}

        {/* Mobile Sidebar */}
        <div
          className={cn(
            "fixed right-0 top-0 z-50 h-full w-4/5 max-w-sm bg-gray-800/40 backdrop-blur-lg shadow-xl transform transition-transform duration-300",
            isOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex items-center justify-between p-4 bg-primary-dark text-white">
            <Image
              src="https://www.hiacuity.com/static/media/logo%20Main%202.9982694dad756def5917.png"
              alt="HiAcuity Logo"
              width={120}
              height={50}
            />
            <button onClick={() => setIsOpen(false)}>
              <FiX size={24} />
            </button>
          </div>

          {/* Mobile Navigation */}
          <Fade cascade direction="right">
            <nav className="flex flex-col gap-2 p-4">
              {[
                { href: "/", label: "Home" },
                { href: "/job-openings", label: "Job Openings" },
                { href: "/employee-assements", label: "Assessments" },
                { href: "/pricing", label: "Pricing" },
                { href: "/about", label: "About Us" },
                { href: "/contact", label: "Contact Us" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block rounded-lg p-3 transition ${
                    pathname === link.href
                      ? "text-primary-light font-semibold"
                      : "text-white"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </Fade>
        </div>
      </header>
    </div>
  );
};

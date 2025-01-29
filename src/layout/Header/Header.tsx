"use client";

import React, { useState } from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi";
import { usePathname } from "next/navigation";

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={props.href ?? "#"}
          passHref
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const closeMenu = () => setIsOpen(false);
  return (
    <div className="relative">
      <header className="fixed inset-x-0 top-0 z-50 md:px-3  md:my-2 ">
        <nav
          aria-label="Global"
          className="flex px-4 bg-primary-dark md:rounded-full shadow-md shadow-slate-800 w-auto lg:max-w-[1600px] mx-auto items-center justify-between py-2  "
        >
          <div className="flex gap-5 items-center">
            <div className="flex lg:flex-1">
              <Link href="/" passHref className="px-2">
                <span className="sr-only">HiAcuity</span>
                <Image
                  alt="HiAcuity Logo"
                  src="https://www.hiacuity.com/static/media/logo%20Main%202.9982694dad756def5917.png"
                  className="h-8 w-auto"
                  width={150}
                  height={80}
                />
              </Link>
            </div>
          </div>
          <div className="lg:hidden">
            {/* Menu Button */}
            <button
              onClick={() => setIsOpen(true)}
              className="h-10 w-10 flex items-center justify-center rounded-full bg-primary-light text-primary-dark transition-all hover:scale-105"
            >
              <FiMenu size={24} />
            </button>

            {/* Overlay */}
            <div
              className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 ${
                isOpen ? "opacity-100 visible" : "opacity-0 invisible"
              }`}
              onClick={closeMenu}
            ></div>

            {/* Sidebar */}
            <div
              className={`fixed right-0 top-0 z-50 h-full w-4/5 max-w-sm bg-white shadow-xl transform transition-transform duration-300 ${
                isOpen ? "translate-x-0" : "translate-x-full"
              }`}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 bg-primary-dark text-white">
                <Link
                  href="/"
                  className="flex items-center"
                  onClick={closeMenu}
                >
                  <Image
                    src="https://www.hiacuity.com/static/media/logo%20Main%202.9982694dad756def5917.png"
                    alt="HiAcuity Logo"
                    width={120}
                    height={50}
                  />
                </Link>
                <button onClick={closeMenu} className="text-white">
                  <FiX size={24} />
                </button>
              </div>

              {/* Navigation Links */}
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
                    onClick={closeMenu}
                    className={`block p-3 rounded-lg transition ${
                      pathname === link.href
                        ? "bg-primary-light hover:text-primary-dark" // Active route styling
                        : "bg-gray-100 hover:bg-primary-light hover:text-primary-dark"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
          <div className="hidden lg:flex lg:gap-x-12 ">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem className="text-white">
                  <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[1fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <Link
                            href="/job-openings"
                            passHref
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          >
                            {/* <Icons.logo className="h-6 w-6" /> */}
                            <div className="mb-2 mt-4 text-lg font-medium">
                              Job Opening
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              Beautifully designed components that you can copy
                              and paste into your apps. Accessible.
                              Customizable. Open Source.
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <Link
                            href="/employee-assements"
                            passHref
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          >
                            {/* <Icons.logo className="h-6 w-6" /> */}
                            <div className="mb-2 mt-4 text-lg font-medium">
                              Assesments
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              Beautifully designed components that you can copy
                              and paste into your apps. Accessible.
                              Customizable. Open Source.
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem className="text-white">
                  <Link href="/pricing" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Pricing
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem className="text-white">
                  <Link href="/blogs" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Blogs
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem className="text-white">
                  <Link href="/about" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      About Us
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div className="hidden lg:flex  lg:justify-end">
            <Link
              href="/contact"
              className="relative rounded-3xl bg-primary-light px-4 py-2.5 text-sm font-semibold text-primary-dark shadow-md outline outline-2   transition duration-300 ease-in-out"
            >
              Contact Us
            </Link>
          </div>
        </nav>
      </header>
    </div>
  );
};

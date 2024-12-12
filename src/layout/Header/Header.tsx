"use client";

import React from "react";
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
import { Drawer, DrawerClose, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { FiMenu } from "react-icons/fi";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { XMark } from "@/icons/Icons";

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(
  ({ className, title, children, ...props }, ref) => {
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
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </Link>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";

export const Header = () => {
  return (
    <div className="relative">
      <header className="fixed inset-x-0 top-0 z-50 px-3  my-2 ">
        <nav
          aria-label="Global"
          className="flex px-4 bg-primary-dark rounded-full shadow-md shadow-slate-800 w-auto lg:max-w-[1600px] mx-auto items-center justify-between py-2  "
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
            <Drawer direction="right">
              <DrawerTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8 shrink-0 rounded-full text-primary-dark bg-primary-light"
                >
                  <FiMenu />
                </Button>
              </DrawerTrigger>
              <DrawerContent className="w-full md:w-1/3">
                <div className="mx-auto w-full bg-gradient-to-t from-primary-light to-white flex-1 h-full ">
                  <DrawerHeader className="hidden">
                    <DrawerTitle className="hidden">Mobile Nav menu</DrawerTitle>
                  </DrawerHeader>
                  <div className="flex items-center justify-between px-3 py-3 mt-2 bg-primary-dark">
                    <div className="flex lg:flex-1">
                      <Link href="/" passHref className="-m-1.5 p-1.5">
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
                    <DrawerClose asChild>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 shrink-0 rounded-full text-primary-dark bg-primary-light"
                      >
                        <XMark />
                        <span className="sr-only">Increase</span>
                      </Button>
                    </DrawerClose>
                  </div>
                  <Accordion className="px-2" type="single" collapsible>
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="text-primary-dark">Products</AccordionTrigger>
                      <AccordionContent>
                        <Link
                          href="/"
                          passHref
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium">HiAcuity</div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Beautifully designed components that you can copy and paste into your apps. Accessible.
                            Customizable. Open Source.
                          </p>
                        </Link>
                        <Link
                          href="/"
                          passHref
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium">HiAcuity</div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Beautifully designed components that you can copy and paste into your apps. Accessible.
                            Customizable. Open Source.
                          </p>
                        </Link>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                  <Accordion className="px-2" type="single" collapsible={false}>
                    <AccordionItem value="item-1">
                      <AccordionTrigger collapsible={false} className="text-primary-dark">
                        Pricing
                      </AccordionTrigger>
                    </AccordionItem>
                  </Accordion>
                  <Accordion className="px-2" type="single" collapsible={false}>
                    <AccordionItem value="item-1">
                      <AccordionTrigger collapsible={false} className="text-primary-dark">
                        Blog
                      </AccordionTrigger>
                    </AccordionItem>
                  </Accordion>
                  <Accordion className="px-2" type="single" collapsible={false}>
                    <AccordionItem value="item-1">
                      <AccordionTrigger collapsible={false} className="text-primary-dark">
                        <Link href="/about" passHref>
                          About Us
                        </Link>
                      </AccordionTrigger>
                    </AccordionItem>
                  </Accordion>
                  <Accordion className="px-2" type="single" collapsible={false}>
                    <AccordionItem value="item-1">
                      <AccordionTrigger collapsible={false} className="text-primary-dark">
                        <Link href="/contact" passHref>
                          Contact Us
                        </Link>
                      </AccordionTrigger>
                    </AccordionItem>
                  </Accordion>
                </div>
              </DrawerContent>
            </Drawer>
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
                            href="/"
                            passHref
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          >
                            {/* <Icons.logo className="h-6 w-6" /> */}
                            <div className="mb-2 mt-4 text-lg font-medium">Job Opening</div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              Beautifully designed components that you can copy and paste into your apps. Accessible.
                              Customizable. Open Source.
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <Link
                            href="/"
                            passHref
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          >
                            {/* <Icons.logo className="h-6 w-6" /> */}
                            <div className="mb-2 mt-4 text-lg font-medium">Assesments</div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              Beautifully designed components that you can copy and paste into your apps. Accessible.
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
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>Pricing</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem className="text-white">
                  <Link href="/blogs" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>Blogs</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem className="text-white">
                  <Link href="/about" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>About Us</NavigationMenuLink>
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

"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { cn } from "@/lib/utils";
import { ChevronDownIcon } from "@radix-ui/react-icons";

// Main Accordion Component
const Accordion = AccordionPrimitive.Root;

// Accordion Item Component
const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item> & { customStyle?: string } // Allow optional custom style prop
>(({ className, customStyle, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn(customStyle, className)} // Apply custom style if provided
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

// Accordion Trigger Component
const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> & { collapsible?: boolean }
>(({ className, children, collapsible = true, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between py-4 px-2 text-base font-semibold text-left transition-all duration-300",
        "hover:bg-gray-100  rounded-lg", // Add rounded corners and background hover effect
        "[&[data-state=open]>svg]:rotate-180",
        className
      )}
      {...props}
    >
      {children}
      {collapsible && <ChevronDownIcon className="h-5 w-5 shrink-0 text-gray-500 transition-transform duration-200" />}
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = "AccordionTrigger";

// Accordion Content Component
const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={cn(
      "overflow-hidden text-sm transition-all duration-500 ease-in-out",
      "data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up", // Smooth transition for content
      className
    )}
    {...props}
  >
    <div className={cn("pb-4 pt-2 px-2", className)}>{children}</div> {/* Add padding for better spacing */}
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = "AccordionContent";

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };

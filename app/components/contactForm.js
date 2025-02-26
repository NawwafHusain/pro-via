"use client";
import React from "react";
import { Widget } from "@typeform/embed-react";
import { cn } from "@/lib/utils";

export default function ContactForm({ color, className, inlineOnMobile }) {
  if (color === "white") {
    return (
      <Widget
        id="FbsnkPgu"
        className={cn("w-full h-full", className)}
        inlineOnMobile={inlineOnMobile}
      />
    );
  }

  return (
    <Widget
      id="qa9CwW1u"
      className={cn("w-full h-full", className)}
      inlineOnMobile={inlineOnMobile}
    />
  );
}

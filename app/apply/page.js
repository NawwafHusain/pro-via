"use client";
import React from "react";
import Script from "next/script";
import { Widget } from "@typeform/embed-react";

export default function page() {
  return (
    <main className="w-screen h-screen flex flex-col pt-5 lg:pt-7">
      {/* <h1 className="text-white text-5xl font-ethn mb-10">APPLICATION FORM</h1> */}
      <div className="w-full h-full relative overflow-scroll">
        <Widget
          id="n1MVES0f"
          className="w-full h-full rounded-none "
          inlineOnMobile
        />
      </div>
    </main>
  );
}

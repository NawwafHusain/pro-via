"use client";
import { Instagram, Mail, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import React from "react";
import Image from "next/image";
import ContactForm from "../components/contactForm";

export default function Page() {
  const [activeWord, setActiveWord] = useState(0);
  const words = ["Call", "Text", "Message"];
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveWord((prev) => {
        if (prev === words.length - 1) {
          return 0;
        } else {
          return prev + 1;
        }
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  return (
    <main className="w-screen  mt-24 lg:px-24 px-4 relative pb-16">
      <Image
        src="/images/Bg2.png"
        alt="background"
        fill
        className="object-cover -scale-x-100"
      />
      <h1 className="text-white text-5xl font-ethn lg:w-[40vw] relative">
        We are one <br className="lg:hidden" />
        <span className="bg-white text-black px-2">
          {words[activeWord]}
        </span>{" "}
        away
      </h1>
      {/* <form className="flex flex-col gap-4 w-full lg:w-1/2 border-2 border-white p-4 relative text-white mt-10">
        <div className="flex flex-col gap-2">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="border-b-2 border-white bg-transparent"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="border-b-2 border-white bg-transparent"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="program">Program</label>
          <select className="border-b-2 border-white  bg-transparent rounded-none py-1">
            <option value="gap-year" className="text-black">
              Gap year Program
            </option>
            <option value="masters" className="text-black">
              Masters Program
            </option>
            <option value="general" className="text-black">
              Other/General Inquires
            </option>
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="Message">Message</label>
          <textarea
            type="Message"
            id="Message"
            name="Message"
            className="border-b-2 border-white bg-transparent"
          />
        </div>
        <button type="submit" className="bg-white text-black p-4">
          Send
        </button>
      </form> */}
      <div className="w-full flex flex-col lg:flex-row justify-between ">
        <div className=" lg:w-[40vw] h-min flex flex-col lg:flex-row flex-wrap justify-start gap-y-2 gap-16 text-white mt-10 relative ">
          <div className="flex flex-col gap-2  p-4 border-l-2 border-white ">
            <p className="font-semibold text-2xl mb-2">Find us here </p>
            <a href="mailto:hello@proviaacademy.com" className="flex gap-2">
              <Mail />
              Hello@pro-viaacademy.com
            </a>
            <a href="tel:+14244017575" className="flex gap-2">
              <Phone />
              +1 424 401 7575
            </a>
            <a
              href="https://www.instagram.com/proviaacademy/"
              target="_blank"
              className="flex gap-2"
            >
              <Instagram />
              @proviaacademy
            </a>
          </div>
          <div className="flex flex-col gap-2  p-4 border-l-2 border-white ">
            <p className="font-semibold text-2xl mb-2">Sales Team </p>
            <a href="mailto:hello@proviaacademy.com" className="flex gap-2">
              <Mail />
              sales@pro-viaacademy.com
            </a>
            <a href="tel:+19496973609" className="flex gap-2">
              <Phone />
              +1 949 697 3609
            </a>
          </div>
          <div className="flex flex-col gap-2  p-4 border-l-2 border-white ">
            <p className="font-semibold text-2xl mb-2">Mailing Address </p>
            <p className=" relative lg:w-[35%]">
              Pro-Vía Academy, LLC 3655 Torrance Blvd, 3rd floor, #6001
              Torrance, CA 90503 United States
            </p>
          </div>
        </div>
        <div className="w-full flex-1  p-4 relative  mt-10">
          <ContactForm
            className={"lg:h-[50vh] h-[70vh]"}
            inlineOnMobile={true}
          />
        </div>
      </div>
    </main>
  );
}

import React from "react";
import Image from "next/image";
import EmailCollect from "./EmailCollect";
import Link from "next/link";
import { Instagram, Mail, Phone } from "lucide-react";
export default function Footer() {
  return (
    <footer className=" relative bg-black border-t-2 lg:justify-between border-white px-4  lg:px-24 pt-10 flex  flex-col ">
      <div className="flex  flex-col lg:flex-row  items-center gap-8">
        <div className="flex flex-col lg:flex-row items-center gap-4">
          <Image
            src="/images/LogoWhite.png"
            width={100}
            height={100}
            className="object-contain lg:scale-100 scale-75"
            alt="pro-via academy logo"
          />
          <div className="flex flex-col gap-1 w-min">
            <p className="font-semibold text-white leading-none">
              Let&apos;s Stay in touch
            </p>
            <p className="text-white leading-none">
              Join our mailing list to stay informed about all our upcoming
              programs
            </p>
            <EmailCollect
              className={"mt-1"}
              classNameInput={"lg:w-[15vw] lg:px-2 lg:py-2"}
              classNameButton={"lg:px-2 lg:py-2 lg:text-base"}
            />
          </div>
        </div>

        <div className="flex flex-1 flex-col lg:flex-row text-white gap-6 lg:justify-end items-center lg:items-start text-center lg:text-left">
          <div className="flex flex-col items-center lg:items-start gap-2">
            <p className="text-lg font-bold relative">Quick Links</p>
            <div className="lg:w-[10vw] w-[40vw] bg-white h-[0.1px]" />
            <Link
              href="/"
              className="border-b-2 hover:border-b-white border-b-transparent"
            >
              Home
            </Link>
            <Link
              href="/gap-year"
              className="border-b-2 hover:border-b-white border-b-transparent"
            >
              Gap Year Program
            </Link>
            <Link
              href="/about"
              className="border-b-2 hover:border-b-white border-b-transparent"
            >
              About Pro-Vía Academy
            </Link>
            <Link
              href="/contact"
              className="border-b-2 hover:border-b-white border-b-transparent"
            >
              Contact
            </Link>
          </div>
          <div className="flex flex-col gap-2 items-center lg:items-start">
            <p className="text-lg font-bold relative">Find us on</p>
            <div className="lg:w-[10vw] w-[40vw] bg-white h-[0.1px]" />
            <a
              href="mailto:hello@proviaacademy.com"
              className="flex gap-2 border-b-2 hover:border-b-white border-b-transparent pb-2"
            >
              <Mail />
              Hello@pro-viaacademy.com
            </a>
            <a
              href="tel:+14244017575"
              className="flex gap-2 border-b-2 hover:border-b-white border-b-transparent pb-2"
            >
              <Phone />
              +1 424 401 7575
            </a>
            <a
              href="https://www.instagram.com/proviaacademy/"
              target="_blank"
              className="flex gap-2 border-b-2 hover:border-b-white border-b-transparent pb-2"
            >
              <Instagram />
              @proviaacademy
            </a>
          </div>
          <p className="text-white relative lg:w-[37%] ">
            3655 Torrance Blvd, 3rd floor, #6001 <br />
            Torrance, CA 90503
            <br /> United States
          </p>
        </div>
      </div>

      <div className="w-full flex justify-center items-center  text-white mt-4 py-4 border-t-2 border-white">
        Copyright @ 2025 Pro-Vía Academy LLC
      </div>
    </footer>
  );
}

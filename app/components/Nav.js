"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { usePathname } from "next/navigation";
import { ArrowDown, ArrowUpWideNarrow } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

export default function Nav() {
  const navRef = useRef();
  const logoRef = useRef();
  const triggerRef = useRef();
  const listRef = useRef();
  const path = usePathname();

  const [opened, setOpened] = useState(false);
  const [smallLogo, setSmallLogo] = useState(false);
  console.log("path", path);
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    setSmallLogo(
      path === "/apply" || path === "/programs" || path === "/contact"
    );
    const width = window.innerWidth;
    gsap.to(navRef.current, {
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "50% top",
        end: "end end",
        toggleActions: "play none reverse none",
      },
      // paddingBottom: `${width > 700 ? 1 : 0}rem`,
      // paddingTop: `${width > 700 ? 1 : 0}rem`,
    });
    gsap.to(listRef.current, {
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "50% top",
        end: "end end",
        toggleActions: "play none reverse none",
      },
    });
    gsap.to(logoRef.current, {
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "50% top",
        end: "end end",
        toggleActions: "play none reverse none",
      },
      height: `${width > 700 && "6rem"}`,
      top: `${width > 700 ? "0.5rem" : "-1.6rem"}`,
    });
  });

  return (
    <>
      {" "}
      <nav
        className="w-screen bg-white lg:py-5 py-1 pr-2 lg:p-0 fixed z-50 flex lg:flex-row flex-row lg:justify-center items-center  justify-end"
        ref={navRef}
      >
        <Link
          href="/"
          className={`inherit z-50 absolute lg:left-40 lg:-translate-x-1/2 scale-50 left-5 lg:scale-100 ${
            smallLogo
              ? "lg:h-[6rem] lg:top-[0.5rem] -top-6"
              : "h-auto lg:top-4 -top-6"
          }`}
        >
          <Image
            src="/images/NavBarLogoW.png"
            width={100}
            height={100}
            className={`object-contain    `}
            alt="Pro-Vía Academy Nav bar logo"
            ref={logoRef}
          />
        </Link>
        <NavigationMenu>
          <NavigationMenuList
            className=" lg:flex justify-start gap-4 h-full z-10 hidden bg-transparent"
            ref={listRef}
          >
            <Link href="/">
              <li className="font-medium text-lg hover:font-bold  transition-all duration-300">
                Home
              </li>
            </Link>

            <NavigationMenuItem className="relative w-max bg-transparent hover:bg-transparent mr-0 pr-0">
              <Link href={"/programs"}>
                <NavigationMenuTrigger className="font-medium text-lg hover:font-bold  transition-all duration-300 hover:bg-white p-0 rounded-none">
                  Programs
                </NavigationMenuTrigger>
              </Link>
              <NavigationMenuContent className="flex flex-col gap-3 w-max-content  rounded-none bg-white ">
                <Link
                  href={"/gap-year"}
                  className="w-max hover:bg-slate-200 px-4 py-2"
                >
                  <NavigationMenuLink>Gap Year Program</NavigationMenuLink>
                </Link>

                <Link
                  href={"/masters"}
                  className="w-max hover:bg-slate-200 px-4 py-2"
                >
                  <NavigationMenuLink>Master&apos;s Program</NavigationMenuLink>
                </Link>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <Link href="/stories">
              <li className="font-medium text-lg hover:font-bold  transition-all duration-300">
                Success Stories
              </li>
            </Link>
            <Link href="/about">
              <li className="font-medium text-lg hover:font-bold  transition-all duration-300">
                About
              </li>
            </Link>
            {/* <Link href="/team">
              <li className="font-medium text-lg hover:font-bold  transition-all duration-300">
                Team
              </li>
            </Link> */}
            <Link href="/contact">
              <li className="font-medium text-lg hover:font-bold  transition-all duration-300">
                Contact
              </li>
            </Link>
          </NavigationMenuList>
        </NavigationMenu>

        <Link
          href="/apply"
          onClick={() => setOpened(false)}
          className="font-semibold py-2 px-4 bg-black text-white lg:absolute lg:right-8 lg:text-xl"
        >
          Inquire Now
        </Link>
        <button
          className={`menu ${opened ? "opened" : ""} lg:hidden z-[100] `}
          onClick={() => {
            setOpened((prev) => !prev);
          }}
          aria-label="Main Menu"
        >
          <svg width="50" height="50" viewBox="0 0 100 100">
            <path
              className="line line1"
              d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
            />
            <path className="line line2" d="M 20,50 H 80" />
            <path
              className="line line3"
              d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
            />
          </svg>
        </button>
        <div
          className={`lg:hidden flex items-center gap-2 fixed w-[100vw] top-0 bg-white z-[99] h-[100vh] transition-all duration-700 ease-in-out ${
            opened
              ? "right-[0]"
              : "right-[-100%] flex flex-col justify-center items-center"
          }`}
        >
          <ul className="flex flex-col gap-4 items-start relative text-black pl-10 text-4xl ">
            <Link href="/" onClick={() => setOpened(false)}>
              <li className="hover:font-bold">Home</li>
            </Link>
            <Link href="/programs" onClick={() => setOpened(false)}>
              <li className="hover:font-bold">Programs</li>
            </Link>
            <Link href="/stories" onClick={() => setOpened(false)}>
              <li className="hover:font-bold">Success Stories</li>
            </Link>
            <Link href="/about" onClick={() => setOpened(false)}>
              <li className="hover:font-bold">About us</li>
            </Link>
            {/* <Link href="/team" onClick={() => setOpened(false)}>
              <li className="hover:font-bold">Team</li>
            </Link> */}
            <Link href="/contact" onClick={() => setOpened(false)}>
              <li className="hover:font-bold">Contact</li>
            </Link>
            <Link href="/apply" onClick={() => setOpened(false)}>
              <li className="font-semibold py-2 px-4 bg-black text-white">
                Inquire Now
              </li>
            </Link>
          </ul>
        </div>
      </nav>
      <div className="w-10 h-10 bg-yellow-600 z-50" ref={triggerRef} />
    </>
  );
}

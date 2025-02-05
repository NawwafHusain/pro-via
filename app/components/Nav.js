"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export default function Nav() {
  const navRef = useRef();
  const logoRef = useRef();
  const triggerRef = useRef();
  const listRef = useRef();
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    const height = window.innerHeight;
    gsap.to(navRef.current, {
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "50% top",
        end: "end end",
        toggleActions: "play none reverse none",
      },
      paddingBottom: "1rem",
      paddingTop: "1rem",
    });
    gsap.to(listRef.current, {
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "50% top",
        end: "end end",
        toggleActions: "play none reverse none",
      },
      width: "28vw",
    });
    gsap.to(logoRef.current, {
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "50% top",
        end: "end end",
        toggleActions: "play none reverse none",
      },
      height: "8rem",
      top: "0.5rem",
    });
  });
  return (
    <>
      {" "}
      <nav
        className="w-screen bg-white py-5 fixed z-50 flex justify-center"
        ref={navRef}
      >
        <ul className="w-[34vw] flex justify-between" ref={listRef}>
          <div className="flex items-center gap-10">
            <Link href="/">
              <li className="font-medium text-lg hover:font-bold transition-all duration-300">
                Home
              </li>
            </Link>
            <Link href="/">
              <li className="font-medium text-lg hover:font-bold transition-all duration-300">
                Projects
              </li>
            </Link>
          </div>
          <div className="flex items-center gap-10">
            <Link href="/">
              <li className="font-medium text-lg hover:font-bold transition-all duration-300">
                About
              </li>
            </Link>
            <Link href="/">
              <li className="font-medium text-lg hover:font-bold transition-all duration-300">
                Contact
              </li>
            </Link>
          </div>
        </ul>
        <Link href="/" className="inherit">
          <Image
            src="/images/NavBarLogoW.png"
            width={100}
            height={100}
            className="object-contain absolute lg:left-1/2 lg:-translate-x-1/2 lg:top-4 top-0  scale-50 lg:scale-100"
            alt="Pro-Vía Academy Nav bar logo"
            ref={logoRef}
          />
        </Link>
      </nav>
      <div className="w-10 h-10 bg-yellow-600 z-50" ref={triggerRef} />
    </>
  );
}

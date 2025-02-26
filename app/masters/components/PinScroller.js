"use client";
import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

export default function PinScroller({ content }) {
  const containerRef = useRef(null);
  const cardContainerRef = useRef(null);
  const cardRefs = useRef([]);
  const imageRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    console.log(activeIndex);
  }, [activeIndex]);

  useGSAP(
    () => {
      const sections = cardRefs.current;

      sections.forEach((section, index) => {
        gsap.to(section, {
          opacity: 1,
          scrollTrigger: {
            trigger: section,
            start: "top 60%",
            end: "center 45%",
            markers: true,
            toggleActions: "play reverse play reverse",
            onEnter: () => setActiveIndex(index),
            onLeaveBack: () => setActiveIndex(index - 1),
          },
        });
      });

      gsap.to(imageRef.current, {
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 40%",
          end: "300% 100%",
          pin: true,
          scrub: true,
          //markers: true,
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="w-screen relative mt-24 pb-[20vh] overflow-x-clip"
    >
      {/* Title - Stays fixed */}
      <div className="sticky top-0 lg:pt-36 lg:pb-4 z-10 bg-black w-full px-4 lg:px-24">
        <h2 className="font-ethn lg:text-5xl text-xl text-white">
          Why Choose Pro-Vía Academy&apos;s Gap-Year Program
        </h2>
      </div>
      <div className="flex flex-row items-start" ref={cardContainerRef}>
        <div className="mt-24 flex flex-col text-white w-[60vw]">
          {content.map((item, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className={`transition-opacity duration-200 ease-linear px-4 lg:pl-24 h-[30vh] flex flex-col justify-center  ${
                activeIndex === index ? "opacity-100" : "opacity-20"
              }`}
            >
              <h3 className="text-4xl font-bold font-ethn">{item.title}</h3>
              <p className="text-lg">{item.description}</p>
            </div>
          ))}
        </div>
        <div
          className="min-w-[38vw] hidden lg:inline relative min-h-[50vh] right-0 video-container"
          ref={imageRef}
        >
          {content[activeIndex].content ?? (
            <Image
              fill
              src={"/images/AlexMadrid.png"}
              className="object-contain"
              alt="authentic spanish football"
            />
          )}
        </div>{" "}
      </div>

      {/* Content Blocks */}
    </section>
  );
}
